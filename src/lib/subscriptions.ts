export type SubscriptionPlan = {
  name: string;
  tagline: string;
  items: number;
  days: number;
  price: number;
  badge?: string;
  features: string[];
  excludes?: string[];
  accent: string;
  gradient: string;
};

export const subscriptionPlans: SubscriptionPlan[] = [
  {
    name: "Starter Pack",
    tagline: "Perfect for individuals",
    items: 20,
    days: 30,
    price: 300,
    features: [
      "20 garments per cycle",
      "Free doorstep pickup & delivery",
      "Wash & iron included",
      "30-day validity",
      "Quality assurance on every item",
    ],
    excludes: ["Jackets", "Coats", "Sweaters", "Curtains", "Blankets", "Premium wear"],
    accent: "#B89532",
    gradient: "from-[#142D4E] to-[#1e3a5f]",
  },
  {
    name: "Value Pack",
    tagline: "Best value for regulars",
    items: 35,
    days: 30,
    price: 500,
    badge: "Most Popular",
    features: [
      "35 garments per cycle",
      "Free doorstep pickup & delivery",
      "Wash & iron included",
      "30-day validity",
      "Priority processing",
      "Quality assurance on every item",
    ],
    accent: "#B89532",
    gradient: "from-[#B89532] to-[#d4a84a]",
  },
  {
    name: "Family Pack",
    tagline: "For the whole household",
    items: 70,
    days: 45,
    price: 1000,
    features: [
      "70 garments per cycle",
      "Free doorstep pickup & delivery",
      "Wash & iron included",
      "45-day validity",
      "Priority processing",
      "Dedicated support",
      "Quality assurance on every item",
    ],
    accent: "#142D4E",
    gradient: "from-[#0f2340] to-[#142D4E]",
  },
  {
    name: "Mega Pack",
    tagline: "Maximum savings, maximum care",
    items: 100,
    days: 90,
    price: 1500,
    badge: "Best Value",
    features: [
      "100 garments per cycle",
      "Free doorstep pickup & delivery",
      "Wash & iron included",
      "90-day validity",
      "Priority processing",
      "Dedicated support",
      "Flexible scheduling",
      "Quality assurance on every item",
    ],
    accent: "#B89532",
    gradient: "from-[#1a1a2e] to-[#142D4E]",
  },
];
