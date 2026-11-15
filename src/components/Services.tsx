"use client";

import { useState } from "react";
import Image from "next/image";

const services = [
  {
    title: "Wash & Fold",
    desc: "Professional washing and careful folding of everyday garments.",
    img: "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?w=600&q=80",
  },
  {
    title: "Wash & Iron",
    desc: "Freshly washed clothes professionally ironed and prepared for use.",
    img: "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?w=600&q=80",
  },
  {
    title: "Dry Cleaning",
    desc: "Specialized garment-care solutions for delicate and premium clothing.",
    img: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=600&q=80",
  },
  {
    title: "Steam Ironing",
    desc: "Professional ironing to give garments a neat and polished appearance.",
    img: "https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?w=600&q=80",
  },
  {
    title: "Premium Garment Care",
    desc: "Special attention to garments requiring delicate handling.",
    img: "https://images.unsplash.com/photo-1489274495757-95c7c837b101?w=600&q=80",
  },
  {
    title: "Bulk & Business Laundry",
    desc: "Laundry solutions for businesses, hostels, PGs and institutions.",
    img: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=600&q=80",
  },
];

export default function Services() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="services" className="py-20 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-nav text-sm font-medium text-gold uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mt-3 mb-4">
            Professional Garment Care
          </h2>
          <p className="font-body text-lg text-body-text max-w-2xl mx-auto">
            From everyday washing to specialized care, we handle your garments with
            the attention they deserve.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={service.title}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="h-48 overflow-hidden" style={{ position: "relative" }}>
                <Image
                  src={service.img}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl font-bold text-navy mb-2">
                  {service.title}
                </h3>
                <p className="font-body text-sm text-body-text mb-4">
                  {service.desc}
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center text-gold font-nav font-medium text-sm hover:text-gold/80 transition-colors"
                >
                  Book Now
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}