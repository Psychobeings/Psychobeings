{/* ================= PACKAGES PREVIEW ================= */}

<section className="py-20 bg-gradient-to-b from-white to-[#f6fbfa]">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">

    <div className="text-center max-w-3xl mx-auto">
      <span className="inline-flex items-center rounded-full bg-[#e9f7f6] px-4 py-2 text-sm font-semibold text-[#0a7272]">
        Therapy Packages
      </span>

      <h2 className="mt-5 text-4xl font-bold text-[#0d4f50]">
        Consistent Support. Meaningful Progress.
      </h2>

      <p className="mt-5 text-lg leading-relaxed text-slate-600">
        Healing is a journey, not a single conversation. Our therapy packages
        are designed to provide structured, ongoing support while making your
        mental wellbeing journey more accessible and affordable.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-8 mt-14">

      <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm hover:shadow-lg transition">
        <div className="w-14 h-14 rounded-2xl bg-[#eaf6f6] flex items-center justify-center">
          🧠
        </div>

        <h3 className="text-xl font-bold mt-6 text-[#0d4f50]">
          Individual Therapy
        </h3>

        <p className="mt-3 text-slate-600">
          Personalized one-on-one sessions to support anxiety, stress,
          emotional wellbeing, relationships, and personal growth.
        </p>

        <p className="mt-6 font-semibold text-[#0a7272]">
          Packages from ₹4,200
        </p>
      </div>

      <div className="bg-white rounded-3xl border-2 border-[#0a7272] p-8 shadow-xl relative">

        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0a7272] text-white text-xs px-4 py-1 rounded-full font-semibold">
          Most Popular
        </span>

        <div className="w-14 h-14 rounded-2xl bg-[#eaf6f6] flex items-center justify-center">
          🌱
        </div>

        <h3 className="text-xl font-bold mt-6 text-[#0d4f50]">
          Child & Adolescent Therapy
        </h3>

        <p className="mt-3 text-slate-600">
          Age-appropriate emotional support for academic challenges,
          confidence, behaviour, and overall wellbeing.
        </p>

        <p className="mt-6 font-semibold text-[#0a7272]">
          Packages from ₹3,300
        </p>
      </div>

      <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm hover:shadow-lg transition">
        <div className="w-14 h-14 rounded-2xl bg-[#eaf6f6] flex items-center justify-center">
          🌍
        </div>

        <h3 className="text-xl font-bold mt-6 text-[#0d4f50]">
          International Clients
        </h3>

        <p className="mt-3 text-slate-600">
          Secure online therapy with flexible scheduling for clients across
          different countries and time zones.
        </p>

        <p className="mt-6 font-semibold text-[#0a7272]">
          Packages from $150
        </p>
      </div>

    </div>

    <div className="mt-14 text-center">

      <Link
        to="/packages"
        className="inline-flex items-center gap-2 bg-[#0a7272] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#0d5c5e] transition-all shadow-lg"
      >
        Explore All Therapy Packages
        <ArrowRight size={18} />
      </Link>

      <p className="mt-4 text-sm text-slate-500">
        Compare India & International pricing, package benefits, policies,
        workshops, and corporate wellbeing programs.
      </p>

    </div>

  </div>
</section>