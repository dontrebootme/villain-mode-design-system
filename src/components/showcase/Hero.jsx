import React from 'react';

const Hero = () => {
  return (
    <section className="relative py-20 mb-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-7xl md:text-8xl mb-6 text-glow-gold tracking-tight">
          VILLAIN MODE
        </h1>
        <h2 className="text-3xl md:text-4xl mb-4 text-ultron-cyan font-heading">
          Design System
        </h2>
        <p className="text-xl text-faded-silver max-w-2xl mx-auto mb-2">
          Infinite Power • Architect of Chaos
        </p>
        <p className="text-base text-faded-silver max-w-3xl mx-auto">
          A bold, high-contrast design system inspired by cosmic energy and geometric precision.
          Sharp angles, glowing accents, and faceted aesthetics define this technically advanced visual language.
        </p>
      </div>

      {/* Diagonal section break */}
      <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden">
        <div className="absolute inset-0 bg-abyssal-purple transform -skew-y-2 translate-y-8"></div>
      </div>
    </section>
  );
};

export default Hero;
