import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const therapyPackages = [
  {
    title: "Individual Therapy",
    description:
      "Personalised one-on-one counselling to support emotional wellbeing, stress management, anxiety, and personal growth.",
    sessions: [
      {
        name: "3 Sessions",
        price: "₹4,200",
      },
      {
        name: "6 Sessions",
        price: "₹8,100",
      },
    ],
  },
  {
    title: "Child & Adolescent Therapy",
    description:
      "Compassionate counselling for children and adolescents facing emotional, behavioural, academic, and social challenges.",
    sessions: [
      {
        name: "3 Sessions",
        price: "₹3,300",
      },
      {
        name: "6 Sessions",
        price: "₹6,300",
      },
    ],
  },
];

const internationalPackages = [
  {
    title: "Individual Therapy",
    description:
      "Online therapy sessions for clients living outside India with flexible scheduling.",
    sessions: [
      {
        name: "3 Sessions",
        price: "$180",
      },
      {
        name: "6 Sessions",
        price: "$340",
      },
    ],
  },
  {
    title: "Child & Adolescent Therapy",
    description:
      "Professional online support for children and adolescents across the globe.",
    sessions: [
      {
        name: "3 Sessions",
        price: "$150",
      },
      {
        name: "6 Sessions",
        price: "$285",
      },
    ],
  },
];

const programs = [
  {
    title: "Corporate Programs",
    description:
      "Employee Assistance Programs, workplace wellbeing sessions, stress management, burnout prevention, and leadership wellbeing.",
  },
  {
    title: "Workshops",
    description:
      "Interactive workshops for schools, colleges, organisations, and community groups on mental health and emotional wellbeing.",
  },
];

const notes = [
  "All sessions are by prior appointment only.",
  "Packages are valid for 3 months from the date of purchase.",
  "A minimum of 24 hours notice is required for rescheduling.",
  "Packages are non-transferable and non-refundable once started.",
  "Online sessions are available worldwide.",
];

