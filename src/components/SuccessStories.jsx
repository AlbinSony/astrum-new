import Container from "./Container";
import FadeIn from "./FadeIn";
import { FaQuoteLeft, FaUser } from "react-icons/fa";

const testimonials = [
  {
    name: "Aishwarya Nair",
    degree: "MSc Computer Science", 
    country: "Germany",
    image: "/api/placeholder/80/80",
    quote: "Astrum guided me like family. From university selection to visa approval, every step was seamless!"
  },
  {
    name: "Rahul Sharma", 
    degree: "MBA",
    country: "Canada", 
    image: "/api/placeholder/80/80",
    quote: "Got 80% scholarship through their portal. The mentorship was exceptional throughout my journey."
  },
  {
    name: "Priya Menon",
    degree: "MS Data Science",
    country: "Australia",
    image: "/api/placeholder/80/80", 
    quote: "From application to landing, they were with me every step. Highly recommended!"
  }
];

const SuccessStories = () => {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn>
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
            Success Stories
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            Hear from students who achieved their dreams
          </p>
        </div>
      </FadeIn>

      <div className="mt-16 grid gap-8 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <FadeIn key={testimonial.name}>
            <div className="rounded-3xl bg-neutral-50 p-8">
              <FaQuoteLeft className="h-6 w-6 text-neutral-300 mb-6" />
              <blockquote className="text-lg text-neutral-950 mb-8">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-neutral-200 flex items-center justify-center">
                  <FaUser className="h-6 w-6 text-neutral-400" />
                </div>
                <div>
                  <div className="font-semibold text-neutral-950">{testimonial.name}</div>
                  <div className="text-sm text-neutral-600">{testimonial.degree}</div>
                  <div className="text-sm text-neutral-500">{testimonial.country}</div>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </Container>
  );
};

export default SuccessStories;