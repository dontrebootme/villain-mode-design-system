import React, { useState } from 'react';
import { colors, colorDescriptions } from '../../utils/colors';

const ColorSwatch = ({ name, hex }) => {
  const [copied, setCopied] = useState(false);

  const handleClick = () => {
    navigator.clipboard.writeText(hex);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer transition-all duration-300 hover:scale-105 hover-lift"
    >
      <div
        className="h-24 mb-3 border border-indigo-dark hover:border-amber transition-colors duration-300 clip-angled"
        style={{ backgroundColor: hex }}
      ></div>
      <div className="text-sm">
        <p className="font-heading text-white mb-1">{name}</p>
        <p className="font-code text-xs text-silver">{hex}</p>
        {copied && (
          <p className="text-xs text-amber mt-1">Copied!</p>
        )}
      </div>
    </div>
  );
};

const ColorCategory = ({ title, description, colorSet }) => {
  return (
    <div className="mb-12">
      <h3 className="text-2xl mb-2 text-cyan">{title}</h3>
      <p className="text-silver mb-6">{description}</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {Object.entries(colorSet).map(([name, hex]) => (
          <ColorSwatch key={name} name={name} hex={hex} />
        ))}
      </div>
    </div>
  );
};

const ColorPalette = () => {
  return (
    <section className="py-16 bg-amethyst/30">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl mb-4 text-center">Color Palette</h2>
        <p className="text-center text-silver mb-12 max-w-2xl mx-auto">
          A limited, purposeful palette dominated by deep cosmic backgrounds and punctuated by intense, glowing accents. Click any color to copy its hex code.
        </p>

        <div className="max-w-6xl mx-auto">
          <ColorCategory
            title="Core Colors"
            description={colorDescriptions.core}
            colorSet={colors.core}
          />

          <ColorCategory
            title="Accent & Action Colors"
            description={colorDescriptions.accent}
            colorSet={colors.accent}
          />

          <ColorCategory
            title="Neutral Colors"
            description={colorDescriptions.neutral}
            colorSet={colors.neutral}
          />
        </div>
      </div>
    </section>
  );
};

export default ColorPalette;
