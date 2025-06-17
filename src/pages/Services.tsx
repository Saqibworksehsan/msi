import React from 'react';
import { motion } from 'framer-motion';
import { Settings, Droplets, TreePine, Wind, FlaskConical, BarChart3, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import Logo from '../components/Logo';

const Services = () => {
  const services = [
    {
      icon: Settings,
      title: 'Effluent Treatment Plant (ETP/CETP) Stabilization',
      description: 'Comprehensive optimization and stabilization of existing treatment facilities for maximum efficiency.',
      benefits: ['Improved efficiency', 'Reduced operating costs', 'Compliance assurance', 'System reliability'],
      color: 'emerald'
    },
    {
      icon: Droplets,
      title: 'Sewage Treatment and Bio-augmentation',
      description: 'Advanced biological treatment processes that enhance sewage treatment system performance.',
      benefits: ['Enhanced BOD/COD removal', 'Microbial enhancement', 'System optimization', 'Environmental compliance'],
      color: 'blue'
    },
    {
      icon: TreePine,
      title: 'Soil and Solid-waste Bioremediation',
      description: 'Innovative soil restoration techniques using specialized microbial and enzyme technologies.',
      benefits: ['Soil restoration', 'Contamination removal', 'Sustainable methods', 'Long-term effectiveness'],
      color: 'green'
    },
    {
      icon: Wind,
      title: 'Odor Control Solutions',
      description: 'Effective biological odor control systems for industrial facilities and treatment plants.',
      benefits: ['Odor elimination', 'Improved air quality', 'Non-toxic methods', 'Cost-effective solutions'],
      color: 'cyan'
    },
    {
      icon: FlaskConical,
      title: 'On-site Lab Analysis',
      description: 'Comprehensive water and soil testing services with detailed analytical reports.',
      benefits: ['Accurate testing', 'Quick results', 'Detailed reports', 'Expert analysis'],
      color: 'purple'
    },
    {
      icon: BarChart3,
      title: 'Process Optimization',
      description: 'Data-driven optimization strategies to enhance treatment efficiency and reduce operational costs.',
      benefits: ['Performance monitoring', 'Cost reduction', 'Efficiency gains', 'System upgrades'],
      color: 'indigo'
    }
  ];

  const processSteps = [
    { step: '01', title: 'Assessment', description: 'Comprehensive site analysis and requirement evaluation' },
    { step: '02', title: 'Solution Design', description: 'Custom biotechnology solution development' },
    { step: '03', title: 'Implementation', description: 'Professional installation and system integration' },
    { step: '04', title: 'Monitoring', description: 'Ongoing support and performance optimization' }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: string } = {
      emerald: 'from-emerald-500 to-emerald-600',
      blue: 'from-blue-500 to-blue-600',
      green: 'from-green-500 to-green-600',
      cyan: 'from-cyan-500 to-cyan-600',
      purple: 'from-purple-500 to-purple-600',
      indigo: 'from-indigo-500 to-indigo-600'
    };
    return colorMap[color] || 'from-emerald-500 to-blue-600';
  };

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
                <div className="flex justify-center mb-8">
                  <Logo size="lg" />
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Our <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">Services</span>
                </h1>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Comprehensive biotechnology services designed to address your environmental challenges 
                  with proven methodologies and expert support.
                </p>
              </motion.div>

              {/* Services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {services.map((service, index) => {
                  const IconComponent = service.icon;
                  
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -10 }}
                      className="group bg-white hover:bg-gradient-to-br hover:from-gray-50 hover:to-white rounded-2xl p-8 transition-all duration-500 hover:shadow-xl border border-gray-100 hover:border-emerald-200"
                    >
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className={`w-14 h-14 bg-gradient-to-br ${getColorClasses(service.color)} rounded-xl flex items-center justify-center mb-6 transition-transform duration-300`}
                      >
                        <IconComponent className="w-7 h-7 text-white" />
                      </motion.div>
                      
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
                    </motion.div>
                  );
                })}
              </div>

              {/* Process Flow */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="bg-white rounded-2xl p-8 md:p-12 border border-gray-100 shadow-lg mb-16"
              >
                <div className="text-center mb-12">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    Our Service Process
                  </h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    A systematic approach to delivering exceptional results for your environmental challenges.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  {processSteps.map((phase, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                      className="text-center relative"
                    >
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg shadow-lg"
                      >
                        {phase.step}
                      </motion.div>
                      <h4 className="font-semibold text-gray-900 mb-2">{phase.title}</h4>
                      <p className="text-sm text-gray-600">{phase.description}</p>
                      
                      {/* Connector Line */}
                      {index < 3 && (
                        <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-emerald-300 to-blue-300 -translate-y-1/2 -z-10"></div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Service Categories */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
              >
                <div className="text-center p-6 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Settings className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Treatment Solutions</h3>
                  <p className="text-gray-600 text-sm">ETP/CETP optimization and sewage treatment services</p>
                </div>

                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <TreePine className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Environmental Restoration</h3>
                  <p className="text-gray-600 text-sm">Soil bioremediation and odor control solutions</p>
                </div>

                <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Analysis & Optimization</h3>
                  <p className="text-gray-600 text-sm">Lab analysis and process optimization services</p>
                </div>
              </motion.div>

              {/* CTA Section */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="text-center bg-gradient-to-r from-emerald-600 to-blue-600 rounded-2xl p-8 text-white"
              >
                <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
                <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
                  Contact our experts today to discuss your environmental challenges and discover how our services can help.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105"
                >
                  Schedule Consultation
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

export default Services;