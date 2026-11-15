import type { Metadata } from "next";
import SubscriptionPlans from "@/components/SubscriptionPlans";

export const metadata: Metadata = {
  title: "Subscription Plans | Garmento Digital Laundry",
  description:
    "Monthly laundry subscription plans from Garmento Digital Laundry — Starter, Value, Family, and Mega packs.",
};

export default function SubscriptionsPage() {
  return (
    <div className="min-h-screen bg-ivory">
      {/* Hero */}
      <section className="relative overflow-hidden text-white" style={{ backgroundColor: "#142D4E" }}>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <span className="font-nav text-xs font-medium uppercase tracking-wider" style={{ color: "#B89532" }}>
            Subscription Plans
          </span>
          <h1 className="font-heading text-xl sm:text-2xl lg:text-3xl font-bold mt-1 mb-2" style={{ color: "#FFFFFF" }}>
            Laundry Made Effortless
          </h1>
          <p className="font-body text-sm sm:text-base" style={{ color: "#FFFFFF" }}>
            Pick a plan that fits your lifestyle. Monthly garment quotas, free pickup &amp; delivery,
            and easy renewal — all at a fixed price.
          </p>
        </div>
      </section>

      {/* Plans */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SubscriptionPlans />
        </div>
      </section>

      {/* How it works */}
      <section className="py-12 sm:py-16 bg-white border-t border-gold/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-navy text-center mb-10">
            How Subscriptions Work
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { step: "01", title: "Choose a Plan", desc: "Select the pack that matches your monthly laundry needs." },
              { step: "02", title: "Schedule Pickup", desc: "We collect your garments from your doorstep." },
              { step: "03", title: "Fresh & Delivered", desc: "Clean clothes delivered back within the plan window." },
            ].map((s) => (
              <div key={s.step} className="text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-2xl flex items-center justify-center font-nav font-bold text-white" style={{ backgroundColor: "#B89532" }}>
                  {s.step}
                </div>
                <h3 className="font-heading text-lg font-bold text-navy mb-2">{s.title}</h3>
                <p className="font-body text-sm text-body-text">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16" style={{ backgroundColor: "#142D4E" }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-4" style={{ color: "#FFFFFF" }}>
            Need a custom plan?
          </h2>
          <p className="font-body mb-8" style={{ color: "rgba(255,255,255,0.9)" }}>
            Contact us for tailor-made subscription plans for hostels, PGs, and businesses.
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center px-8 py-4 rounded-full font-nav font-semibold text-sm transition-all shadow-lg hover:shadow-xl hover:scale-105"
            style={{ backgroundColor: "#B89532", color: "#FFFFFF" }}
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}
