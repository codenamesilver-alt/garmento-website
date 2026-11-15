import Link from "next/link";

export const metadata = {
  title: "Terms & Conditions | Garmento Digital Laundry",
  description: "Terms and conditions for Garmento Digital Laundry services in Lucknow.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="font-heading text-3xl sm:text-4xl font-bold text-navy mb-8">
          Terms &amp; Conditions
        </h1>
        <div className="font-body text-body-text space-y-6 leading-relaxed">
          <p>
            By using Garmento Digital Laundry services, you agree to the following
            terms and conditions.
          </p>
          <h2 className="font-heading text-xl font-bold text-navy mt-8">Service Terms</h2>
          <p>
            Garmento Digital Laundry provides laundry, dry cleaning, and garment care
            services in Lucknow. Service availability is subject to our operating
            areas and capacity.
          </p>
          <h2 className="font-heading text-xl font-bold text-navy mt-8">Pickup &amp; Delivery</h2>
          <p>
            Free pickup and delivery is available within our designated 3 KM service
            radius. Additional charges may apply for locations beyond this radius.
          </p>
          <h2 className="font-heading text-xl font-bold text-navy mt-8">Garment Care</h2>
          <p>
            While we take utmost care with your garments, Garmento Digital Laundry is
            not liable for pre-existing damage, color bleeding, or fabric
            deterioration. Please inform us of any special care requirements at the
            time of pickup.
          </p>
          <h2 className="font-heading text-xl font-bold text-navy mt-8">Payments</h2>
          <p>
            Payment terms will be communicated at the time of service. Subscription
            plans are subject to their specific terms and conditions.
          </p>
          <h2 className="font-heading text-xl font-bold text-navy mt-8">Contact</h2>
          <p>
            For questions about these terms, contact us at{" "}
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