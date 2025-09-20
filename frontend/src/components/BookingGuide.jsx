import React, { useState } from 'react';
import { Mail, MessageCircle, Clock, CheckCircle, Video, Users, Shield, Globe, Award, Heart } from 'lucide-react';

export default function BookingGuide() {
  const [expandedStep, setExpandedStep] = useState(null);

  const toggleStep = (index) => {
    setExpandedStep(expandedStep === index ? null : index);
  };

  const steps = [
    {
      number: "01",
      title: "Initial Contact",
      icon: <Mail className="w-6 h-6" />,
      description: "Reach out through your preferred communication channel",
      content: (
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-[#097f7f]/5 rounded-lg border border-[#097f7f]/10 hover:bg-[#097f7f]/10 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#097f7f]/10 rounded-lg flex items-center justify-center">
                <Mail className="w-5 h-5 text-[#097f7f]" />
              </div>
              <div>
                <p className="font-medium text-gray-900">Email</p>
                <p className="text-sm text-gray-600">info.psychobeings@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between p-4 bg-[#097f7f]/5 rounded-lg border border-[#097f7f]/10 hover:bg-[#097f7f]/10 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#097f7f]/10 rounded-lg flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-[#097f7f]" />
              </div>
              <div>
                <p className="font-medium text-gray-900">Instagram</p>
                <p className="text-sm text-gray-600">@psychobeings</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      number: "02", 
      title: "Assessment & Consultation",
      icon: <Users className="w-6 h-6" />,
      description: "Share your concerns and preferences for personalized care",
      content: (
        <div className="bg-[#097f7f]/5 rounded-lg p-6 border border-[#097f7f]/10">
          <p className="text-gray-700 mb-4">Please provide the following information:</p>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#097f7f] rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700">Primary concerns or areas you'd like to address</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#097f7f] rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700">Your age and any relevant background information</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#097f7f] rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700">Preferred session times and frequency</p>
            </div>
          </div>
        </div>
      )
    },
    {
      number: "03",
      title: "Professional Matching",
      icon: <Clock className="w-6 h-6" />,
      description: "We'll connect you with the right therapist within 24-48 hours",
      content: (
        <div className="bg-[#097f7f]/5 rounded-lg p-6 border border-[#097f7f]/10">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-[#097f7f]/10 rounded-lg flex items-center justify-center">
              <Clock className="w-6 h-6 text-[#097f7f]" />
            </div>
            <div>
              <p className="font-semibold text-gray-900">Quick Response Time</p>
              <p className="text-sm text-gray-600">Professional matching within 24-48 hours</p>
            </div>
          </div>
          <p className="text-gray-700">Our team will review your information and match you with a qualified psychologist who best fits your needs, along with available session times and payment details.</p>
        </div>
      )
    },
    {
      number: "04",
      title: "Session Confirmation",
      icon: <CheckCircle className="w-6 h-6" />,
      description: "Secure your appointment and receive session credentials",
      content: (
        <div className="bg-[#097f7f]/5 rounded-lg p-6 border border-[#097f7f]/10">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-[#097f7f] flex-shrink-0" />
              <p className="text-gray-700">Complete secure payment processing</p>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-[#097f7f] flex-shrink-0" />
              <p className="text-gray-700">Receive session link (Google Meet/Zoom)</p>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-[#097f7f] flex-shrink-0" />
              <p className="text-gray-700">Get confirmation with session details</p>
            </div>
          </div>
        </div>
      )
    },
    {
      number: "05",
      title: "Your Therapy Session",
      icon: <Video className="w-6 h-6" />,
      description: "Join your confidential, judgment-free therapeutic space",
      content: (
        <div className="bg-[#097f7f]/5 rounded-lg p-6 border border-[#097f7f]/10">
          <div className="text-center">
            <div className="w-16 h-16 bg-[#097f7f]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-[#097f7f]" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Safe & Confidential Environment</h4>
            <p className="text-gray-700">Enter a professional, judgment-free space designed for your comfort and healing. Come as you are.</p>
          </div>
        </div>
      )
    }
  ];

  const benefits = [
    { 
      icon: <Award className="w-6 h-6" />, 
      title: "Affordable Care", 
      description: "Professional therapy sessions at ₹400 per session"
    },
    { 
      icon: <Users className="w-6 h-6" />, 
      title: "Qualified Professionals", 
      description: "Licensed, experienced psychologists with proven expertise"
    },
    { 
      icon: <Globe className="w-6 h-6" />, 
      title: "100% Online", 
      description: "Access therapy from anywhere with secure video sessions"
    },
    { 
      icon: <MessageCircle className="w-6 h-6" />, 
      title: "Multilingual Support", 
      description: "Sessions available in English and Hindi for your comfort"
    },
    { 
      icon: <Heart className="w-6 h-6" />, 
      title: "Evidence-Based Care", 
      description: "Compassionate support grounded in research and best practices"
    }
  ];

  return (
    <div className="bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-tight">
            How to Book a Session
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-light">
            Begin your mental health journey with a simple, structured approach to booking professional therapeutic support.
          </p>
        </div>

        {/* Process Steps */}
        <div className="mb-20">
          <div className="space-y-4">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-all duration-300"
              >
                <div
                  className="p-6 cursor-pointer"
                  onClick={() => toggleStep(index)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-[#097f7f] text-white rounded-lg flex items-center justify-center font-medium">
                          {step.number}
                        </div>
                        <div className="p-2 bg-[#097f7f]/10 rounded-lg">
                          <div className="text-[#097f7f]">
                            {step.icon}
                          </div>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-medium text-gray-900 mb-1">{step.title}</h3>
                        <p className="text-gray-600 font-light">{step.description}</p>
                      </div>
                    </div>
                    <div className={`transform transition-transform duration-200 ${
                      expandedStep === index ? 'rotate-180' : ''
                    }`}>
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                <div className={`transition-all duration-300 overflow-hidden ${
                  expandedStep === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-6 pb-6">
                    <div className="ml-20 border-t border-gray-100 pt-6">
                      {step.content}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section - Full Screen Width */}
      <div className="min-h-screen w-full" style={{ backgroundColor: '#097f7f' }}>
        {/* Header */}
        <header className="text-center py-16 px-4">
          <h1 className="text-5xl font-bold text-white mb-4 tracking-wide">
            Why Choose Psychobeings
          </h1>
          <p className="text-xl text-teal-100 max-w-2xl mx-auto leading-relaxed">
            Professional mental health support designed with your wellbeing, accessibility, and comfort in mind
          </p>
        </header>

        {/* Benefits Grid */}
        <div className="px-4 pb-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center group cursor-pointer">
                  <div className="w-20 h-20 bg-white/100 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:bg-white/100 group-hover:scale-110 transition-all duration-300">
                    <div className="text-[#097f7f]">
                      {benefit.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-teal-100 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-white/80 font-light leading-relaxed text-sm">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-[#097f7f] to-[#0a9999] hover:from-[#086b6b] hover:to-[#088888] text-white px-10 py-5 rounded-xl inline-flex items-center gap-4 font-semibold text-lg transition-all cursor-pointer shadow-xl hover:shadow-2xl transform hover:scale-105">
            <Mail className="w-6 h-6" />
            Begin Your Journey Today
          </div>
          <p className="mt-6 text-gray-600 text-lg">
            Professional support is just one message away
          </p>
        </div>
      </div>
    </div>
  );
}