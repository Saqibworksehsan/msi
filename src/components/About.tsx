import React from 'react';
import { Microscope, Shield, Lightbulb, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              About <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">MSI Biotech</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Founded in 2007 and supported by VIT-TBI, MSI Biotech specializes in enzyme-based and microbial solutions 
              that reduce pollution in industrial effluent, odor control, and soil remediation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Expert R&D Meets Field-Proven Technology
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  We combine cutting-edge research and development with real-world application expertise to deliver 
                  sustainable biotechnology solutions that make a measurable environmental impact.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Our team of biochemists, environmental engineers, and field specialists work together to create 
                  innovative solutions tailored to your specific industrial challenges.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-emerald-50 rounded-lg">
                  <h4 className="text-2xl font-bold text-emerald-600">2007</h4>
                  <p className="text-sm text-gray-600">Founded</p>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <h4 className="text-2xl font-bold text-blue-600">VIT-TBI</h4>
                  <p className="text-sm text-gray-600">Supported</p>
                </div>
              </div>
            </div>

            {/* Right Image/Visual */}
            <div className="relative">
              <div className="bg-gradient-to-br from-emerald-100 to-blue-100 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-6 w-full">
                  <div className="space-y-4">
                    <div className="w-16 h-16 bg-emerald-500 rounded-lg flex items-center justify-center">
                      <Microscope className="w-8 h-8 text-white" />
                    </div>
                    <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="space-y-4 pt-8">
                    <div className="w-12 h-12 bg-emerald-400 rounded-lg flex items-center justify-center">
                      <Lightbulb className="w-6 h-6 text-white" />
                    </div>
                    <div className="w-16 h-16 bg-blue-400 rounded-lg flex items-center justify-center">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Microscope className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Innovation</h4>
              <p className="text-sm text-gray-600">Cutting-edge biotechnology research and development</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Sustainability</h4>
              <p className="text-sm text-gray-600">Eco-friendly solutions for environmental protection</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Expertise</h4>
              <p className="text-sm text-gray-600">18+ years of proven industry experience</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Results</h4>
              <p className="text-sm text-gray-600">Measurable environmental impact and efficiency</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;