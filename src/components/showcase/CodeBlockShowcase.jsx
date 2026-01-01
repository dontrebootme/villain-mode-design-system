import React from 'react';
import CodeBlock from '../ui/CodeBlock';

const CodeBlockShowcase = () => {
  const sampleCode = `// Electric Geometric Design System
const powerPalette = {
  midnight: "#120E26",  // Midnight Indigo
  amethyst: "#2A1B3D",  // Amethyst
  amber: "#F5A623",     // Amber
  cyan: "#00F0FF",      // Cyan
  red: "#FF003C",       // Red
  magenta: "#590C57"    // Magenta
};

function activatePower(color) {
  const energy = powerPalette[color];
  console.log(\`Channeling \${color} energy...\`);
  return energy;
}

export default activatePower;`;

  return (
    <section className="py-16 bg-amethyst/30">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl mb-4 text-center">Code Blocks</h2>
        <p className="text-center text-silver mb-12 max-w-2xl mx-auto">
          Custom syntax highlighting with Electric Geometric colors. Cyan keywords, amber strings, and magenta functions against midnight backgrounds.
        </p>

        <div className="max-w-4xl mx-auto space-y-12">
          {/* Syntax Colors */}
          <div>
            <h3 className="text-2xl mb-6 text-cyan">Syntax Color Scheme</h3>
            <div className="bg-amethyst border border-indigo-dark p-6 mb-6 clip-angled rim-light-cyan">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-cyan clip-angled"></div>
                  <span className="text-sm">Keywords, Storage - <span className="text-cyan">Cyan</span></span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-amber clip-angled"></div>
                  <span className="text-sm">Strings, Values - <span className="text-amber">Amber</span></span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 clip-angled" style={{ backgroundColor: '#B026FF' }}></div>
                  <span className="text-sm">Functions, Classes - <span style={{ color: '#B026FF' }}>Magenta</span></span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-silver clip-angled"></div>
                  <span className="text-sm">Comments - <span className="text-silver italic">Silver</span></span>
                </div>
              </div>
            </div>

            <CodeBlock code={sampleCode} language="javascript" />
          </div>

          {/* Features */}
          <div>
            <h3 className="text-2xl mb-6 text-cyan">Code Block Features</h3>
            <div className="bg-amethyst border border-indigo-dark p-8 clip-angled rim-light-cyan">
              <ul className="space-y-3 text-silver">
                <li className="flex items-start gap-3">
                  <span className="text-amber mt-1">▸</span>
                  <span>Left border glow in Amber for visual emphasis</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber mt-1">▸</span>
                  <span>Midnight Indigo background (#120E26) for maximum depth</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber mt-1">▸</span>
                  <span>Fira Code monospace font with ligature support</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber mt-1">▸</span>
                  <span>Custom syntax theme matching Electric Geometric palette</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber mt-1">▸</span>
                  <span>Sharp corners with clip-path angled cuts</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodeBlockShowcase;
