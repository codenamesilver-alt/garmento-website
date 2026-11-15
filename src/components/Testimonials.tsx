"use client";

import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Priya Sharma",
    review:
      "Garmento has completely changed how I handle laundry. The pickup and delivery is so convenient, and my clothes always come back perfectly clean and fresh.",
    rating: 5,
    initials: "PS",
  },
  {
    name: "Rahul Verma",
    review:
      "Excellent service! The dry cleaning is top-notch and the steam ironing makes my shirts look brand new. Highly recommended.",
    rating: 5,
    initials: "RV",
  },
  {
    name: "Anita Gupta",
    review:
      "I love the digital booking system. It's so easy to schedule pickups. The quality of service is consistently great.",
    rating: 4,
    initials: "AG",
  },
  {
    name: "Vikram Singh",
    review:
      "Great for bulk laundry needs. We use Garmento for our hostel and the service is reliable and professional.",
    rating: 5,
    initials: "VS",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="font-nav text-sm font-medium text-gold uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mt-3 mb-4">
            What Our Customers Say
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative bg-ivory rounded-2xl p-8 sm:p-12 shadow-lg">
            {/* Quote icon */}
            <svg
              className="w-10 h-10 text-gold/30 mb-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>

            <p className="font-body text-lg text-body-text leading-relaxed mb-8">
              &ldquo;{testimonials[current].review}&rdquo;
            </p>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center text-white font-nav font-bold">
                {testimonials[current].initials}
              </div>
              <div>
                <h4 className="font-nav font-semibold text-navy">
                  {testimonials[current].name}
                </h4>
                <div className="flex gap-1 mt-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 ${
                        i < testimonials[current].rating
                          ? "text-gold"
                          : "text-gray-300"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  i === current ? "bg-gold w-6" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}