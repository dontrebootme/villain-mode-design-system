import React from 'react';
import Card from '../ui/Card';

const EffectsShowcase = () => {
  return (
    <section className="py-16 bg-amethyst/30">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl mb-4 text-center">Visual Effects</h2>
        <p className="text-center text-silver mb-12 max-w-2xl mx-auto">
          Hard-edge lighting, glowing borders, and geometric precision. The Villain Mode aesthetic eschews soft shadows for sharp, dramatic effects.
        </p>

        <div className="max-w-4xl mx-auto space-y-12">
          {/* NEW: Electric Geometric Effects */}
          <div>
            <h3 className="text-2xl mb-6 text-cyan">Electric Geometric Effects</h3>
            <p className="text-sm text-silver mb-4">
              New signature effects: skewed buttons, angled corners, and rim lighting.
            </p>
            <Card>
              <div className="grid md:grid-cols-3 gap-6">
                {/* Skew Button */}
                <div className="bg-midnight-indigo p-6 text-center">
                  <p className="text-sm text-amber mb-4 font-heading">SKEW BUTTON</p>
                  <button className="bg-gradient-to-r from-amber to-gold text-midnight-indigo font-heading font-bold px-6 py-3 skew-button hover:glow-hot transition-all">
                    <span className="unskew-text">ACTION</span>
                  </button>
                  <p className="text-xs text-silver mt-4">
                    transform: skewX(-15deg) with counter-skewed text
                  </p>
                </div>
                {/* Angled Corner */}
                <div className="bg-midnight-indigo p-6 text-center">
                  <p className="text-sm text-cyan mb-4 font-heading">ANGLED CORNER</p>
                  <div className="bg-amethyst border border-grey p-4 clip-angled">
                    <p className="text-white text-sm">Clipped Card</p>
                  </div>
                  <p className="text-xs text-silver mt-4">
                    clip-path: polygon() for corner cuts
                  </p>
                </div>
                {/* Rim Light */}
                <div className="bg-midnight-indigo p-6 text-center">
                  <p className="text-sm text-cyan mb-4 font-heading">RIM LIGHT</p>
                  <div className="bg-amethyst border border-grey p-4 rim-light-cyan">
                    <p className="text-white text-sm">Edge Glow</p>
                  </div>
                  <p className="text-xs text-silver mt-4">
                    box-shadow: -4px 4px 0px hard-edge shadow
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* NEW: Motion & Animation Effects */}
          <div>
            <h3 className="text-2xl mb-6 text-cyan">Motion & Animation</h3>
            <p className="text-sm text-silver mb-4">
              Orchestrated page load reveals, ambient pulses, and micro-interactions.
            </p>
            <Card>
              <div className="grid md:grid-cols-3 gap-6">
                {/* Glow Pulse */}
                <div className="bg-midnight-indigo p-6 text-center">
                  <p className="text-sm text-amber mb-4 font-heading">GLOW PULSE</p>
                  <div className="bg-amethyst border border-cyan p-4 glow-pulse inline-block">
                    <p className="text-white text-sm">Ambient</p>
                  </div>
                  <p className="text-xs text-silver mt-4">
                    Continuous cyan glow animation
                  </p>
                </div>
                {/* Text Glow Pulse */}
                <div className="bg-midnight-indigo p-6 text-center">
                  <p className="text-sm text-cyan mb-4 font-heading">TEXT PULSE</p>
                  <p className="text-3xl font-heading text-glow-pulse">POWER</p>
                  <p className="text-xs text-silver mt-4">
                    Pulsing text-shadow for emphasis
                  </p>
                </div>
                {/* Float Geometric */}
                <div className="bg-midnight-indigo p-6 text-center relative h-32">
                  <p className="text-sm text-cyan mb-4 font-heading">FLOAT</p>
                  <div className="geometric-diamond float-geometric opacity-80" style={{ top: '40%', left: '50%', transform: 'translateX(-50%) rotate(45deg)', width: '40px', height: '40px' }} />
                  <p className="text-xs text-silver absolute bottom-4 left-0 right-0">
                    Floating geometric shapes
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Glowing Borders */}
          <div>
            <h3 className="text-2xl mb-6 text-cyan">Glowing Borders</h3>
            <Card>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-midnight-indigo border-2 border-amber p-6 shadow-[0_0_20px_rgba(255,157,0,0.5)]">
                  <p className="text-sm text-amber mb-2 font-heading">GOLD GLOW</p>
                  <p className="text-xs text-silver">
                    Border glow effect using box-shadow with gold accent color
                  </p>
                </div>
                <div className="bg-midnight-indigo border-2 border-cyan p-6 shadow-[0_0_20px_rgba(0,255,255,0.5)]">
                  <p className="text-sm text-cyan mb-2 font-heading">CYAN GLOW</p>
                  <p className="text-xs text-silver">
                    Border glow effect using box-shadow with cyan accent color
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Hard Shadows */}
          <div>
            <h3 className="text-2xl mb-6 text-cyan">Hard-Edge Shadows</h3>
            <p className="text-sm text-silver mb-4">
              Unlike traditional soft shadows, Villain Mode uses solid offset shadows for sharp, geometric depth.
            </p>
            <Card>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-amethyst border border-amber p-6 shadow-[4px_4px_0_rgba(255,157,0,0.3)]">
                  <p className="text-sm text-amber mb-2 font-heading">HARD SHADOW GOLD</p>
                  <p className="text-xs text-silver">
                    4px offset shadow with no blur - pure geometric depth
                  </p>
                </div>
                <div className="bg-amethyst border border-cyan p-6 shadow-[4px_4px_0_rgba(0,255,255,0.3)]">
                  <p className="text-sm text-cyan mb-2 font-heading">HARD SHADOW CYAN</p>
                  <p className="text-xs text-silver">
                    Solid shadows maintain the faceted, angular aesthetic
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Rim Lighting */}
          <div>
            <h3 className="text-2xl mb-6 text-cyan">Rim Lighting Effect</h3>
            <p className="text-sm text-silver mb-4">
              Bright thin borders that separate elements from dark backgrounds, inspired by comic book artwork.
            </p>
            <Card>
              <div className="bg-midnight-indigo p-8">
                <div className="inline-block bg-amethyst p-8 border-l-2 border-t-2 border-amber">
                  <p className="text-2xl font-heading text-white mb-2">Illuminated Element</p>
                  <p className="text-sm text-silver">
                    Top and left borders create rim lighting effect
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Diagonal Dividers */}
          <div>
            <h3 className="text-2xl mb-6 text-cyan">Diagonal Section Breaks</h3>
            <p className="text-sm text-silver mb-4">
              Angular dividers create dynamic movement and maintain the geometric theme.
            </p>
            <Card>
              <div className="relative h-32 bg-midnight-indigo overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-16 bg-amethyst transform -skew-y-2"></div>
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-magenta transform skew-y-2"></div>
              </div>
              <p className="text-xs text-silver mt-4">
                Using CSS transform: skew-y() to create angled section breaks
              </p>
            </Card>
          </div>

          {/* Gradient Borders */}
          <div>
            <h3 className="text-2xl mb-6 text-cyan">Gradient Border Effect</h3>
            <p className="text-sm text-silver mb-4">
              Multi-color borders using pseudo-elements for dynamic energy visualization.
            </p>
            <Card>
              <div className="relative">
                <div className="bg-amethyst p-8 border-2 border-transparent relative before:absolute before:inset-0 before:p-[2px] before:bg-gradient-to-r before:from-amber before:via-cyan before:to-amber before:-z-10 before:rounded-none">
                  <p className="text-sm font-heading text-white mb-2">ENERGY FIELD ACTIVE</p>
                  <p className="text-xs text-silver">
                    Gradient border from gold to cyan to gold - simulating cosmic energy
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Text Effects */}
          <div>
            <h3 className="text-2xl mb-6 text-cyan">Text Glow Effects</h3>
            <Card>
              <div className="bg-midnight-indigo p-8 text-center space-y-6">
                <h4 className="text-5xl font-heading text-glow-gold">
                  INFINITE POWER
                </h4>
                <p className="text-2xl text-cyan" style={{ textShadow: '0 0 10px rgba(0, 255, 255, 0.6)' }}>
                  Architect of Chaos
                </p>
                <p className="text-sm text-silver">
                  Text shadows create glowing energy effects for important headlines
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EffectsShowcase;
