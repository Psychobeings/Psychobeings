import React from 'react';
import TCard from './TCard';

const TESTIMONIALS = [
  {
    id: 1,
    rating: 5,
    comment:
      "This is a sample testimonial just to see how everything looks on the actual site and nothing else. I just want to see how things are moving around.",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
    clientName: "Ananya Sharma",
    role: "Verified Client",
    serviceUsed: "Individual Therapy",
  },
  {
    id: 2,
    rating: 5,
    comment:
      "The support and guidance I received have been incredible. Psychobeings truly cares about mental well-being, and I felt that in every session I attended.",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    clientName: "Rohan Mehta",
    role: "Verified Client",
    serviceUsed: "Online Counselling",
  },
  {
    id: 3,
    rating: 5,
    comment:
      "I've found a safe space at Psychobeings. Every session helps me to understand myself better, and I am beyond grateful for this experience.",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
    clientName: "Priya Nair",
    role: "Verified Client",
    serviceUsed: "Personal Growth",
  },
  {
    id: 4,
    rating: 5,
    comment:
      "Psychobeings has changed my outlook. They genuinely care about each individual, and that compassion shines through in their approach and support.",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
    clientName: "Vikram Malhotra",
    role: "Verified Client",
    serviceUsed: "Stress & Burnout",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-xs font-bold uppercase tracking-widest text-[#0a7272] mb-2">
            Real Transformations
          </h2>
          <p className="text-2xl sm:text-3xl font-bold text-slate-900">
            What our clients share about their journey
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs flex flex-col justify-between"
            >
              <div>
                {/* Star Rating */}
                <div className="flex items-center gap-1 text-amber-400 mb-3">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                {/* Testimonial Quote */}
                <p className="text-sm text-slate-700 italic leading-relaxed mb-4">
                  "{item.comment}"
                </p>
              </div>

              {/* Client Info Footer */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <img
                  src={item.avatar}
                  alt={item.clientName}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-xs font-bold text-slate-900">
                    {item.clientName}
                  </h4>
                  <p className="text-[11px] text-slate-500">
                    {item.role} •{" "}
                    <span className="text-[#0a7272]">{item.serviceUsed}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;