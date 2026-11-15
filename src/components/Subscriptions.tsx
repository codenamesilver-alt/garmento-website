export default function Subscriptions() {
  return (
    <section className="py-20 bg-light-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="font-nav text-sm font-medium text-gold uppercase tracking-wider">
              Subscriptions
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mt-3 mb-6">
              More Convenience. Better Laundry Management.
            </h2>
            <p className="font-body text-lg text-body-text leading-relaxed mb-8">
              Enjoy a smarter way to manage your regular laundry with convenient
              subscription options. Monthly plans with defined garment quotas,
              convenient pickup and delivery, and easy renewal.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "Monthly subscription plans",
                "Defined garment quotas",
                "Convenient pickup and delivery",
                "Easy renewal",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-gold shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="font-body text-base text-body-text">{item}</span>
                </div>
              ))}
            </div>

            <a
              href="/subscriptions"
              className="inline-flex items-center px-8 py-3.5 bg-gold text-white font-nav font-medium rounded-full hover:bg-gold/90 transition-all duration-300 shadow-lg"
            >
              Explore Subscription Plans
            </a>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gold/10">
              <div className="text-center mb-6">
                <h3 className="font-heading text-2xl font-bold text-navy">
                  Monthly Plan
                </h3>
                <p className="font-body text-sm text-body-text mt-2">
                  Perfect for regular laundry needs
                </p>
              </div>
              <div className="space-y-4">
                {[
                  { label: "Garment Quota", value: "Configurable" },
                  { label: "Pickup & Delivery", value: "Included" },
                  { label: "Frequency", value: "Monthly" },
                  { label: "Renewal", value: "Easy & Flexible" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex justify-between items-center py-3 border-b border-gray-100 last:border-0"
                  >
                    <span className="font-body text-sm text-body-text">{item.label}</span>
                    <span className="font-nav font-semibold text-navy">{item.value}</span>
                  </div>
                ))}
              </div>
              <p className="font-body text-xs text-body-text/60 mt-6 text-center">
                Pricing available through our team. Contact us for details.
              </p>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gold/10 rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}