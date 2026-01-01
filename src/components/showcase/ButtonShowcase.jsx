import React from 'react';
import Button from '../ui/Button';

const ButtonShowcase = () => {
  return (
    <section className="py-16 bg-amethyst/30">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl mb-4 text-center">Buttons</h2>
        <p className="text-center text-silver mb-12 max-w-2xl mx-auto">
          Sharp, angular, and glowing. Buttons look like concentrated energy facets with zero border radius and intense hover effects.
        </p>

        <div className="max-w-4xl mx-auto space-y-12">
          {/* Primary Buttons */}
          <div>
            <h3 className="text-2xl mb-6 text-cyan">Primary Buttons</h3>
            <p className="text-sm text-silver mb-4">
              Gold gradient background with sharp corners. Hover intensifies the glow.
            </p>
            <div className="bg-amethyst border border-grey p-8">
              <div className="flex flex-wrap gap-4 items-center">
                <Button size="small">Small</Button>
                <Button size="medium">Medium</Button>
                <Button size="large">Large</Button>
                <Button size="medium" disabled>Disabled</Button>
              </div>
            </div>
          </div>

          {/* Secondary Buttons */}
          <div>
            <h3 className="text-2xl mb-6 text-cyan">Secondary Buttons</h3>
            <p className="text-sm text-silver mb-4">
              Transparent with cyan border. Fills with solid cyan on hover.
            </p>
            <div className="bg-amethyst border border-grey p-8">
              <div className="flex flex-wrap gap-4 items-center">
                <Button variant="secondary" size="small">Small</Button>
                <Button variant="secondary" size="medium">Medium</Button>
                <Button variant="secondary" size="large">Large</Button>
                <Button variant="secondary" size="medium" disabled>Disabled</Button>
              </div>
            </div>
          </div>

          {/* Button Examples */}
          <div>
            <h3 className="text-2xl mb-6 text-cyan">Examples in Context</h3>
            <div className="bg-amethyst border border-grey p-8 space-y-6">
              <div>
                <p className="text-silver mb-3">Call to Action</p>
                <Button>Unleash Power</Button>
              </div>
              <div>
                <p className="text-silver mb-3">Action Pair</p>
                <div className="flex gap-4">
                  <Button>Confirm</Button>
                  <Button variant="secondary">Cancel</Button>
                </div>
              </div>
              <div>
                <p className="text-silver mb-3">Button Group</p>
                <div className="flex gap-2">
                  <Button variant="secondary" size="small">First</Button>
                  <Button variant="secondary" size="small">Second</Button>
                  <Button variant="secondary" size="small">Third</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ButtonShowcase;
