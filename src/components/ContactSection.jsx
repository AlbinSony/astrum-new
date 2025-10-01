import React from "react";
import Container from "./Container";
import FadeIn from "./FadeIn";
import Button from "./Button";
import Offices from "./Offices";

const ContactSection = () => {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn className="-mx-6 rounded-4xl bg-neutral-950 px-6 py-20 sm:mx-0 sm:py-32 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl font-medium text-white [text-wrap:balance] sm:text-4xl">
            Not sure where to begin?
          </h2>
          <p className="mt-6 text-lg text-neutral-300">
            Our expert counselors are here to guide you through every step of your journey.
          </p>
          <div className="mt-8 flex justify-center">
            <Button href={"/contact"} invert>
              Speak to an Expert
            </Button>
          </div>
          <div className="mt-12 border-t border-white/10 pt-10">
            <h3 className="font-display text-base font-semibold text-white mb-6">
              Ready to Begin Your Journey?
            </h3>
            <p className="text-neutral-300 mb-8">
              Don&apos;t wait for tomorrow. Your global future starts with a single conversation today.
            </p>
            <Button href={"/contact"} invert>
              Request Callback
            </Button>
          </div>
        </div>
      </FadeIn>
    </Container>
  );
};

export default ContactSection;
