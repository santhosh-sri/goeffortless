import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export type Theme = "light" | "dark";

export const THEME_STORAGE_KEY = "efl-theme";

/**
 * The site is currently locked to the light theme: the header's theme switch
 * is commented out and every page is signed off against the white Figma
 * frames. Flip this to `false` to restore the stored/OS-driven behaviour —
 * nothing else has to change, and the `<ThemeToggle />` calls in SiteHeader
 * only need uncommenting.
 */
export const THEME_LOCKED_LIGHT = true;

/**
 * Runs before paint in _document.tsx to stamp data-theme on <html>, so the
 * first frame is already correct and there is no light/dark flash.
 * Kept as a string because it is injected via dangerouslySetInnerHTML.
 */
export const THEME_INIT_SCRIPT = THEME_LOCKED_LIGHT
  ? `(function(){try{document.documentElement.setAttribute("data-theme","light");document.documentElement.style.colorScheme="light";}catch(e){}})();`
  : `(function(){try{var s=localStorage.getItem("${THEME_STORAGE_KEY}");var t=s==="light"||s==="dark"?s:(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");document.documentElement.setAttribute("data-theme",t);}catch(e){}})();`;

interface ThemeContextValue {
  theme: Theme;
  /** True until the client has read the stored preference. */
  isPending: boolean;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

function readInitialTheme(): Theme {
  if (THEME_LOCKED_LIGHT) return "light";
  if (typeof document === "undefined") return "light";
  const attr = document.documentElement.getAttribute("data-theme");
  return attr === "dark" ? "dark" : "light";
}

export function ThemeProvider({
  children,
  defaultTheme = "light",
}: {
  children: React.ReactNode;
  defaultTheme?: Theme;
}) {
  // SSR renders `defaultTheme`; the inline script has already set the real
  // value on <html>, so the DOM is correct before hydration catches up.
  const [theme, setThemeState] = useState<Theme>(defaultTheme);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    setThemeState(readInitialTheme());
    setIsPending(false);
  }, []);

  const applyTheme = useCallback((next: Theme) => {
    if (THEME_LOCKED_LIGHT) return;
    const root = document.documentElement;

    // Freeze transitions for one frame so the swap doesn't animate.
    root.setAttribute("data-theme-switching", "");
    root.setAttribute("data-theme", next);
    root.style.colorScheme = next;

    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() =>
        root.removeAttribute("data-theme-switching")
      );
    });

    try {
      localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      /* storage unavailable (private mode) — theme still applies for the session */
    }
  }, []);

  const setTheme = useCallback(
    (next: Theme) => {
      if (THEME_LOCKED_LIGHT) return;
      setThemeState(next);
      applyTheme(next);
    },
    [applyTheme]
  );

  const toggleTheme = useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark");
  }, [theme, setTheme]);

  // Follow the OS only while the user has expressed no preference.
  useEffect(() => {
    if (THEME_LOCKED_LIGHT) return;
    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const onChange = (event: MediaQueryListEvent) => {
      let stored: string | null = null;
      try {
        stored = localStorage.getItem(THEME_STORAGE_KEY);
      } catch {
        /* ignore */
      }
      if (stored === "light" || stored === "dark") return;

      const next: Theme = event.matches ? "dark" : "light";
      setThemeState(next);
      document.documentElement.setAttribute("data-theme", next);
      document.documentElement.style.colorScheme = next;
    };

    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  const value = useMemo(
    () => ({ theme, isPending, setTheme, toggleTheme }),
    [theme, isPending, setTheme, toggleTheme]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used within a <ThemeProvider>");
  }
  return ctx;
}
