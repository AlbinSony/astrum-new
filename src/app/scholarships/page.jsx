import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import PageIntro from "@/components/PageIntro";
import { FaSearch, FaGlobe, FaDollarSign, FaCalendarAlt, FaUsers, FaAward, FaStar } from "react-icons/fa";

export const metadata = {
  title: "Scholarship Portal",
  description: "India's First Transparent Scholarship Finder. Thousands of verified scholarships. No false promises.",
};

const scholarships = [
  {
    type: "Merit-based",
    amount: "₹15,00,000",
    title: "Merit Excellence Scholarship",
    university: "University of Toronto",
    country: "Canada",
    deadline: "March 15, 2025",
    eligibility: "CGPA 8.5+",
    color: "bg-blue-50 text-blue-700 border-blue-200"
  },
  {
    type: "Leadership",
    amount: "₹20,00,000", 
    title: "Global Leaders Program",
    university: "University of Melbourne",
    country: "Australia",
    deadline: "February 28, 2025",
    eligibility: "Leadership Experience",
    color: "bg-green-50 text-green-700 border-green-200"
  },
  {
    type: "STEM",
    amount: "₹12,00,000",
    title: "STEM Innovation Grant", 
    university: "Technical University Munich",
    country: "Germany",
    deadline: "April 30, 2025",
    eligibility: "Engineering/CS Background",
    color: "bg-purple-50 text-purple-700 border-purple-200"
  },
  {
    type: "Diversity",
    amount: "₹18,00,000",
    title: "Diversity & Inclusion Award",
    university: "King's College London", 
    country: "UK",
    deadline: "March 31, 2025",
    eligibility: "Underrepresented Groups",
    color: "bg-orange-50 text-orange-700 border-orange-200"
  }
];

const stats = [
  { label: "Total Disbursed", value: "₹3.2 Cr", icon: FaDollarSign },
  { label: "Students Funded", value: "500+", icon: FaUsers },
  { label: "Success Rate", value: "85%", icon: FaStar },
  { label: "Partner Universities", value: "100+", icon: FaAward }
];

export default function Scholarships() {
  return (
    <>
      <PageIntro eyebrow="SCHOLARSHIP PORTAL" title="India's First Transparent Scholarship Finder">
        <p>Thousands of verified scholarships. No false promises.</p>
      </PageIntro>

      {/* Search Section */}
      <Container className="mt-16">
        <FadeIn>
          <div className="mx-auto max-w-2xl">
            <div className="rounded-2xl bg-white p-8 shadow-xl ring-1 ring-gray-900/5">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Search scholarships...
                  </label>
                  <div className="relative">
                    <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <input
                      type="text"
                      placeholder="e.g. Computer Science, Engineering"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-neutral-950 focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Country
                    </label>
                    <select className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-neutral-950 focus:border-transparent">
                      <option>All Countries</option>
                      <option>Canada</option>
                      <option>Australia</option>
                      <option>UK</option>
                      <option>Germany</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Amount
                    </label>
                    <select className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-neutral-950 focus:border-transparent">
                      <option>Any Amount</option>
                      <option>₹10L+</option>
                      <option>₹15L+</option>
                      <option>₹20L+</option>
                    </select>
                  </div>
                </div>
                
                <button className="w-full bg-astrum text-white py-3 px-6 rounded-lg hover:bg-astrum-dark transition-colors">
                  Search
                </button>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>

      {/* Featured Scholarships */}
      <Container className="mt-24">
        <FadeIn>
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              Featured Scholarships
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              Hand-picked opportunities for exceptional students
            </p>
          </div>
        </FadeIn>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {scholarships.map((scholarship, index) => (
            <FadeIn key={scholarship.title}>
              <div className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5 hover:shadow-xl transition-shadow">
                <div className="flex items-start justify-between">
                  <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium border ${scholarship.color}`}>
                    {scholarship.type}
                  </span>
                  <span className="text-2xl font-bold text-primary-900">{scholarship.amount}</span>
                </div>
                
                <h3 className="mt-4 text-xl font-semibold text-primary-900">
                  {scholarship.title}
                </h3>
                
                <p className="mt-2 text-primary-700">
                  {scholarship.university} • {scholarship.country}
                </p>
                
                <div className="mt-4 space-y-2">
                  <div className="flex items-center text-sm text-neutral-700">
                    <FaCalendarAlt className="mr-2 h-4 w-4 text-neutral-400" />
                    <span className="font-medium">Deadline:</span>
                    <span className="ml-1">{scholarship.deadline}</span>
                  </div>
                  
                  <div className="flex items-center text-sm text-neutral-700">
                    <FaUsers className="mr-2 h-4 w-4 text-neutral-400" />
                    <span className="font-medium">Eligibility:</span>
                    <span className="ml-1">{scholarship.eligibility}</span>
                  </div>
                </div>
                
                <button className="mt-6 w-full bg-astrum text-white py-2 px-4 rounded-lg hover:bg-astrum-dark transition-colors">
                  View Details
                </button>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>

      {/* Launch Portal CTA */}
      <Container className="mt-24">
        <FadeIn>
          <div className="rounded-3xl bg-astrum-gradient px-6 py-20 text-center">
            <h2 className="font-display text-3xl font-medium text-white sm:text-4xl">
              Launch Full Portal
            </h2>
            <p className="mt-6 text-lg text-neutral-300">
              Access thousands more scholarships in our comprehensive database
            </p>
            <div className="mt-8">
              <button className="inline-flex rounded-full bg-white px-8 py-3 text-sm font-semibold text-primary-900 transition hover:bg-green-50">
                Explore All Scholarships
              </button>
            </div>
          </div>
        </FadeIn>
      </Container>

      {/* Impact Stats */}
      <Container className="mt-24">
        <FadeIn>
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              Our Impact
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              Numbers that speak for themselves
            </p>
          </div>
        </FadeIn>

        <div className="mt-10 grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <FadeIn key={stat.label}>
              <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-astrum">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="mt-4">
                  <div className="text-3xl font-bold text-primary-900">{stat.value}</div>
                  <div className="text-sm text-primary-700">{stat.label}</div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>

      {/* Final CTA */}
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <div className="rounded-3xl bg-neutral-50 px-6 py-20 sm:px-6 sm:py-32 md:px-12">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="font-display text-3xl font-medium text-neutral-950 [text-wrap:balance] sm:text-4xl">
                Confused about where to apply?
              </h2>
              <p className="mt-6 text-lg text-neutral-600">
                Our scholarship experts will personally guide you through the application process and help you find the best opportunities.
              </p>
              <div className="mt-8">
                <a
                  href="/contact"
                  className="inline-flex rounded-full bg-astrum px-8 py-3 text-sm font-semibold text-white transition hover:bg-astrum-dark"
                >
                  Book Free Mentorship
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </>
  );
}