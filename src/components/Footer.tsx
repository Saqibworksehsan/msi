import React from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";
import Logo from "./Logo";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border border-emerald-400 rounded-full"></div>
        <div className="absolute top-40 right-20 w-16 h-16 border border-blue-400 rounded-lg rotate-45"></div>
        <div className="absolute bottom-20 left-1/3 w-12 h-12 border border-emerald-300 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Logo size="md" showText={true} className="text-white" />
            <p className="text-gray-300 leading-relaxed">
              Leading environmental biotechnology company specializing in
              enzyme-based and microbial solutions for industrial wastewater
              treatment and soil remediation since 2007.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-colors duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-pink-600 transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Products", path: "/products" },
                { name: "Services", path: "/services" },
                { name: "Industries", path: "/industries" },
                { name: "Contact", path: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-gray-300 hover:text-emerald-400 transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">
              <Link
                to="/services"
                className="hover:text-emerald-400 transition-colors"
              >
                Our Services
              </Link>
            </h4>
            <ul className="space-y-3 text-gray-300">
              <li className="hover:text-emerald-400 transition-colors duration-300 cursor-pointer">
                <Link
                  to="/services"
                  className="hover:text-emerald-400 transition-colors duration-300"
                >
                  ETP/CETP Stabilization
                </Link>
              </li>
              <li className="hover:text-emerald-400 transition-colors duration-300 cursor-pointer">
                <Link
                  to="/services"
                  className="hover:text-emerald-400 transition-colors duration-300"
                >
                  Sewage Treatment
                </Link>
              </li>
              <li className="hover:text-emerald-400 transition-colors duration-300 cursor-pointer">
                <Link
                  to="/services"
                  className="hover:text-emerald-400 transition-colors duration-300"
                >
                  Soil Bioremediation
                </Link>
              </li>
              <li className="hover:text-emerald-400 transition-colors duration-300 cursor-pointer">
                <Link
                  to="/services"
                  className="hover:text-emerald-400 transition-colors duration-300"
                >
                  Odor Control
                </Link>
              </li>
              <li className="hover:text-emerald-400 transition-colors duration-300 cursor-pointer">
                <Link
                  to="/services"
                  className="hover:text-emerald-400 transition-colors duration-300"
                >
                  Lab Analysis
                </Link>
              </li>
              <li className="hover:text-emerald-400 transition-colors duration-300 cursor-pointer">
                <Link
                  to="/services"
                  className="hover:text-emerald-400 transition-colors duration-300"
                >
                  Process Optimization
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-sm leading-relaxed">
                  No. 1380, Old Street, Amburpet
                  <br />
                  Vaniyambadi – 635751
                  <br />
                  Tamil Nadu, India
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  <p>+91 99436 26076</p>
                  <p>+91 80156 70885</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  <p>info@msibiotech.com</p>
                  <p>msibiotech2009@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} MSI Biotech. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-emerald-400 transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-emerald-400 transition-colors duration-300"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-emerald-400 transition-colors duration-300"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
