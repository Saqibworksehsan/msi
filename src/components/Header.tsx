import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import Logo from './Logo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Services', path: '/services' },
    { name: 'Industries', path: '/industries' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="hover:scale-105 transition-transform duration-300">
            <Logo size="md" />
          </Link>

          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-gray-700 hover:text-emerald-600 transition-colors duration-300 font-medium relative ${
                  location.pathname === item.path ? 'text-emerald-600' : ''
                }`}
              >
                {item.name}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-emerald-600"
                  />
                )}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/contact"
              className="px-4 py-2 border-2 border-emerald-600 text-emerald-600 rounded-lg hover:bg-emerald-600 hover:text-white transition-all duration-300"
            >
              Get Consultation
            </Link>
            <Link
              to="/contact"
              className="px-4 py-2 bg-gradient-to-r from-emerald-600 to-blue-600 text-white rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Request Demo
            </Link>
          </div>

          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div 
        initial={false}
        animate={{ height: isMenuOpen ? 'auto' : 0, opacity: isMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="lg:hidden overflow-hidden"
      >
        <div className="bg-white/95 backdrop-blur-md border-t border-gray-200">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block py-2 text-gray-700 hover:text-emerald-600 transition-colors duration-300 ${
                  location.pathname === item.path ? 'text-emerald-600 font-semibold' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 space-y-2">
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full px-4 py-2 border-2 border-emerald-600 text-emerald-600 rounded-lg hover:bg-emerald-600 hover:text-white transition-all duration-300 text-center"
              >
                Get Consultation
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full px-4 py-2 bg-gradient-to-r from-emerald-600 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 text-center"
              >
                Request Demo
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Header;