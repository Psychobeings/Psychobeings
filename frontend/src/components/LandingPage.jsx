import { Link } from "react-router-dom";
import {
  User,
  Users,
  HeartHandshake,
  GraduationCap,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    title: "Individual Therapy",
    icon: <User size={32} />,
    description:
      "Evidence-based therapy for anxiety, stress, emotional regulation, burnout, and life transitions.",
    link: "/services/individual-therapy",
  },
  {
    title: "Corporate Wellness",
    icon: <Users size={32} />,
    description:
      "Employee counselling, workplace wellbeing, mental health workshops, and burnout prevention.",
    link: "/services/corporate-wellness",
  },
  {
    title: "Child & Adolescent Counselling",
    icon: <GraduationCap size={32} />,
    description:
      "Supporting adolescents through emotional challenges, academic stress, and career guidance.",
    link: "/services/child-counselling",
  },
  {
    title: "Workshops & Group Programs",
    icon: <HeartHandshake size={32} />,
    description:
      "Interactive workshops focusing on stress management, emotional wellbeing, and resilience.",
    link: "/services/group-therapy",
  },
];

export default function Services() {
  return (
    <div className="bg-gray-50">

      {/* Hero */}

      <section className="bg-teal-700 text-white py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h1 className="text-5xl font-bold mb-6">
            Our Services
          </h1>

          <p className="text-xl max-w-3xl mx-auto text-teal-100">
            Compassionate, evidence-based psychological support designed to
            help you navigate life's challenges with confidence.
          </p>

        </div>
      </section>

      {/* Services */}

      <section className="max-w-7xl mx-auto py-20 px-6">

        <h2 className="text-3xl font-bold text-center mb-12">
          Explore Our Services
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {services.map((service) => (

            <Link
              key={service.title}
              to={service.link}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-8 group"
            >

              <div className="w-16 h-16 rounded-full bg-teal-100 flex items-center justify-center text-teal-700 mb-6">
                {service.icon}
              </div>

              <h3 className="text-xl font-semibold mb-4">
                {service.title}
              </h3>

              <p className="text-gray-600 mb-6">
                {service.description}
              </p>

              <span className="text-teal-700 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn More
                <ArrowRight size={18} />
              </span>

            </Link>

          ))}

        </div>

      </section>

      {/* Why Therapy */}

      <section className="bg-white py-20">

        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-10">
            Why Choose Therapy?
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-gray-50 rounded-xl p-6">
              ✔ Evidence-based therapeutic approaches
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              ✔ Safe, confidential, and non-judgmental environment
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              ✔ Individualised treatment plans
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              ✔ Online & in-person sessions
            </div>

          </div>

        </div>

      </section>

      {/* Pricing */}

      <section className="py-20 bg-gray-100">

        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-10">
            Session Fees
          </h2>

          <div className="bg-white rounded-2xl shadow-lg p-10 text-center">

            <h3 className="text-2xl font-semibold">
              Individual Therapy
            </h3>

            <p className="text-5xl font-bold text-teal-700 my-6">
              ₹2,000
            </p>

            <p className="text-gray-600 mb-8">
              60-minute confidential therapy session
            </p>

            <a
              href="https://booking.myndspace.app/amanp"
              target="_blank"
              rel="noreferrer"
              className="bg-teal-700 hover:bg-teal-800 text-white px-8 py-4 rounded-full inline-block"
            >
              Book a Session
            </a>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="bg-teal-700 text-white py-20">

        <div className="max-w-4xl mx-auto text-center px-6">

          <h2 className="text-4xl font-bold mb-5">
            Ready to Begin?
          </h2>

          <p className="text-lg text-teal-100 mb-8">
            Taking the first step toward therapy is an investment in your
            emotional wellbeing.
          </p>

          <a
            href="https://booking.myndspace.app/amanp"
            target="_blank"
            rel="noreferrer"
            className="bg-white text-teal-700 px-8 py-4 rounded-full font-semibold"
          >
            Book Your First Session
          </a>

        </div>

      </section>

    </div>
  );
}