import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Garmento Digital Laundry",
  description: "Privacy policy for Garmento Digital Laundry services in Lucknow.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="font-heading text-3xl sm:text-4xl font-bold text-navy mb-8">
          Privacy Policy
        </h1>
        <div className="font-body text-body-text space-y-6 leading-relaxed">
          <p>
            Garmento Digital Laundry (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to
            protecting your privacy. This Privacy Policy explains how we collect,
            use, and safeguard your information when you use our services.
          </p>
          <h2 className="font-heading text-xl font-bold text-navy mt-8">Information We Collect</h2>
          <p>
            We collect information you provide directly, including your name, mobile
            number, email address, and pickup address when you submit an enquiry or
            book a service.
          </p>
          <h2 className="font-heading text-xl font-bold text-navy mt-8">How We Use Your Information</h2>
          <p>
            We use your information to process your laundry orders, communicate with
            you about your service, and improve our offerings. We do not sell or share
            your personal information with third parties for marketing purposes.
          </p>
          <h2 className="font-heading text-xl font-bold text-navy mt-8">Data Security</h2>
          <p>
            We implement appropriate security measures to protect your personal
            information. However, no method of transmission over the internet is 100%
            secure.
          </p>
          <h2 className="font-heading text-xl font-bold text-navy mt-8">Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, contact us at{" "}
            <a href="mailto:care@garmento.in" className="text-gold hover:underline">
              care@garmento.in
            </a>
            .
          </p>
        </div>
        <div className="mt-12">
          <Link href="/" className="text-gold font-nav font-medium hover:underline">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}