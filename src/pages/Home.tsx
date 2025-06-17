import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Award, Users, Zap, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedGradientBackground from '../components/AnimatedGradientBackground';
import ParticleBackground from '../components/ParticleBackground';
import Logo from '../components/Logo';

const Home = () => {
  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <AnimatedGradientBackground />
      <ParticleBackground />
      
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Logo showcase */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <Logo size="xl" className="justify-center" />
            </motion.div>

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="inline-flex items-center space-x-2 bg-emerald-100 px-4 py-2 rounded-full mb-8"
            >
              <Award className="w-4 h-4 text-emerald-600" />
              <span className="text-emerald-800 font-medium">Trusted Since 2007 • VIT-TBI Supported</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight"
            >
              <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                Eco‑Friendly Biotech
              </span>
              <br />
              <span className="text-gray-800">Solutions for Industrial</span>
              <br />
              <span className="text-gray-800">Wastewater & Soil Treatment</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              Empowering industries with enzyme & microbial innovations since 2007. 
              We combine expert R&D with field-proven technology to reduce pollution and enhance sustainability.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
            >
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-emerald-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2"
              >
                <span>Request a Demo</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                to="/contact"
                className="group border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg hover:border-emerald-600 hover:text-emerald-600 transition-all duration-300 flex items-center space-x-2"
              >
                <Play className="w-5 h-5" />
                <span>Get Free Consultation</span>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto"
            >
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
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          onClick={scrollToNext}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-emerald-600 transition-colors duration-300"
        >
          <ChevronDown className="w-8 h-8 animate-bounce" />
        </motion.button>
      </section>

      {/* Quick overview section */}
      <section className="py-20 bg-white/80 backdrop-blur-sm relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Leading Environmental <span className="text-emerald-600">Biotechnology</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Founded in 2007 and supported by VIT-TBI, MSI Biotech specializes in enzyme-based and microbial solutions 
              that reduce pollution in industrial effluent, odor control, and soil remediation.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Link to="/products" className="group p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-600 transition-colors duration-300">
                  <Award className="w-6 h-6 text-emerald-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Biotech Products</h3>
                <p className="text-sm text-gray-600">Custom solutions for every industry</p>
              </Link>
              <Link to="/services" className="group p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                  <Users className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Expert Services</h3>
                <p className="text-sm text-gray-600">Comprehensive environmental solutions</p>
              </Link>
              <Link to="/industries" className="group p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-600 transition-colors duration-300">
                  <Zap className="w-6 h-6 text-emerald-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Industries Served</h3>
                <p className="text-sm text-gray-600">Diverse sector expertise</p>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;