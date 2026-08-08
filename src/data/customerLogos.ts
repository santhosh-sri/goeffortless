/**
 * Customer logo wall — full-colour originals exported from Figma node
 * 1822:6049 (the logo row under the home hero).
 *
 * The set the site previously shipped was white-on-transparent, built for the
 * old dark theme; every one of those measured 217-255 average brightness and
 * was invisible on the new light background. These are the brand originals
 * pulled from the design file instead.
 *
 * A handful are still white-on-transparent in Figma itself (the design reuses
 * some "footer" variants). Those carry `invertOnLight` so they render dark on
 * the light theme and stay untouched in dark.
 *
 * Every brand was identified by reading the artwork itself — the Figma layer
 * names are unreliable. Two were mislabelled at source: the layer named
 * "marvel" is Arvind Petroleum, while Marvel Polymers sits under "logo (3) b".
 * Filenames now follow the brand, not the layer.
 */

export interface CustomerLogo {
  src: string;
  width: number;
  height: number;
  alt: string;
  /** Source asset is white-on-transparent; invert it in the light theme. */
  invertOnLight?: boolean;
  /**
   * Skip every theme filter and render the artwork as authored.
   *
   * The dark theme normally flattens colour logos to a white silhouette, which
   * works for glyph-only marks but destroys any logo containing a filled shape
   * — an opaque tile, or a coloured plate behind the wordmark — by collapsing
   * it into a solid rectangle. Set where alpha coverage is high enough for that
   * to happen AND the source still reads on a near-black background.
   */
  keepColors?: boolean;
}

const A = "Effortless customer";

export const customerLogos: CustomerLogo[] = [
  { src: "/assets/logos/arvind-petroleum.png", width: 389, height: 160, alt: `Arvind Petroleum — ${A}`, keepColors: true },
  { src: "/assets/logos/gallabox.png", width: 220, height: 45, alt: `Gallabox — ${A}` },
  { src: "/assets/logos/rassense.png", width: 220, height: 62, alt: `Rassense — ${A}`, keepColors: true },
  { src: "/assets/logos/contraminds.png", width: 220, height: 56, alt: `Contraminds — ${A}` },
  { src: "/assets/logos/nalashaa.png", width: 220, height: 79, alt: `Nalashaa Hospitality — ${A}` },
  { src: "/assets/logos/pepul.png", width: 220, height: 115, alt: `Pepul — ${A}` },
  { src: "/assets/logos/ctrlm.png", width: 220, height: 145, alt: `ctrlM — ${A}` },
  { src: "/assets/logos/mpl.png", width: 220, height: 153, alt: `MPL Light Vehicles — ${A}`, invertOnLight: true },
  { src: "/assets/logos/hansa-cequity.png", width: 220, height: 209, alt: `Hansa Cequity — ${A}` },
  { src: "/assets/logos/iris.png", width: 220, height: 69, alt: `IRIS — ${A}` },
  { src: "/assets/logos/integral-trading.png", width: 149, height: 117, alt: `Integral Trading & Logistics — ${A}` },
  { src: "/assets/logos/mithaicana.png", width: 220, height: 58, alt: `Mithaicana — ${A}` },
  { src: "/assets/logos/gs-tech-software.png", width: 220, height: 59, alt: `GS Tech Software Systems — ${A}` },
  { src: "/assets/logos/kanvar.png", width: 220, height: 89, alt: `Kanvar — ${A}` },
  { src: "/assets/logos/kria-law.png", width: 220, height: 90, alt: `KRIA Law — ${A}` },
  { src: "/assets/logos/lekhus-collection.png", width: 220, height: 220, alt: `Lekhus Collection — ${A}`, keepColors: true },
  { src: "/assets/logos/krish-fashion.png", width: 200, height: 200, alt: `Krish Fashion — ${A}` },
  { src: "/assets/logos/ienergizer.png", width: 153, height: 45, alt: `iEnergizer — ${A}`, invertOnLight: true },
  { src: "/assets/logos/allwyn.png", width: 220, height: 45, alt: `Allwyn — ${A}`, invertOnLight: true },
  { src: "/assets/logos/farminghub.png", width: 220, height: 92, alt: `Farming Hub — ${A}`, keepColors: true },
  // Wordmark shipped white-on-transparent; recoloured to slate in the asset so
  // the green mark keeps its brand colour instead of inverting to magenta.
  { src: "/assets/logos/unilift.png", width: 220, height: 53, alt: `Unilift — ${A}` },
  { src: "/assets/logos/kuber.png", width: 220, height: 190, alt: `Kuber — ${A}`, keepColors: true },
  { src: "/assets/logos/spg-group.png", width: 220, height: 28, alt: `SPG Group of Companies — ${A}` },
  { src: "/assets/logos/marvel-polymers.png", width: 194, height: 60, alt: `Marvel Polymers — ${A}` },
  // Also recoloured (see Unilift): inverting the white wordmark turned the
  // orange bird blue, so the wordmark is baked slate and the mark left alone.
  { src: "/assets/logos/skymark.png", width: 131, height: 42, alt: `Skymark — ${A}` },
  { src: "/assets/logos/starlite.png", width: 120, height: 120, alt: `Starlite — ${A}`, keepColors: true },
];
