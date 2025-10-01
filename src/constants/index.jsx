import { SocialMediaProfiles } from "@/components/SocialMedia";

export const navigation = [
  {
    title: "Services",
    links: [
      { title: "Study Abroad Counseling", href: "/services" },
      { title: "Scholarships & Loans", href: "/scholarships" },
      { title: "Visa & Pre-Departure", href: "/services" },
      {
        title: (
          <>
            All Services <span aria-hidden="true">&rarr;</span>
          </>
        ),
        href: "/services",
      },
    ],
  },
  {
    title: "Company",
    links: [
      { title: "About Us", href: "/about" },
      { title: "Events", href: "/events" },
      { title: "Blog", href: "/blog" },
      { title: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Connect",
    links: SocialMediaProfiles,
  },
];
