import { useState, useEffect } from 'react';
import {  BookOpen, Users, Award, Calendar, MapPin, GraduationCap, FileText, Lightbulb } from 'lucide-react';

export default function StoryOfPsychobeings() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeYear, setActiveYear] = useState(2017);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const milestones = [
    { year: 2017, title: "The Journey Begins", desc: "Psychology became more than just a subject of interest" },
    { year: 2019, title: "Building Foundation", desc: "Higher Diploma in Psychology at MDIS Singapore" },
    { year: 2020, title: "International Perspective", desc: "B.Sc. (Hons) in Psychology at Coventry University, UK" },
    { year: 2022, title: "Clinical Expertise", desc: "M.Sc. Clinical Psychology at CMR University, Bangalore" },
    { year: 2023, title: "Psychobeings Born", desc: "Transforming passion into purpose-driven practice" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#097f7f] via-[#0a8f8f] to-[#097f7f] py-20 px-6 md:px-12 lg:px-20 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border border-white rounded-full"></div>
          <div className="absolute top-40 right-20 w-24 h-24 border border-white rounded-full"></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-white rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            
            
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              The Story of Psychobeings
            </h1>
            
            <p className="text-xl sm:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed font-light">
              A path shaped by purpose, growth, and the people we've had the privilege to support along the way.
            </p>

            {/* Journey Stats */}
          
          </div>
        </div>
      </section>

      {/* The Beginning Section */}
      <section className="py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              <div className="inline-flex items-center space-x-3 mb-8">
                <Lightbulb className="w-8 h-8 text-[#097f7f]" />
                <h2 className="text-3xl md:text-4xl font-bold text-[#097f7f]">Taking You Back</h2>
              </div>
              
              <div className="space-y-6">
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  Every story has a beginning — mine started with a <span className="font-semibold text-[#097f7f]">spark of empathy and curiosity</span>.
                </p>
                
                <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-[#097f7f]">
                  <p className="text-gray-700 leading-relaxed">
                    During school, I worked on a project involving children with autism. That experience, 
                    along with seeing a close relative navigate life with a disability, deeply moved me. 
                    It ignited a passion for understanding the human mind and supporting those who feel unheard.
                  </p>
                </div>

                <p className="text-lg text-gray-700 leading-relaxed">
                  My journey with psychology began in <span className="font-bold text-[#097f7f]">2017</span> — and over the past 
                  <span className="font-bold text-[#097f7f]"> 8 years</span>, it has evolved from a subject of interest into a deep, lifelong commitment.
                </p>
              </div>
            </div>

            <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
              <div className="bg-[#097f7f] rounded-2xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full transform translate-x-16 -translate-y-16"></div>
                <div className="relative z-10">
                  <Users className="w-12 h-12 mb-6" />
                  <h3 className="text-2xl font-bold mb-4">The Spark Moment</h3>
                  <blockquote className="text-lg italic leading-relaxed">
                    "Working with children with autism opened my eyes to the profound impact of understanding and compassion. 
                    It wasn't just about helping others — it was about recognizing the strength in vulnerability."
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="bg-gray-50 py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#097f7f] mb-6">Journey Timeline</h2>
            <p className="text-xl text-gray-600">8 years of growth, learning, and purpose-driven education</p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#097f7f] hidden md:block"></div>
            
            {milestones.map((milestone, index) => (
              <div 
                key={milestone.year}
                className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                onMouseEnter={() => setActiveYear(milestone.year)}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#097f7f] rounded-full border-4 border-white shadow-lg z-10 hidden md:block"></div>
                
                {/* Content Card */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className={`bg-white rounded-xl p-6 shadow-lg border-2 transition-all duration-300 ${activeYear === milestone.year ? 'border-[#097f7f] shadow-xl' : 'border-gray-200'}`}>
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="bg-[#097f7f] text-white px-3 py-1 rounded-full text-sm font-bold">
                        {milestone.year}
                      </div>
                      <Calendar className="w-5 h-5 text-[#097f7f]" />
                    </div>
                    <h3 className="text-xl font-bold text-black mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <GraduationCap className="w-16 h-16 text-[#097f7f] mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#097f7f] mb-6">Academic Foundation</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Building expertise through rigorous education across multiple countries and institutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-gray-100 hover:border-[#097f7f] transition-all duration-300 group">
              <div className="flex items-start space-x-4">
                <MapPin className="w-8 h-8 text-[#097f7f] mt-1 group-hover:scale-110 transition-transform" />
                <div>
                  <h3 className="text-xl font-bold text-black mb-2">M.Sc. Clinical Psychology</h3>
                  <p className="text-[#097f7f] font-semibold mb-2">CMR University, Bangalore</p>
                  <p className="text-gray-600">Specialized training in clinical assessment, therapy, and research methodologies</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-gray-100 hover:border-[#097f7f] transition-all duration-300 group">
              <div className="flex items-start space-x-4">
                <MapPin className="w-8 h-8 text-[#097f7f] mt-1 group-hover:scale-110 transition-transform" />
                <div>
                  <h3 className="text-xl font-bold text-black mb-2">B.Sc. (Hons) Psychology</h3>
                  <p className="text-[#097f7f] font-semibold mb-2">Coventry University, UK</p>
                  <p className="text-gray-600">Comprehensive understanding of psychological theories and research methods</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-gray-100 hover:border-[#097f7f] transition-all duration-300 group">
              <div className="flex items-start space-x-4">
                <MapPin className="w-8 h-8 text-[#097f7f] mt-1 group-hover:scale-110 transition-transform" />
                <div>
                  <h3 className="text-xl font-bold text-black mb-2">Higher Diploma in Psychology</h3>
                  <p className="text-[#097f7f] font-semibold mb-2">MDIS, Singapore</p>
                  <p className="text-gray-600">Foundation in psychological principles and practical applications</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research & Impact */}
      <section className="bg-[#097f7f] py-20 px-6 md:px-12 lg:px-20 text-white">
  <div className="max-w-6xl mx-auto">
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      {/* Left Content */}
      <div>
        <div className="flex items-center space-x-3 mb-8">
          <FileText className="w-8 h-8 text-white" />
          <h2 className="text-3xl md:text-4xl font-bold">Research & Publications</h2>
        </div>

        <p className="text-xl text-gray-100 leading-relaxed mb-8">
          Throughout these years, I've explored various aspects of mental health and research, 
          contributing to the academic community and evidence-based practice.
        </p>

        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <Award className="w-6 h-6 text-white" />
            <span className="text-lg">Published on <span className="font-bold text-[#097f7f] bg-white rounded px-2">SSRN</span></span>
          </div>
          <div className="flex items-center space-x-4">
            <Award className="w-6 h-6 text-white" />
            <span className="text-lg">Published on <span className="font-bold text-[#097f7f] bg-white rounded px-2">IJFMR</span></span>
          </div>
        </div>
      </div>

      {/* Right Box */}
      <div className="bg-white text-[#097f7f] rounded-2xl p-8 text-center shadow-lg">
        <BookOpen className="w-16 h-16 mx-auto mb-6 text-[#097f7f]" />
        <h3 className="text-2xl font-bold mb-4">Evidence-Based Practice</h3>
        <p className="text-base text-gray-600 leading-relaxed">
          Each step has strengthened my passion for making mental health support more 
          <span className="font-bold"> informed, compassionate, and accessible</span>.
        </p>
      </div>
    </div>
  </div>
</section>

    </div>
  );
}