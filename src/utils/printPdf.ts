import React, { useEffect, useState } from "react";

// Keep a global map of preloaded PDFs
export const preloadedPDFs: Record<string, HTMLIFrameElement> = {};

export const printPdf = async (pdfName: string) => {
  if (preloadedPDFs[pdfName]) return; // Already preloaded

  try {
    const response = await fetch(`/documents/${pdfName}.pdf`);
    if (!response.ok) throw new Error("Failed to fetch PDF");

    const blob = await response.blob();
    const blobUrl = URL.createObjectURL(blob);

    const iframe = document.createElement("iframe");
    iframe.style.position = "absolute";
    iframe.style.width = "0";
    iframe.style.height = "0";
    iframe.style.border = "0";
    iframe.src = blobUrl;

    document.body.appendChild(iframe);
    preloadedPDFs[pdfName] = iframe; // store for reuse
  } catch (err) {
    console.error("PDF preload error:", err);
  }
};
