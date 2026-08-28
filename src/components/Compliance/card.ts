/**
 * The Compliance page's info card. The dark site drew these as a faint
 * white-gradient "glass" panel, which is invisible on a white page; on the
 * light theme they are the product pages' white card with a `line` stroke,
 * which reads on both the white and the grey band.
 */
export const COMPLIANCE_CARD = "rounded-xl border border-line bg-surface";

/** Variant with the accent rule down the left edge (call-outs). */
export const COMPLIANCE_CARD_ACCENT = `${COMPLIANCE_CARD} border-l-4 border-l-accent`;
