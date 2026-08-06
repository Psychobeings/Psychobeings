import React from 'react';
import { Star, ExternalLink } from 'lucide-react';

const reviews = [
  {
    quote:
      "As one of her early clients, I can confidently say that she truly embodies the qualities she brings to her profession.She has consistently offered me an empathetic ear, helping me navigate my challenges one step at a time, always at my own pace. Her patience, combined with her skills and expertise, creates a space that feels both safe and constructive. I would wholeheartedly recommend booking an appointment with her — e specially if you’re new to therapy. You’ll be in thoughtful and capable hands.",
    author: "R.R",
    rating: 5,
  },
  {
    quote:
      "Working with Amanpreet has been truly transformative. She provided a grounded, compassionate space for me when I was dealing with severe intrusive suicidal thoughts, giving me actionable coping tools that actually worked. Her therapeutic approach is versatile, thoughtful, and deeply supportive. I felt heard, safe, and never judged. I couldn't recommend her enough to anyone navigating dark or overwhelming moments.",
    author: "L.A",
    rating: 5,
  },
  {
    quote:
      "A very positive experience overall. She is a patient listener and creates a judgement-free space that makes it easy to talk openly. The environment is warm, comfortable, and sessions start right on time with no waiting or delays...",
    author: "A Banerjee",
    rating: 5,
  },
  {
    quote:
      "I had some challenges with stress and communication, and therapy helped me work through them with clarity. She provided so much validation and helped me realise healthier ways to navigate my relationships.",
    author: "P Singh",
    rating: 5,
  },
];

export default function ReviewsSection() {
  return (
    <section className="bg-[#F2F7F7] text-[#1F3A3D] py-16 sm:py-20 px-6 sm:px-8 lg:px-12 font-sans">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
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

        {/* 4-Card Review Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-[2rem] border border-[#1C7C83]/15 p-6 sm:p-7 shadow-sm hover:shadow-md hover:border-[#1C7C83]/30 transition-all duration-300 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                {/* Star Rating */}
                <div className="flex text-amber-400">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>

                {/* Review Quote */}
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  “{review.quote}”
                </p>
              </div>

              {/* Client Signature */}
              <div className="pt-4 border-t border-[#1C7C83]/10">
                <p className="text-xs sm:text-sm font-bold text-[#1F3A3D]">
                  - {review.author}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Button */}
        <div className="text-center pt-4">
          <a
            href="https://google.com" // Replace with your actual Google Reviews link
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#1C7C83] hover:bg-[#135B60] text-white font-medium text-xs sm:text-sm px-8 py-3.5 rounded-full shadow-sm hover:shadow transition-all duration-300"
          >
            Read All Reviews on Google
            <ExternalLink size={14} />
          </a>
        </div>

      </div>
    </section>
  );
}