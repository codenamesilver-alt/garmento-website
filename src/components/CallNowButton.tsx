"use client";

import { useState } from "react";

const PHONE = "+91 7459935119";
const TEL = "tel:+917459935119";

export default function CallNowButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2 px-6 py-3 bg-navy text-white font-nav font-medium rounded-full hover:bg-navy/90 transition-all"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
        Call Now
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="bg-white rounded-3xl shadow-2xl p-8 max-w-sm w-full text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: "#142D4E" }}>
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="font-heading text-xl font-bold text-navy mb-2">Call Garmento</h3>
            <p className="font-body text-body-text mb-6">Tap the number below to call us directly.</p>
            <a
              href={TEL}
              className="block text-2xl font-nav font-bold mb-6 hover:opacity-80 transition"
              style={{ color: "#142D4E" }}
            >
              {PHONE}
            </a>
            <div className="flex gap-3">
              <a
                href={TEL}
                className="flex-1 py-3 rounded-xl font-nav font-semibold text-sm text-white transition-all hover:opacity-90"
                style={{ backgroundColor: "#B89532" }}
              >
                Call Now
              </a>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="flex-1 py-3 rounded-xl font-nav font-semibold text-sm border border-navy/20 text-navy hover:bg-navy/5 transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
