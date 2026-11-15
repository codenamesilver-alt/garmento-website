"use client";

import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=800&q=80"
                alt="Professional laundry service"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Decorative gold accent */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold/10 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-navy/5 rounded-2xl -z-10" />
          </div>

          {/* Content */}
          <div>
            <span className="font-nav text-sm font-medium text-gold uppercase tracking-wider">
              About Us
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mt-3 mb-6">
              Redefining the Way You Experience Laundry.
            </h2>
            <p className="font-body text-base sm:text-lg text-body-text leading-relaxed mb-6">
              Garmento Digital Laundry is a modern laundry and garment-care service
              committed to making everyday clothing care simpler, smarter and more
              convenient. We combine professional laundry practices, modern technology
              and customer-focused service to deliver a seamless experience.
            </p>
            <p className="font-body text-base sm:text-lg text-body-text leading-relaxed mb-8">
              From everyday washing and ironing to specialized garment care, our goal is
              to provide quality, convenience and reliability with every order.
            </p>

            {/* Mission & Commitment */}
            <div className="space-y-4 mb-8">
              {[
                {
                  title: "Our Mission",
                  desc: "To make laundry effortless through technology, quality, and convenience.",
                },
                {
                  title: "Our Commitment",
                  desc: "Quality garment care with every order, every time.",
                },
                {
                  title: "Why Garmento",
                  desc: "Professional practices, modern tech, and customer-first service.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="w-2 h-2 bg-gold rounded-full mt-2.5 shrink-0" />
                  <div>
                    <h4 className="font-nav font-semibold text-navy">{item.title}</h4>
                    <p className="font-body text-sm text-body-text">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#services"
              className="inline-flex items-center px-8 py-3.5 bg-navy text-white font-nav font-medium rounded-full hover:bg-navy/90 transition-all duration-300 shadow-lg"
            >
              Discover Garmento
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}