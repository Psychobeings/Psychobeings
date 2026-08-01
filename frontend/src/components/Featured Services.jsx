import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  HeartHandshake,
  Building2,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

const featuredServices = [
  {
    id: 1,
    icon: <HeartHandshake size={22} />,
    badge: "Most Popular",
    category: "Therapy",
    title: "Individual Therapy",
    description:
      "A confidential one-on-one therapeutic space to navigate anxiety, stress, burnout, grief, emotional overwhelm, and personal growth.",
    concerns: [
      "Anxiety & Overthinking",
      "Stress & Burnout",
      "Emotional Regulation",
      "Self-esteem & Confidence",
    ],
    price: "₹1,500",
    duration: "50 Minutes",
    button: "Book Session",
    link: "/contact",
  },
  {
    id: 2,
    icon: <HeartHandshake size={22} />,
    badge: "For Young Minds",
    category: "Therapy",
    title: "Child & Adolescent Therapy",
    description:
      "Compassionate support for children and adolescents experiencing emotional, academic, behavioural and social challenges.",
    concerns: [
      "School Stress",
      "Emotional Regulation",
      "Confidence Building",
      "Family & Peer Relationships",
    ],
    price: "₹1,800",
    duration: "50 Minutes",
    button: "Learn More",
    link: "/services",
  },
  {
    id: 3,
    icon: <Building2 size={22} />,
    badge: "For Organisations",
    category: "Programs",
    title: "Corporate Wellness",
    description:
      "Evidence-based wellness initiatives designed to improve employee wellbeing, resilience and healthier workplace culture.",
    concerns: [
      "Stress Management",
      "Burnout Prevention",
      "Work-Life Balance",
      "Team Wellbeing",
    ],
    price: "Custom",
    duration: "Flexible",
    button: "Enquire Now",
    link: "/contact",
  },
];

const FeaturedServices = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#ffffff] via-[#f7fcfb] to-[#edf8f7] py-24">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-[#0a7272]/10 blur-3xl"></div>
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-teal-100 blur-3xl opacity-70"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-16 flex flex-col lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#cbe5e4] bg-white px-4 py-2 text-sm font-semibold text-[#0a7272] shadow-sm">
              <Sparkles size={16} />
              FEATURED SERVICES
            </span>

            <h2 className="mt-6 text-4xl font-bold leading-tight text-[#0d4f50] md:text-5xl">
              Therapy that meets you
              <span className="block text-[#0a7272]">
                exactly where you are.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#4c6162]">
              Whether you're seeking personal support, therapy for your child,
              or wellbeing initiatives for your workplace, our services are
              designed with compassion, evidence-based care, and lasting growth
              in mind.
            </p>
          </div>

          <Link
            to="/services"
            className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[#0a7272] px-7 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#0d5c5e] hover:shadow-xl"
          >
            View All Services
            <ArrowRight
              size={18}
              className="transition group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-8 lg:grid-cols-3">
          {featuredServices.map((service) => (
            <div
              key={service.id}
              className="group relative overflow-hidden rounded-[2rem] border border-[#d7ecec] bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#0a7272]/30 hover:shadow-2xl"
            >
              {/* Hover Background */}
              <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[#0a7272]/5 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Badge */}
              <span className="inline-flex rounded-full bg-[#eaf6f6] px-4 py-2 text-xs font-semibold uppercase tracking-widest text-[#0a7272]">
                {service.badge}
              </span>

              {/* Icon */}
              <div className="mt-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0a7272] text-white shadow-lg">
                {service.icon}
              </div>

              {/* Category */}
              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.25em] text-[#0a7272]">
                {service.category}
              </p>

              {/* Title */}
              <h3 className="mt-3 text-2xl font-bold text-[#0d4f50]">
                {service.title}
              </h3>

              {/* Description */}
              <p className="mt-4 text-base leading-7 text-[#4c6162]">
                {service.description}
              </p>

              {/* Concerns */}
              <div className="mt-8 space-y-3">
                {service.concerns.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-xl bg-[#f7fcfb] p-3"
                  >
                    <CheckCircle2
                      size={18}
                      className="mt-0.5 shrink-0 text-[#0a7272]"
                    />
                    <span className="text-sm leading-6 text-[#4c6162]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="mt-10 flex items-center justify-between border-t border-[#e8f2f2] pt-6">
                <div>
                  <p className="text-2xl font-bold text-[#0d4f50]">
                    {service.price}
                  </p>
                  <p className="text-sm text-[#6a7d7e]">
                    {service.duration}
                  </p>
                </div>

                <Link
                  to={service.link}
                  className="group inline-flex items-center gap-2 rounded-full bg-[#0a7272] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#0d5c5e]"
                >
                  {service.button}
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 rounded-[2rem] bg-gradient-to-r from-[#0a7272] to-[#0d5c5e] p-10 text-center text-white shadow-xl">
          <h3 className="text-3xl font-bold">
            Ready to begin your healing journey?
          </h3>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/90">
            Whether you're seeking individual therapy, child & adolescent
            support, or wellbeing programmes for your organisation, we're here
            to help you take the first step.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/booking"
              className="rounded-full bg-white px-8 py-4 font-semibold text-[#0a7272] transition hover:scale-105"
            >
              Book a Consultation
            </Link>

            <Link
              to="/services"
              className="rounded-full border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-[#0a7272]"
            >
              Explore All Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;