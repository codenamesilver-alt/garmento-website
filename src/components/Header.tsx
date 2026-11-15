"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About Us" },
  { href: "/#services", label: "Our Services" },
  { href: "/prices", label: "Our Prices" },
  { href: "/subscriptions", label: "Subscriptions" },
  { href: "/#contact", label: "Contact Us" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isHome, setIsHome] = useState(false);
  useEffect(() => {
    setIsHome(window.location.pathname === "/");
  }, []);
  const solid = scrolled || !isHome;

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      // Determine active section
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const hashIndex = href.indexOf("#");
    const id = hashIndex >= 0 ? href.slice(hashIndex + 1) : "";
    const el = id ? document.getElementById(id) : null;
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth" });
      setMobileOpen(false);
      return;
    }
    // Otherwise let the browser navigate (e.g. cross-page hash links)
    setMobileOpen(false);
  };

  return (
    <header
      suppressHydrationWarning
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        solid
          ? "bg-white/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0 -ml-2 md:-ml-4">
            <Image
              src="/logo.jpg"
              alt="Garmento Digital Laundry Logo"
              width={80}
              height={106}
              className="h-14 sm:h-20 w-auto object-contain rounded-2xl"
              style={{ maskImage: "radial-gradient(ellipse at center, black 60%, transparent 100%)", WebkitMaskImage: "radial-gradient(ellipse at center, black 60%, transparent 100%)" }}
              priority
            />
            <div className="hidden sm:block">
              <span className="font-nav font-semibold text-navy text-lg leading-tight block">
                Garmento
              </span>
              <span className="font-nav text-xs text-gold tracking-wide">
                The Digital Laundry
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav suppressHydrationWarning className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isRoute = !link.href.includes("#");
              if (isRoute) {
                return (
                  <Link
                    suppressHydrationWarning
                    key={link.href}
                    href={link.href}
                    className={`font-nav text-sm font-medium transition-colors duration-200 ${
                      solid ? "text-navy hover:text-gold" : "text-white hover:text-gold"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              }
              return (
                <a
                  suppressHydrationWarning
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`font-nav text-sm font-medium transition-colors duration-200 ${
                    (link.label === "Home" && (activeSection === "home" || activeSection === ""))
                      ? "text-gold"
                      : activeSection === link.href.replace("#", "")
                      ? "text-gold"
                      : solid
                      ? "text-navy hover:text-gold"
                      : "text-white hover:text-gold"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="/#contact"
              onClick={(e) => handleNavClick(e, "/#contact")}
              className="inline-flex items-center px-6 py-2.5 bg-gold text-white font-nav font-medium text-sm rounded-full hover:bg-gold/90 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Book a Pickup
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 rounded-lg"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg
              suppressHydrationWarning
              className={`w-6 h-6 ${solid ? "text-navy" : "text-white"}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white shadow-lg border-t">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => {
              const isRoute = !link.href.includes("#");
              if (isRoute) {
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block font-nav text-base font-medium text-navy hover:text-gold py-2"
                  >
                    {link.label}
                  </Link>
                );
              }
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="block font-nav text-base font-medium text-navy hover:text-gold py-2"
                >
                  {link.label}
                </a>
              );
            })}
            <a
              href="/#contact"
              onClick={(e) => handleNavClick(e, "/#contact")}
              className="block text-center px-6 py-3 bg-gold text-white font-nav font-medium rounded-full"
            >
              Book a Pickup
            </a>
          </div>
        </div>
      )}
    </header>
  );
}