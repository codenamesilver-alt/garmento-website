import React from "react";

const icons: Record<string, React.ReactNode> = {
  "Tops & Outerwear": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M15 4l6 2v5h-3v8a1 1 0 0 1 -1 1h-10a1 1 0 0 1 -1 -1v-8h-3v-5l6 -2a3 3 0 0 0 6 0" />
    </svg>
  ),
  Bottoms: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M6 4h12l-2 16h-8z" />
      <path d="M12 4v16" />
      <path d="M6 4l2 4h8l2 -4" />
    </svg>
  ),
  "Ethnic Wear": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 3l-8 5l2 13h12l2 -13z" />
      <path d="M9 11h6" />
      <path d="M10 15h4" />
    </svg>
  ),
  "Home Linen": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 20v-8a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v8" />
      <path d="M3 20h18" />
      <path d="M7 10v-4a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v4" />
      <path d="M10 14h4" />
    </svg>
  ),
  "Accessories & Others": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M6.331 8h11.339a2 2 0 0 1 1.977 2.304l-1.255 8.152a3 3 0 0 1 -2.966 2.544h-6.852a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304" />
      <path d="M9 11v-5a3 3 0 0 1 6 0v5" />
    </svg>
  ),
  Footwear: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 6h5.426a1 1 0 0 1 .863 .496l1.064 1.823a3 3 0 0 0 1.896 1.407l4.677 1.114a4 4 0 0 1 3.074 3.89v2.27a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-10a1 1 0 0 1 1 -1" />
      <path d="M14 13l1 -2" />
      <path d="M8 18v-1a4 4 0 0 0 -4 -4h-1" />
      <path d="M10 12l1.5 -3" />
    </svg>
  ),
  Other: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5" />
      <path d="M12 12l8 -4.5" />
      <path d="M12 12l0 9" />
      <path d="M12 12l-8 -4.5" />
    </svg>
  ),
};

export default function PriceIcon({ category }: { category: string }) {
  return <span className="text-gold">{icons[category] ?? icons.Other}</span>;
}
