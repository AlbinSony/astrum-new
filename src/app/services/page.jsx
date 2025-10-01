import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import PageIntro from "@/components/PageIntro";
import List, { ListItem } from "@/components/List";
import { FaGraduationCap, FaUniversity, FaFileAlt, FaDollarSign, FaPassport, FaPlane } from "react-icons/fa";

export const metadata = {
  title: "Services",
  description: "Comprehensive Study Abroad Services — from planning to landing.",
};

const services = [
  {
    title: "Counseling & Career Planning",
    description: "Tailored roadmap based on your profile, goals & preferences.",
    icon: FaGraduationCap,
    features: [
      "One-on-one counseling sessions",
      "Career assessment",
      "University shortlisting", 
      "Course recommendations"
    ]
  },
  {
    title: "University & Course Selection", 
    description: "AI + Human curated options that fit your ambition and budget.",
    icon: FaUniversity,
    features: [
      "100+ partner universities",
      "Course compatibility analysis",
      "Budget planning",
      "Admission requirements"
    ]
  },
  {
    title: "Application Assistance",
    description: "SOP/Essay Help, LOR Strategy, Timelines — all handled.",
    icon: FaFileAlt,
    features: [
      "SOP & essay writing",
      "LOR strategy",
      "Application timeline",
      "Document preparation"
    ]
  },
  {
    title: "Scholarship & Education Loans",
    description: "In-house financial advisors to maximize funding opportunities.",
    icon: FaDollarSign,
    features: [
      "Scholarship matching",
      "Loan assistance", 
      "Financial planning",
      "Award optimization"
    ]
  },
  {
    title: "Visa Support",
    description: "Complete documentation, mock interviews, and embassy updates.",
    icon: FaPassport,
    features: [
      "Visa documentation",
      "Mock interviews",
      "Embassy liaison",
      "Travel planning"
    ]
  },
  {
    title: "Pre-departure & Post-landing",
    description: "Housing, forex, SIM, travel cards, airport pickup, bank accounts.",
    icon: FaPlane,
    features: [
      "Accommodation support",
      "Airport pickup",
      "Bank account setup",
      "SIM & forex"
    ]
  }
];

export default function Services() {
  return (
    <>
      <PageIntro eyebrow="Our Services" title="Comprehensive Study Abroad Services — from planning to landing.">
        <p>
          We provide end-to-end support for every aspect of your study abroad journey, ensuring you have the best possible chance of success at every step.
        </p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {services.map((service, index) => (
            <FadeIn key={service.title} className="group">
              <div className="rounded-3xl bg-neutral-50 p-8 hover:bg-neutral-100 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-950 text-white">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-xl font-semibold text-neutral-950">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-neutral-600">
                      {service.description}
                    </p>
                    <ul className="mt-4 space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm text-neutral-700">
                          <div className="mr-2 h-1.5 w-1.5 rounded-full bg-neutral-300" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <div className="rounded-3xl bg-neutral-950 px-6 py-20 sm:px-6 sm:py-32 md:px-12">
            <div className="mx-auto max-w-4xl">
              <div className="max-w-xl">
                <h2 className="font-display text-3xl font-medium text-white [text-wrap:balance] sm:text-4xl">
                  Ready to Start Your Journey?
                </h2>
                <div className="mt-6 flex">
                  <div className="text-base text-neutral-300">
                    Let our experts guide you through every step of your study abroad process.
                  </div>
                </div>
                <div className="mt-8">
                  <a
                    href="/contact"
                    className="inline-flex rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-neutral-950 transition hover:bg-neutral-200"
                  >
                    Get Free Consultation
                  </a>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </>
  );
}