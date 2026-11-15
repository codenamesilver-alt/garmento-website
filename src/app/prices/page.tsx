import type { Metadata } from "next";
import PriceList from "@/components/PriceList";

export const metadata: Metadata = {
  title: "Dry Cleaning Prices | Garmento Digital Laundry",
  description:
    "Transparent dry cleaning price list for Garmento Digital Laundry in Lucknow. Browse prices alphabetically by garment.",
};

export default function PricesPage() {
  return (
    <div className="min-h-screen bg-ivory">
      {/* Hero */}
      <section className="relative overflow-hidden text-white" style={{ backgroundColor: "#142D4E" }}>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <span className="font-nav text-xs font-medium uppercase tracking-wider" style={{ color: "#B89532" }}>
            Transparent Pricing
          </span>
          <h1 className="font-heading text-xl sm:text-2xl lg:text-3xl font-bold mt-1 mb-2" style={{ color: "#FFFFFF" }}>
            Our Dry Cleaning Prices
          </h1>
          <p className="font-body text-sm sm:text-base" style={{ color: "#FFFFFF" }}>
            Honest, upfront pricing for every garment. Tap a letter to jump to items,
            or search for a specific piece. All prices in Indian Rupees (₹) per item.
          </p>
          <div className="mt-4 flex flex-wrap gap-2 text-xs font-nav" style={{ color: "#FFFFFF" }}>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full" style={{ backgroundColor: "rgba(255,255,255,0.15)", color: "#FFFFFF" }}>
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#B89532" }} />
              Per-item pricing
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full" style={{ backgroundColor: "rgba(255,255,255,0.15)", color: "#FFFFFF" }}>
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#B89532" }} />
              No hidden charges
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full" style={{ backgroundColor: "rgba(255,255,255,0.15)", color: "#FFFFFF" }}>
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#B89532" }} />
              Free pickup &amp; delivery (3 km)
            </div>
          </div>
        </div>
      </section>

      {/* Price list */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PriceList />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white border-t border-gold/10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-navy mb-4">
            Ready to book a pickup?
          </h2>
          <p className="font-body text-body-text mb-8">
            Schedule your dry cleaning with free doorstep pickup and delivery within 3 km.
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center px-8 py-4 bg-gold text-white font-nav font-semibold rounded-full hover:bg-gold/90 transition-all shadow-lg hover:shadow-xl"
          >
            Book a Pickup
          </a>
        </div>
      </section>
    </div>
  );
}
