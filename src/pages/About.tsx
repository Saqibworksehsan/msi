import React from 'react';
import { motion } from 'framer-motion';
import { Microscope, Shield, Lightbulb, Target, Award } from 'lucide-react';
import PageTransition from '../components/PageTransition';

const About = () => {
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
                  About <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">MSI Biotech</span>
                </h1>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Founded in 2007 and supported by VIT-TBI, MSI Biotech specializes in enzyme-based and microbial solutions 
                  that reduce pollution in industrial effluent, odor control, and soil remediation.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                {/* Left Content */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="space-y-8"
                >
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      Expert R&D Meets Field-Proven Technology
                    </h2>
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
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="text-center p-4 bg-emerald-50 rounded-lg"
                    >
                      <h4 className="text-2xl font-bold text-emerald-600">2007</h4>
                      <p className="text-sm text-gray-600">Founded</p>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="text-center p-4 bg-blue-50 rounded-lg"
                    >
                      <h4 className="text-2xl font-bold text-blue-600">VIT-TBI</h4>
                      <p className="text-sm text-gray-600">Supported</p>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Right Visual */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="relative"
                >
                  <div className="bg-gradient-to-br from-emerald-100 to-blue-100 rounded-2xl p-8 h-96 flex items-center justify-center">
                    <div className="grid grid-cols-2 gap-6 w-full">
                      <div className="space-y-4">
                        <motion.div
                          animate={{ y: [0, -10, 0] }}
                          transition={{ duration: 3, repeat: Infinity }}
                          className="w-16 h-16 bg-emerald-500 rounded-lg flex items-center justify-center"
                        >
                          <Microscope className="w-8 h-8 text-white" />
                        </motion.div>
                        <motion.div
                          animate={{ y: [0, 10, 0] }}
                          transition={{ duration: 2.5, repeat: Infinity }}
                          className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center"
                        >
                          <Shield className="w-6 h-6 text-white" />
                        </motion.div>
                      </div>
                      <div className="space-y-4 pt-8">
                        <motion.div
                          animate={{ y: [0, -8, 0] }}
                          transition={{ duration: 2.8, repeat: Infinity }}
                          className="w-12 h-12 bg-emerald-400 rounded-lg flex items-center justify-center"
                        >
                          <Lightbulb className="w-6 h-6 text-white" />
                        </motion.div>
                        <motion.div
                          animate={{ y: [0, 12, 0] }}
                          transition={{ duration: 3.2, repeat: Infinity }}
                          className="w-16 h-16 bg-blue-400 rounded-lg flex items-center justify-center"
                        >
                          <Target className="w-8 h-8 text-white" />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Values Grid */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
              >
                {[
                  { icon: Microscope, title: 'Innovation', desc: 'Cutting-edge biotechnology research and development', color: 'emerald' },
                  { icon: Shield, title: 'Sustainability', desc: 'Eco-friendly solutions for environmental protection', color: 'blue' },
                  { icon: Lightbulb, title: 'Expertise', desc: '18+ years of proven industry experience', color: 'emerald' },
                  { icon: Target, title: 'Results', desc: 'Measurable environmental impact and efficiency', color: 'blue' }
                ].map((value, index) => {
                  const IconComponent = value.icon;
                  const colorClasses = value.color === 'emerald' 
                    ? 'from-emerald-50 to-emerald-100 bg-emerald-600' 
                    : 'from-blue-50 to-blue-100 bg-blue-600';
                  
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className={`text-center p-6 bg-gradient-to-br ${colorClasses.split(' ')[0]} ${colorClasses.split(' ')[1]} rounded-xl hover:shadow-lg transition-all duration-300`}
                    >
                      <div className={`w-12 h-12 ${colorClasses.split(' ')[2]} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">{value.title}</h4>
                      <p className="text-sm text-gray-600">{value.desc}</p>
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* Mission & Vision */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                  <p className="text-gray-600 leading-relaxed">
                    To provide innovative, sustainable biotechnology solutions that help industries achieve environmental 
                    compliance while reducing operational costs and environmental impact through cutting-edge enzyme and 
                    microbial technologies.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                  <p className="text-gray-600 leading-relaxed">
                    To be the leading biotechnology company in environmental solutions, recognized globally for our 
                    innovation, reliability, and commitment to creating a cleaner, more sustainable future for industries 
                    and communities worldwide.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default About;