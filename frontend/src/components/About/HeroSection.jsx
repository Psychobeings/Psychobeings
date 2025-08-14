import founderImage from '../../assets/Foundersimg2.jpg'; // Adjust the path as necessary

export default function HeroSection() {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-20 bg-gradient-to-br from-gray-50 via-white to-slate-100 text-gray-800">
      <div className="max-w-3xl mx-auto text-center">
        {/* Blob + Circular Photo */}
       {/* Container with bigger width */}
<div className="relative mx-auto w-[20rem] sm:w-[26rem] aspect-square transform transition-all duration-700 hover:scale-105">
  {/* Blob background remains same */}
  <svg
    viewBox="0 0 500 500"
    className="absolute inset-0 w-full h-full -z-10 drop-shadow-xl transition-all duration-1000 animate-pulse"
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="about-blob-grad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#10b981" />
        <stop offset="100%" stopColor="#14b8a6" />
      </linearGradient>
    </defs>
    <path
      fill="url(#about-blob-grad)"
      d="M421,310Q367,370,310,418Q253,466,188,424Q123,382,84,318Q45,254,80,184Q115,114,184,86Q253,58,324,86Q395,114,434,184Q473,254,421,310Z"
      className="transition-all duration-1000"
    />
  </svg>

  {/* Larger image */}
  <img
    src={founderImage}
    alt="Amanpreet Kaur"
    className="absolute inset-0 m-auto w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full object-cover ring-4 ring-white shadow-2xl transition-all duration-500 hover:ring-8 hover:ring-emerald-100 hover:shadow-3xl"
  />
</div>


        {/* Content with reduced gap and smooth animations */}
        <div className="mt-6 transform transition-all duration-700 delay-300 opacity-0 animate-fade-in">
          {/* Name */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#097f7f] transition-colors duration-300 hover:text-emerald-600">
            Amanpreet Kaur
          </h2>

          {/* Role */}
          <p className="mt-1 text-teal-700 font-semibold text-lg sm:text-xl transition-all duration-300 hover:text-teal-800">
            Founder, Psychologist
          </p>

          {/* Qualifications */}
          <ul className="mt-5 space-y-2 text-gray-700 text-base sm:text-lg">
            <li className="transform transition-all duration-500 delay-100 hover:translate-x-2 hover:text-teal-700">
              🎓 MSc Clinical Psychology — CMR University, Bangalore
            </li>
            <li className="transform transition-all duration-500 delay-200 hover:translate-x-2 hover:text-teal-700">
              🎓 BSc Psychology Hons — Coventry University, UK
            </li>
            <li className="transform transition-all duration-500 delay-300 hover:translate-x-2 hover:text-teal-700">
              🎓 Higher Diploma in Psychology — Management Development Institute of Singapore
            </li>
          </ul>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
      `}</style>
    </section>
  );
}