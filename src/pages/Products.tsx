import React from 'react';
import { motion } from 'framer-motion';
import { Beaker, Droplets, Zap, FlaskConical, Leaf, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';

const Products = () => {
  const products = [
    {
      icon: Beaker,
      name: 'Bio-Cultures',
      description: 'Custom microbial blends that break down industrial effluent and hazardous compounds with precision.',
      features: ['Industrial effluent treatment', 'Hazardous compound breakdown', 'Custom formulations', 'High efficiency rates'],
      color: 'emerald',
      image: 'bg-gradient-to-br from-emerald-400 to-emerald-600'
    },
    {
      icon: Droplets,
      name: 'Bio-Coagulants',
      description: 'Natural coagulants for turbidity removal and suspended-solid settlement in water treatment processes.',
      features: ['Turbidity removal', 'Suspended solid settlement', 'Natural composition', 'Cost-effective'],
      color: 'blue',
      image: 'bg-gradient-to-br from-blue-400 to-blue-600'
    },
    {
      icon: Zap,
      name: 'Micronutrients',
      description: 'Enhances microbial efficiency in bioreactors and treatment systems for optimal performance.',
      features: ['Microbial enhancement', 'Bioreactor optimization', 'Treatment efficiency', 'System stability'],
      color: 'emerald',
      image: 'bg-gradient-to-br from-emerald-500 to-green-600'
    },
    {
      icon: FlaskConical,
      name: 'Biozyme‑OD',
      description: 'Biological formulation for rapid reduction of BOD & COD in wastewater treatment applications.',
      features: ['BOD reduction', 'COD reduction', 'Rapid action', 'Wastewater treatment'],
      color: 'blue',
      image: 'bg-gradient-to-br from-blue-500 to-cyan-600'
    },
    {
      icon: Leaf,
      name: 'Enzyme Blends',
      description: 'Specialized enzyme kits ideal for soil bioremediation and industrial effluent treatment.',
      features: ['Soil bioremediation', 'Effluent treatment', 'Enzyme technology', 'Environmental restoration'],
      color: 'emerald',
      image: 'bg-gradient-to-br from-green-400 to-emerald-600'
    }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {/* Header with Logo */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
               
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Biotech <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">Products</span>
                </h1>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Our comprehensive range of biotechnology products delivers proven results for industrial wastewater treatment, 
                  soil remediation, and environmental restoration.
                </p>
              </motion.div>

              {/* Products Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {products.map((product, index) => {
                  const IconComponent = product.icon;
                  
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -10 }}
                      className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
                    >
                      {/* Product Image/Icon Area */}
                      <div className={`h-48 ${product.image} flex items-center justify-center relative overflow-hidden`}>
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ duration: 0.3 }}
                        >
                          <IconComponent className="w-16 h-16 text-white" />
                        </motion.div>
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300"></div>
                      </div>

                      <div className="p-8">
                        <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors duration-300">
                          {product.name}
                        </h3>
                        
                        <p className="text-gray-600 mb-6 leading-relaxed">
                          {product.description}
                        </p>
                        
                        <ul className="space-y-2 mb-6">
                          {product.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                              <div className={`w-2 h-2 bg-gradient-to-r ${
                                product.color === 'emerald' 
                                  ? 'from-emerald-500 to-emerald-600' 
                                  : 'from-blue-500 to-blue-600'
                              } rounded-full mr-3 flex-shrink-0`}></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                        
                        <button className="text-emerald-600 font-semibold hover:text-emerald-700 transition-colors duration-300 flex items-center group">
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                        </button>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Product Categories */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
              >
                <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-gray-100">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Beaker className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Microbial Solutions</h3>
                  <p className="text-gray-600 text-sm">Custom bio-cultures and enzyme blends for specific applications</p>
                </div>

                <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-gray-100">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Droplets className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Water Treatment</h3>
                  <p className="text-gray-600 text-sm">Specialized products for wastewater and effluent treatment</p>
                </div>

                <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-gray-100">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Leaf className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Soil Remediation</h3>
                  <p className="text-gray-600 text-sm">Environmental restoration and soil treatment solutions</p>
                </div>
              </motion.div>

              {/* CTA Section */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-center bg-gradient-to-r from-emerald-600 to-blue-600 rounded-2xl p-8 text-white"
              >
                <h3 className="text-2xl font-bold mb-4">Need a Custom Solution?</h3>
                <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
                  Our R&D team can develop tailored biotechnology solutions to meet your specific industrial requirements.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105"
                >
                  Contact Our Experts
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Products;