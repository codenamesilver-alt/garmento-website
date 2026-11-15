import React from "react";
import PriceIcon from "./PriceIcon";

const icons: Record<string, React.ReactNode> = {
  shirt: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M15 4l6 2v5h-3v8a1 1 0 0 1 -1 1h-10a1 1 0 0 1 -1 -1v-8h-3v-5l6 -2a3 3 0 0 0 6 0" />
    </svg>
  ),
  jacket: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M16 3l-4 5l-4 -5" />
      <path d="M12 19a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2v-8.172a2 2 0 0 1 .586 -1.414l.828 -.828a2 2 0 0 0 .586 -1.414v-2.172a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v2.172a2 2 0 0 0 .586 1.414l.828 .828a2 2 0 0 1 .586 1.414v8.172a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2" />
      <path d="M20 13h-3a1 1 0 0 0 -1 1v2a1 1 0 0 0 1 1h3" />
      <path d="M4 17h3a1 1 0 0 0 1 -1v-2a1 1 0 0 0 -1 -1h-3" />
      <path d="M12 19v-11" />
    </svg>
  ),
  sock: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M13 3v6l4.798 5.142a4 4 0 0 1 -5.441 5.86l-6.736 -6.41a2 2 0 0 1 -.621 -1.451v-9.141h8" />
      <path d="M7.895 15.768c.708 -.721 1.105 -1.677 1.105 -2.768a4 4 0 0 0 -4 -4" />
    </svg>
  ),
  shoe: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 6h5.426a1 1 0 0 1 .863 .496l1.064 1.823a3 3 0 0 0 1.896 1.407l4.677 1.114a4 4 0 0 1 3.074 3.89v2.27a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-10a1 1 0 0 1 1 -1" />
      <path d="M14 13l1 -2" />
      <path d="M8 18v-1a4 4 0 0 0 -4 -4h-1" />
      <path d="M10 12l1.5 -3" />
    </svg>
  ),
  tie: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 22l4 -4l-2.5 -11l.993 -2.649a1 1 0 0 0 -.936 -1.351h-3.114a1 1 0 0 0 -.936 1.351l.993 2.649l-2.5 11l4 4" />
      <path d="M10.5 7h3l5 5.5" />
    </svg>
  ),
  umbrella: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 12a8 8 0 0 1 16 0l-16 0" />
      <path d="M12 12v6a2 2 0 0 0 4 0" />
    </svg>
  ),
  pillow: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M6 9a9.34 9.34 0 0 1 0 6" />
      <path d="M21.699 16.607c.481 .934 .28 2.088 -.486 2.79c-.767 .703 -1.9 .77 -2.74 .165a48 48 0 0 1 -12.946 0a2.16 2.16 0 0 1 -2.74 -.165a2.345 2.345 0 0 1 -.486 -2.79a41.7 41.7 0 0 1 0 -9.163a2.346 2.346 0 0 1 .433 -2.856a2.16 2.16 0 0 1 2.793 -.145a48 48 0 0 1 12.946 0a2.16 2.16 0 0 1 2.793 .145c.78 .726 .961 1.918 .433 2.856a41.7 41.7 0 0 1 0 9.163" />
    </svg>
  ),
  "baby-carriage": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M6 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
      <path d="M16 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
      <path d="M2 5h2.5l1.632 4.897a6 6 0 0 0 5.693 4.103h2.675a5.5 5.5 0 0 0 0 -11h-.5v6" />
      <path d="M6 9h14" />
      <path d="M9 17l1 -3" />
      <path d="M16 14l1 3" />
    </svg>
  ),
  car: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M5 17a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
      <path d="M15 17a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
      <path d="M5 17h-2v-6l2 -5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-6m-6 -6h15m-6 0v-5" />
    </svg>
  ),
  helmet: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 4a9 9 0 0 1 5.656 16h-11.312a9 9 0 0 1 5.656 -16" />
      <path d="M20 9h-8.8a1 1 0 0 0 -.968 1.246c.507 2 1.596 3.418 3.268 4.254c2 1 4.333 1.5 7 1.5" />
    </svg>
  ),
  "shopping-bag": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M6.331 8h11.339a2 2 0 0 1 1.977 2.304l-1.255 8.152a3 3 0 0 1 -2.966 2.544h-6.852a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304" />
      <path d="M9 11v-5a3 3 0 0 1 6 0v5" />
    </svg>
  ),
  crown: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 6l4 6l5 -4l-2 10h-14l-2 -10l5 4l4 -6" />
    </svg>
  ),
  "hanger-2": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 9l-7.971 4.428a2 2 0 0 0 -1.029 1.749v.823a2 2 0 0 0 2 2h1" />
      <path d="M18 18h1a2 2 0 0 0 2 -2v-.823a2 2 0 0 0 -1.029 -1.749l-7.971 -4.428c-1.457 -.81 -1.993 -2.333 -2 -4a2 2 0 1 1 4 0" />
      <path d="M6 18a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v1a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2l0 -1" />
    </svg>
  ),
  gift: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 9a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1l0 -2" />
      <path d="M12 8l0 13" />
      <path d="M19 12v7a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-7" />
      <path d="M7.5 8a2.5 2.5 0 0 1 0 -5a4.8 8 0 0 1 4.5 5a4.8 8 0 0 1 4.5 -5a2.5 2.5 0 0 1 0 5" />
    </svg>
  ),
  tag: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M6.5 7.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
      <path d="M3 6v5.172a2 2 0 0 0 .586 1.414l7.71 7.71a2.41 2.41 0 0 0 3.408 0l5.592 -5.592a2.41 2.41 0 0 0 0 -3.408l-7.71 -7.71a2 2 0 0 0 -1.414 -.586h-5.172a3 3 0 0 0 -3 3" />
    </svg>
  ),
};

export default function ItemIcon({ icon, category }: { icon: string; category?: string }) {
  const node = icons[icon];
  if (node) return <span className="text-gold">{node}</span>;
  // Fallback to a category-based icon via PriceIcon
  return <PriceIconFallback category={category ?? "Other"} />;
}

function PriceIconFallback({ category }: { category: string }) {
  return <PriceIcon category={category} />;
}
