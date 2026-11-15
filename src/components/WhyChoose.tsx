export default function WhyChoose() {
  const features = [
    {
      title: "Doorstep Pickup & Delivery",
      desc: "We collect and deliver your clothes right at your doorstep. Free pickup and delivery within 3 KM service radius.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ),
    },
    {
      title: "Professional Garment Care",
      desc: "Expert handling with specialized care for delicate and premium garments.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: "Time Saving",
      desc: "Reclaim your time. We handle the laundry so you can focus on what matters.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Digital Convenience",
      desc: "Easy booking, tracking, and management through our digital platform.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "Quality Assurance",
      desc: "Rigorous quality checks ensure your garments return in perfect condition.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
        </svg>
      ),
    },
    {
      title: "Customer First",
      desc: "Your satisfaction is our priority. Dedicated support for every customer.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="font-nav text-sm font-medium text-gold uppercase tracking-wider">
            Why Choose Us
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mt-3 mb-4">
            Why Choose Garmento?
          </h2>
          <p className="font-body text-lg text-body-text max-w-2xl mx-auto">
            We combine technology, quality, and convenience to deliver an
            exceptional laundry experience.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f) => (
            <div
              key={f.title}
              className="group p-8 bg-ivory rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gold/20"
            >
              <div className="w-14 h-14 bg-gold/10 rounded-xl flex items-center justify-center text-gold mb-5 group-hover:bg-gold group-hover:text-white transition-all duration-300">
                {f.icon}
              </div>
              <h3 className="font-heading text-xl font-bold text-navy mb-3">
                {f.title}
              </h3>
              <p className="font-body text-sm text-body-text leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Free pickup highlight */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gold/10 rounded-full">
            <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="font-nav font-medium text-navy">
              Free pickup &amp; delivery within 3 KM service radius
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}