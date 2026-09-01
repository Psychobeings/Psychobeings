import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      title: "Individual Therapy for Adults",
      description:
        "Personalized evidence-based support for anxiety, stress, self-esteem, executive burnout, life transitions, and personal growth.",
      // Replace with your assets or images in public/assets/
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600",
      link: "/services#adult-therapy",
    },
    {
      title: "Child & Adolescent Therapy",
      description:
        "Compassionate psychological support addressing emotional regulation, academic stress, behavioral dynamics, and self-identity.",
      image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=600",
      link: "/services#child-adolescent",
    },
    {
      title: "Corporate Wellness Programs",
      description:
        "Tailored organizational strategies, executive coaching, and mental health initiatives designed to prevent burnout and foster resilience.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600",
      link: "/services#corporate-wellness",
    },
    {
      title: "Workshops & Psychoeducation",
      description:
        "Interactive group sessions focusing on stress mastery, mindfulness practices, emotional literacy, and psychological well-being.",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=600",
      link: "/services#workshops",
    },
  ];

  return (
    <section className="bg-[#F2F7F7] text-[#1F3A3D] py-16 sm:py-20 px-6 sm:px-8 lg:px-12 font-sans">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <p className="text-[#1C7C83] text-xs font-semibold tracking-widest uppercase">
            SERVICES
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1F3A3D] tracking-tight">
            Counselling & Wellness Services for <br className="hidden sm:inline" />
            <span className="italic font-normal text-[#1C7C83]">Every Stage of Life</span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto pt-1">
            Evidence-based clinical therapy, specialized youth support, and comprehensive organizational wellness solutions.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-[2rem] border border-[#1C7C83]/15 overflow-hidden shadow-sm hover:shadow-md hover:border-[#1C7C83]/30 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Card Content Top */}
              <div>
                {/* Image Container */}
                <div className="h-48 sm:h-52 w-full overflow-hidden bg-[#E6F0F0]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover filter contrast-[1.02] hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Text Content */}
                <div className="p-6 sm:p-7 space-y-3">
                  <h3 className="text-xl font-serif font-bold text-[#1F3A3D] leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Card Action Link Bottom */}
              <div className="px-6 pb-6 pt-2">
                <a
                  href={service.link}
                  className="inline-flex items-center gap-1.5 text-[#1C7C83] hover:text-[#135B60] font-semibold text-xs sm:text-sm tracking-wide transition-colors group"
                >
                  Learn More
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}