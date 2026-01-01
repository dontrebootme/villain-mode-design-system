import React from 'react';
import CodeBlock from '../ui/CodeBlock';

const CodeBlockShowcase = () => {
  const sampleCode = `// Villain Mode Design System
const infinityStones = {
  space: "#00FFFF",    // Ultron Cyan
  power: "#FF9D00",    // Infinity Gold
  reality: "#FF003C",  // Reality Red
  soul: "#FFD700",     // Gold Light
  time: "#00C3E3",     // Cyan Dark
  mind: "#B026FF"      // Magenta
};

function harnessPower(stone) {
  const energy = infinityStones[stone];
  console.log(\`Wielding \${stone} stone...\`);
  return energy;
}

export default harnessPower;`;

  return (
    <section className="py-16 bg-amethyst/30">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl mb-4 text-center">Code Blocks</h2>
        <p className="text-center text-silver mb-12 max-w-2xl mx-auto">
          Custom syntax highlighting with cosmic colors. Cyan keywords, gold strings, and magenta functions against a dark background with gold border accent.
        </p>

        <div className="max-w-4xl mx-auto space-y-12">
          {/* Syntax Colors */}
          <div>
            <h3 className="text-2xl mb-6 text-cyan">Syntax Color Scheme</h3>
            <div className="bg-amethyst border border-grey p-6 mb-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-cyan"></div>
                  <span className="text-sm">Keywords, Storage - <span className="text-cyan">Ultron Cyan</span></span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-amber"></div>
                  <span className="text-sm">Strings, Values - <span className="text-amber">Infinity Gold</span></span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6" style={{ backgroundColor: '#B026FF' }}></div>
                  <span className="text-sm">Functions, Classes - <span style={{ color: '#B026FF' }}>Nebula Magenta</span></span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-silver"></div>
                  <span className="text-sm">Comments - <span className="text-silver italic">Faded Silver</span></span>
                </div>
              </div>
            </div>

            <CodeBlock code={sampleCode} language="javascript" />
          </div>

          {/* Features */}
          <div>
            <h3 className="text-2xl mb-6 text-cyan">Code Block Features</h3>
            <div className="bg-amethyst border border-grey p-8">
              <ul className="space-y-3 text-silver">
                <li className="flex items-start gap-3">
                  <span className="text-amber mt-1">▸</span>
                  <span>Left border glow in Infinity Gold for visual emphasis</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber mt-1">▸</span>
                  <span>Darker background (#080A1A) than main background for depth</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber mt-1">▸</span>
                  <span>Fira Code monospace font with excellent ligature support</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber mt-1">▸</span>
                  <span>Custom syntax theme matching the Villain Mode color palette</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber mt-1">▸</span>
                  <span>Sharp corners (no rounding) maintaining geometric consistency</span>
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
