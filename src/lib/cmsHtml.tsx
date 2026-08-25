import parse, {
  domToReact,
  Element,
  Text,
  type DOMNode,
  type HTMLReactParserOptions,
} from "html-react-parser";
import React from "react";

/**
 * Renders CMS copy (src/data/*.json) on the light theme.
 *
 * The JSON predates the redesign and carries the dark site's inline styling
 * on its `<span>`s: white text (`color: #FFFFFF`), a teal highlight
 * (`#A3F0E6`) and an orange→white gradient clipped to the glyphs. None of
 * those survive on a white page, so the spans are re-expressed in the token
 * system rather than rendered as authored:
 *
 *   - a coloured or gradient span → the accent clause (`font-bold text-accent`),
 *     exactly how SectionHeading draws `accentTitle`;
 *   - a white or weight-only span → plain text in the parent's colour.
 *
 * `bareTextAccent` covers the legacy hero pattern where the *unstyled* words
 * were the highlighted ones — "<white>Partner with</white> Effortless." — so
 * top-level text nodes become the accent clause instead.
 */
const ACCENT_STYLE = /linear-gradient|color\s*:\s*#(?!fff\b|ffffff\b)[0-9a-f]{3,6}/i;
/**
 * The one highlight that is *not* the accent clause: the Partners hero draws
 * "Revenue." in mint (Figma 2835:25082). Copy predating that frame used
 * #A3F0E6 for the same word, so both resolve to the mint token.
 */
const MINT_STYLE = /color\s*:\s*#(a3f0e6|36e3c0)\b/i;

function spanTone(style: string | undefined): "accent" | "mint" | "plain" {
  if (!style) return "plain";
  if (MINT_STYLE.test(style)) return "mint";
  return ACCENT_STYLE.test(style) ? "accent" : "plain";
}

const TONE_CLASS = {
  accent: "font-bold text-accent",
  mint: "font-bold text-palette-mint",
  plain: undefined,
} as const;

export function parseCms(
  html: string | undefined,
  { bareTextAccent = false }: { bareTextAccent?: boolean } = {}
): React.ReactNode {
  if (!html) return null;

  const options: HTMLReactParserOptions = {
    replace(node) {
      if (node instanceof Element && node.name === "span") {
        const tone = spanTone(node.attribs?.style);
        return (
          <span className={TONE_CLASS[tone]}>
            {domToReact(node.children as DOMNode[], options)}
          </span>
        );
      }
      if (bareTextAccent && node instanceof Text && !node.parent) {
        if (!node.data.trim()) return undefined;
        return <span className="font-bold text-accent">{node.data}</span>;
      }
      return undefined;
    },
  };

  return parse(html, options);
}

/** The CMS tagline chips sometimes carry markup; strip it for plain labels. */
export function cmsText(html: string | undefined): string {
  return (html ?? "").replace(/<[^>]+>/g, "").trim();
}

export default parseCms;
