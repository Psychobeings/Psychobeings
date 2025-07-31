export default function LanguageSupport() {
  const languages = [
    {
      name: "English",
      message: "Feel heard and understood.",
      class: "bg-[#f2f2f2]",
    },
    {
      name: "हिंदी",
      message: "अपनी बात खुलकर कहें।",
      class: "bg-[#f2f2f2]",
    },
  ];

  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-5xl mx-auto text-center space-y-8">
        <h2 className="text-3xl md:text-4xl font-bold text-[#097f7f]">
          Speak Freely, Be Understood
        </h2>
        <p className="text-lg md:text-xl text-gray-700 font-medium leading-relaxed">
          We offer sessions and mentorship in <span className="font-bold text-[#097f7f]">English</span> and <span className="font-bold text-[#097f7f]">Hindi</span> to ensure you feel heard, understood, and supported in the language you're most comfortable with.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8">
  {languages.map((lang, index) => (
    <div
      key={index}
      className="bg-white rounded-xl shadow-md p-6 transition duration-300 transform hover:-translate-y-1 hover:bg-[#e6f4f4]"
    >
      <h3 className="text-2xl font-semibold text-[#097f7f] mb-2">{lang.name}</h3>
      <p className="text-gray-700 text-lg">{lang.message}</p>
    </div>
  ))}
</div>
      </div>
    </section>
  );
}

