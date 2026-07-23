import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'How can I book a Session?',
      answer:
        'You can book directly through our booking page. For Workshop or Mentorship programs, you may also contact us first to check suitability.',
    },
    {
      question: 'Are my sessions confidential?',
      answer:
        'Absolutely. All sessions are conducted in a secure and private environment, ensuring your confidentiality is maintained at all times. Except in rare legal circumstances where there is an immediate risk of harm to yourself or others',
    },
    {
      question: 'Do you offer In-Person and Online sessions?',
      answer:
        'Yes. Psychobeings offers in-person sessions at Faridabad, Hyderabad and online sessions for clients in India and Internationally.',
    },
    {
      question: 'What are the approaches used at Psychobeings?',
      answer:
        'We integrate psychotherapy, CBT, DBT, Mindfulness, Emotional Regulation tools, Breathwork and Relaxation approaches where suitable.',
    },
    {
      question: 'Do I need a diagnosis to begin therapy?',
      answer:
        'No. You do not need a formal diagnosis to begin therapy. Our services are designed to support individuals seeking personal growth, emotional wellbeing, and coping strategies for various life challenges. Screening and assessment may be conducted to understand your needs better and tailor the therapy accordingly and if psychiatric referral is needed, we will guide you through the process.',
    },
    {
      question: 'How long are sessions? ',
      answer:
        'A standard counseling session lasts between 45 to 60 minutes.',
    },
    {
      question: 'How many sessions will I need?',
      answer:
         'The duration varies depending on individual concerns and goals. Some seek short-term counseling for specific events, while others prefer ongoing therapy to address broader issues.',
    },
    {
      question: 'How long are the counseling sessions?',
      answer:
        'Sessions typically last between 45 to 60 minutes. However, the duration may vary based on your individual needs and concerns.',
    },
    {
      question: 'What if I amrunning late or need to cancel?',
      answer:
        'If you are late, the time is typically deducted from your session duration to respect the therapists schedule. Cancellations generally require 24 to 48 hours notice to avoid being charged for the missed appointment.',
    },
    {
      question: 'What happens in the first session?',
      answer:
        'Your first meeting is an intake session where you and your counselor will discuss your background, current concerns, and what you hope to achieve through therapy. It is also a chance to establish boundaries and discuss how you will work together. The Psychologist will explain the therapy process, confidentiality, and answer any questions you may have.',
    },
    {
      question: 'What if I do not know what to talk about? ',
      answer:
        'That is completely fine. Many people feel unsure where to begin. Your counselor will ask gentle, open-ended questions to guide the conversation and help you open up at a pace that feels comfortable for you',
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
