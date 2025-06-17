import React from 'react';
import { Beaker, Droplets, Zap, FlaskConical, Leaf } from 'lucide-react';

const Products = () => {
  const products = [
    {
      icon: Beaker,
      name: 'Bio-Cultures',
      description: 'Custom microbial blends that break down industrial effluent and hazardous compounds with precision.',
      features: ['Industrial effluent treatment', 'Hazardous compound breakdown', 'Custom formulations', 'High efficiency rates'],
      color: 'emerald'
    },
    {
      icon: Droplets,
      name: 'Bio-Coagulants',
      description: 'Natural coagulants for turbidity removal and suspended-solid settlement in water treatment processes.',
      features: ['Turbidity removal', 'Suspended solid settlement', 'Natural composition', 'Cost-effective'],
      color: 'blue'
    },
    {
      icon: Zap,
      name: 'Micronutrients',
      description: 'Enhances microbial efficiency in bioreactors and treatment systems for optimal performance.',
      features: ['Microbial enhancement', 'Bioreactor optimization', 'Treatment efficiency', 'System stability'],
      color: 'emerald'
    },
    {
      icon: FlaskConical,
      name: 'Biozyme‑OD',
      description: 'Biological formulation for rapid reduction of BOD & COD in wastewater treatment applications.',
      features: ['BOD reduction', 'COD reduction', 'Rapid action', 'Wastewater treatment'],
      color: 'blue'
    },
    {
      icon: Leaf,
      name: 'Enzyme Blends',
      description: 'Specialized enzyme kits ideal for soil bioremediation and industrial effluent treatment.',
      features: ['Soil bioremediation', 'Effluent treatment', 'Enzyme technology', 'Environmental restoration'],
      color: 'emerald'
    }
  ];

  return (
    <section id="products" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Biotech <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">Tools</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our comprehensive range of biotechnology products delivers proven results for industrial wastewater treatment, 
              soil remediation, and environmental restoration.
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => {
              const IconComponent = product.icon;
              const colorClasses = product.color === 'emerald' 
                ? 'from-emerald-500 to-emerald-600 group-hover:from-emerald-600 group-hover:to-emerald-700' 
                : 'from-blue-500 to-blue-600 group-hover:from-blue-600 group-hover:to-blue-700';
              
              return (
                <div 
                  key={index}
                  className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-gray-100"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${colorClasses} rounded-xl flex items-center justify-center mb-6 transition-all duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors duration-300">
                    {product.name}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {product.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className={`w-2 h-2 bg-gradient-to-r ${colorClasses} rounded-full mr-3 flex-shrink-0`}></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <button className="text-emerald-600 font-semibold hover:text-emerald-700 transition-colors duration-300 flex items-center group">
                      Learn More
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center bg-gradient-to-r from-emerald-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Need a Custom Solution?</h3>
            <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
              Our R&D team can develop tailored biotechnology solutions to meet your specific industrial requirements.
            </p>
            <button className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105">
              Contact Our Experts
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;