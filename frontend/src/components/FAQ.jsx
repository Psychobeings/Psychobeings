import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'How can I book a session?',
      answer:
        'You can book directly through our booking page. For Workshop or Mentorship programs, you may also contact us first to check suitability.',
    },
    {
      question: 'Are my sessions confidential?',
      answer:
        'Absolutely. All sessions are conducted in a secure and private environment, ensuring your confidentiality is maintained at all times. The only exceptions are rare legal circumstances where there is an immediate risk of harm to yourself or others.',
    },
    {
      question: 'Do you offer in-person and online sessions?',
      answer:
        'Yes. Psychobeings offers in-person sessions at Faridabad and Hyderabad, as well as online sessions for clients in India and internationally.',
    },
    {
      question: 'What approaches are used at Psychobeings?',
      answer:
        'We integrate psychotherapy, CBT, DBT, Mindfulness, Emotional Regulation tools, Breathwork, and Relaxation approaches where suitable.',
    },
    {
      question: 'Do I need a diagnosis to begin therapy?',
      answer:
        'No. You do not need a formal diagnosis to begin therapy. Our services support individuals seeking personal growth, emotional wellbeing, and coping strategies for various life challenges. Screening and assessment may be conducted to tailor the therapy accordingly. If a psychiatric referral is needed, we will guide you through the process.',
    },
    {
      question: 'How long are counseling sessions?',
      answer:
        'A standard counseling session lasts between 45 to 60 minutes. However, the duration may vary based on your individual needs and concerns.',
    },
    {
      question: 'How many sessions will I need?',
      answer:
        'The duration varies depending on individual concerns and goals. Some clients seek short-term counseling for specific events, while others prefer ongoing therapy to address broader issues.',
    },
    {
      question: 'What if I am running late or need to cancel?',
      answer:
        'If you are late, the time is typically deducted from your session duration to respect the therapist’s schedule. Cancellations generally require 24 to 48 hours notice to avoid being charged for the missed appointment.',
    },
    {
      question: 'What happens in the first session?',
      answer:
        'Your first meeting is an intake session where you and your counselor discuss your background, current concerns, and goals for therapy. The psychologist will explain the therapy process and confidentiality, establish boundaries, and answer any questions you may have.',
    },
    {
      question: 'What if I do not know what to talk about?',
      answer:
        'That is completely fine. Many people feel unsure where to begin. Your counselor will ask gentle, open-ended questions to guide the conversation and help you open up at a pace that feels comfortable for you.',
    },
  ];

  return (
    <section className="bg-gray-50 text-gray-900 py-16 sm:py-24 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-sm font-semibold tracking-wider text-indigo-600 uppercase">
            Got Questions?
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Everything you need to know about our counseling process, sessions, and approaches.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  className="w-full flex justify-between items-center px-6 py-5 text-left text-base sm:text-lg font-semibold text-gray-900 hover:text-indigo-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
                  onClick={() => handleToggle(index)}
                >
                  <span className="pr-4">{faq.question}</span>
                  <div
                    className={`flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 transition-colors duration-200 ${
                      isOpen ? 'bg-indigo-50 text-indigo-600' : 'text-gray-500'
                    }`}
                  >
                    <svg
                      className={`w-5 h-5 transform transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
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
                  </div>
                </button>

                <div
                  id={`faq-answer-${index}`}
                  role="region"
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? 'grid-rows-[1fr] opacity-100'
                      : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-sm sm:text-base text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;