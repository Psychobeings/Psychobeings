import founderImage from '../../assets/Foundersimg2.jpg';

export default function HeroSection() {
  return (
    <section className="bg-[linear-gradient(135deg,#f7fcfb_0%,#ffffff_100%)] px-6 py-16 text-gray-800 md:px-12 lg:px-20 lg:py-20">
      <div className="mx-auto max-w-6xl rounded-[32px] border border-teal-100/80 bg-white/90 p-8 shadow-[0_18px_45px_-20px_rgba(9,127,127,0.24)] backdrop-blur sm:p-10 lg:p-14">
        <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative mx-auto flex w-full max-w-[320px] justify-center sm:max-w-[380px]">
            <div className="absolute inset-0 rounded-full bg-teal-100/70 blur-3xl" />
            <div className="relative w-full max-w-[300px] rounded-[28px] border border-white/70 bg-gradient-to-br from-teal-50 to-white p-3 shadow-xl sm:max-w-[340px]">
              <img
                src={founderImage}
                alt="Amanpreet Kaur"
                className="w-full rounded-[24px] object-cover"
              />
            </div>
          </div>

          <div className="text-left">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-teal-700">
              About the founder
            </p>
            <h2 className="text-3xl font-extrabold tracking-tight text-[#097f7f] sm:text-4xl md:text-5xl">
              Amanpreet Kaur
            </h2>
            <p className="mt-2 text-lg font-semibold text-teal-700 sm:text-xl">
              Founder, Counselling Psychologist
            </p>
            <ul className="mt-6 space-y-3 text-base text-gray-700 sm:text-lg">
              <li className="rounded-2xl border border-slate-100 bg-slate-50/80 px-4 py-3">
                🎓 PhD Scholar in Clinical Psychology — NIILM University, Kaithal
              </li>
              <li className="rounded-2xl border border-slate-100 bg-slate-50/80 px-4 py-3">
                🎓 MSc Clinical Psychology — CMR University, Bangalore
              </li>
              <li className="rounded-2xl border border-slate-100 bg-slate-50/80 px-4 py-3">
                🎓 BSc Psychology Hons — Coventry University, UK
              </li>
              <li className="rounded-2xl border border-slate-100 bg-slate-50/80 px-4 py-3">
                🎓 Higher Diploma in Psychology — Management Development Institute of Singapore
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}