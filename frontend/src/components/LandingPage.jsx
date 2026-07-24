import React, { useState } from 'react';
import { X, User, Users, Home, UserCheck } from 'lucide-react';

const LandingPage = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 1,
      title: "Individual Therapy",
      icon: <User className="w-8 h-8" />,
      shortDescription: "Confidential, one-on-one therapy for anxiety management, stress regulation, overthinking, and emotional regulation.",
      detailedDescription: "Individual therapy offers a safe, confidential, and non-judgmental space to help you navigate life's challenges — including anxiety management, stress regulation, cognitive overload and overthinking, and emotional regulation. Sessions are structured around understanding your specific concerns and building practical, evidence-based strategies to help you regain balance and clarity.",
      features: [
        "Initial consultation to understand presenting concerns",
        "Collaborative goal-setting focused on anxiety, stress, or emotional regulation",
        "Regular sessions (45-60 mins) in a supportive, non-judgmental environment",
        "Practical tools to manage overthinking and build emotional resilience",
        "Sessions Required: Typically 8-12 sessions as a starting framework; may extend based on the complexity of concerns and the client's individual pace of progress."
      ]
    },
    {
      id: 2,
      title: "Corporate Wellness Counselling",
      icon: <Users className="w-8 h-8" />,
      shortDescription: "Workplace mental health support focused on work-life balance, occupational well-being, and stress regulation for employees.",
      detailedDescription: "Our corporate wellness services support employee mental health with a focus on work-life balance and occupational well-being. Offerings include individual employee counselling for stress regulation and cognitive overload, alongside psychoeducational sessions designed to help teams manage workplace pressure and maintain a healthier balance between professional and personal life.",
      features: [
        "Initial organizational needs assessment",
        "Sessions focused on work-life balance, stress regulation, and occupational well-being",
        "Delivered on-site or virtually, individually or in groups",
        "Practical strategies employees can apply to daily work life.",
        "Sessions Required: Program length varies by organizational scope — typically structured as a 4-8 session package per initiative; ongoing engagements available based on organizational needs."
      ]
    },
    {
      id: 3,
      title: "Child & Adolescent Counselling",
      icon: <Home className="w-8 h-8" />,
      shortDescription: "Adolescent counselling and career guidance for ages 13+, supporting emotional regulation and life direction during key transitions.",
      detailedDescription: "This service is designed for adolescents aged 13 and above, offering a safe, confidential space for counselling and career guidance. Sessions support emotional regulation, help manage stress and overthinking related to academics or the future, and provide guidance during key developmental and career-related decision points.",
      features: [
        "Initial consultation with the adolescent (and parents/guardians where appropriate)",
        "Sessions addressing emotional regulation, stress, and career-related concerns",
        "A safe, non-judgmental space suited to ages 13+",
        "Guidance on decision-making and navigating academic or career transitions",
        "Sessions Required: Typically 6-10 sessions as a starting framework; may extend based on the adolescent's needs and progress."
      ]
    },
    {
      id: 4,
      title: "Workshops & Group Therapy",
      icon: <UserCheck className="w-8 h-8" />,
      shortDescription: "Group sessions on anxiety management, stress regulation, emotional regulation, and work-life balance.",
      detailedDescription: "Workshops and group therapy sessions provide a structured, facilitated environment to build skills around anxiety management, stress regulation, emotional regulation, and work-life balance. Participants engage in a supportive group setting alongside others navigating similar challenges, gaining practical tools they can apply in daily life.",
      features: [
        "Pre-group consultation to confirm fit",
        "Structured sessions covering anxiety, stress, emotional regulation, or work-life balance",
        "Confidential group setting facilitated by a qualified psychologist/Counselling Psychologist",
        "Practical, take-home tools for continued use",
        "Sessions Required: Typically 6-8 sessions per workshop/group cycle; may extend or repeat based on group progress and participant needs."
      ]
    }
  ];

  const openModal = (service) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  // const handleBookService = (serviceName) => {
  //   alert(`Booking ${serviceName}... This would redirect to booking page.`);
  //   closeModal();
  // };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#097f7f' }}>
      {/* Header */}
      <header className="text-center py-16 px-4">
        <h1 className="text-5xl font-bold text-white mb-4 tracking-wide">
          Our Services
        </h1>
        <p className="text-xl text-teal-100 max-w-2xl mx-auto leading-relaxed">
          Discover the path to mental wellness with our comprehensive therapy services
        </p>
      </header>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              onClick={() => openModal(service)}
              className="bg-white rounded-2xl shadow-xl p-8 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
            >
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-100 rounded-full mb-6 group-hover:bg-teal-200 transition-colors duration-300">
                  <div className="text-teal-600">
                    {service.icon}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-relaxed text-sm">
                  {service.shortDescription}
                </p>

                <div className="mt-6 text-teal-600 font-semibold text-sm group-hover:text-teal-700">
                  Learn More →
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-8 border-b border-gray-200">
              <div className="flex items-center space-x-4">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-teal-100 rounded-full">
                  <div className="text-teal-600">
                    {selectedService.icon}
                  </div>
                </div>
                <h2 className="text-3xl font-bold text-gray-800">
                  {selectedService.title}
                </h2>
              </div>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-8">
              <p className="text-gray-700 leading-relaxed mb-8 text-lg">
                {selectedService.detailedDescription}
              </p>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  What You Can Expect:
                </h3>
                <ul className="space-y-3">
                  {selectedService.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Book Service Button */}
              <div className="text-center">
                <button
                  className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <a href="https://booking.myndspace.app/amanp"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book {selectedService.title} Session
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const therapyConcerns = [
  { title: 'Anxiety Concerns and Overthinking' },
  { title: 'Stress Management and Burnout' },
  { title: 'Relationship Patterns' },
  { title: 'Self-Esteem and Confidence Issues' },
  { title: 'Anger Management and Emotional Regulation' },
  { title: 'Life Transitions and Career Guidance' },
  { title: 'Academic Pressure and School Stress' },
];

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#F8FBFB] text-slate-900">
      <section className="bg-teal-700 text-white pt-24 pb-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-teal-200 mb-4">Psychobeings</p>
          <h1 className="text-5xl font-bold mb-6">Therapy, Programs, and Support Tailored for You</h1>
          <p className="text-lg max-w-3xl mx-auto text-teal-100 leading-8">
            Discover individual and child therapy, corporate wellness, workshops, and session options designed to improve emotional wellbeing, resilience, and personal growth.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.3em] text-teal-700 font-semibold">Therapy</p>
          <h2 className="text-4xl font-bold mt-4">Individual & Child Therapy</h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto leading-7">
            Our therapy services support people of all ages through life challenges with a compassionate, evidence-based approach.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {therapyServices.map((service) => (
            <Link
              key={service.title}
              to={service.link}
              className="group block rounded-[32px] border border-slate-200 bg-white p-10 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <h3 className="text-2xl font-semibold mb-4 text-slate-900">{service.title}</h3>
              <p className="text-slate-600 leading-7 mb-6">{service.description}</p>
              <span className="text-teal-700 font-semibold group-hover:text-teal-900">Learn more →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.3em] text-teal-700 font-semibold">What concerns we work on in therapy</p>
            <h2 className="text-4xl font-bold mt-4">Common Concerns We Support</h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {therapyConcerns.map((concern) => (
              <div key={concern.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-6 text-slate-700 shadow-sm">
                <p className="text-lg font-medium">{concern.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.3em] text-teal-700 font-semibold">Programs</p>
          <h2 className="text-4xl font-bold mt-4">What Is Included In These Programs</h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto leading-7">
            Our programs are designed to build wellbeing and resilience through practical mental health training, supportive conversations, and group learning.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {programServices.map((program) => (
            <div key={program.title} className="rounded-[32px] border border-slate-200 bg-white p-10 shadow-sm">
              <h3 className="text-2xl font-semibold mb-4 text-slate-900">{program.title}</h3>
              <p className="text-slate-600 leading-7">{program.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.3em] text-teal-700 font-semibold">Session Details</p>
            <h2 className="text-4xl font-bold mt-4">Start with one session, continue with a plan if it feels right.</h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto leading-7">
              We recommend beginning with a single session to understand your needs before choosing a package.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-[32px] border border-slate-200 bg-white p-10 shadow-sm">
              <h3 className="text-2xl font-semibold mb-4">Single Session</h3>
              <p className="text-3xl font-bold text-teal-700 mb-4">₹1700</p>
              <p className="text-slate-600 leading-7 mb-6">One-on-one individual therapy session for adults.</p>
              <a
                href="https://booking.myndspace.app/amanp"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full bg-teal-700 px-6 py-3 text-white font-semibold hover:bg-teal-800 transition"
              >
                Book Session
              </a>
              <p className="mt-4 text-slate-600 font-medium">Recommended</p>
            </div>

            <div className="space-y-8">
              <div className="rounded-[32px] border border-slate-200 bg-white p-10 shadow-sm">
                <h3 className="text-2xl font-semibold mb-4">Packages</h3>
                <p className="text-slate-600 leading-7 mb-6">
                  Session plans are available for continued work, consistency and deeper emotional processing.
                </p>
                <a
                  href="https://booking.myndspace.app/amanp"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-full bg-slate-900 px-6 py-3 text-white font-semibold hover:bg-slate-800 transition"
                >
                  View Packages
                </a>
              </div>

              <div className="rounded-[32px] border border-slate-200 bg-white p-10 shadow-sm">
                <h3 className="text-2xl font-semibold mb-4">Format</h3>
                <p className="text-3xl font-bold text-teal-700 mb-4">Online & In-Person</p>
                <p className="text-slate-600 leading-7 mb-6">
                  Choose the format that feels accessible and comfortable for you.
                </p>
                <a
                  href="https://booking.myndspace.app/amanp"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-full bg-white px-6 py-3 text-teal-700 font-semibold border border-teal-700 hover:bg-teal-50 transition"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.3em] text-teal-700 font-semibold">Program Details</p>
          <h2 className="text-4xl font-bold mt-4">Start with one session, continue with a plan if it feels right.</h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto leading-7">
            We recommend beginning with a single program session to understand your organisation's needs before choosing a package.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-[32px] border border-slate-200 bg-white p-10 shadow-sm">
            <h3 className="text-2xl font-semibold mb-4">Single Session</h3>
            <p className="text-3xl font-bold text-teal-700 mb-4">₹1700</p>
            <p className="text-slate-600 leading-7 mb-6">One-on-one or small-group program session for teams, workshops, or corporate wellness.</p>
            <a
              href="https://booking.myndspace.app/amanp"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full bg-teal-700 px-6 py-3 text-white font-semibold hover:bg-teal-800 transition"
            >
              Book Session
            </a>
            <p className="mt-4 text-slate-600 font-medium">Recommended</p>
          </div>

          <div className="space-y-8">
            <div className="rounded-[32px] border border-slate-200 bg-white p-10 shadow-sm">
              <h3 className="text-2xl font-semibold mb-4">Packages</h3>
              <p className="text-slate-600 leading-7 mb-6">
                Program plans are available for continued learning, team development and workplace wellbeing.
              </p>
              <a
                href="https://booking.myndspace.app/amanp"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full bg-slate-900 px-6 py-3 text-white font-semibold hover:bg-slate-800 transition"
              >
                View Packages
              </a>
            </div>

            <div className="rounded-[32px] border border-slate-200 bg-white p-10 shadow-sm">
              <h3 className="text-2xl font-semibold mb-4">Format</h3>
              <p className="text-3xl font-bold text-teal-700 mb-4">Online & In-Person</p>
              <p className="text-slate-600 leading-7 mb-6">
                Choose the format that feels accessible and comfortable for your team or group.
              </p>
              <a
                href="https://booking.myndspace.app/amanp"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full bg-white px-6 py-3 text-teal-700 font-semibold border border-teal-700 hover:bg-teal-50 transition"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.3em] text-teal-700 font-semibold">Locations</p>
            <h2 className="text-4xl font-bold mt-4">Find Us on Google Maps</h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto leading-7">
              Visit our centre or connect online. Use the map below to locate us and get directions.
            </p>
          </div>

        </div>
      </section>

      <section className="bg-teal-700 text-white py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-teal-200 mb-4">Begin Your Journey</p>
          <h2 className="text-4xl font-bold mb-6">Ready to take the next step?</h2>
          <p className="text-lg leading-8 max-w-3xl mx-auto mb-10 text-teal-100">
            Begin with a single session or choose a package that fits your needs. We provide warm, professional support for your emotional wellbeing.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href="https://booking.myndspace.app/amanp"
              target="_blank"
              rel="noreferrer"
              className="inline-flex justify-center rounded-full bg-white px-8 py-4 text-teal-700 font-semibold shadow-lg hover:bg-slate-100 transition"
            >
              Book a Session
            </a>
            <Link
              to="/contact"
              className="inline-flex justify-center rounded-full border border-white bg-transparent px-8 py-4 text-white font-semibold hover:bg-white/10 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;