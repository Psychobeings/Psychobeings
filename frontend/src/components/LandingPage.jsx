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

export default ServicesPage;