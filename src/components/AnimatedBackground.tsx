import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* DNA Strands */}
      <div className="absolute top-20 left-10 w-6 h-6 opacity-10">
        <div className="animate-float-slow">
          <svg viewBox="0 0 24 24" fill="none" className="text-emerald-400">
            <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" stroke="currentColor" strokeWidth="2" fill="currentColor"/>
          </svg>
        </div>
      </div>
      
      <div className="absolute top-40 right-20 w-8 h-8 opacity-10">
        <div className="animate-float-medium">
          <svg viewBox="0 0 24 24" fill="none" className="text-blue-400">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="currentColor"/>
            <circle cx="12" cy="8" r="2" fill="white"/>
            <circle cx="8" cy="16" r="2" fill="white"/>
            <circle cx="16" cy="16" r="2" fill="white"/>
          </svg>
        </div>
      </div>

      <div className="absolute top-60 left-1/4 w-5 h-5 opacity-10">
        <div className="animate-float-fast">
          <svg viewBox="0 0 24 24" fill="none" className="text-emerald-300">
            <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" fill="currentColor"/>
          </svg>
        </div>
      </div>

      <div className="absolute bottom-40 right-10 w-7 h-7 opacity-10">
        <div className="animate-rotate-slow">
          <svg viewBox="0 0 24 24" fill="none" className="text-blue-300">
            <path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20Z" fill="currentColor"/>
            <circle cx="12" cy="8" r="2" fill="white"/>
            <circle cx="8" cy="16" r="1.5" fill="white"/>
            <circle cx="16" cy="16" r="1.5" fill="white"/>
          </svg>
        </div>
      </div>

      <div className="absolute top-80 right-1/3 w-4 h-4 opacity-10">
        <div className="animate-pulse-slow">
          <svg viewBox="0 0 24 24" fill="none" className="text-emerald-500">
            <polygon points="12,2 15.09,8.26 22,9 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9 8.91,8.26" fill="currentColor"/>
          </svg>
        </div>
      </div>

      {/* More molecular structures */}
      <div className="absolute bottom-20 left-1/3 w-6 h-6 opacity-10">
        <div className="animate-float-medium">
          <svg viewBox="0 0 24 24" fill="none" className="text-blue-400">
            <path d="M12 2L22 8.5V15.5L12 22L2 15.5V8.5L12 2Z" stroke="currentColor" strokeWidth="2" fill="none"/>
            <circle cx="12" cy="8.5" r="1.5" fill="currentColor"/>
            <circle cx="12" cy="15.5" r="1.5" fill="currentColor"/>
            <circle cx="7" cy="12" r="1" fill="currentColor"/>
            <circle cx="17" cy="12" r="1" fill="currentColor"/>
          </svg>
        </div>
      </div>

      <div className="absolute top-1/3 left-20 w-5 h-5 opacity-10">
        <div className="animate-rotate-slow">
          <svg viewBox="0 0 24 24" fill="none" className="text-emerald-400">
            <path d="M12 2L15.5 8.5L22 12L15.5 15.5L12 22L8.5 15.5L2 12L8.5 8.5L12 2Z" fill="currentColor"/>
          </svg>
        </div>
      </div>

      {/* Gradient overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/20 via-transparent to-blue-50/20"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent"></div>
    </div>
  );
};

export default AnimatedBackground;