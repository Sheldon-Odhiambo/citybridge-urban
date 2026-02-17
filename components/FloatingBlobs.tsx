
import React from 'react';

const FloatingBlobs: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Primary Blob */}
      <div className="absolute top-[10%] -left-[10%] animate-drift opacity-[0.12]">
        <div className="w-[45vw] h-[45vw] bg-primary-500 blur-[120px] animate-morph"></div>
      </div>
      
      {/* Accent Blob */}
      <div className="absolute bottom-[10%] -right-[10%] animate-drift opacity-[0.1] [animation-delay:-7s]">
        <div className="w-[40vw] h-[40vw] bg-accent-teal blur-[100px] animate-morph [animation-delay:-4s]"></div>
      </div>
      
      {/* Secondary Floating Element */}
      <div className="absolute top-1/4 right-1/4 animate-float opacity-[0.08] [animation-delay:-2s]">
        <div className="w-[25vw] h-[25vw] bg-primary-400 blur-[90px] rounded-full"></div>
      </div>

      {/* Center Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse-soft opacity-[0.06] [animation-delay:-3s]">
        <div className="w-[30vw] h-[30vw] bg-primary-300 blur-[100px] rounded-full"></div>
      </div>

      {/* Tiny Moving Accents */}
      <div className="absolute top-[60%] left-[15%] animate-drift opacity-[0.05] [animation-delay:-12s]">
        <div className="w-[15vw] h-[15vw] bg-accent-yellow blur-[60px] animate-morph"></div>
      </div>
    </div>
  );
};

export default FloatingBlobs;
