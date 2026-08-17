export const CLINIC = {
  name: "Dr Beauty Medical Center",
  shortName: "Dr Beauty",
  city: "Dubai",
  phoneDisplay: "+971 4 595 2444",
  phoneHref: "tel:+97145952444",
  mapsUrl: "https://maps.app.goo.gl/RGZH7LKuzWc8KK7v7",
  address: {
    lines: [
      "Villa 35, Jumeira St",
      "Next to Mercato Shopping Mall",
      "Jumeirah, Jumeira First",
      "Dubai, United Arab Emirates",
    ],
    single:
      "Villa 35, Jumeira St, next to Mercato Shopping Mall, Jumeirah, Jumeira First, Dubai, United Arab Emirates",
  },
} as const;

export const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Treatments", to: "/treatments" },
  { label: "Doctors", to: "/doctors" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
] as const;

/**
 * Neutral service categories only. No specific procedures, claims or pricing
 * are listed until verified clinic information is supplied.
 */
export const SERVICE_CATEGORIES = [
  {
    slug: "aesthetic-treatments",
    name: "Aesthetic Treatments",
    description:
      "Appearance-focused care planned during a personal consultation at our Jumeirah clinic.",
  },
  {
    slug: "medical-consultations",
    name: "Medical Consultations",
    description:
      "Private consultations to discuss your concerns, questions and suitable next steps.",
  },
  {
    slug: "personalized-care",
    name: "Personalized Care",
    description:
      "Follow-up and aftercare arranged around your schedule and individual preferences.",
  },
] as const;
