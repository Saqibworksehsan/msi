import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Services from "./pages/Services";
import Industries from "./pages/Industries";
import Contact from "./pages/Contact";

function App() {
  return (
    // 👇 tell React Router it lives under /msi
    <Router basename="/msi">
      <div className="min-h-screen bg-white relative">
        <Header />

        <AnimatePresence mode="wait">
          <Routes>
            {/* 👇 now relative to /msi */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/services" element={<Services />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>

        <Footer />

        {/* WhatsApp Floating Button */}
        <div className="fixed bottom-6 right-6 z-50">
          <a
            href="https://wa.me/918015670885?text=Hi%20MSI%20Biotech,%20I%20would%20like%20to%20know%20more%20about%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center"
            aria-label="Chat with us on WhatsApp"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.03 22l5.25-1.38c1.45.79 3.08 1.21 4.76 1.21 5.46 0 9.91-4.45 9.91-9.91s-4.45-9.91-9.91-9.91zm0 16c-1.48 0-2.91-.39-4.16-1.09l-.29-.18-3.03.8.81-2.94-.21-.34C4.69 12.68 4 11.4 4 10c0-4.42 3.58-8 8-8s8 3.58 8 8-3.58 8-8 8zm4.58-6.59c-.25-.12-1.47-.72-1.7-.81s-.39-.12-.56.12-.64.81-.78.97-.29.19-.54.06c-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72s-.01-.39.11-.51c.11-.11.25-.29.37-.44s.17-.25.25-.41.03-.31-.03-.44-.56-1.34-.76-1.84c-.2-.5-.41-.43-.56-.44s-.31-.03-.48-.03c-.17 0-.44.06-.67.31s-.88 1-.88 2.44 1.4 2.83 1.59 3.03s2.72 2.49 4.31 2.88 2.59-.25 3.03-.44.97-.62 1.09-.97.17-.69.17-.97-.06-.38-.31-.5z" />
            </svg>
          </a>
        </div>
      </div>
    </Router>
  );
}

export default App;
