export const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Ecosystem", href: "/ecosystem" },
  { label: "Festivals", href: "/festivals" },
  { label: "Marketplace", href: "/marketplace" },
  { label: "Invest", href: "/invest-partner" }
] as const;

export const footerLinks = {
  ecosystem: [
    { label: "Citizen Activation", href: "/ecosystem#citizen-activation" },
    { label: "Creative Commerce", href: "/ecosystem#creative-commerce" },
    { label: "Festivals & Convergences", href: "/ecosystem#festivals" },
    { label: "Creative Finance", href: "/ecosystem#creative-finance" },
    { label: "Digital Infrastructure", href: "/ecosystem#digital-infrastructure" },
    { label: "Impact & Sustainability", href: "/ecosystem#impact" }
  ],
  marketplace: [
    { label: "Creative Products", href: "/marketplace" },
    { label: "Streaming", href: "/marketplace#streaming" },
    { label: "Funding", href: "/marketplace#funding" },
    { label: "Gift Cards", href: "/marketplace#gift-cards" },
    { label: "Become a Vendor", href: "/get-involved" }
  ],
  resources: [
    { label: "ReelPulse TV", href: "/resources#reelpulse-tv" },
    { label: "Press Releases", href: "/resources#press" },
    { label: "Whitepapers", href: "/resources#whitepapers" },
    { label: "News & Announcements", href: "/resources#news" },
    { label: "Impact Dashboard", href: "/resources#impact" }
  ],
  legal: [
    { label: "Privacy Policy", href: "/contact" },
    { label: "Terms & Conditions", href: "/contact" },
    { label: "Token Disclaimer", href: "/contact" },
    { label: "Contact", href: "/contact" }
  ]
} as const;
