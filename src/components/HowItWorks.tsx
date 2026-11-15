export default function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Book Your Pickup",
      desc: "Schedule a pickup through our website or contact us directly.",
    },
    {
      num: "02",
      title: "We Collect Your Clothes",
      desc: "Our team picks up your garments from your doorstep at the scheduled time.",
    },
    {
      num: "03",
      title: "Professional Cleaning",
      desc: "Your garments are cleaned with care using professional laundry practices.",
    },
    {
      num: "04",
      title: "Fresh Clothes Delivered",
      desc: "Clean, fresh clothes delivered back to your doorstep.",
    },
  ];

  return (
    <section className="py-20 bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="font-nav text-sm font-medium text-gold uppercase tracking-wider">
            Process
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-3 mb-4">
            How It Works
          </h2>
          <p className="font-body text-lg text-white/70 max-w-2xl mx-auto">
            Simple, convenient, and hassle-free laundry in four easy steps.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gold/30" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, idx) => (
              <div key={step.num} className="relative text-center">
                {/* Step number circle */}
                <div className="relative z-10 w-16 h-16 mx-auto mb-6 bg-gold rounded-full flex items-center justify-center shadow-lg">
                  <span className="font-nav font-bold text-white text-lg">
                    {step.num}
                  </span>
                </div>
                <h3 className="font-heading text-xl font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="font-body text-sm text-white/70 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}