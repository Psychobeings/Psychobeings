import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function PackagesHome() {
  return (
    <section className="bg-[#F2F7F7] text-[#1F3A3D] py-16 sm:py-20 px-6 sm:px-8 lg:px-12 font-sans">
      <div className="max-w-7xl mx-auto space-y-12">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E6F0F0] border border-[#1C7C83]/20 text-[#1C7C83] text-xs font-semibold tracking-wider uppercase">
            Therapy Packages
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1F3A3D] tracking-tight">
            Consistent Support. <span className="italic font-normal text-[#1C7C83]">Meaningful Progress.</span>
          </h2>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto pt-1">
            Healing is a journey, not a single conversation. Our therapy packages
            are designed to provide structured, ongoing support while making your
            mental wellbeing journey more accessible and affordable.
          </p>
        </div>

        {/* 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">

          {/* Card 1: Individual Therapy */}
          <div className="bg-white rounded-[2rem] border border-[#1C7C83]/15 p-6 sm:p-8 shadow-sm hover:shadow-md hover:border-[#1C7C83]/30 transition-all duration-300 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#E6F0F0] border border-[#1C7C83]/15 flex items-center justify-center text-xl">
                🧠
              </div>

              <h3 className="text-xl font-serif font-bold text-[#1F3A3D]">
                Individual Therapy
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                Personalized one-on-one sessions to support anxiety, stress,
                emotional wellbeing, relationships, and personal growth.
              </p>
            </div>

            <div className="pt-4 border-t border-[#1C7C83]/10">
              <p className="font-semibold text-sm text-[#1C7C83]">
                Packages from ₹4,200
              </p>
            </div>
          </div>

          {/* Card 2: Child & Adolescent Therapy (Most Popular) */}
          <div className="bg-white rounded-[2rem] border-2 border-[#1C7C83] p-6 sm:p-8 shadow-md relative flex flex-col justify-between space-y-6">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#1C7C83] text-white text-[11px] px-4 py-1 rounded-full font-semibold uppercase tracking-wider shadow-sm">
              Most Popular
            </span>

            <div className="space-y-4 pt-2">
              <div className="w-12 h-12 rounded-xl bg-[#E6F0F0] border border-[#1C7C83]/15 flex items-center justify-center text-xl">
                🌱
              </div>

              <h3 className="text-xl font-serif font-bold text-[#1F3A3D]">
                Child & Adolescent Therapy
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                Age-appropriate emotional support for academic challenges,
                confidence, behaviour, and overall wellbeing.
              </p>
            </div>

            <div className="pt-4 border-t border-[#1C7C83]/10">
              <p className="font-semibold text-sm text-[#1C7C83]">
                Packages from ₹3,300
              </p>
            </div>
          </div>

          {/* Card 3: International Clients */}
          <div className="bg-white rounded-[2rem] border border-[#1C7C83]/15 p-6 sm:p-8 shadow-sm hover:shadow-md hover:border-[#1C7C83]/30 transition-all duration-300 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#E6F0F0] border border-[#1C7C83]/15 flex items-center justify-center text-xl">
                🌍
              </div>

              <h3 className="text-xl font-serif font-bold text-[#1F3A3D]">
                International Clients
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                Secure online therapy with flexible scheduling for clients across
                different countries and time zones.
              </p>
            </div>

            <div className="pt-4 border-t border-[#1C7C83]/10">
              <p className="font-semibold text-sm text-[#1C7C83]">
                Packages from $150
              </p>
            </div>
          </div>

        </div>

        {/* Action Link Footer */}
        <div className="text-center space-y-3 pt-2">
          <Link
            to="/packages"
            className="inline-flex items-center gap-2 bg-[#1C7C83] hover:bg-[#135B60] text-white font-medium text-sm px-8 py-3.5 rounded-full shadow-sm hover:shadow transition-all duration-300"
          >
            Explore All Therapy Packages
            <ArrowRight size={16} />
          </Link>

          <p className="text-xs text-gray-500 max-w-xl mx-auto">
            Compare India & International pricing, package benefits, policies,
            workshops, and corporate wellbeing programs.
          </p>
        </div>

      </div>
    </section>
  );
}