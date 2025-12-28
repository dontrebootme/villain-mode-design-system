import React, { useState } from 'react';
import Input from '../ui/Input';
import Card from '../ui/Card';

const InputShowcase = () => {
  const [sampleValue, setSampleValue] = useState('');

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl mb-4 text-center">Form Elements</h2>
        <p className="text-center text-faded-silver mb-12 max-w-2xl mx-auto">
          Dark backgrounds with cyan borders. Focus states reveal gold glows, maintaining the cosmic energy aesthetic.
        </p>

        <div className="max-w-4xl mx-auto space-y-12">
          {/* Text Input */}
          <div>
            <h3 className="text-2xl mb-6 text-ultron-cyan">Text Input</h3>
            <Card>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm mb-2 text-faded-silver">Username</label>
                  <Input placeholder="Enter your villain name..." />
                </div>
                <div>
                  <label className="block text-sm mb-2 text-faded-silver">Email</label>
                  <Input
                    type="email"
                    placeholder="chaos@architect.villain"
                    value={sampleValue}
                    onChange={(e) => setSampleValue(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2 text-faded-silver">Disabled State</label>
                  <Input
                    placeholder="Disabled input"
                    disabled
                    className="opacity-50 cursor-not-allowed"
                  />
                </div>
              </div>
            </Card>
          </div>

          {/* Input States */}
          <div>
            <h3 className="text-2xl mb-6 text-ultron-cyan">Input States & Features</h3>
            <Card>
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm text-faded-silver mb-2">Default State</p>
                    <div className="bg-cosmic-navy border-2 border-ultron-cyan-dark p-3">
                      <p className="text-xs text-faded-silver">Cyan border, cosmic navy background</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-faded-silver mb-2">Focus State</p>
                    <div className="bg-cosmic-navy border-2 border-infinity-gold p-3 shadow-[0_0_15px_rgba(255,157,0,0.4)]">
                      <p className="text-xs text-faded-silver">Gold border with glow effect</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-facet-grey">
                  <ul className="space-y-2 text-sm text-faded-silver">
                    <li className="flex items-start gap-2">
                      <span className="text-ultron-cyan">•</span>
                      <span>Sharp corners (0px border-radius) for geometric consistency</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-ultron-cyan">•</span>
                      <span>Smooth 300ms transition between states</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-ultron-cyan">•</span>
                      <span>Gold glow on focus to match CTA button aesthetic</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-ultron-cyan">•</span>
                      <span>High contrast for excellent accessibility</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>

          {/* Form Example */}
          <div>
            <h3 className="text-2xl mb-6 text-ultron-cyan">Form Example</h3>
            <Card hover>
              <h4 className="text-xl mb-4 text-infinity-gold">Join the Chaos</h4>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm mb-2 text-faded-silver">Full Name *</label>
                  <Input placeholder="Doctor Victor Von..." />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm mb-2 text-faded-silver">Power Level *</label>
                    <Input type="number" placeholder="9000+" />
                  </div>
                  <div>
                    <label className="block text-sm mb-2 text-faded-silver">Alignment</label>
                    <Input placeholder="Chaotic Evil" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm mb-2 text-faded-silver">Origin Story</label>
                  <textarea
                    className="bg-cosmic-navy border-2 border-ultron-cyan-dark text-starlight-white font-body px-4 py-3 w-full focus:outline-none focus:border-infinity-gold focus:shadow-[0_0_15px_rgba(255,157,0,0.4)] transition-all duration-300 placeholder:text-faded-silver"
                    rows="4"
                    placeholder="Tell us how you became the architect of chaos..."
                  ></textarea>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InputShowcase;
