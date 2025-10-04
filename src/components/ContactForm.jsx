import React from "react";
import FadeIn from "./FadeIn";
import TextInput from "./TextInput";
import RadioInput from "./RadioInput";
import Button from "./Button";

const ContactForm = () => {
  return (
    <FadeIn>
            <form>
        <h2 className="font-display text-base font-semibold text-primary-900">
          Send us a Message
        </h2>
        <p className="mt-2 text-sm text-neutral-600">
          Fill out the form below and we&apos;ll get back to you within 24 hours
        </p>
        <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
          <TextInput label="First Name" name="firstName" autoComplete="given-name" placeholder="Enter your first name" />
          <TextInput label="Last Name" name="lastName" autoComplete="family-name" placeholder="Enter your last name" />
          <TextInput
            label="Email Address"
            type="email"
            name="email"
            autoComplete="email"
            placeholder="Enter your email"
          />
          <TextInput label="Phone Number" type="tel" name="phone" autoComplete="tel" placeholder="Enter your phone number" />
          <TextInput
            label="Preferred Country"
            name="country"
            autoComplete="country"
            placeholder="e.g., Canada, Australia, UK"
          />
          <TextInput label="Message" name="message" placeholder="Tell us about your study abroad goals..." />
        </div>
        <Button type="submit" className="mt-10">
          Send Message
        </Button>
      </form>
    </FadeIn>
  );
};

export default ContactForm;
