import React from "react";

const packages = [
  {
    title: "Individual Therapy",
    sessions: "4 Sessions",
    price: "₹3,600",
    description:
      "Ideal for anxiety, stress, emotional regulation, self-esteem, and personal growth.",
  },
  {
    title: "Teen Counselling",
    sessions: "4 Sessions",
    price: "₹2,400",
    description:
      "Supporting adolescents with academic pressure, emotions, confidence, and relationships.",
  },
  {
    title: "Couples Counselling",
    sessions: "4 Sessions",
    price: "₹5,200",
    description:
      "Strengthen communication, resolve conflicts, and rebuild trust together.",
  },
  {
    title: "Career Guidance",
    sessions: "3 Sessions",
    price: "₹2,000",
    description:
      "Career clarity, goal setting, confidence building, and academic guidance.",
  },
  {
    title: "Mindfulness Program",
    sessions: "6 Sessions",
    price: "₹4,500",
    description:
      "Learn mindfulness, breathing techniques, and relaxation strategies for everyday wellbeing.",
  },
  {
    title: "Complete Wellness",
    sessions: "8 Sessions",
    price: "₹7,000",
    description:
      "A comprehensive emotional wellness package with personalized therapeutic support.",
  },
];

function Packages() {
  return (
    <div className="bg-white">

      {/* HERO SECTION */}

      <section
        className="py-24 px-6"
        style={{
          background:
            "linear-gradient(135deg,#018081 0%, #0aa39b 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

          <div>

            <p className="uppercase tracking-[4px] text-teal-100 font-semibold mb-4">
              Psychobeings
            </p>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-white">
              Therapy
              <br />
              Packages
            </h1>

            <p className="mt-8 text-lg text-teal-100 leading-8 max-w-xl">
              Choose structured therapy plans designed to help you
              manage stress, anxiety, relationships, emotional
              wellbeing and personal growth with professional support.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">

              <button className="bg-white text-[#018081] px-8 py-3 rounded-full font-semibold hover:shadow-xl transition">
                Book Appointment
              </button>

              <button className="border border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-[#018081] transition">
                Explore Packages
              </button>

            </div>

          </div>

          <div>

            <div className="bg-white rounded-3xl shadow-2xl p-8">

              <h3 className="text-2xl font-bold text-[#018081] mb-6">
                Why Choose a Therapy Package?
              </h3>

              <div className="space-y-5">

                <div className="flex gap-4">
                  <div className="text-2xl">✔</div>
                  <p>Save more compared to individual bookings.</p>
                </div>

                <div className="flex gap-4">
                  <div className="text-2xl">✔</div>
                  <p>Structured therapeutic journey.</p>
                </div>

                <div className="flex gap-4">
                  <div className="text-2xl">✔</div>
                  <p>Personalized interventions and worksheets.</p>
                </div>

                <div className="flex gap-4">
                  <div className="text-2xl">✔</div>
                  <p>Continuous progress monitoring.</p>
                </div>

                <div className="flex gap-4">
                  <div className="text-2xl">✔</div>
                  <p>Evidence-based psychological care.</p>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* WHY PSYCHOBEINGS */}

      <section className="py-20 px-6 bg-[#F7FAFA]">

        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-4xl font-bold text-[#018081]">
            Why Choose Psychobeings?
          </h2>

          <p className="mt-6 text-gray-600 max-w-3xl mx-auto leading-8">
            At Psychobeings, we believe therapy is a journey rather than
            a one-time conversation. Our therapy packages provide
            consistent support, individualized care, and evidence-based
            interventions that promote lasting emotional wellbeing.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

            {[
              "Experienced Therapist",
              "Evidence-Based Care",
              "Affordable Packages",
              "Online & Offline Sessions",
            ].map((item, index) => (

              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 transition"
              >
                <div className="w-16 h-16 rounded-full bg-[#018081] text-white flex items-center justify-center text-2xl mx-auto">
                  ✓
                </div>

                <h3 className="font-bold text-xl mt-6 text-[#018081]">
                  {item}
                </h3>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* PACKAGE CARDS */}

      <section className="py-24 px-6">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-center text-4xl font-bold text-[#018081] mb-4">
            Therapy Packages
          </h2>

          <p className="text-center text-gray-600 mb-14">
            Flexible therapy plans designed for your emotional wellbeing.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

            {packages.map((pkg, index) => (

              <div
                key={index}
                className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 hover:shadow-2xl transition duration-300"
              >

                <div className="w-16 h-16 rounded-full bg-[#018081] text-white flex items-center justify-center text-2xl">
                  🧠
                </div>

                <h3 className="text-2xl font-bold text-[#018081] mt-6">
                  {pkg.title}
                </h3>

                <p className="text-gray-600 mt-4 leading-7">
                  {pkg.description}
                </p>

                <div className="mt-8">

                  <p className="font-semibold text-gray-700">
                    {pkg.sessions}
                  </p>

                  <p className="text-4xl font-bold text-[#018081] mt-3">
                    {pkg.price}
                  </p>

                </div>

                <button
                  className="w-full mt-10 py-3 rounded-full text-white font-semibold transition"
                  style={{ backgroundColor: "#018081" }}
                >
                  Book This Package
                </button>

              </div>

            ))}

          </div>

        </div>

      </section>
    </div>
  );
}

export default Packages;