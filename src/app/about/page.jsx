import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import Cultures from "@/components/Cultures";
import PageIntro from "@/components/PageIntro";
import { StatList, StatListItem } from "@/components/StatList";
import React from "react";

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

export default AboutPage;