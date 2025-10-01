import React from "react";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import FadeIn from "./FadeIn";
import StylizedImage from "./StylizedImage";
import imageLaptop from "../images/laptop.jpg";
import List, { ListItem } from "./List";

const Services = () => {
  return (
    <>
      <SectionIntro
        eyebrow="What We Do"
        title="Comprehensive support for your global education journey"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          From university selection to landing in your dream destination, we provide end-to-end support for every step of your study abroad journey.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          {/* List item */}
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
                        <ListItem title="Study Abroad Counseling">
              Personalized guidance for global education with one-on-one counseling sessions, career assessment, and university shortlisting based on your profile.
            </ListItem>
            <ListItem title="Scholarships & Loans">
              End-to-end help with funding your dream through scholarship matching, loan assistance, financial planning, and award optimization.
            </ListItem>
            <ListItem title="Visa & Pre-Departure">
              Be fully prepared before takeoff with complete documentation support, mock interviews, embassy liaison, and travel planning assistance.
            </ListItem>
            <ListItem title="Global Education">
              Your Dreams, Our Mission with 100+ Global University Partnerships, 97% Visa Success Rate, and Personalized Mentorship by Experts.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  );
};

export default Services;
