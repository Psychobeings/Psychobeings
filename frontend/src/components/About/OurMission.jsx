import { Heart, Users, Shield, Target, Award, BookOpen } from 'lucide-react';

export default function OurMission() {
  return (
    <section className="bg-white py-12 md:py-16 lg:py-24 px-4 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-[#097f7f] mb-4">
            Our Mission
          </h2>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-5 gap-16 items-center">
          
          {/* Left Icons Column */}
          <div className="flex flex-col space-y-12">
            <div className="text-center group">
              <div className="w-24 h-24 bg-gray-50 hover:bg-[#097f7f] rounded-2xl flex items-center justify-center mx-auto mb-4 transition-all duration-300 shadow-lg">
                <Heart className="w-12 h-12 text-[#097f7f] group-hover:text-white transition-colors duration-300" />
              </div>
              <p className="text-lg text-gray-700 font-semibold">Safe Space</p>
            </div>
            
            <div className="text-center group">
              <div className="w-24 h-24 bg-gray-50 hover:bg-[#097f7f] rounded-2xl flex items-center justify-center mx-auto mb-4 transition-all duration-300 shadow-lg">
                <Users className="w-12 h-12 text-[#097f7f] group-hover:text-white transition-colors duration-300" />
              </div>
              <p className="text-lg text-gray-700 font-semibold">Collaborative</p>
            </div>
            
            <div className="text-center group">
              <div className="w-24 h-24 bg-gray-50 hover:bg-[#097f7f] rounded-2xl flex items-center justify-center mx-auto mb-4 transition-all duration-300 shadow-lg">
                <BookOpen className="w-12 h-12 text-[#097f7f] group-hover:text-white transition-colors duration-300" />
              </div>
              <p className="text-lg text-gray-700 font-semibold">Educational</p>
            </div>
          </div>

          {/* Center Content - 3 columns wide */}
          <div className="col-span-3 text-center px-8">
            <p className="text-2xl text-gray-800 leading-relaxed mb-10 font-light">
              At <span className="font-bold text-[#097f7f] text-3xl">Psychobeings</span>, our mission is to facilitate 
              <span className="font-semibold text-black"> mental well-being, overall growth, and personal development</span> by creating a 
              <span className="font-semibold text-[#097f7f]"> safe, supportive, and collaborative space</span> wherein each and every individual feels 
              <span className="font-semibold text-black"> heard, respected, and valued</span>.
            </p>
            
            <div className="bg-gradient-to-r from-[#097f7f] to-[#0a8f8f] text-white rounded-2xl p-10 shadow-2xl">
              <p className="text-xl leading-relaxed font-medium">
                We have committed ourselves to <span className="font-bold text-2xl">empower all individuals</span> to overcome their challenges, 
                build resilience, and lead fulfilling lives through <span className="font-bold">evidence-based guidance, education, and counseling</span>.
              </p>
            </div>
          </div>

          {/* Right Icons Column */}
          <div className="flex flex-col space-y-12">
            <div className="text-center group">
              <div className="w-24 h-24 bg-gray-50 hover:bg-[#097f7f] rounded-2xl flex items-center justify-center mx-auto mb-4 transition-all duration-300 shadow-lg">
                <Shield className="w-12 h-12 text-[#097f7f] group-hover:text-white transition-colors duration-300" />
              </div>
              <p className="text-lg text-gray-700 font-semibold">Resilience</p>
            </div>
            
            <div className="text-center group">
              <div className="w-24 h-24 bg-gray-50 hover:bg-[#097f7f] rounded-2xl flex items-center justify-center mx-auto mb-4 transition-all duration-300 shadow-lg">
                <Award className="w-12 h-12 text-[#097f7f] group-hover:text-white transition-colors duration-300" />
              </div>
              <p className="text-lg text-gray-700 font-semibold">Evidence-Based</p>
            </div>
            
            <div className="text-center group">
              <div className="w-24 h-24 bg-gray-50 hover:bg-[#097f7f] rounded-2xl flex items-center justify-center mx-auto mb-4 transition-all duration-300 shadow-lg">
                <Target className="w-12 h-12 text-[#097f7f] group-hover:text-white transition-colors duration-300" />
              </div>
              <p className="text-lg text-gray-700 font-semibold">Goal-Oriented</p>
            </div>
          </div>
        </div>

        {/* Mobile and Tablet Layout */}
        <div className="lg:hidden">
          
          {/* Main Content */}
          <div className="text-center mb-8 md:mb-12">
            <p className="text-base md:text-lg lg:text-xl text-gray-800 leading-relaxed mb-6 md:mb-8 font-light">
              At <span className="font-bold text-[#097f7f] text-lg md:text-xl">Psychobeings</span>, our mission is to facilitate 
              <span className="font-semibold text-black"> mental well-being, overall growth, and personal development</span> by creating a 
              <span className="font-semibold text-[#097f7f]"> safe, supportive, and collaborative space</span> wherein each and every individual feels 
              <span className="font-semibold text-black"> heard, respected, and valued</span>.
            </p>
            
            <div className="bg-gradient-to-r from-[#097f7f] to-[#0a8f8f] text-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-xl">
              <p className="text-base md:text-lg leading-relaxed font-medium">
                We have committed ourselves to <span className="font-bold text-lg md:text-xl">empower all individuals</span> to overcome their challenges, 
                build resilience, and lead fulfilling lives through <span className="font-bold">evidence-based guidance, education, and counseling</span>.
              </p>
            </div>
          </div>

          {/* Icons Grid for Mobile/Tablet */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            <div className="text-center">
              <div className="w-16 md:w-20 h-16 md:h-20 bg-gray-50 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-md">
                <Heart className="w-8 md:w-10 h-8 md:h-10 text-[#097f7f]" />
              </div>
              <p className="text-sm md:text-base text-gray-700 font-semibold">Safe Space</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 md:w-20 h-16 md:h-20 bg-gray-50 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-md">
                <Users className="w-8 md:w-10 h-8 md:h-10 text-[#097f7f]" />
              </div>
              <p className="text-sm md:text-base text-gray-700 font-semibold">Collaborative</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 md:w-20 h-16 md:h-20 bg-gray-50 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-md">
                <BookOpen className="w-8 md:w-10 h-8 md:h-10 text-[#097f7f]" />
              </div>
              <p className="text-sm md:text-base text-gray-700 font-semibold">Educational</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 md:w-20 h-16 md:h-20 bg-gray-50 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-md">
                <Shield className="w-8 md:w-10 h-8 md:h-10 text-[#097f7f]" />
              </div>
              <p className="text-sm md:text-base text-gray-700 font-semibold">Resilience</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 md:w-20 h-16 md:h-20 bg-gray-50 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-md">
                <Award className="w-8 md:w-10 h-8 md:h-10 text-[#097f7f]" />
              </div>
              <p className="text-sm md:text-base text-gray-700 font-semibold">Evidence-Based</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 md:w-20 h-16 md:h-20 bg-gray-50 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-md">
                <Target className="w-8 md:w-10 h-8 md:h-10 text-[#097f7f]" />
              </div>
              <p className="text-sm md:text-base text-gray-700 font-semibold">Goal-Oriented</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}