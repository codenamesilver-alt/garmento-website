"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What laundry services does Garmento provide?",
    a: "Garmento provides a wide range of laundry services including Wash & Fold, Wash & Iron, Dry Cleaning, Steam Ironing, Premium Garment Care, and Bulk & Business Laundry solutions.",
  },
  {
    q: "Do you provide free pickup and delivery?",
    a: "Yes, we offer free pickup and delivery within our designated 3 KM service radius in Lucknow.",
  },
  {
    q: "How can I book a laundry pickup?",
    a: "You can book a pickup through our website contact form, WhatsApp, or by calling us directly at +91 7459935119.",
  },
  {
    q: "How long does laundry processing take?",
    a: "Processing times vary depending on the service. Standard laundry typically takes 24-48 hours. Specific timelines will be confirmed at the time of pickup.",
  },
  {
    q: "Do you offer dry-cleaning services?",
    a: "Yes, we offer specialized dry-cleaning services for delicate and premium garments.",
  },
  {
    q: "Do you offer monthly laundry subscriptions?",
    a: "Yes, we offer convenient monthly subscription plans with defined garment quotas. Contact us to learn more about available plans.",
  },
  {
    q: "Do you provide laundry services for hostels and businesses?",
    a: "Yes, we offer bulk and business laundry solutions for hostels, PGs, businesses, and institutions.",
  },
  {
    q: "How can I contact Garmento?",
    a: "You can reach us at care@garmento.in, call us at +91 7459935119, or use the WhatsApp button on our website.",
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="font-nav text-sm font-medium text-gold uppercase tracking-wider">
            FAQ
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mt-3 mb-4">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-ivory rounded-xl overflow-hidden border border-gray-100"
            >
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="font-nav font-medium text-navy text-base pr-4">
                  {faq.q}
                </span>
                <svg
                  className={`w-5 h-5 text-gold shrink-0 transition-transform duration-300 ${
                    openIdx === idx ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIdx === idx && (
                <div className="px-5 pb-5">
                  <p className="font-body text-sm text-body-text leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}