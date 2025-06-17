import React from 'react';
import { Settings, Droplets, TreePine, Wind, FlaskConical, BarChart3 } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Settings,
      title: 'Effluent Treatment Plant (ETP/CETP) Stabilization',
      description: 'Comprehensive optimization and stabilization of existing treatment facilities for maximum efficiency.',
      benefits: ['Improved efficiency', 'Reduced operating costs', 'Compliance assurance', 'System reliability']
    },
    {
      icon: Droplets,
      title: 'Sewage Treatment and Bio-augmentation',
      description: 'Advanced biological treatment processes that enhance sewage treatment system performance.',
      benefits: ['Enhanced BOD/COD removal', 'Microbial enhancement', 'System optimization', 'Environmental compliance']
    },
    {
      icon: TreePine,
      title: 'Soil and Solid-waste Bioremediation',
      description: 'Innovative soil restoration techniques using specialized microbial and enzyme technologies.',
      benefits: ['Soil restoration', 'Contamination removal', 'Sustainable methods', 'Long-term effectiveness']
    },
    {
      icon: Wind,
      title: 'Odor Control Solutions',
      description: 'Effective biological odor control systems for industrial facilities and treatment plants.',
      benefits: ['Odor elimination', 'Improved air quality', 'Non-toxic methods', 'Cost-effective solutions']
    },
    {
      icon: FlaskConical,
      title: 'On-site Lab Analysis',
      description: 'Comprehensive water and soil testing services with detailed analytical reports.',
      benefits: ['Accurate testing', 'Quick results', 'Detailed reports', 'Expert analysis']
    },
    {
      icon: BarChart3,
      title: 'Process Optimization',
      description: 'Data-driven optimization strategies to enhance treatment efficiency and reduce operational costs.',
      benefits: ['Performance monitoring', 'Cost reduction', 'Efficiency gains', 'System upgrades']
    }
  ];

  return (
    <section id="services" className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive biotechnology services designed to address your environmental challenges 
              with proven methodologies and expert support.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              
              return (
                <div 
                  key={index}
                  className="group bg-gray-50 hover:bg-white rounded-2xl p-8 transition-all duration-500 hover:shadow-xl border border-gray-100 hover:border-emerald-200"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-2">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3 flex-shrink-0"></div>
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Process Flow */}
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 md:p-12 border border-gray-100">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Our Service Process
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                A systematic approach to delivering exceptional results for your environmental challenges.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Assessment', description: 'Comprehensive site analysis and requirement evaluation' },
                { step: '02', title: 'Solution Design', description: 'Custom biotechnology solution development' },
                { step: '03', title: 'Implementation', description: 'Professional installation and system integration' },
                { step: '04', title: 'Monitoring', description: 'Ongoing support and performance optimization' }
              ].map((phase, index) => (
                <div key={index} className="text-center relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                    {phase.step}
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{phase.title}</h4>
                  <p className="text-sm text-gray-600">{phase.description}</p>
                  
                  {/* Connector Line */}
                  {index < 3 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-emerald-300 to-blue-300 -translate-y-1/2 -z-10"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;