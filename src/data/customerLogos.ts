/**
 * Customer logo wall — sliced from Figma node 2672:7564 (the logo strip), in
 * that node's left-to-right order.
 *
 * Supersedes the set taken from 1822:6049: the design has since dropped Arvind
 * Petroleum, Farming Hub and Unilift, and added Meine Electric, Vikram Mills,
 * Epoch, Chemley, IMS, Strona and Pan Shree.
 *
 * Every source is full-colour artwork on an opaque white plate — none is the
 * white-on-transparent "footer" variant the previous set had to correct for, so
 * nothing needs `invertOnLight`. Strona and Skymark are pale by design and read
 * as light grey on white, exactly as the Figma frame renders them.
 *
 * Widths and heights are the intrinsic pixel sizes of the 3x slices.
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
   * it into a solid rectangle. Every logo in this set has a fully opaque white
   * plate, so all of them set it.
   */
  keepColors?: boolean;
}

const A = "Effortless customer";

export const customerLogos: CustomerLogo[] = [
  { src: "/assets/logos/gallabox.png", width: 570, height: 144, alt: `Gallabox — ${A}`, keepColors: true },
  { src: "/assets/logos/rassense.png", width: 513, height: 144, alt: `Rassense — ${A}`, keepColors: true },
  { src: "/assets/logos/contraminds.png", width: 561, height: 144, alt: `Contraminds — ${A}`, keepColors: true },
  { src: "/assets/logos/nalashaa.png", width: 399, height: 144, alt: `Nalashaa Hospitality — ${A}`, keepColors: true },
  { src: "/assets/logos/pepul.png", width: 390, height: 144, alt: `Pepul — ${A}`, keepColors: true },
  { src: "/assets/logos/meine-electric.png", width: 774, height: 144, alt: `Meine Electric — ${A}`, keepColors: true },
  { src: "/assets/logos/ctrlm.png", width: 240, height: 144, alt: `ctrlM — ${A}`, keepColors: true },
  { src: "/assets/logos/mpl.png", width: 180, height: 144, alt: `MPL Light Vehicles — ${A}`, keepColors: true },
  { src: "/assets/logos/hansa-cequity.png", width: 366, height: 192, alt: `Hansa Cequity — ${A}`, keepColors: true },
  { src: "/assets/logos/iris.png", width: 462, height: 144, alt: `IRIS — ${A}`, keepColors: true },
  { src: "/assets/logos/integral-trading.png", width: 183, height: 144, alt: `Integral Trading & Logistics — ${A}`, keepColors: true },
  { src: "/assets/logos/mithaicana.png", width: 546, height: 144, alt: `Mithaicana — ${A}`, keepColors: true },
  { src: "/assets/logos/gs-tech-software.png", width: 540, height: 144, alt: `GS Tech Software Systems — ${A}`, keepColors: true },
  { src: "/assets/logos/kanvar.png", width: 228, height: 144, alt: `Kanvar — ${A}`, keepColors: true },
  { src: "/assets/logos/kria-law.png", width: 351, height: 144, alt: `KRIA Law — ${A}`, keepColors: true },
  { src: "/assets/logos/lekhus-collection.png", width: 204, height: 144, alt: `Lekhus Collection — ${A}`, keepColors: true },
  { src: "/assets/logos/krish-fashion.png", width: 450, height: 144, alt: `Krish Fashion — ${A}`, keepColors: true },
  { src: "/assets/logos/vikram-mills.png", width: 141, height: 144, alt: `Vikram Mills — ${A}`, keepColors: true },
  { src: "/assets/logos/epoch.png", width: 324, height: 144, alt: `Epoch — ${A}`, keepColors: true },
  { src: "/assets/logos/chemley.png", width: 183, height: 144, alt: `Chemley — ${A}`, keepColors: true },
  { src: "/assets/logos/ienergizer.png", width: 489, height: 144, alt: `iEnergizer — ${A}`, keepColors: true },
  { src: "/assets/logos/ims.png", width: 216, height: 144, alt: `IMS — ${A}`, keepColors: true },
  { src: "/assets/logos/strona.png", width: 672, height: 144, alt: `Strona — ${A}`, keepColors: true },
  { src: "/assets/logos/skymark.png", width: 393, height: 126, alt: `Skymark — ${A}`, keepColors: true },
  { src: "/assets/logos/spg-group.png", width: 1113, height: 144, alt: `SPG Group of Companies — ${A}`, keepColors: true },
  { src: "/assets/logos/marvel-polymers.png", width: 465, height: 144, alt: `Marvel Polymers — ${A}`, keepColors: true },
  { src: "/assets/logos/starlite.png", width: 144, height: 144, alt: `Starlite — ${A}`, keepColors: true },
  { src: "/assets/logos/allwyn.png", width: 705, height: 144, alt: `Allwyn — ${A}`, keepColors: true },
  { src: "/assets/logos/kuber.png", width: 168, height: 144, alt: `Kuber — ${A}`, keepColors: true },
  { src: "/assets/logos/pan-shree.png", width: 132, height: 144, alt: `Pan Shree — ${A}`, keepColors: true },
];
