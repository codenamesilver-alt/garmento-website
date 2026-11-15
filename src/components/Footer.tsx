import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.jpg"
                alt="Garmento Logo"
                width={40}
                height={53}
                className="h-12 w-auto object-contain"
              />
              <div>
                <span className="font-nav font-semibold text-lg block">Garmento</span>
                <span className="font-nav text-xs text-gold">The Digital Laundry</span>
              </div>
            </div>
            <p className="font-body text-sm text-white/70 leading-relaxed">
              A modern laundry and garment-care service committed to making everyday
              clothing care simpler, smarter and more convenient.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-nav font-semibold text-gold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/#about" },
                { label: "Our Services", href: "/#services" },
                { label: "Our Prices", href: "/prices" },
                { label: "Subscriptions", href: "/subscriptions" },
                { label: "Contact Us", href: "/#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-white/70 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-nav font-semibold text-gold mb-4">Services</h4>
            <ul className="space-y-2">
              {[
                "Wash & Fold",
                "Wash & Iron",
                "Dry Cleaning",
                "Steam Ironing",
                "Premium Garment Care",
              ].map((s) => (
                <li key={s}>
                  <span className="font-body text-sm text-white/70">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-nav font-semibold text-gold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="font-body text-sm text-white/70">
                Lucknow, Uttar Pradesh, India
              </li>
              <li>
                <a
                  href="tel:+917459935119"
                  className="font-body text-sm text-white/70 hover:text-gold transition-colors"
                >
                  +91 7459935119
                </a>
              </li>
              <li>
                <a
                  href="mailto:care@garmento.in"
                  className="font-body text-sm text-white/70 hover:text-gold transition-colors"
                >
                  care@garmento.in
                </a>
              </li>
            </ul>

            {/* Social */}
            <div className="flex gap-3 mt-6">
              {[
                { label: "Instagram", href: "#" },
                { label: "Facebook", href: "#" },
                { label: "WhatsApp", href: "https://wa.me/917459935119" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center text-white/70 hover:bg-gold hover:text-white transition-all text-xs font-nav"
                  aria-label={social.label}
                >
                  {social.label.charAt(0)}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Legal Links */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex gap-6">
            <Link href="/privacy" className="font-body text-xs text-white/50 hover:text-gold transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="font-body text-xs text-white/50 hover:text-gold transition-colors">
              Terms &amp; Conditions
            </Link>
          </div>
          <p className="font-body text-xs text-white/50">
            &copy; 2026 Garmento Digital Laundry. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}