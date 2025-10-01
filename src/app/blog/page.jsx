import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import PageIntro from "@/components/PageIntro";
import { FaCalendarAlt, FaClock, FaUser, FaArrowRight } from "react-icons/fa";

export const metadata = {
  title: "Blog & Insights",
  description: "Stay updated with the latest trends, opportunities, and insights in global education.",
};

const categories = [
  { name: "Popular Destinations", count: 24, color: "bg-blue-100 text-blue-800" },
  { name: "Career-Centric Courses", count: 18, color: "bg-green-100 text-green-800" },
  { name: "Visa Updates", count: 12, color: "bg-purple-100 text-purple-800" },
  { name: "Scholarship Alerts", count: 32, color: "bg-orange-100 text-orange-800" }
];

const articles = [
  {
    title: "Top 10 Universities in Canada for Indian Students 2025",
    category: "Popular Destinations",
    categoryColor: "bg-blue-100 text-blue-800",
    excerpt: "Discover the best Canadian universities offering excellent programs and scholarships for Indian students.",
    author: "Naveen Jose",
    date: "November 10, 2024",
    readTime: "5 min read",
    image: "/api/placeholder/400/250"
  },
  {
    title: "AI and Machine Learning: The Future of Career Opportunities",
    category: "Career-Centric Courses", 
    categoryColor: "bg-green-100 text-green-800",
    excerpt: "Explore how AI is reshaping industries and why it's the perfect time to pursue AI-related courses abroad.",
    author: "Manu Mohan",
    date: "November 8, 2024", 
    readTime: "7 min read",
    image: "/api/placeholder/400/250"
  },
  {
    title: "New UK Student Visa Rules: What You Need to Know",
    category: "Visa Updates",
    categoryColor: "bg-purple-100 text-purple-800",
    excerpt: "Latest updates on UK student visa requirements and application process for 2025 intake.",
    author: "Immigration Team",
    date: "November 5, 2024",
    readTime: "4 min read", 
    image: "/api/placeholder/400/250"
  },
  {
    title: "€15,000 DAAD Scholarship Alert: Applications Open",
    category: "Scholarship Alerts",
    categoryColor: "bg-orange-100 text-orange-800", 
    excerpt: "Don't miss this opportunity to study in Germany with full funding. Application deadline approaching fast!",
    author: "Scholarship Team",
    date: "November 3, 2024",
    readTime: "3 min read",
    image: "/api/placeholder/400/250"
  }
];

const trendingTopics = [
  "AI & Climate Tech Courses",
  "Emerging Destinations", 
  "Industry-Focused Programs"
];

const trendingDescriptions = [
  "Rising demand for programs in Artificial Intelligence, Climate Science, and Sustainable Technology",
  "Germany, France, and Ireland gaining popularity as study abroad destinations",
  "High demand for Data Science, ESG, Digital Policy, and Mental Health specializations"
];

const BlogPage = () => {
  return (
    <>
      <PageIntro eyebrow="Blog & Insights" title="Stay updated with the latest trends, opportunities, and insights in global education.">
        <p>
          Expert guidance, practical tips, and the latest updates to help you navigate your study abroad journey successfully.
        </p>
      </PageIntro>

      {/* Categories */}
      <Container className="mt-16">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {categories.map((category, index) => (
            <FadeIn key={category.name}>
              <div className="text-center p-6 rounded-2xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="text-3xl font-bold text-neutral-950">{category.count}</div>
                <div className={`mt-2 inline-flex rounded-full px-3 py-1 text-xs font-medium ${category.color}`}>
                  {category.name}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>

      {/* Latest Articles */}
      <Container className="mt-24">
        <FadeIn>
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              Latest Articles
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              Expert insights and practical guidance for your study abroad journey
            </p>
          </div>
        </FadeIn>

        <div className="mt-10 space-y-8">
          {articles.map((article, index) => (
            <FadeIn key={article.title}>
              <article className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5 hover:shadow-xl transition-shadow">
                <div className="flex gap-6">
                  <div className="aspect-[4/3] w-48 rounded-xl bg-neutral-200 flex items-center justify-center flex-shrink-0">
                    <span className="text-neutral-500 text-sm">Image</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${article.categoryColor}`}>
                        {article.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-neutral-950 mb-2">
                      {article.title}
                    </h3>
                    
                    <p className="text-neutral-600 mb-4 line-clamp-2">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-neutral-500 space-x-4">
                        <div className="flex items-center">
                          <FaUser className="mr-1 h-3 w-3" />
                          <span>{article.author}</span>
                        </div>
                        <div className="flex items-center">
                          <FaCalendarAlt className="mr-1 h-3 w-3" />
                          <span>{article.date}</span>
                        </div>
                        <div className="flex items-center">
                          <FaClock className="mr-1 h-3 w-3" />
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                      <button className="flex items-center text-neutral-950 font-medium hover:text-neutral-700 transition-colors">
                        Read More
                        <FaArrowRight className="ml-2 h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </Container>

      {/* Trending Section */}
      <Container className="mt-24">
        <FadeIn>
          <div className="rounded-3xl bg-neutral-950 px-6 py-20 sm:px-6 sm:py-32 md:px-12">
            <div className="mx-auto max-w-4xl">
              <div className="max-w-xl">
                <h2 className="font-display text-3xl font-medium text-white [text-wrap:balance] sm:text-4xl">
                  TRENDING NOW
                </h2>
                <p className="mt-6 text-lg text-neutral-300">
                  What's Going to be Hot in 2025?
                </p>
                <p className="mt-2 text-neutral-400">
                  Stay ahead of the curve with these emerging trends
                </p>
              </div>
              
              <div className="mt-12 space-y-6">
                {trendingTopics.map((topic, index) => (
                  <div key={topic} className="border-l-4 border-white pl-6">
                    <h3 className="font-semibold text-white text-lg">{topic}</h3>
                    <p className="mt-2 text-neutral-300">{trendingDescriptions[index]}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>

      {/* Write for Us & Newsletter */}
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="grid gap-8 lg:grid-cols-2">
          <FadeIn>
            <div className="rounded-2xl bg-neutral-50 p-8">
              <h3 className="font-display text-2xl font-medium text-neutral-950">
                Want to Write for Us?
              </h3>
              <p className="mt-4 text-neutral-600">
                Share your study abroad experience and help fellow students navigate their journey.
              </p>
              <button className="mt-6 inline-flex rounded-full bg-neutral-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800">
                Become a Contributor
              </button>
            </div>
          </FadeIn>
          
          <FadeIn>
            <div className="rounded-2xl bg-neutral-50 p-8">
              <h3 className="font-display text-2xl font-medium text-neutral-950">
                Never Miss an Update
              </h3>
              <p className="mt-4 text-neutral-600">
                Subscribe to our newsletter for the latest scholarship alerts, visa updates, and study abroad insights.
              </p>
              <div className="mt-6 flex gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 rounded-lg border border-neutral-300 px-4 py-2 focus:border-neutral-950 focus:outline-none"
                />
                <button className="rounded-lg bg-neutral-950 px-6 py-2 text-sm font-semibold text-white hover:bg-neutral-800 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </>
  );
};

export default BlogPage;
