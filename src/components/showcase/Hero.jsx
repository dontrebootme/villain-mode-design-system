import React from 'react';

const Hero = () => {
  return (
    <section className="relative py-24 mb-16 overflow-hidden">
      {/* Floating Geometric Decorations */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Diamond - top left */}
        <div
          className="geometric-diamond float-geometric opacity-60"
          style={{ top: '15%', left: '8%', animationDelay: '0s' }}
        />
        {/* Diamond - top right */}
        <div
          className="geometric-diamond float-geometric opacity-40"
          style={{ top: '20%', right: '12%', width: '40px', height: '40px', animationDelay: '2s' }}
        />
        {/* Triangle - left side */}
        <div
          className="geometric-triangle float-geometric opacity-50"
          style={{ top: '60%', left: '5%', animationDelay: '1s' }}
        />
        {/* Triangle - right side */}
        <div
          className="geometric-triangle float-geometric opacity-30"
          style={{ top: '30%', right: '8%', transform: 'rotate(180deg)', animationDelay: '3s' }}
        />
        {/* Accent lines */}
        <div
          className="geometric-line"
          style={{ top: '40%', left: '15%', transform: 'rotate(-30deg)' }}
        />
        <div
          className="geometric-line"
          style={{ top: '70%', right: '20%', transform: 'rotate(20deg)', width: '150px' }}
        />
      </div>

      {/* Main Content - Staggered Animations */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-7xl md:text-9xl mb-6 text-glow-pulse tracking-tight animate-in delay-1">
          VILLAIN MODE
        </h1>
        <h2 className="text-3xl md:text-5xl mb-6 text-cyan font-heading animate-in delay-2">
          Design System
        </h2>
        <p className="text-xl md:text-2xl text-silver max-w-2xl mx-auto mb-4 animate-in delay-3">
          Electric Geometric • Vibrant Low-Poly
        </p>
        <p className="text-base text-silver max-w-3xl mx-auto animate-in delay-4">
          A bold, high-contrast design system featuring sharp angular geometry,
          split lighting effects, and dynamic motion. Built for interfaces that demand attention.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex justify-center gap-6 animate-in delay-5">
          <button className="btn-gradient-primary text-midnight-indigo font-heading font-bold uppercase tracking-[1.5px] px-8 py-4 skew-button hover:glow-hot transition-all">
            <span className="unskew-text">Explore</span>
          </button>
          <button className="bg-transparent border-2 border-cyan text-cyan font-heading font-bold uppercase tracking-[1.5px] px-8 py-4 skew-button hover:bg-cyan hover:text-midnight-indigo transition-all">
            <span className="unskew-text">GitHub</span>
          </button>
        </div>
      </div>

      {/* Ambient glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-amber/5 rounded-full blur-3xl pointer-events-none" />

      {/* Diagonal section break with scan line effect */}
      <div className="absolute bottom-0 left-0 right-0 h-20 overflow-hidden scan-line">
        <div className="absolute inset-0 bg-amethyst transform -skew-y-2 translate-y-10"></div>
      </div>
    </section>
  );
};

export default Hero;
