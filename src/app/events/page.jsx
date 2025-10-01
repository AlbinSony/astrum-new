import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import PageIntro from "@/components/PageIntro";
import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaUsers, FaVideo, FaBuilding } from "react-icons/fa";

export const metadata = {
  title: "Events",
  description: "Join our events to kickstart your study abroad journey with expert guidance and university interactions.",
};

const upcomingEvents = [
  {
    title: "Study Abroad Expo",
    description: "Meet representatives from 50+ global universities",
    date: "November 18, 2024",
    time: "10:00 AM - 6:00 PM", 
    location: "Cochin",
    type: "Physical",
    icon: FaBuilding,
    color: "bg-blue-50 text-blue-700 border-blue-200"
  },
  {
    title: "Virtual Workshop - Scholarships Decoded",
    description: "Learn insider secrets to winning scholarships", 
    date: "November 24, 2024",
    time: "2:00 PM - 4:00 PM",
    location: "Online",
    type: "Virtual", 
    icon: FaVideo,
    color: "bg-green-50 text-green-700 border-green-200"
  },
  {
    title: "1-on-1 Zoom Days",
    description: "Personal counseling sessions with our experts",
    date: "Every Friday", 
    time: "9:00 AM - 5:00 PM",
    location: "Online",
    type: "Virtual",
    icon: FaUsers,
    color: "bg-purple-50 text-purple-700 border-purple-200"
  }
];

const eventBenefits = [
  "Meet University Representatives directly",
  "Free Profile Evaluations on the spot", 
  "On-spot Application Support",
  "Scholarship guidance sessions",
  "Visa counseling workshops", 
  "Networking with fellow students"
];

const stats = [
  { label: "Students Attended", value: "2000+" },
  { label: "Events Organized", value: "50+" }
];

const pastEvents = [
  { title: "Event 1", image: "/api/placeholder/300/200" },
  { title: "Event 2", image: "/api/placeholder/300/200" }, 
  { title: "Event 3", image: "/api/placeholder/300/200" },
  { title: "Event 4", image: "/api/placeholder/300/200" },
  { title: "Event 5", image: "/api/placeholder/300/200" },
  { title: "Event 6", image: "/api/placeholder/300/200" }
];

export default function Events() {
  return (
    <>
      <PageIntro eyebrow="Upcoming Events" title="Join our events to kickstart your study abroad journey with expert guidance and university interactions.">
        <p>
          Connect with university representatives, get expert counseling, and take the first step towards your global education goals.
        </p>
      </PageIntro>

      {/* Don't Miss Out Section */}
      <Container className="mt-16">
        <FadeIn>
          <div className="max-w-2xl">
            <h2 className="font-display text-2xl font-medium tracking-tight text-neutral-950 sm:text-3xl lg:text-4xl">
              Don&apos;t Miss Out
            </h2>
            <p className="mt-4 text-base sm:text-lg text-neutral-600">
              Mark your calendar for these exciting events
            </p>
          </div>
        </FadeIn>

        <div className="mt-10 space-y-8">
          {upcomingEvents.map((event, index) => (
            <FadeIn key={event.title}>
              <div className="rounded-2xl bg-white p-4 sm:p-6 shadow-lg ring-1 ring-gray-900/5 hover:shadow-xl transition-shadow">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-neutral-950 text-white flex-shrink-0">
                      <event.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2">
                        <h3 className="text-lg sm:text-xl font-semibold text-neutral-950">
                          {event.title}
                        </h3>
                        <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium border ${event.color} self-start`}>
                          {event.type}
                        </span>
                      </div>
                      <p className="text-sm sm:text-base text-neutral-600 mb-4">
                        {event.description}
                      </p>
                      
                      <div className="space-y-2">
                        <div className="flex items-center text-xs sm:text-sm text-neutral-700">
                          <FaCalendarAlt className="mr-2 h-3 w-3 sm:h-4 sm:w-4 text-neutral-400 flex-shrink-0" />
                          <span className="truncate">{event.date}</span>
                        </div>
                        
                        <div className="flex items-center text-xs sm:text-sm text-neutral-700">
                          <FaClock className="mr-2 h-3 w-3 sm:h-4 sm:w-4 text-neutral-400 flex-shrink-0" />
                          <span className="truncate">{event.time}</span>
                        </div>
                        
                        <div className="flex items-center text-xs sm:text-sm text-neutral-700">
                          <FaMapMarkerAlt className="mr-2 h-3 w-3 sm:h-4 sm:w-4 text-neutral-400 flex-shrink-0" />
                          <span className="truncate">{event.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className="w-full sm:w-auto sm:ml-6 bg-neutral-950 text-white px-4 sm:px-6 py-2 rounded-lg hover:bg-neutral-800 transition-colors text-sm sm:text-base font-medium">
                    Register Now
                  </button>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>

      {/* Why Attend Section */}
      <Container className="mt-24">
        <FadeIn>
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              Why Attend Our Events?
            </h2>
          </div>
        </FadeIn>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {eventBenefits.map((benefit, index) => (
            <FadeIn key={benefit}>
              <div className="rounded-xl bg-neutral-50 p-6">
                <div className="flex items-center">
                  <div className="mr-3 h-2 w-2 rounded-full bg-neutral-950" />
                  <span className="font-medium text-neutral-950">{benefit}</span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 gap-8 text-center">
          {stats.map((stat, index) => (
            <FadeIn key={stat.label}>
              <div>
                <div className="text-4xl font-bold text-neutral-950">{stat.value}</div>
                <div className="text-sm text-neutral-600">{stat.label}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>

      {/* Past Events Gallery */}
      <Container className="mt-24">
        <FadeIn>
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              Past Events Gallery
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              Glimpses from our successful events
            </p>
          </div>
        </FadeIn>

        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3">
          {pastEvents.map((event, index) => (
            <FadeIn key={event.title}>
              <div className="aspect-[4/3] rounded-xl bg-neutral-200 flex items-center justify-center">
                <span className="text-neutral-500 font-medium">{event.title}</span>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>

      {/* Final CTA */}
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <div className="rounded-3xl bg-neutral-950 px-6 py-20 sm:px-6 sm:py-32 md:px-12">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="font-display text-3xl font-medium text-white [text-wrap:balance] sm:text-4xl">
                Limited Slots Available
              </h2>
              <p className="mt-6 text-lg text-neutral-300">
                Reserve your seat now and take the first step towards your global education journey.
              </p>
              <div className="mt-8">
                <a
                  href="/contact"
                  className="inline-flex rounded-full bg-white px-8 py-3 text-sm font-semibold text-neutral-950 transition hover:bg-neutral-200"
                >
                  Reserve Your Seat
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </>
  );
}