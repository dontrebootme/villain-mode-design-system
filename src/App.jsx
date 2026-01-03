import React from 'react';
import Hero from './components/showcase/Hero';
import ColorPalette from './components/showcase/ColorPalette';
import TypographyShowcase from './components/showcase/TypographyShowcase';
import ButtonShowcase from './components/showcase/ButtonShowcase';
import CardShowcase from './components/showcase/CardShowcase';
import InputShowcase from './components/showcase/InputShowcase';
import CodeBlockShowcase from './components/showcase/CodeBlockShowcase';
import EffectsShowcase from './components/showcase/EffectsShowcase';
import ChartShowcase from './components/showcase/ChartShowcase';

function App() {
  return (
    <div className="min-h-screen">
      {/* Skip link for keyboard navigation */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <header>
        <Hero />
      </header>

      <main id="main-content" className="space-y-0" aria-label="Design system components">
        <ColorPalette />
        <TypographyShowcase />
        <ButtonShowcase />
        <CardShowcase />
        <InputShowcase />
        <CodeBlockShowcase />
        <EffectsShowcase />
        <ChartShowcase />
      </main>

      {/* Footer */}
      <footer className="py-16 bg-amethyst/50 border-t border-grey" role="contentinfo">
        <div className="container mx-auto px-4 text-center">
          <p className="text-silver mb-2">
            Electric Geometric Design System
          </p>
          <p className="text-sm text-silver">
            Built with Vite, React, Tailwind CSS, and Recharts
          </p>
          <div className="mt-6 flex justify-center gap-4 text-xs">
            <span className="text-amber">Sharp Corners</span>
            <span className="text-grey">•</span>
            <span className="text-cyan">Cosmic Energy</span>
            <span className="text-grey">•</span>
            <span className="text-white">Geometric Precision</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
