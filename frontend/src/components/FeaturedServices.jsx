import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  HeartHandshake,
  Building2,
  Sparkles,
  CheckCircle2,
  Clock,
  UserCheck,
} from "lucide-react";

const featuredServices = [
  {
    id: 1,
    icon: <HeartHandshake className="h-6 w-6 text-[#0a7272]" />,
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
    isFeatured: true,
  },
  {
    id: 2,
    icon: <UserCheck className="h-6 w-6 text-[#0a7272]" />,
    badge: "For Young Minds",
    category: "Therapy",
    title: "Child & Adolescent",
    description:
      "Compassionate support for children and adolescents experiencing emotional, academic, behavioural and social challenges.",
    concerns: [
      "School Stress",
      "Emotional Regulation",
      "Confidence Building",
      "Peer Relationships",
    ],
    price: "₹1,800",
    duration: "50 Minutes",
    button: "Learn More",
    link: "/services",
    isFeatured: false,
  },
  {
    id: 3,
    icon: <Building2 className="h-6 w-6 text-[#0a7272]" />,
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
    isFeatured: false,
  },
];

const FeaturedServices = () => {
  return (
    <section className="relative overflow-hidden bg-slate-50/60 py-20 lg:py-28">
      {/* Ambient Radial Background Accents */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 -top-20 h-96 w-96 rounded-full bg-[#0a7272]/10 blur-3xl" />
        <div className="absolute -right-20 bottom-10 h-[30rem] w-[30rem] rounded-full bg-teal-100/60 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#cbe5e4] bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#0a7272] shadow-xs backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5 text-[#0a7272]" />
              Featured Services
            </span>

            <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight text-[#0d4f50] sm:text-4xl lg:text-5xl">
              Therapy that meets you{" "}
              <span className="bg-gradient-to-r from-[#0a7272] to-[#0d5c5e] bg-clip-text text-transparent">
                exactly where you are.
              </span>
            </h2>

            <p className="mt-4 text-base leading-relaxed text-[#4c6162] sm:text-lg">
              Whether you're seeking personal support, therapy for your child,
              or wellbeing initiatives for your workplace, our services are
              designed with compassion, evidence-based care, and lasting growth
              in mind.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              to="/services"
              className="group inline-flex items-center gap-2.5 rounded-full bg-[#0a7272] px-6 py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0d5c5e] hover:shadow-xl"
            >
              View All Services
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="grid gap-8 lg:grid-cols-3 items-stretch">
          {featuredServices.map((service) => (
            <div
              key={service.id}
              className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border bg-white p-7 sm:p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl ${
                service.isFeatured
                  ? "border-[#0a7272]/40 shadow-lg ring-1 ring-[#0a7272]/20"
                  : "border-[#d7ecec] shadow-sm hover:border-[#0a7272]/30"
              }`}
            >
              {/* Subtle top hover gradient */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-[#0a7272] to-[#0d5c5e] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div>
                {/* Top Badge & Category */}
                <div className="flex items-center justify-between gap-2">
                  <span className="rounded-full bg-[#eaf6f6] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#0a7272]">
                    {service.badge}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#6a7d7e]">
                    {service.category}
                  </span>
                </div>

                {/* Header Icon + Title */}
                <div className="mt-6 flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#eaf6f6] group-hover:bg-[#0a7272] group-hover:text-white transition-colors duration-300">
                    <div className="transition-transform duration-300 group-hover:scale-110">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold leading-snug text-[#0d4f50] group-hover:text-[#0a7272] transition-colors">
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="mt-4 text-sm leading-relaxed text-[#4c6162]">
                  {service.description}
                </p>

                {/* Focus Areas Tag Cloud */}
                <div className="mt-6">
                  <span className="block text-xs font-semibold text-[#0d4f50] uppercase tracking-wider mb-2.5">
                    Common Focus Areas:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {service.concerns.map((item) => (
                      <span
                        key={item}
                        className="inline-flex items-center gap-1.5 rounded-lg bg-[#f0f8f7] px-2.5 py-1.5 text-xs font-medium text-[#0d4f50] transition-colors group-hover:bg-[#e4f3f2]"
                      >
                        <CheckCircle2 className="h-3.5 w-3.5 text-[#0a7272] shrink-0" />
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="mt-8 border-t border-[#e8f2f2] pt-6">
                <div className="flex items-end justify-between">
                  <div>
                    <div className="text-2xl font-extrabold text-[#0d4f50]">
                      {service.price}
                    </div>
                    <div className="flex items-center gap-1 text-xs font-medium text-[#6a7d7e] mt-0.5">
                      <Clock className="h-3.5 w-3.5" />
                      {service.duration}
                    </div>
                  </div>

                  <Link
                    to={service.link}
                    className="inline-flex items-center gap-1.5 rounded-full bg-[#0a7272] px-4 py-2.5 text-xs font-bold text-white shadow-xs transition-all duration-200 hover:bg-[#0d5c5e] hover:shadow-md"
                  >
                    {service.button}
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Call to Action Section */}
        <div className="relative mt-16 overflow-hidden rounded-3xl bg-gradient-to-r from-[#0a7272] via-[#0d5c5e] to-[#0f5f61] p-8 sm:p-12 text-center text-white shadow-xl">
          {/* Subtle Grid Accent */}
          <div className="pointer-events-none absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />

          <div className="relative z-10 mx-auto max-w-3xl">
            <h3 className="font-serif text-2xl font-bold sm:text-3xl lg:text-4xl">
              Ready to begin your healing journey?
            </h3>

            <p className="mt-4 text-sm leading-relaxed text-emerald-50/90 sm:text-base">
              Whether you're seeking individual therapy, child & adolescent
              support, or wellbeing programmes for your organisation, we're here
              to help you take the first step.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                to="/booking"
                className="w-full sm:w-auto rounded-full bg-white px-7 py-3.5 text-sm font-bold text-[#0a7272] shadow-md transition-all hover:bg-emerald-50 hover:scale-[1.02]"
              >
                Book a Consultation
              </Link>

              <Link
                to="/services"
                className="w-full sm:w-auto rounded-full border border-white/40 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-xs transition-all hover:bg-white/20 hover:border-white"
              >
                Explore All Services
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FeaturedServices;