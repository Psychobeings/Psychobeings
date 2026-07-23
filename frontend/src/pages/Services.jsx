import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const therapyServices = [
  {
    title: 'Individual Therapy',
    description:
      'One-on-one therapy for anxiety, stress, self-esteem, relationship concerns, emotional regulation, burnout, and life transitions.',
    link: '/services/individual-therapy',
  },
  {
    title: 'Child Therapy',
    description:
      'Therapy and counselling for children and adolescents to support emotional wellbeing, behaviour, academic pressure, social confidence, and family adjustment.',
    link: '/services/child-counselling',
  },
];

const programServices = [
  {
    title: 'Corporate Wellness',
    description:
      'Wellbeing programs for workplaces that include mental health workshops, employee support, stress management, burnout prevention, and leadership resilience.',
  },
  {
    title: 'Workshops',
    description:
      'Interactive workshops for schools, colleges, organisations, and communities focused on stress reduction, emotional wellbeing, communication skills, and resilience building.',
  },
];

const therapyConcerns = [
  'Anxiety and panic',
  'Depression and low mood',
  'Stress, burnout, and overwhelm',
  'Emotional regulation and self-esteem',
  'Academic pressure and school stress',
  'Family, relationship, and attachment challenges',
];

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#F8FBFB] text-slate-900">
      <section className="bg-teal-700 text-white pt-24 pb-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-teal-200 mb-4">Psychobeings</p>
          <h1 className="text-5xl font-bold mb-6">Therapy, Programs, and Support Tailored for You</h1>
          <p className="text-lg max-w-3xl mx-auto text-teal-100 leading-8">
            Discover individual and child therapy, corporate wellness, workshops, and session options designed to improve emotional wellbeing, resilience, and personal growth.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.3em] text-teal-700 font-semibold">Therapy</p>
          <h2 className="text-4xl font-bold mt-4">Individual & Child Therapy</h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto leading-7">
            Our therapy services support people of all ages through life challenges with a compassionate, evidence-based approach.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {therapyServices.map((service) => (
            <Link
              key={service.title}
              to={service.link}
              className="group block rounded-[32px] border border-slate-200 bg-white p-10 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <h3 className="text-2xl font-semibold mb-4 text-slate-900">{service.title}</h3>
              <p className="text-slate-600 leading-7 mb-6">{service.description}</p>
              <span className="text-teal-700 font-semibold group-hover:text-teal-900">Learn more →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.3em] text-teal-700 font-semibold">What concerns we work on in therapy</p>
            <h2 className="text-4xl font-bold mt-4">Common Concerns We Support</h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {therapyConcerns.map((concern) => (
              <div key={concern} className="rounded-3xl border border-slate-200 bg-slate-50 p-6 text-slate-700 shadow-sm">
                <p className="text-lg font-medium">{concern}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.3em] text-teal-700 font-semibold">Programs</p>
          <h2 className="text-4xl font-bold mt-4">What Is Included In These Programs</h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto leading-7">
            Our programs are designed to build wellbeing and resilience through practical mental health training, supportive conversations, and group learning.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {programServices.map((program) => (
            <div key={program.title} className="rounded-[32px] border border-slate-200 bg-white p-10 shadow-sm">
              <h3 className="text-2xl font-semibold mb-4 text-slate-900">{program.title}</h3>
              <p className="text-slate-600 leading-7">{program.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.3em] text-teal-700 font-semibold">Session Details</p>
            <h2 className="text-4xl font-bold mt-4">Start with one session, continue with a plan if it feels right.</h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto leading-7">
              We recommend beginning with a single session to understand your needs before choosing a package.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-[32px] border border-slate-200 bg-white p-10 shadow-sm">
              <h3 className="text-2xl font-semibold mb-4">Single Session</h3>
              <p className="text-3xl font-bold text-teal-700 mb-4">₹1700</p>
              <p className="text-slate-600 leading-7 mb-6">One-on-one individual therapy session for adults.</p>
              <a
                href="https://www.layacounselling.in/booking.html"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full bg-teal-700 px-6 py-3 text-white font-semibold hover:bg-teal-800 transition"
              >
                Book Session
              </a>
              <p className="mt-4 text-slate-600 font-medium">Recommended</p>
            </div>

            <div className="space-y-8">
              <div className="rounded-[32px] border border-slate-200 bg-white p-10 shadow-sm">
                <h3 className="text-2xl font-semibold mb-4">Packages</h3>
                <p className="text-slate-600 leading-7 mb-6">
                  Session plans are available for continued work, consistency and deeper emotional processing.
                </p>
                <a
                  href="https://www.layacounselling.in/packages.html"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-full bg-slate-900 px-6 py-3 text-white font-semibold hover:bg-slate-800 transition"
                >
                  View Packages
                </a>
              </div>

              <div className="rounded-[32px] border border-slate-200 bg-white p-10 shadow-sm">
                <h3 className="text-2xl font-semibold mb-4">Format</h3>
                <p className="text-3xl font-bold text-teal-700 mb-4">Online & In-Person</p>
                <p className="text-slate-600 leading-7 mb-6">
                  Choose the format that feels accessible and comfortable for you.
                </p>
                <a
                  href="https://www.layacounselling.in/contact.html"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-full bg-white px-6 py-3 text-teal-700 font-semibold border border-teal-700 hover:bg-teal-50 transition"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.3em] text-teal-700 font-semibold">Program Details</p>
          <h2 className="text-4xl font-bold mt-4">Start with one session, continue with a plan if it feels right.</h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto leading-7">
            We recommend beginning with a single program session to understand your organisation's needs before choosing a package.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-[32px] border border-slate-200 bg-white p-10 shadow-sm">
            <h3 className="text-2xl font-semibold mb-4">Single Session</h3>
            <p className="text-3xl font-bold text-teal-700 mb-4">₹1700</p>
            <p className="text-slate-600 leading-7 mb-6">One-on-one or small-group program session for teams, workshops, or corporate wellness.</p>
            <a
              href="https://www.layacounselling.in/booking.html"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full bg-teal-700 px-6 py-3 text-white font-semibold hover:bg-teal-800 transition"
            >
              Book Session
            </a>
            <p className="mt-4 text-slate-600 font-medium">Recommended</p>
          </div>

          <div className="space-y-8">
            <div className="rounded-[32px] border border-slate-200 bg-white p-10 shadow-sm">
              <h3 className="text-2xl font-semibold mb-4">Packages</h3>
              <p className="text-slate-600 leading-7 mb-6">
                Program plans are available for continued learning, team development and workplace wellbeing.
              </p>
              <a
                href="https://www.layacounselling.in/packages.html"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full bg-slate-900 px-6 py-3 text-white font-semibold hover:bg-slate-800 transition"
              >
                View Packages
              </a>
            </div>

            <div className="rounded-[32px] border border-slate-200 bg-white p-10 shadow-sm">
              <h3 className="text-2xl font-semibold mb-4">Format</h3>
              <p className="text-3xl font-bold text-teal-700 mb-4">Online & In-Person</p>
              <p className="text-slate-600 leading-7 mb-6">
                Choose the format that feels accessible and comfortable for your team or group.
              </p>
              <a
                href="https://www.layacounselling.in/contact.html"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full bg-white px-6 py-3 text-teal-700 font-semibold border border-teal-700 hover:bg-teal-50 transition"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.3em] text-teal-700 font-semibold">Locations</p>
            <h2 className="text-4xl font-bold mt-4">Find Us on Google Maps</h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto leading-7">
              Visit our centre or connect online. Use the map below to locate us and get directions.
            </p>
          </div>

          <div className="overflow-hidden rounded-[32px] border border-slate-200 shadow-sm">
            <iframe
              title="Psychobeings Location"
              className="w-full h-[420px] border-0"
              src="https://www.google.com/maps/embed/v1/place?q=Psychobeings&key=YOUR_GOOGLE_MAPS_EMBED_API_KEY"
              allowFullScreen
              loading="lazy"
            />
          </div>

          <p className="mt-4 text-center text-slate-600">
            If the map does not load, search <span className="font-semibold">Psychobeings</span> on Google Maps for directions.
          </p>
        </div>
      </section>

      <section className="bg-teal-700 text-white py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-teal-200 mb-4">Begin Your Journey</p>
          <h2 className="text-4xl font-bold mb-6">Ready to take the next step?</h2>
          <p className="text-lg leading-8 max-w-3xl mx-auto mb-10 text-teal-100">
            Begin with a single session or choose a package that fits your needs. We provide warm, professional support for your emotional wellbeing.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href="https://booking.myndspace.app/amanp"
              target="_blank"
              rel="noreferrer"
              className="inline-flex justify-center rounded-full bg-white px-8 py-4 text-teal-700 font-semibold shadow-lg hover:bg-slate-100 transition"
            >
              Book a Session
            </a>
            <Link
              to="/contact"
              className="inline-flex justify-center rounded-full border border-white bg-transparent px-8 py-4 text-white font-semibold hover:bg-white/10 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
