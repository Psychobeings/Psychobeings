import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

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
        'Yes. Psychobeings offers in-person sessions at Faridabad, as well as online sessions for clients in India and internationally.',
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
    <section className="bg-[#F2F7F7] text-[#1F3A3D] py-16 sm:py-20 px-6 sm:px-8 lg:px-12 font-sans">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E6F0F0] border border-[#1C7C83]/20 text-[#1C7C83] text-xs font-semibold tracking-wider uppercase">
            Got Questions?
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1F3A3D] tracking-tight">
            Frequently Asked <span className="italic font-normal text-[#1C7C83]">Questions</span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed pt-1">
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
                className="bg-white rounded-[1.5rem] border border-[#1C7C83]/15 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  className="w-full flex justify-between items-center px-6 sm:px-8 py-5 text-left text-base sm:text-lg font-serif font-bold text-[#1F3A3D] hover:text-[#1C7C83] transition-colors focus:outline-none"
                  onClick={() => handleToggle(index)}
                >
                  <span className="pr-4 leading-snug">{faq.question}</span>
                  <div
                    className={`shrink-0 flex items-center justify-center w-8 h-8 rounded-full transition-colors duration-300 ${
                      isOpen
                        ? 'bg-[#1C7C83] text-white'
                        : 'bg-[#E6F0F0] text-[#1C7C83]'
                    }`}
                  >
                    <ChevronDown
                      className={`w-5 h-5 transform transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
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
                    <p className="px-6 sm:px-8 pb-6 text-sm sm:text-base text-gray-600 leading-relaxed border-t border-[#1C7C83]/10 pt-4">
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