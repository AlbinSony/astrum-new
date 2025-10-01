import Contact        import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import Cultures from "@/components/Cultures";
import PageIntro from "@/components/PageIntro";
import { StatList, StatListItem } from "@/components/StatList";
import FadeIn from "@/components/FadeIn";
import React from "react";
import { FaUsers } from "react-icons/fa";

export const metadata = {
  title: "About Us",
  description: "Empowering Global Dreams. Astrum Great Indian Scholars Pvt Ltd is on a mission to empower 100,000 students from India to become global citizens.",
};

const AboutPage = () => {
  return (
    <>
      <PageIntro eyebrow="ABOUT US" title="Empowering Global Dreams">
        <p>
          Astrum Great Indian Scholars Pvt Ltd is on a mission to empower 100,000 students from India to become global citizens.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <div>
            <h3 className="font-semibold text-neutral-950">Our Mission</h3>
            <p className="mt-2">
              To democratize access to international education by providing personalized guidance, transparent processes, and comprehensive support to every aspiring student.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-neutral-950">Our Vision</h3>
            <p className="mt-2">
              To make every Indian student globally employable by bridging the gap between local education and international opportunities.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-neutral-950">The Story So Far</h3>
            <p className="mt-2">
              Founded in 2024 and based in Kerala, our company has grown rapidly through personalized mentoring, institutional tie-ups, and trust-first counseling. We believe in transparency, excellence, and putting students first in everything we do.
            </p>
          </div>
        </div>
      </PageIntro>
      <Container className="mt-16">
        <StatList>
          <StatListItem value="2024" label="Founded in Kerala" />
          <StatListItem value="100+" label="University Partners" />
          <StatListItem value="97%" label="Visa Success Rate" />
        </StatList>
      </Container>
      <Cultures />
      <ContactSection />
    </>
  );
};

export default AboutPage;@/components/ContactSection";
import Container from "@/components/Container";
import Cultures from "@/components/Cultures";
import PageIntro from "@/components/PageIntro";
import { StatList, StatListItem } from "@/components/StatList";
import React from "react";

const AboutPage = () => {
  return (
    <>
      <PageIntro eyebrow="ABOUT US" title="Empowering Global Dreams">
        <p>
          Astrum Great Indian Scholars Pvt Ltd is on a mission to empower 100,000 students from India to become global citizens.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            Studio was started by three friends who noticed that developer
            studios were charging clients double what an in-house team would
            cost. Since the beginning, we have been committed to doing things
            differently by charging triple instead.
          </p>
          <p>
            At Studio, we’re more than just colleagues — we’re a family. This
            means we pay very little and expect people to work late. We want our
            employees to bring their whole selves to work. In return, we just
            ask that they keep themselves there until at least 6:30pm.
          </p>
        </div>
      </PageIntro>
      <Container className="mt-16">
        <StatList>
          <StatListItem value="35" label="Underpaid employees" />
          <StatListItem value="52" label="Placated clients" />
          <StatListItem value="$25M" label="Invoices billed" />
        </StatList>
      </Container>
      <Cultures />
      <ContactSection />
    </>
  );
};

export default AboutPage;
