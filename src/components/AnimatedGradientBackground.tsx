import React from 'react';

const AnimatedGradientBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Primary animated gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/80 via-blue-50/60 to-white/90 animate-gradient-shift"></div>
      
      {/* Secondary floating gradients */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-radial from-emerald-200/30 to-transparent rounded-full animate-float-slow"></div>
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-gradient-radial from-blue-200/30 to-transparent rounded-full animate-float-medium"></div>
      <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-gradient-radial from-emerald-300/20 to-transparent rounded-full animate-float-fast"></div>
      
      {/* Subtle mesh overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-white/10"></div>
    </div>
  );
};

export default AnimatedGradientBackground;