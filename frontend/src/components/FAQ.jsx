import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'How can Psychobeings support my mental health?',
      answer:
        'At Psychobeings, we have created a compassionate environment designed to help you heal, grow, and thrive. Our mission is to empower individuals with the tools and support they need to overcome challenges, tap into their inner strength, and lead a fulfilling, balanced life.',
    },
    {
      question: 'What types of concerns do you address?',
      answer:
        'We offer support for a wide range of concerns, including but not limited to stress, anxiety, career guidance, relationship challenges, work-life balance, childhood trauma, existential crises, and feelings of emptiness.',
    },
    {
      question: 'What counseling services do you provide?',
      answer:
        'We specialize in both Individual and Relationship Counseling. For more information on each service, please visit their respective pages on our website.',
    },
    {
      question: 'How do I book an appointment?',
      answer:
        'Booking an appointment is easy. Simply fill out the booking form with some basic information. After we review your details, we will contact you via email with a consent form. An appointment will only be confirmed once the consent form is signed and payment is processed.',
    },
    {
      question: 'Do you accept insurance?',
      answer:
        'While we do not accept insurance, we pride ourselves on offering affordable pricing. We also offer a free initial session, allowing you to explore if our services are the right fit for your long-term needs, without the financial strain.',
    },
    {
      question: 'Where can I find the pricing details?',
      answer:
        'We do not publicly display our pricing as it may vary based on the complexity of each case.',
    },
    {
      question: 'What if I need to cancel or reschedule my appointment?',
      answer:
        'We understand that life can be unpredictable. If you need to cancel or reschedule, please notify us via email as early as possible. We will be happy to work with you to find a new date and time that suits you.',
    },
    {
      question: 'How long are the counseling sessions?',
      answer:
        'Sessions typically last between 45 to 60 minutes. However, the duration may vary based on your individual needs and concerns.',
    },
    {
      question: 'How do you ensure confidentiality?',
      answer:
        'Your privacy is our priority. All sessions are conducted in secure, private virtual spaces, and any personal information shared remains strictly confidential. We ensure that no sensitive details are communicated via email or chat, where access may be less secure.',
    },
    {
      question: 'Are your workshops only for psychology students or professionals?',
      answer:
        'Not at all! Our workshops are open to anyone, regardless of profession or academic background. We cover a wide range of topics that are relevant and beneficial to a wide range of people and of varied interests.',
    },
  ];  

  return (
    <section className="bg-white text-gray-900 py-16 sm:py-24 min-h-screen">
      <div className="container mx-auto px-4 sm:px-8 lg:px-16">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4 sm:space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-300 pb-2 sm:pb-4">
              <button
                className="w-full flex justify-between items-center py-2 sm:py-3 text-left text-base sm:text-lg lg:text-xl font-medium hover:text-primary transition-colors"
                onClick={() => handleToggle(index)}
              >
                <span>{faq.question}</span>
                <svg
                  className={`w-5 h-5 sm:w-6 sm:h-6 transform transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="px-4 sm:px-6 lg:px-8 py-2 text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
