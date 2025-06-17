import React from 'react';
import { Factory, Shirt, Candy, Pill, FileText, Building2 } from 'lucide-react';

const Industries = () => {
  const industries = [
    {
      icon: Factory,
      name: 'Leather Tanning',
      description: 'Specialized treatment for tannery effluents with high chromium and organic load.',
      challenges: ['Heavy metal removal', 'High COD treatment', 'Odor control'],
      color: 'from-amber-500 to-orange-500'
    },
    {
      icon: Shirt,
      name: 'Textile & Dyeing Mills',
      description: 'Advanced solutions for dye removal and textile wastewater treatment.',
      challenges: ['Color removal', 'Chemical treatment', 'Water recycling'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Candy,
      name: 'Sugar Mills',
      description: 'Comprehensive treatment for sugar industry effluents and by-products.',
      challenges: ['High organic load', 'Molasses treatment', 'Waste minimization'],
      color: 'from-emerald-500 to-green-500'
    },
    {
      icon: Pill,
      name: 'Pharmaceutical & Beverage',
      description: 'Specialized treatment for pharmaceutical and beverage industry wastewaters.',
      challenges: ['API removal', 'Sterile processing', 'Regulatory compliance'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: FileText,
      name: 'Paper & Pulp',
      description: 'Efficient treatment solutions for paper and pulp industry effluents.',
      challenges: ['Lignin treatment', 'Fiber recovery', 'Black liquor treatment'],
      color: 'from-gray-600 to-gray-700'
    },
    {
      icon: Building2,
      name: 'Municipal Wastewater',
      description: 'Large-scale municipal wastewater treatment and management systems.',
      challenges: ['Population scale', 'Infrastructure optimization', 'Public health'],
      color: 'from-indigo-500 to-blue-600'
    }
  ];

  return (
    <section id="industries" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Industries <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">We Serve</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our biotechnology solutions have been successfully implemented across diverse industrial sectors, 
              addressing unique environmental challenges with tailored approaches.
            </p>
          </div>

          {/* Industries Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {industries.map((industry, index) => {
              const IconComponent = industry.icon;
              
              return (
                <div 
                  key={index}
                  className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-gray-100 overflow-hidden relative"
                >
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  <div className={`w-16 h-16 bg-gradient-to-br ${industry.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors duration-300 relative z-10">
                    {industry.name}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed relative z-10">
                    {industry.description}
                  </p>
                  
                  <div className="space-y-2 relative z-10">
                    <h4 className="font-semibold text-gray-800 text-sm">Key Challenges:</h4>
                    {industry.challenges.map((challenge, challengeIndex) => (
                      <div key={challengeIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3 flex-shrink-0"></div>
                        {challenge}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Statistics Section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 bg-gradient-to-r from-emerald-600 to-blue-600 rounded-2xl p-8 text-white">
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-bold mb-2">500+</h3>
              <p className="text-emerald-100">Industrial Clients</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-bold mb-2">95%</h3>
              <p className="text-emerald-100">Treatment Efficiency</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-bold mb-2">1000+</h3>
              <p className="text-emerald-100">Successful Projects</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-bold mb-2">24/7</h3>
              <p className="text-emerald-100">Technical Support</p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Don't See Your Industry?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              We work with diverse industrial sectors. Contact us to discuss your specific 
              environmental challenges and discover how our biotechnology solutions can help.
            </p>
            <button className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Discuss Your Requirements
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;