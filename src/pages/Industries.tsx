import React from 'react';
import { motion } from 'framer-motion';
import { Factory, Shirt, Candy, Pill, FileText, Building2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';

const Industries = () => {
  const industries = [
    {
      icon: Factory,
      name: 'Leather Tanning',
      description: 'Specialized treatment for tannery effluents with high chromium and organic load.',
      challenges: ['Heavy metal removal', 'High COD treatment', 'Odor control'],
      color: 'from-amber-500 to-orange-500',
      stats: { clients: '50+', efficiency: '92%' }
    },
    {
      icon: Shirt,
      name: 'Textile & Dyeing Mills',
      description: 'Advanced solutions for dye removal and textile wastewater treatment.',
      challenges: ['Color removal', 'Chemical treatment', 'Water recycling'],
      color: 'from-purple-500 to-pink-500',
      stats: { clients: '80+', efficiency: '95%' }
    },
    {
      icon: Candy,
      name: 'Sugar Mills',
      description: 'Comprehensive treatment for sugar industry effluents and by-products.',
      challenges: ['High organic load', 'Molasses treatment', 'Waste minimization'],
      color: 'from-emerald-500 to-green-500',
      stats: { clients: '30+', efficiency: '90%' }
    },
    {
      icon: Pill,
      name: 'Pharmaceutical & Beverage',
      description: 'Specialized treatment for pharmaceutical and beverage industry wastewaters.',
      challenges: ['API removal', 'Sterile processing', 'Regulatory compliance'],
      color: 'from-blue-500 to-cyan-500',
      stats: { clients: '40+', efficiency: '96%' }
    },
    {
      icon: FileText,
      name: 'Paper & Pulp',
      description: 'Efficient treatment solutions for paper and pulp industry effluents.',
      challenges: ['Lignin treatment', 'Fiber recovery', 'Black liquor treatment'],
      color: 'from-gray-600 to-gray-700',
      stats: { clients: '25+', efficiency: '88%' }
    },
    {
      icon: Building2,
      name: 'Municipal Wastewater',
      description: 'Large-scale municipal wastewater treatment and management systems.',
      challenges: ['Population scale', 'Infrastructure optimization', 'Public health'],
      color: 'from-indigo-500 to-blue-600',
      stats: { clients: '15+', efficiency: '94%' }
    }
  ];

  const stats = [
    { number: '500+', label: 'Industrial Clients' },
    { number: '95%', label: 'Treatment Efficiency' },
    { number: '1000+', label: 'Successful Projects' },
    { number: '24/7', label: 'Technical Support' }
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
                  Industries <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">We Serve</span>
                </h1>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Our biotechnology solutions have been successfully implemented across diverse industrial sectors, 
                  addressing unique environmental challenges with tailored approaches.
                </p>
              </motion.div>

              {/* Industries Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {industries.map((industry, index) => {
                  const IconComponent = industry.icon;
                  
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -10 }}
                      className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden relative"
                    >
                      {/* Background Gradient */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                      
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className={`w-16 h-16 bg-gradient-to-br ${industry.color} rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 relative z-10`}
                      >
                        <IconComponent className="w-8 h-8 text-white" />
                      </motion.div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors duration-300 relative z-10">
                        {industry.name}
                      </h3>
                      
                      <p className="text-gray-600 mb-6 leading-relaxed relative z-10">
                        {industry.description}
                      </p>
                      
                      <div className="space-y-2 mb-6 relative z-10">
                        <h4 className="font-semibold text-gray-800 text-sm">Key Challenges:</h4>
                        {industry.challenges.map((challenge, challengeIndex) => (
                          <div key={challengeIndex} className="flex items-center text-sm text-gray-600">
                            <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3 flex-shrink-0"></div>
                            {challenge}
                          </div>
                        ))}
                      </div>

                      {/* Stats */}
                      <div className="flex justify-between pt-4 border-t border-gray-100 relative z-10">
                        <div className="text-center">
                          <div className="text-lg font-bold text-emerald-600">{industry.stats.clients}</div>
                          <div className="text-xs text-gray-500">Clients</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-blue-600">{industry.stats.efficiency}</div>
                          <div className="text-xs text-gray-500">Efficiency</div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Statistics Section */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="grid grid-cols-1 md:grid-cols-4 gap-8 bg-gradient-to-r from-emerald-600 to-blue-600 rounded-2xl p-8 text-white mb-16"
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    className="text-center"
                  >
                    <h3 className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</h3>
                    <p className="text-emerald-100">{stat.label}</p>
                  </motion.div>
                ))}
              </motion.div>

              {/* Industry Expertise */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
              >
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Expertise</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                      Industrial wastewater characterization and treatment design
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                      Regulatory compliance and environmental standards
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                      Process optimization and cost reduction strategies
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                      24/7 technical support and maintenance services
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Us</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      18+ years of proven industry experience
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      Custom solutions tailored to specific industry needs
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      Sustainable and eco-friendly biotechnology approach
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      Comprehensive support from design to implementation
                    </li>
                  </ul>
                </div>
              </motion.div>

              {/* Call to Action */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="text-center bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Don't See Your Industry?
                </h3>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                  We work with diverse industrial sectors. Contact us to discuss your specific 
                  environmental challenges and discover how our biotechnology solutions can help.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-gradient-to-r from-emerald-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  Discuss Your Requirements
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

export default Industries;