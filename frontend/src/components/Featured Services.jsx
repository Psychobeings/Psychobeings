import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

const FeaturedServices = ({ SERVICES }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#F7FCFC] to-[#EDF8F8] py-24">

      {/* Background Decorations */}
      <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-teal-200/30 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-100/40 blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-16">

          <div className="max-w-3xl">

            <div className="inline-flex items-center gap-2 rounded-full border border-teal-100 bg-teal-50 px-4 py-2 text-sm font-semibold text-[#097F7F]">
              <Sparkles className="h-4 w-4" />
              Featured Clinical Services
            </div>

            <h2 className="mt-6 text-4xl lg:text-5xl font-bold leading-tight text-slate-900">
              Therapy designed for
              <span className="block text-[#097F7F]">
                every stage of your journey.
              </span>
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Explore evidence-based therapy services tailored to support
              emotional well-being, personal growth, resilience, and healthier
              relationships in a safe and confidential environment.
            </p>

          </div>

          <Link
            to="/services"
            className="group inline-flex items-center gap-3 rounded-full bg-[#097F7F] px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            Explore All Services
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

        </div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {SERVICES.slice(0, 3).map((service, index) => (

            <div
              key={service.id}
              className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-3 hover:border-[#097F7F]/30 hover:shadow-2xl"
            >

              {/* Hover Glow */}
              <div className="absolute right-0 top-0 h-36 w-36 rounded-full bg-teal-100 opacity-0 blur-3xl transition duration-500 group-hover:opacity-80"></div>

              {/* Featured Badge */}
              {index === 0 && (
                <div className="absolute right-5 top-5 rounded-full bg-[#097F7F] px-3 py-1 text-xs font-semibold text-white">
                  Most Popular
                </div>
              )}

              {/* Category */}

              <span className="inline-flex rounded-full bg-teal-50 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-[#097F7F]">
                {service.category}
              </span>

              {/* Title */}

              <h3 className="mt-6 text-2xl font-bold text-slate-900">
                {service.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {service.shortDesc}
              </p>

              {/* Benefits */}

              <div className="mt-8 space-y-4">

                {service.benefits.slice(0, 3).map((benefit, i) => (

                  <div
                    key={i}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-[#097F7F]" />

                    <p className="text-sm text-slate-700">
                      {benefit}
                    </p>

                  </div>

                ))}

              </div>

              {/* Footer */}

              <div className="mt-10 flex items-center justify-between border-t border-slate-100 pt-6">

                <div>

                  <p className="text-3xl font-bold text-slate-900">
                    ₹{service.price}
                  </p>

                  <p className="mt-1 text-sm text-slate-500">
                    {service.durationMinutes} Minutes
                  </p>

                </div>

                <Link
                  to={`/booking?service=${service.id}`}
                  className="group flex h-12 w-12 items-center justify-center rounded-full bg-[#097F7F] text-white transition-all duration-300 hover:scale-110 hover:shadow-lg"
                >
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default FeaturedServices;