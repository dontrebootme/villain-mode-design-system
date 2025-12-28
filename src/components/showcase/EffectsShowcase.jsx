import React from 'react';
import Card from '../ui/Card';

const EffectsShowcase = () => {
  return (
    <section className="py-16 bg-abyssal-purple/30">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl mb-4 text-center">Visual Effects</h2>
        <p className="text-center text-faded-silver mb-12 max-w-2xl mx-auto">
          Hard-edge lighting, glowing borders, and geometric precision. The Villain Mode aesthetic eschews soft shadows for sharp, dramatic effects.
        </p>

        <div className="max-w-4xl mx-auto space-y-12">
          {/* Glowing Borders */}
          <div>
            <h3 className="text-2xl mb-6 text-ultron-cyan">Glowing Borders</h3>
            <Card>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-cosmic-navy border-2 border-infinity-gold p-6 shadow-[0_0_20px_rgba(255,157,0,0.5)]">
                  <p className="text-sm text-infinity-gold mb-2 font-heading">GOLD GLOW</p>
                  <p className="text-xs text-faded-silver">
                    Border glow effect using box-shadow with gold accent color
                  </p>
                </div>
                <div className="bg-cosmic-navy border-2 border-ultron-cyan p-6 shadow-[0_0_20px_rgba(0,255,255,0.5)]">
                  <p className="text-sm text-ultron-cyan mb-2 font-heading">CYAN GLOW</p>
                  <p className="text-xs text-faded-silver">
                    Border glow effect using box-shadow with cyan accent color
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Hard Shadows */}
          <div>
            <h3 className="text-2xl mb-6 text-ultron-cyan">Hard-Edge Shadows</h3>
            <p className="text-sm text-faded-silver mb-4">
              Unlike traditional soft shadows, Villain Mode uses solid offset shadows for sharp, geometric depth.
            </p>
            <Card>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-abyssal-purple border border-infinity-gold p-6 shadow-[4px_4px_0_rgba(255,157,0,0.3)]">
                  <p className="text-sm text-infinity-gold mb-2 font-heading">HARD SHADOW GOLD</p>
                  <p className="text-xs text-faded-silver">
                    4px offset shadow with no blur - pure geometric depth
                  </p>
                </div>
                <div className="bg-abyssal-purple border border-ultron-cyan p-6 shadow-[4px_4px_0_rgba(0,255,255,0.3)]">
                  <p className="text-sm text-ultron-cyan mb-2 font-heading">HARD SHADOW CYAN</p>
                  <p className="text-xs text-faded-silver">
                    Solid shadows maintain the faceted, angular aesthetic
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Rim Lighting */}
          <div>
            <h3 className="text-2xl mb-6 text-ultron-cyan">Rim Lighting Effect</h3>
            <p className="text-sm text-faded-silver mb-4">
              Bright thin borders that separate elements from dark backgrounds, inspired by comic book artwork.
            </p>
            <Card>
              <div className="bg-cosmic-navy p-8">
                <div className="inline-block bg-abyssal-purple p-8 border-l-2 border-t-2 border-infinity-gold">
                  <p className="text-2xl font-heading text-starlight-white mb-2">Illuminated Element</p>
                  <p className="text-sm text-faded-silver">
                    Top and left borders create rim lighting effect
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Diagonal Dividers */}
          <div>
            <h3 className="text-2xl mb-6 text-ultron-cyan">Diagonal Section Breaks</h3>
            <p className="text-sm text-faded-silver mb-4">
              Angular dividers create dynamic movement and maintain the geometric theme.
            </p>
            <Card>
              <div className="relative h-32 bg-cosmic-navy overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-16 bg-abyssal-purple transform -skew-y-2"></div>
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-nebula-magenta transform skew-y-2"></div>
              </div>
              <p className="text-xs text-faded-silver mt-4">
                Using CSS transform: skew-y() to create angled section breaks
              </p>
            </Card>
          </div>

          {/* Gradient Borders */}
          <div>
            <h3 className="text-2xl mb-6 text-ultron-cyan">Gradient Border Effect</h3>
            <p className="text-sm text-faded-silver mb-4">
              Multi-color borders using pseudo-elements for dynamic energy visualization.
            </p>
            <Card>
              <div className="relative">
                <div className="bg-abyssal-purple p-8 border-2 border-transparent relative before:absolute before:inset-0 before:p-[2px] before:bg-gradient-to-r before:from-infinity-gold before:via-ultron-cyan before:to-infinity-gold before:-z-10 before:rounded-none">
                  <p className="text-sm font-heading text-starlight-white mb-2">ENERGY FIELD ACTIVE</p>
                  <p className="text-xs text-faded-silver">
                    Gradient border from gold to cyan to gold - simulating cosmic energy
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Text Effects */}
          <div>
            <h3 className="text-2xl mb-6 text-ultron-cyan">Text Glow Effects</h3>
            <Card>
              <div className="bg-cosmic-navy p-8 text-center space-y-6">
                <h4 className="text-5xl font-heading text-glow-gold">
                  INFINITE POWER
                </h4>
                <p className="text-2xl text-ultron-cyan" style={{ textShadow: '0 0 10px rgba(0, 255, 255, 0.6)' }}>
                  Architect of Chaos
                </p>
                <p className="text-sm text-faded-silver">
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
