import React from 'react';
import { ArrowRight, Play, Award, Users, Zap } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-emerald-100 px-4 py-2 rounded-full mb-8 animate-fade-in-up">
            <Award className="w-4 h-4 text-emerald-600" />
            <span className="text-emerald-800 font-medium">Trusted Since 2007 • VIT-TBI Supported</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight animate-fade-in-up animation-delay-200">
            <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
              Eco‑Friendly Biotech
            </span>
            <br />
            <span className="text-gray-800">Solutions for Industrial</span>
            <br />
            <span className="text-gray-800">Wastewater & Soil Treatment</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400">
            Empowering industries with enzyme & microbial innovations since 2007. 
            We combine expert R&D with field-proven technology to reduce pollution and enhance sustainability.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in-up animation-delay-600">
            <button
              onClick={() => scrollToSection('contact')}
              className="group bg-gradient-to-r from-emerald-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2"
            >
              <span>Request a Demo</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="group border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg hover:border-emerald-600 hover:text-emerald-600 transition-all duration-300 flex items-center space-x-2"
            >
              <Play className="w-5 h-5" />
              <span>Get Free Consultation</span>
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-800">
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-lg mx-auto mb-3">
                <Award className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">18+</h3>
              <p className="text-gray-600">Years Experience</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-3">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">500+</h3>
              <p className="text-gray-600">Clients Served</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-lg mx-auto mb-3">
                <Zap className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">95%</h3>
              <p className="text-gray-600">Efficiency Rate</p>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-emerald-50/30 to-blue-50/30 -z-10"></div>
    </section>
  );
};

export default Hero;