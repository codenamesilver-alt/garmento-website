"use client";

import { useRef, useState, useEffect, useCallback } from "react";

export default function Hero() {
  const video1Ref = useRef<HTMLVideoElement>(null);
  const video2Ref = useRef<HTMLVideoElement>(null);
  const [activeVideo, setActiveVideo] = useState<1 | 2>(1);
  const [isMobile, setIsMobile] = useState(false);
  const [autoplayBlocked, setAutoplayBlocked] = useState(false);

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Video sequence logic
  const playSequence = useCallback(() => {
    const v1 = video1Ref.current;
    const v2 = video2Ref.current;
    if (!v1 || !v2) return;

    // Start with V1
    v1.currentTime = 0;
    v1.play().catch(() => setAutoplayBlocked(true));

    const onV1End = () => {
      // Crossfade to V2
      setActiveVideo(2);
      v2.currentTime = 0;
      v2.play().catch(() => {});
    };

    const onV2End = () => {
      // Crossfade back to V1
      setActiveVideo(1);
      v1.currentTime = 0;
      v1.play().catch(() => {});
    };

    v1.addEventListener("ended", onV1End);
    v2.addEventListener("ended", onV2End);

    return () => {
      v1.removeEventListener("ended", onV1End);
      v2.removeEventListener("ended", onV2End);
    };
  }, []);

  useEffect(() => {
    if (isMobile) return;
    const cleanup = playSequence();
    return cleanup;
  }, [isMobile, playSequence]);

  // Preload V2 while V1 plays
  useEffect(() => {
    const v2 = video2Ref.current;
    if (v2) {
      v2.load();
    }
  }, []);

  const handleManualPlay = () => {
    const v1 = video1Ref.current;
    if (v1) {
      v1.play().then(() => setAutoplayBlocked(false)).catch(() => {});
    }
  };

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-navy h-[90vh] sm:h-[85vh] md:h-[90vh] lg:h-screen"
    >
      {/* Video Background */}
      {!isMobile ? (
        <div className="absolute inset-0 w-full h-full">
          {/* V1 */}
          <video
            ref={video1Ref}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
              activeVideo === 1 ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
            autoPlay
            muted
            playsInline
            preload="metadata"
            poster="https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=1280&q=80"
          >
            <source src="/videos/V1.mp4" type="video/mp4" />
          </video>
          {/* V2 */}
          <video
            ref={video2Ref}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
              activeVideo === 2 ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
            muted
            playsInline
            preload="none"
            poster="https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=1280&q=80"
          >
            <source src="/videos/v2.mp4" type="video/mp4" />
          </video>

          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/40 to-navy/70 z-20" />

          {/* Autoplay blocked fallback */}
          {autoplayBlocked && (
            <div className="absolute inset-0 z-30 flex items-center justify-center bg-navy/80">
              <button
                onClick={handleManualPlay}
                className="px-8 py-4 bg-gold text-white font-nav font-medium rounded-full text-lg hover:bg-gold/90 transition"
              >
                Play Video
              </button>
            </div>
          )}
        </div>
      ) : (
        /* Mobile fallback - static image */
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=1280&q=80')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/40 to-navy/70" />
        </div>
      )}

      {/* Hero Content */}
      <div className="relative z-30 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            {/* Headline */}
            <h1
              className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4 opacity-0 animate-[fadeInUp_1s_ease-out_0.3s_forwards]"
            >
              Your Clothes Deserve{" "}
              <span className="text-gold">Better Care.</span>
            </h1>

            {/* Supporting headline */}
            <p className="font-nav text-lg sm:text-xl md:text-2xl text-white/90 mb-4 opacity-0 animate-[fadeInUp_1s_ease-out_0.6s_forwards]">
              Experience the Smarter Way to Wash, Dry Clean &amp; Care for Your Clothes.
            </p>

            {/* Description */}
            <p className="font-body text-base sm:text-lg text-white/80 mb-8 max-w-2xl opacity-0 animate-[fadeInUp_1s_ease-out_0.9s_forwards]">
              Professional garment care, doorstep pickup and delivery, and exceptional
              attention to every detail. We make laundry effortless so you can focus on
              what matters.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10 opacity-0 animate-[fadeInUp_1s_ease-out_1.2s_forwards]">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-gold text-white font-nav font-semibold text-base rounded-full hover:bg-gold/90 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
              >
                Book a Pickup
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/80 text-white font-nav font-semibold text-base rounded-full hover:bg-white hover:text-navy transition-all duration-300"
              >
                Explore Our Services
              </a>
            </div>

            {/* Trust Highlights */}
            <div className="flex flex-wrap gap-6 opacity-0 animate-[fadeInUp_1s_ease-out_1.5s_forwards]">
              {[
                "Free Pickup & Delivery",
                "Professional Garment Care",
                "Convenient Digital Booking",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-gold"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-nav text-sm text-white/90">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 animate-bounce">
        <svg
          className="w-6 h-6 text-white/60"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}