const Packages = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#FAFCFC]">
      {/* ================= HERO ================= */}

      <section className="px-6 lg:px-20 pt-16 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <p className="uppercase tracking-[0.3em] text-[#018081] font-semibold text-sm">
              Psychobeings
            </p>

            <h1 className="text-5xl md:text-6xl font-bold text-[#18333B] mt-4">
              Our Packages
            </h1>

            <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-[#5F6F73]">
              Thoughtfully designed therapy packages to provide consistent
              support for emotional wellbeing, personal growth, and lasting
              positive change.
            </p>
          </div>

          {/* Feature Cards */}

          <div className="grid md:grid-cols-3 gap-6 mt-14">
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-[#E4F1F0]">
              <div className="w-14 h-14 rounded-full bg-[#EAF8F8] flex items-center justify-center text-3xl">
                🔒
              </div>

              <h3 className="font-semibold text-xl mt-6 text-[#18333B]">
                Confidential Care
              </h3>

              <p className="text-[#5F6F73] mt-3">
                Every session is conducted in a safe, secure, and judgement-free
                environment.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm border border-[#E4F1F0]">
              <div className="w-14 h-14 rounded-full bg-[#EAF8F8] flex items-center justify-center text-3xl">
                💻
              </div>

              <h3 className="font-semibold text-xl mt-6 text-[#18333B]">
                Flexible Sessions
              </h3>

              <p className="text-[#5F6F73] mt-3">
                Online appointments with flexible scheduling to suit your
                routine.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm border border-[#E4F1F0]">
              <div className="w-14 h-14 rounded-full bg-[#EAF8F8] flex items-center justify-center text-3xl">
                ❤️
              </div>

              <h3 className="font-semibold text-xl mt-6 text-[#18333B]">
                Evidence-Based Support
              </h3>

              <p className="text-[#5F6F73] mt-3">
                Therapy grounded in evidence-based approaches tailored to your
                unique needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= THERAPY PACKAGES ================= */}

      <section className="px-6 lg:px-20 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <p className="text-sm uppercase tracking-[0.25em] text-[#018081] font-semibold">
              India
            </p>

            <h2 className="text-4xl font-bold text-[#18333B] mt-3">
              Therapy Packages
            </h2>

            <p className="text-[#5F6F73] mt-4 max-w-2xl mx-auto">
              Choose a therapy plan that offers consistent support and
              meaningful progress at a pace that feels right for you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {therapyPackages.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-3xl border border-[#E3EFEF] shadow-sm hover:shadow-xl transition-all duration-300 p-8"
              >
                <h3 className="text-2xl font-bold text-[#18333B]">
                  {item.title}
                </h3>

                <p className="mt-4 text-[#5F6F73] leading-7">
                  {item.description}
                </p>

                <div className="mt-8 space-y-4">
                  {item.sessions.map((session) => (
                    <div
                      key={session.name}
                      className="flex justify-between items-center border rounded-2xl p-5 bg-[#FAFCFC]"
                    >
                      <div>
                        <h4 className="font-semibold text-[#18333B]">
                          {session.name}
                        </h4>

                        <p className="text-sm text-[#7B8A8E]">
                          50-minute therapy sessions
                        </p>
                      </div>

                      <span className="text-2xl font-bold text-[#018081]">
                        {session.price}
                      </span>
                    </div>
                  ))}
                </div>

                <a
                  href="https://booking.myndspace.app/amanp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex justify-center items-center w-full rounded-full bg-[#018081] text-white py-4 font-semibold hover:bg-[#016A6A] transition"
                >
                  Book Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= INTERNATIONAL PACKAGES ================= */}

      <section className="px-6 lg:px-20 py-16 bg-[#F7FBFB]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <p className="text-sm uppercase tracking-[0.25em] text-[#018081] font-semibold">
              Worldwide
            </p>

            <h2 className="text-4xl font-bold text-[#18333B] mt-3">
              Therapy Packages for International Clients
            </h2>

            <p className="text-[#5F6F73] mt-4 max-w-2xl mx-auto">
              Secure online counselling for clients living outside India with
              flexible scheduling across different time zones.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {internationalPackages.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-3xl border border-[#E3EFEF] shadow-sm hover:shadow-xl transition-all duration-300 p-8"
              >
                <h3 className="text-2xl font-bold text-[#18333B]">
                  {item.title}
                </h3>

                <p className="mt-4 text-[#5F6F73] leading-7">
                  {item.description}
                </p>

                <div className="mt-8 space-y-4">
                  {item.sessions.map((session) => (
                    <div
                      key={session.name}
                      className="flex justify-between items-center border rounded-2xl p-5 bg-[#FAFCFC]"
                    >
                      <div>
                        <h4 className="font-semibold text-[#18333B]">
                          {session.name}
                        </h4>

                        <p className="text-sm text-[#7B8A8E]">
                          Online therapy sessions
                        </p>
                      </div>

                      <span className="text-2xl font-bold text-[#018081]">
                        {session.price}
                      </span>
                    </div>
                  ))}
                </div>

                <a
                  href="https://booking.myndspace.app/amanp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex justify-center items-center w-full rounded-full bg-[#018081] text-white py-4 font-semibold hover:bg-[#016A6A] transition"
                >
                  Book Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROGRAMS ================= */}

      <section className="px-6 lg:px-20 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="uppercase tracking-[0.25em] text-[#018081] font-semibold text-sm">
              Beyond Individual Therapy
            </p>

            <h2 className="text-4xl font-bold text-[#18333B] mt-3">
              Programs
            </h2>

            <p className="mt-4 text-[#5F6F73] max-w-2xl mx-auto leading-7">
              We collaborate with schools, colleges, organisations, and
              communities to promote emotional wellbeing through customised
              mental health programs and workshops.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {programs.map((program) => (
              <div
                key={program.title}
                className="bg-white rounded-3xl border border-[#E4F1F0] shadow-sm hover:shadow-xl transition duration-300 p-8"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#EAF8F8] flex items-center justify-center text-3xl mb-6">
                  {program.title === "Corporate Programs" ? "🏢" : "🎤"}
                </div>

                <h3 className="text-2xl font-bold text-[#18333B]">
                  {program.title}
                </h3>

                <p className="mt-4 text-[#5F6F73] leading-7">
                  {program.description}
                </p>

                <a
                  href="https://booking.myndspace.app/amanp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center mt-8 font-semibold text-[#018081] hover:gap-3 transition-all"
                >
                  Enquire Now →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= IMPORTANT NOTES ================= */}

      <section className="px-6 lg:px-20 pb-20">
        <div className="max-w-6xl mx-auto rounded-3xl bg-[#F7FBFB] border border-[#E4F1F0] p-10">
          <div className="mb-8">
            <p className="uppercase tracking-[0.25em] text-[#018081] font-semibold text-sm">
              Please Read
            </p>

            <h2 className="text-4xl font-bold text-[#18333B] mt-3">
              Important Notes
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {notes.map((note, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-white rounded-2xl p-5 shadow-sm"
              >
                <div className="w-8 h-8 rounded-full bg-[#018081] text-white flex items-center justify-center font-bold flex-shrink-0">
                  ✓
                </div>

                <p className="text-[#5F6F73] leading-7">{note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CALL TO ACTION ================= */}

      <section className="px-6 lg:px-20 pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-[40px] bg-gradient-to-r from-[#018081] to-[#0A6F70] text-white px-8 md:px-16 py-16 text-center shadow-xl">
            <p className="uppercase tracking-[0.3em] text-sm text-[#D9F4F3] font-semibold">
              Need Guidance?
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mt-4">
              Not sure which plan is right for you?
            </h2>

            <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-[#E7F7F6]">
              Choosing the right therapy package can feel overwhelming. We're
              happy to guide you based on your concerns, goals, and preferences
              to help you get started with confidence.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-5">
              <Link
                to="/booking"
                className="bg-white text-[#018081] px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#F3F8F8] transition duration-300 shadow-md"
              >
                Schedule a Consultation
              </Link>

              <Link
                to="/services"
                className="border border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-[#018081] transition duration-300"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Packages;