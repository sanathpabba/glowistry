export type Service = { name: string; price: string; note?: string };
export type ServiceCategory = {
  id: string;
  name: string;
  eyebrow: string;
  description: string;
  detail: string;
  services: Service[];
};

export const salon = {
  name: "Glowistry",
  legalName: "Amulya Makeovers by Glowistry",
  eyebrow: "Premium home-based beauty studio for women",
  phoneDisplay: "+1 416 832 9212",
  phoneHref: "tel:+14168329212",
  email: "amulyajuluri1@gmail.com",
  address: "3-95 Forest Manor Rd, North York, Ontario, M2J 0B9",
  addressLines: ["3-95 Forest Manor Rd", "North York, Ontario", "M2J 0B9"],
  bookingHref: "tel:+14168329212",
  googleMapsHref: "https://www.google.com/maps/place/Amulya+makeovers/@43.7742596,-79.3465648,17z/data=!3m1!4b1!4m6!3m5!1s0x89d4d3bb016f15d1:0x68bd263e9d5be877!8m2!3d43.7742596!4d-79.3439899!16s%2Fg%2F11xdl_rg_6",
  googleReviewHref: "https://g.page/r/CXfoW50-Jr1oEBM/review",
};

export const categories: ServiceCategory[] = [
  {
    id: "threading", name: "Threading", eyebrow: "Refined precision", description: "Meticulous shaping that beautifully defines your natural features.", detail: "Our threading services offer precise, controlled hair removal for beautifully defined brows and a polished facial finish. Each appointment is approached with a gentle hand and close attention to symmetry, comfort, and your preferred shape.",
    services: [
      { name: "Eyebrows", price: "$5" }, { name: "Upper Lip", price: "$4" },
      { name: "Chin", price: "$3" }, { name: "Forehead", price: "$3" },
      { name: "Sideburns", price: "$5" }, { name: "Full Face", price: "$10" },
    ],
  },
  {
    id: "waxing", name: "Waxing", eyebrow: "Silken finish", description: "Considered, thorough care for impeccably smooth skin.", detail: "Enjoy smooth, beautifully cared-for skin with waxing services tailored to your comfort and chosen treatment area. Every service is performed with careful technique, professional hygiene, and thoughtful finishing for a refined result.",
    services: [
      { name: "Eyebrows", price: "$8" }, { name: "Upper Lip", price: "$6" }, { name: "Chin", price: "$6" },
      { name: "Sideburns", price: "$6" }, { name: "Underarms", price: "$10" }, { name: "Full Hands", price: "$20" },
      { name: "Half Hands", price: "$15" }, { name: "Full Legs", price: "$30" }, { name: "Half Legs", price: "$20" },
      { name: "Stomach", price: "$10" }, { name: "Side Burns", price: "$10" }, { name: "Brazilian", price: "$30" }, { name: "Toes", price: "$8" },
    ],
  },
  {
    id: "facials", name: "Facials", eyebrow: "Radiance rituals", description: "Expertly selected treatments for a healthy, luminous complexion.", detail: "Our facial rituals are selected to complement your complexion goals, from essential cleansing to brightening and targeted care. Each experience combines attentive preparation, carefully chosen products, and restorative touch to leave your skin feeling refreshed and beautifully renewed.",
    services: [
      { name: "Cleanup", price: "$30" }, { name: "D-Tan", price: "$40" }, { name: "Fruit Facial", price: "$60" },
      { name: "Papaya Facial", price: "$60" }, { name: "Gold Facial", price: "$60" }, { name: "Pearl Facial", price: "$60" },
      { name: "D-Tan + Facial", price: "$65" }, { name: "Red Wine Facial", price: "$60" }, { name: "Acne Facial", price: "$65" },
      { name: "Pigment Facial", price: "$65" }, { name: "Whitening & Brightening", price: "$60" }, { name: "O3+ Facial", price: "$65" },
      { name: "O3+ Bridal Facial", price: "$70" }, { name: "Lotus Facial", price: "$65" },
    ],
  },
  {
    id: "hair", name: "Hair Services", eyebrow: "Cut, colour & style", description: "Beautifully considered cuts, colour and styling for every occasion.", detail: "From polished everyday cuts to colour, blow-dries, and occasion styling, each hair service is shaped around your features, preferences, and lifestyle. Expect a personal consultation and a considered finish designed to feel distinctly your own.",
    services: [
      { name: "Straight Cut", price: "$10" }, { name: "U-Cut / V-Cut", price: "$20" }, { name: "Layers & Step Cut", price: "$25" },
      { name: "Feather Cut", price: "$25" }, { name: "Trimming (Split Ends)", price: "$15" }, { name: "Kids Hair Cut", price: "$15+" },
      { name: "Layer Bob Cut", price: "$30" }, { name: "Bangs", price: "$10" }, { name: "Streaks", price: "$5 per streak" },
      { name: "Hair Colour", price: "$50+" }, { name: "Henna for Hair", price: "$20" }, { name: "Blow Dry", price: "$15" },
      { name: "Kids Hair Shave", price: "$20+" }, { name: "Root Touch-up", price: "$20+" },
    ],
  },
  {
    id: "hydra", name: "Hydra Facials", eyebrow: "Intensive hydration", description: "Advanced, multi-step hydration for a refreshed and luminous complexion.", detail: "Hydra facials combine multi-step cleansing, hydration, and targeted skin care in one elevated treatment. Options are tailored to concerns such as congestion, blemishes, visible signs of ageing, and dehydration for a complexion that appears smooth, replenished, and radiant.",
    services: [
      { name: "Basic Hydra Facial", price: "$100" }, { name: "Glow Hydra Facial", price: "$130" },
      { name: "Advanced Hydra Facial", price: "$180" }, { name: "Acne-Control Hydra Facial", price: "$180" },
      { name: "Anti-Aging Hydra Facial", price: "$200" }, { name: "Luxury Hydra Platinum Facial", price: "$220" },
    ],
  },
  {
    id: "nails", name: "Nails", eyebrow: "Immaculate artistry", description: "Classic care and elegant enhancements, tailored to your personal style.", detail: "Discover beautifully shaped nails, enduring colour, and elegant enhancements tailored to your style. From Shellac and overlays to gel, acrylic, and detailed nail art, every set is created with precision and an immaculate finishing touch.",
    services: [
      { name: "Shellac", price: "$20" }, { name: "Builder Gel Overlay", price: "$40" }, { name: "Refill Builder Gel Overlay", price: "$30" },
      { name: "Gel Extension", price: "$45" }, { name: "Gel Dual Forms", price: "$55" }, { name: "Acrylic Extension", price: "$50" },
      { name: "Polygel Extension", price: "$50" }, { name: "Fake Tips", price: "$45" }, { name: "Remove Shellac", price: "$5" },
      { name: "Remove Gel", price: "$10" }, { name: "Remove Acrylic", price: "$20" }, { name: "Remove Polygel", price: "$10" },
      { name: "Shellac Manicure", price: "$35" }, { name: "Shellac Pedicure", price: "$45" }, { name: "Shellac Pedi & Mani", price: "$70" },
    ],
  },
  {
    id: "mani-pedi", name: "Manicure & Pedicure", eyebrow: "Polished care", description: "Restorative hand and foot care with an immaculate finish.", detail: "Our manicure and pedicure services combine meticulous grooming with restorative care for hands and feet. Select an essential or advanced ritual and enjoy careful shaping, cuticle care, and a polished finish in a calm private setting.",
    services: [
      { name: "Basic Manicure", price: "$20" }, { name: "Advanced Manicure", price: "$25" }, { name: "Basic Pedicure", price: "$30" },
      { name: "Advanced Pedicure", price: "$40" }, { name: "Manicure & Pedicure", price: "$45" }, { name: "Advanced Mani & Pedi", price: "$55" },
    ],
  },
  {
    id: "mehendi", name: "Mehendi", eyebrow: "Artistry by hand", description: "Intricate, traditional artistry ranging from understated to bridal designs.", detail: "Celebrate tradition and personal expression through beautifully composed mehendi artistry. From graceful Arabic patterns and simple hand designs to intricate bridal and portrait work, each creation is drawn with patience, balance, and exceptional attention to detail.",
    services: [
      { name: "Arabic Mehendi", price: "$10–$15 / hand" }, { name: "Bridal Mehendi", price: "$60–$90 / hand" },
      { name: "Portrait Mehendi", price: "$25–$40 / hand" }, { name: "Kids Mehendi", price: "$5–$8 / hand" },
      { name: "Simple Full Hand", price: "$15–$20 / hand" }, { name: "All Types Mehendi", price: "From $10" },
    ],
  },
  {
    id: "massage", name: "Massage", eyebrow: "Rest & restore", description: "Restorative massage rituals designed to ease everyday tension.", detail: "Pause and restore with calming massage rituals focused on the head, neck, shoulders, back, arms, or legs. Select your preferred duration and areas of focus for an unhurried experience designed to ease everyday tension and encourage deep relaxation.",
    services: [
      { name: "Head Massage (no oil)", price: "$20", note: "20 mins" }, { name: "Head Massage (with oil)", price: "$25", note: "30 mins" },
      { name: "Back Massage", price: "$20", note: "30 mins" }, { name: "Neck, Shoulder, Arms & Back", price: "$50", note: "45 mins" },
      { name: "Head, Neck, Shoulder & Back", price: "$50", note: "45 mins" }, { name: "Back & Legs", price: "$50", note: "45 mins" },
      { name: "Legs", price: "$30", note: "30 mins" }, { name: "Full Body Massage", price: "$85", note: "90 mins" },
    ],
  },
  {
    id: "spa", name: "Hair Spa", eyebrow: "Scalp wellness", description: "Nourishing rituals created to restore healthier-looking hair and scalp.", detail: "Our hair spa rituals pair nourishing care with a relaxing salon experience to support softer, healthier-looking hair and a refreshed scalp. Targeted options are available for dryness, visible flakes, and hair-fall concerns, with recommendations tailored to your needs.",
    services: [
      { name: "Hair Spa", price: "$25" }, { name: "Anti-Dandruff Spa", price: "$40" },
      { name: "Anti-Hairfall Spa", price: "$40" }, { name: "Hydrating Spa", price: "$35" },
    ],
  },
  {
    id: "prepleating", name: "Saree Pre-Pleating", eyebrow: "Poised to perfection", description: "Precise preparation for an effortless and elegantly finished saree drape.", detail: "Arrive ready with expertly prepared saree pleats designed for a graceful, secure, and time-saving drape. Choose from ironing, box pre-pleating, hanger preparation, or complete saree draping for an occasion-ready silhouette.",
    services: [
      { name: "Saree Draping", price: "$20" }, { name: "Ironing Service", price: "$20" },
      { name: "Box Pre-Pleating", price: "$25" }, { name: "Hanger Pre-Pleating", price: "$30" },
    ],
  },
  {
    id: "bleach", name: "Bleach", eyebrow: "Brighten & refine", description: "Targeted care for a visibly brighter and more even-looking finish.", detail: "Our targeted bleach services are available for the face, neck, arms, and legs, helping create a brighter and more even-looking appearance. Please share any sensitivities before your appointment so the service can be considered with appropriate care.",
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
