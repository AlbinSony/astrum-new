import Clients from "@/components/Clients";
import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import SuccessStories from "@/components/SuccessStories";
import Button from "@/components/Button";
import logoPhobiaDark from "@/images/clients/phobia/logo-dark.svg";

export default function Home() {
  return (
    <main className="text-black">
      <Container className="mt-24 sm:mt-32">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Your Global Future Begins Here
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            We guide ambitious Indian students to top global universities with mentorship, funding &amp; visa success.
          </p>
          <div className="mt-10">
            <Button href="/contact" className="inline-flex rounded-full bg-neutral-950 px-8 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800">
              Get Free Counseling
            </Button>
          </div>
        </FadeIn>
      </Container>

      {/* Stats Section */}
      <Container className="mt-24 sm:mt-32">
        <FadeIn>
          <div className="rounded-3xl bg-neutral-50 px-6 py-16 sm:px-12 sm:py-20">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-display text-2xl font-medium text-neutral-950 sm:text-3xl">
                Global Education<br />
                <span className="text-lg text-neutral-600">Your Dreams, Our Mission</span>
              </h2>
              <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
                <div className="text-center">
                  <div className="text-3xl font-bold text-neutral-950">100+</div>
                  <div className="text-sm text-neutral-600">Global University Partnerships</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-neutral-950">97%</div>
                  <div className="text-sm text-neutral-600">Visa Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-neutral-950">Expert</div>
                  <div className="text-sm text-neutral-600">Personalized Mentorship</div>
                </div>
              </div>
              <div className="mt-12 rounded-2xl bg-neutral-950 px-6 py-8 text-white">
                <div className="mb-4">
                  <span className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white">
                    NEW LAUNCH
                  </span>
                </div>
                <h3 className="font-display text-xl font-medium">
                  Introducing India&apos;s Most Transparent Scholarship Platform
                </h3>
                <p className="mt-2 text-neutral-300">Apply. Compare. Get Funded.</p>
                <div className="mt-6">
                  <Button href="/scholarships" invert>
                    Explore Scholarships
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>

      <Services />
      <SuccessStories />
      <Clients />
      <ContactSection />
    </main>
  );
}
