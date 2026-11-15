"use client";

import { useEffect, useRef, useState } from "react";
import { subscriptionPlans, type SubscriptionPlan } from "@/lib/subscriptions";

export default function SubscriptionPlans() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setVisible(true);
        });
      },
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
      {subscriptionPlans.map((plan, idx) => (
        <PlanCard key={plan.name} plan={plan} idx={idx} visible={visible} />
      ))}
    </div>
  );
}

function PlanCard({ plan, idx, visible }: { plan: SubscriptionPlan; idx: number; visible: boolean }) {
  const isPopular = plan.badge === "Most Popular";
  return (
    <div
      className={`relative group transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      style={{ transitionDelay: `${idx * 120}ms` }}
    >
      {plan.badge && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
          <span
            className="px-4 py-1 rounded-full text-xs font-nav font-bold text-white shadow-lg"
            style={{ backgroundColor: plan.accent }}
          >
            {plan.badge}
          </span>
        </div>
      )}

      <div
        className={`relative h-full rounded-3xl overflow-hidden border transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl ${
          isPopular ? "border-gold shadow-xl" : "border-navy/10 shadow-md"
        }`}
        style={{ background: "linear-gradient(160deg, #ffffff 0%, #FAF9F6 100%)" }}
      >
        {/* Accent top bar */}
        <div className="h-2 w-full" style={{ background: `linear-gradient(90deg, ${plan.accent}, ${plan.accent}88)` }} />

        <div className="p-6 sm:p-8 flex flex-col h-full">
          {/* Name */}
          <div className="mb-6">
            <h3 className="font-heading text-2xl font-bold text-navy">{plan.name}</h3>
            <p className="font-body text-sm text-body-text/70 mt-1">{plan.tagline}</p>
          </div>

          {/* Price */}
          <div className="mb-6 flex items-end gap-1">
            <span className="font-heading text-5xl font-bold" style={{ color: plan.accent }}>₹{plan.price}</span>
            <span className="font-body text-sm text-body-text/60 mb-2">/ cycle</span>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <div className="rounded-2xl p-3 text-center" style={{ backgroundColor: "rgba(20,45,78,0.05)" }}>
              <p className="font-heading text-2xl font-bold text-navy">{plan.items}</p>
              <p className="font-body text-xs text-body-text/60">Garments</p>
            </div>
            <div className="rounded-2xl p-3 text-center" style={{ backgroundColor: "rgba(20,45,78,0.05)" }}>
              <p className="font-heading text-2xl font-bold text-navy">{plan.days}</p>
              <p className="font-body text-xs text-body-text/60">Days validity</p>
            </div>
          </div>

          {/* Features */}
          <ul className="space-y-2.5 mb-6 flex-1">
            {plan.features.map((f) => (
              <li key={f} className="flex items-start gap-2.5 font-body text-sm text-body-text">
                <svg className="w-5 h-5 shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor" style={{ color: plan.accent }}>
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {f}
              </li>
            ))}
          </ul>

          {/* Excludes */}
          {plan.excludes && plan.excludes.length > 0 && (
            <div className="mb-6 rounded-2xl p-4" style={{ backgroundColor: "rgba(20,45,78,0.04)" }}>
              <p className="font-nav text-xs font-semibold text-navy/70 mb-2 uppercase tracking-wider">Not included</p>
              <div className="flex flex-wrap gap-1.5">
                {plan.excludes.map((e) => (
                  <span key={e} className="px-2.5 py-1 rounded-full text-xs font-body" style={{ backgroundColor: "rgba(20,45,78,0.08)", color: "#414B56" }}>
                    {e}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <a
            href="/#contact"
            className="block text-center w-full py-3.5 rounded-2xl font-nav font-semibold text-sm transition-all duration-300 hover:scale-[1.02] shadow-md hover:shadow-xl"
            style={{
              backgroundColor: plan.accent,
              color: "#FFFFFF",
            }}
          >
            Choose {plan.name}
          </a>
        </div>
      </div>
    </div>
  );
}
