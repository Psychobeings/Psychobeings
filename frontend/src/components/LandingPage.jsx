import React, { useState } from 'react';
import { X, User, Users, Home, UserCheck } from 'lucide-react';

const ServicesPage = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 1,
      title: "Individual Therapy",
      icon: <User className="w-8 h-8" />,
      shortDescription: "One-on-one sessions tailored to your personal growth and healing journey.",
      detailedDescription: "Individual therapy provides a safe, confidential space where you can explore your thoughts, feelings, and behaviors with a trained professional. Our personalized approach helps you develop coping strategies, work through challenges, and achieve your mental health goals. Sessions are designed around your unique needs and can address anxiety, depression, trauma, relationship issues, and personal development.",
      features: [
        "Personalized treatment plans",
        "Confidential and safe environment", 
        "Flexible scheduling options",
        "Evidence-based therapeutic approaches"
      ]
    },
    {
      id: 2,
      title: "Couples Therapy",
      icon: <Users className="w-8 h-8" />,
      shortDescription: "Strengthen your relationship and improve communication with your partner.",
      detailedDescription: "Couples therapy helps partners improve their relationship by enhancing communication, resolving conflicts, and rebuilding trust. Our experienced therapists guide couples through challenges while teaching valuable skills for maintaining a healthy, loving relationship. Whether you're facing specific issues or simply want to strengthen your bond, we're here to support your journey together.",
      features: [
        "Improved communication skills",
        "Conflict resolution techniques",
        "Trust rebuilding strategies",
        "Relationship enhancement tools"
      ]
    },
    {
      id: 3,
      title: "Family Therapy",
      icon: <Home className="w-8 h-8" />,
      shortDescription: "Heal family dynamics and create stronger bonds between family members.",
      detailedDescription: "Family therapy addresses the complex dynamics within family systems, helping members communicate more effectively and resolve longstanding issues. Our therapists work with families to identify patterns, improve relationships, and create a more harmonious home environment. We address various family challenges including behavioral issues, major life transitions, and generational conflicts.",
      features: [
        "Family system assessment",
        "Improved family communication",
        "Conflict mediation",
        "Behavioral intervention strategies"
      ]
    },
    {
      id: 4,
      title: "Group Therapy",
      icon: <UserCheck className="w-8 h-8" />,
      shortDescription: "Connect with others facing similar challenges in a supportive group setting.",
      detailedDescription: "Group therapy offers a unique opportunity to heal alongside others who share similar experiences. In a supportive, structured environment, you'll gain insights, share perspectives, and develop coping skills while building meaningful connections. Our groups focus on specific topics such as anxiety, depression, addiction recovery, and life transitions, providing both individual growth and community support.",
      features: [
        "Peer support and connection",
        "Shared experiences and insights",
        "Cost-effective treatment option",
        "Specialized topic-focused groups"
      ]
    }
  ];

  const openModal = (service) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  const handleBookService = (serviceName) => {
    alert(`Booking ${serviceName}... This would redirect to booking page.`);
    closeModal();
  };

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
                  onClick={() => handleBookService(selectedService.title)}
                  className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Book {selectedService.title} Session
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