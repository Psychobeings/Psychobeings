import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    quote:
      "As one of her early clients, I can confidently say that she truly embodies the qualities she brings to her profession. She has consistently offered me an empathetic ear, helping me navigate my challenges one step at a time, always at my own pace. Her patience, combined with her skills and expertise, creates a space that feels both safe and constructive. I would wholeheartedly recommend booking an appointment with her — especially if you’re new to therapy.",
    author: "R.R",
    rating: 5,
  },
  {
    quote:
      "Working with Amanpreet has been truly transformative. She provided a grounded, compassionate space for me when I was dealing with severe intrusive suicidal thoughts, giving me actionable coping tools that actually worked. Her therapeutic approach is versatile, thoughtful, and deeply supportive. I felt heard, safe, and never judged.",
    author: "L.A",
    rating: 5,
  },
  {
    quote:
      "Super organized and always prepared, which makes every session feel smooth. Very warm, supportive, and easy to talk to.",
    author: "J.D",
    rating: 4,
  },
  {
    quote:
      "I had some challenges with stress and communication, and therapy helped me work through them with clarity. She provided so much validation and helped me realise healthier ways to navigate my relationships.",
    author: "P. Singh",
    rating: 5,
  },
];

export default function ReviewsSection() {
  // Duplicate list to achieve seamless looping
  const duplicatedReviews = [...reviews, ...reviews];

  return (
    <section className="bg-[#F2F7F7] text-[#1F3A3D] py-16 sm:py-24 px-4 sm:px-6 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 px-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1F3A3D] tracking-tight">
            What clients say about <span className="italic font-normal text-[#1C7C83]">Psychobeings</span>.
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Trusted by clients for compassionate therapy, emotional safety, and professional support.
          </p>

          {/* Centered Rating Badge */}
          <div className="pt-2 flex justify-center">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-[#1C7C83]/20 shadow-sm text-xs sm:text-sm font-semibold text-[#1F3A3D]">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={15} fill="currentColor" />
                ))}
              </div>
              <span>5.0 Google Rating</span>
            </div>
          </div>
        </div>

        {/* Continuous Slider Wrapper */}
        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex w-max gap-6 animate-marquee hover:[animation-play-state:paused]">
            {duplicatedReviews.map((review, index) => (
              <div
                key={index}
                className="w-[300px] sm:w-[380px] shrink-0 bg-white rounded-2xl border border-[#1C7C83]/15 p-6 shadow-sm hover:shadow-md hover:border-[#1C7C83]/30 transition-all duration-300 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  {/* Star Rating */}
                  <div className="flex text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>

                  {/* Review Quote */}
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed line-clamp-6">
                    “{review.quote}”
                  </p>
                </div>

                {/* Client Signature */}
                <div className="pt-3 border-t border-[#1C7C83]/10">
                  <p className="text-xs sm:text-sm font-bold text-[#1F3A3D]">
                    - {review.author}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Tailwind Custom Keyframes for Smooth Marquee */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
      `}</style>
    </section>
  );
}
