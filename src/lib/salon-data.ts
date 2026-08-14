export type Service = { name: string; price: string; note?: string };
export type ServiceCategory = {
  id: string;
  name: string;
  eyebrow: string;
  description: string;
  services: Service[];
};

export const salon = {
  name: "Glowistry",
  legalName: "Amulya Makeovers by Glowistry",
  eyebrow: "Premium home-based salon",
  phoneDisplay: "+1 416 832 9212",
  phoneHref: "tel:+14168329212",
  email: "amulyajuluri1@gmail.com",
  address: "3-95 Forest Manor Rd, North York, Ontario, M2J 0B9",
  bookingHref: "tel:+14168329212",
};

export const categories: ServiceCategory[] = [
  {
    id: "threading", name: "Threading", eyebrow: "Precision", description: "Clean, defined shaping for your natural features.",
    services: [
      { name: "Eyebrows", price: "$5" }, { name: "Upper Lip", price: "$4" },
      { name: "Chin", price: "$3" }, { name: "Forehead", price: "$3" },
      { name: "Sideburns", price: "$5" }, { name: "Full Face", price: "$10" },
    ],
  },
  {
    id: "waxing", name: "Waxing", eyebrow: "Silky smooth", description: "Gentle, thorough care for beautifully smooth skin.",
    services: [
      { name: "Eyebrows", price: "$8" }, { name: "Upper Lip", price: "$6" }, { name: "Chin", price: "$6" },
      { name: "Sideburns", price: "$6" }, { name: "Underarms", price: "$10" }, { name: "Full Hands", price: "$20" },
      { name: "Half Hands", price: "$15" }, { name: "Full Legs", price: "$30" }, { name: "Half Legs", price: "$20" },
      { name: "Stomach", price: "$10" }, { name: "Side Burns", price: "$10" }, { name: "Brazilian", price: "$30" }, { name: "Toes", price: "$8" },
    ],
  },
  {
    id: "facials", name: "Facials", eyebrow: "Skin rituals", description: "Targeted treatments for a healthy, luminous complexion.",
    services: [
      { name: "Cleanup", price: "$30" }, { name: "D-Tan", price: "$40" }, { name: "Fruit Facial", price: "$60" },
      { name: "Papaya Facial", price: "$60" }, { name: "Gold Facial", price: "$60" }, { name: "Pearl Facial", price: "$60" },
      { name: "D-Tan + Facial", price: "$65" }, { name: "Red Wine Facial", price: "$60" }, { name: "Acne Facial", price: "$65" },
      { name: "Pigment Facial", price: "$65" }, { name: "Whitening & Brightening", price: "$60" }, { name: "O3+ Facial", price: "$65" },
      { name: "O3+ Bridal Facial", price: "$70" }, { name: "Lotus Facial", price: "$65" },
    ],
  },
  {
    id: "hair", name: "Hair Services", eyebrow: "Cut & colour", description: "Thoughtful cuts, colour and styling for every occasion.",
    services: [
      { name: "Straight Cut", price: "$10" }, { name: "U-Cut / V-Cut", price: "$20" }, { name: "Layers & Step Cut", price: "$25" },
      { name: "Feather Cut", price: "$25" }, { name: "Trimming (Split Ends)", price: "$15" }, { name: "Kids Hair Cut", price: "$15+" },
      { name: "Layer Bob Cut", price: "$30" }, { name: "Bangs", price: "$10" }, { name: "Streaks", price: "$5 per streak" },
      { name: "Hair Colour", price: "$50+" }, { name: "Henna for Hair", price: "$20" }, { name: "Blow Dry", price: "$15" },
      { name: "Kids Hair Shave", price: "$20+" }, { name: "Root Touch-up", price: "$20+" },
    ],
  },
  {
    id: "hydra", name: "Hydra Facials", eyebrow: "Deep hydration", description: "Multi-step hydration for refreshed, glass-like skin.",
    services: [
      { name: "Basic Hydra Facial", price: "$100" }, { name: "Glow Hydra Facial", price: "$130" },
      { name: "Advanced Hydra Facial", price: "$180" }, { name: "Acne-Control Hydra Facial", price: "$180" },
      { name: "Anti-Aging Hydra Facial", price: "$200" }, { name: "Luxury Hydra Platinum Facial", price: "$220" },
    ],
  },
  {
    id: "nails", name: "Nails", eyebrow: "Finishing touch", description: "Classic care and creative enhancements, shaped to you.",
    services: [
      { name: "Shellac", price: "$20" }, { name: "Builder Gel Overlay", price: "$40" }, { name: "Refill Builder Gel Overlay", price: "$30" },
      { name: "Gel Extension", price: "$45" }, { name: "Gel Dual Forms", price: "$55" }, { name: "Acrylic Extension", price: "$50" },
      { name: "Polygel Extension", price: "$50" }, { name: "Fake Tips", price: "$45" }, { name: "Remove Shellac", price: "$5" },
      { name: "Remove Gel", price: "$10" }, { name: "Remove Acrylic", price: "$20" }, { name: "Remove Polygel", price: "$10" },
      { name: "Shellac Manicure", price: "$35" }, { name: "Shellac Pedicure", price: "$45" }, { name: "Shellac Pedi & Mani", price: "$70" },
    ],
  },
  {
    id: "mani-pedi", name: "Manicure & Pedicure", eyebrow: "Hands & feet", description: "Restorative grooming with immaculate finishing.",
    services: [
      { name: "Basic Manicure", price: "$20" }, { name: "Advanced Manicure", price: "$25" }, { name: "Basic Pedicure", price: "$30" },
      { name: "Advanced Pedicure", price: "$40" }, { name: "Manicure & Pedicure", price: "$45" }, { name: "Advanced Mani & Pedi", price: "$55" },
    ],
  },
  {
    id: "mehendi", name: "Mehendi", eyebrow: "Art by hand", description: "Intricate traditional designs, from simple to bridal.",
    services: [
      { name: "Arabic Mehendi", price: "$10–$15 / hand" }, { name: "Bridal Mehendi", price: "$60–$90 / hand" },
      { name: "Portrait Mehendi", price: "$25–$40 / hand" }, { name: "Kids Mehendi", price: "$5–$8 / hand" },
      { name: "Simple Full Hand", price: "$15–$20 / hand" }, { name: "All Types Mehendi", price: "From $10" },
    ],
  },
  {
    id: "massage", name: "Massage", eyebrow: "Pause & restore", description: "Calming massage rituals to release everyday tension.",
    services: [
      { name: "Head Massage (no oil)", price: "$20", note: "20 mins" }, { name: "Head Massage (with oil)", price: "$25", note: "30 mins" },
      { name: "Back Massage", price: "$20", note: "30 mins" }, { name: "Neck, Shoulder, Arms & Back", price: "$50", note: "45 mins" },
      { name: "Head, Neck, Shoulder & Back", price: "$50", note: "45 mins" }, { name: "Back & Legs", price: "$50", note: "45 mins" },
      { name: "Legs", price: "$30", note: "30 mins" }, { name: "Full Body Massage", price: "$85", note: "90 mins" },
    ],
  },
  {
    id: "spa", name: "Hair Spa", eyebrow: "Scalp wellness", description: "Nourishing treatments for healthier hair and scalp.",
    services: [
      { name: "Hair Spa", price: "$25" }, { name: "Anti-Dandruff Spa", price: "$40" },
      { name: "Anti-Hairfall Spa", price: "$40" }, { name: "Hydrating Spa", price: "$35" },
    ],
  },
  {
    id: "prepleating", name: "Prepleating", eyebrow: "Ready to drape", description: "Crisp preparation for an effortless, elegant saree drape.",
    services: [
      { name: "Saree Draping", price: "$20" }, { name: "Ironing Service", price: "$20" },
      { name: "Box Pre-Pleating", price: "$25" }, { name: "Hanger Pre-Pleating", price: "$30" },
    ],
  },
  {
    id: "bleach", name: "Bleach", eyebrow: "Even & brighten", description: "Targeted treatments for a visibly even finish.",
    services: [
      { name: "Face Bleach", price: "$15" }, { name: "Neck Bleach", price: "$10" }, { name: "Half Arms Bleach", price: "$15" },
      { name: "Full Arms Bleach", price: "$20" }, { name: "Legs Bleach", price: "$20" },
    ],
  },
];

export const featured = [
  { category: "Hydra Facials", name: "Glow Hydra Facial", price: "$130", text: "Deep cleansing, hydration and a luminous finish." },
  { category: "Hair", name: "Layers & Step Cut", price: "$25", text: "A tailored shape with soft, natural movement." },
  { category: "Nails", name: "Shellac Manicure", price: "$35", text: "Long-lasting colour with a clean, glossy finish." },
];

export const categoryImages: Record<string, string> = {
  threading: "/images/salon/threading.png",
  waxing: "/images/salon/waxing.png",
  facials: "/images/salon/facial.png",
  hair: "/images/salon/hair-mehendi.png",
  hydra: "/images/salon/hydra-facial.png",
  nails: "/images/salon/nail-extensions.png",
  "mani-pedi": "/images/salon/nails.png",
  mehendi: "/images/salon/mehendi.png",
  massage: "/images/salon/massage.png",
  spa: "/images/salon/hair-spa.png",
  prepleating: "/images/salon/saree-prepleating.png",
  bleach: "/images/salon/bleach.png",
};
