import React from 'react';
import Card from '../ui/Card';
import Badge from '../ui/Badge';

const CardShowcase = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl mb-4 text-center">Cards & Containers</h2>
        <p className="text-center text-faded-silver mb-12 max-w-2xl mx-auto">
          Faceted containers with sharp corners and glowing gradient borders on hover. Perfect for showcasing projects, content, and data.
        </p>

        <div className="max-w-4xl mx-auto space-y-12">
          {/* Basic Card */}
          <div>
            <h3 className="text-2xl mb-6 text-ultron-cyan">Basic Card</h3>
            <Card>
              <h4 className="text-xl mb-3">Standard Container</h4>
              <p className="text-faded-silver">
                Abyssal Purple background with Facet Grey border. Sharp corners define the geometric aesthetic.
              </p>
            </Card>
          </div>

          {/* Hover Card */}
          <div>
            <h3 className="text-2xl mb-6 text-ultron-cyan">Interactive Card (Hover Me)</h3>
            <Card hover>
              <h4 className="text-xl mb-3 text-infinity-gold">Power-Enhanced Container</h4>
              <p className="text-faded-silver mb-4">
                Hover to reveal the gradient border glow (gold to cyan) and shadow effect. This creates a sense of energy and interactivity.
              </p>
              <div className="flex gap-2">
                <Badge variant="gold">FEATURED</Badge>
                <Badge variant="cyan">INTERACTIVE</Badge>
              </div>
            </Card>
          </div>

          {/* Card Grid */}
          <div>
            <h3 className="text-2xl mb-6 text-ultron-cyan">Card Grid</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Card hover>
                <h4 className="text-lg mb-2 text-infinity-gold">Project One</h4>
                <p className="text-sm text-faded-silver mb-3">
                  A demonstration of the card component in a grid layout with hover effects.
                </p>
                <Badge variant="gold">ACTIVE</Badge>
              </Card>

              <Card hover>
                <h4 className="text-lg mb-2 text-ultron-cyan">Project Two</h4>
                <p className="text-sm text-faded-silver mb-3">
                  Each card maintains consistent spacing and styling throughout the system.
                </p>
                <Badge variant="cyan">COMPLETE</Badge>
              </Card>

              <Card hover>
                <h4 className="text-lg mb-2 text-infinity-gold">Project Three</h4>
                <p className="text-sm text-faded-silver mb-3">
                  Sharp geometric design with glowing accents creates visual hierarchy.
                </p>
                <Badge variant="gold">NEW</Badge>
              </Card>

              <Card hover>
                <h4 className="text-lg mb-2">Project Four</h4>
                <p className="text-sm text-faded-silver mb-3">
                  Hover over any card to see the gradient border and glow effect in action.
                </p>
                <Badge variant="red">ALERT</Badge>
              </Card>
            </div>
          </div>

          {/* Stats Card Example */}
          <div>
            <h3 className="text-2xl mb-6 text-ultron-cyan">Stats Card Example</h3>
            <Card>
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <p className="text-4xl font-heading text-infinity-gold mb-2">∞</p>
                  <p className="text-sm text-faded-silver">Power Level</p>
                </div>
                <div>
                  <p className="text-4xl font-heading text-ultron-cyan mb-2">6</p>
                  <p className="text-sm text-faded-silver">Infinity Stones</p>
                </div>
                <div>
                  <p className="text-4xl font-heading text-starlight-white mb-2">100%</p>
                  <p className="text-sm text-faded-silver">Chaos Level</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardShowcase;
