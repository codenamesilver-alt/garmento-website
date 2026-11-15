import type { Metadata } from "next";
import { Playfair_Display, Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Garmento Digital Laundry | Best Laundry & Dry Cleaning Services in Lucknow",
  description:
    "Experience professional laundry, washing, ironing and dry-cleaning services with Garmento Digital Laundry in Lucknow. Convenient doorstep pickup and delivery.",
  keywords: [
    "Laundry service in Lucknow",
    "Best laundry in Lucknow",
    "Dry cleaning in Lucknow",
    "Wash and iron service Lucknow",
    "Doorstep laundry pickup Lucknow",
    "Garmento Digital Laundry",
  ],
  openGraph: {
    title: "Garmento Digital Laundry | Best Laundry & Dry Cleaning Services in Lucknow",
    description:
      "Experience professional laundry, washing, ironing and dry-cleaning services with Garmento Digital Laundry in Lucknow. Convenient doorstep pickup and delivery.",
    url: "https://garmento.in",
    siteName: "Garmento Digital Laundry",
    locale: "en_IN",
    type: "website",
  },
  icons: {
    icon: "/logo.jpg",
    apple: "/logo.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${playfair.variable} ${inter.variable} ${poppins.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col pt-20">
      <Header />
      {children}
    </body>
    </html>
  );
}