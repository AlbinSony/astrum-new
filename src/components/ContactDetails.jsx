import React from "react";
import FadeIn from "./FadeIn";
import Offices from "./Offices";
import Border from "./Border";
import Link from "next/link";
import SocialMedia from "./SocialMedia";

const ContactDetails = () => {
  return (
    <FadeIn>
      <h2 className="font-display text-base font-semibold text-primary-900">
        Our Offices
      </h2>
      <p className="mt-6 text-base text-primary-700">
        Prefer doing business in person? We don&apos;t mind that either.
      </p>
      <Offices className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2" />
      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-primary-900">
          Email us
        </h2>
        <dl className="mt-6 grid grid-cols-1 gap-8 text-sm sm:grid-cols-2">
          {[
            ["Careers", "careers@astrum.com"],
            ["Press", "press@astrum.com"],
          ].map(([label, email]) => (
            <div key={email}>
              <dt className="font-semibold text-primary-900">{label}</dt>
              <dd>
                <Link
                  href={`mailto:${email}`}
                  className="text-primary-700 hover:text-primary-900"
                >
                  {email}
                </Link>
              </dd>
            </div>
          ))}
        </dl>
      </Border>
      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-primary-900">
          Follow us
        </h2>
        <SocialMedia className="mt-6" />
      </Border>
    </FadeIn>
  );
};

export default ContactDetails;
