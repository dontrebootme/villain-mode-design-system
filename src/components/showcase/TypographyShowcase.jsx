import React from 'react';

const TypographyShowcase = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl mb-4 text-center">Typography</h2>
        <p className="text-center text-silver mb-12 max-w-2xl mx-auto">
          Sharp, condensed, and commanding. Teko headlines deliver angular power while Inter body text ensures excellent readability.
        </p>

        <div className="max-w-4xl mx-auto space-y-12">
          {/* Font Families */}
          <div>
            <h3 className="text-2xl mb-6 text-cyan">Font Families</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-amethyst border border-indigo-dark p-6 clip-angled rim-light-cyan">
                <p className="text-sm text-silver mb-2">Headings</p>
                <p className="font-heading text-3xl text-amber">TEKO</p>
                <p className="text-xs text-silver mt-2">Condensed, Angular, Powerful</p>
              </div>
              <div className="bg-amethyst border border-indigo-dark p-6 clip-angled rim-light-cyan">
                <p className="text-sm text-silver mb-2">Body</p>
                <p className="font-body text-3xl">Inter</p>
                <p className="text-xs text-silver mt-2">Clean, Readable, Modern</p>
              </div>
              <div className="bg-amethyst border border-indigo-dark p-6 clip-angled rim-light-cyan">
                <p className="text-sm text-silver mb-2">Code</p>
                <p className="font-code text-2xl text-cyan">Fira Code</p>
                <p className="text-xs text-silver mt-2">Monospace, Ligatures</p>
              </div>
            </div>
          </div>

          {/* Heading Hierarchy */}
          <div>
            <h3 className="text-2xl mb-6 text-cyan">Heading Hierarchy</h3>
            <p className="text-sm text-silver mb-4">
              All headings use uppercase + 1.5px letter-spacing for maximum geometric impact.
            </p>
            <div className="bg-amethyst border border-indigo-dark p-8 space-y-4 clip-angled rim-light-cyan">
              <h1 className="text-6xl">H1 HEADING</h1>
              <h2 className="text-5xl">H2 HEADING</h2>
              <h3 className="text-4xl text-cyan">H3 HEADING</h3>
              <h4 className="text-3xl text-amber">H4 HEADING</h4>
              <h5 className="text-2xl text-silver">H5 HEADING</h5>
              <h6 className="text-xl text-silver">H6 HEADING</h6>
            </div>
          </div>

          {/* Body Text */}
          <div>
            <h3 className="text-2xl mb-6 text-cyan">Body Text</h3>
            <div className="bg-amethyst border border-indigo-dark p-8 space-y-4 clip-angled rim-light-cyan">
              <p className="text-lg">
                Large body text for emphasis. The Electric Geometric design embraces deep cosmic backgrounds with intense, glowing accents.
              </p>
              <p className="text-base">
                Regular body text for standard content. Sharp angles, hard-edge shadows, and distinct facets replace soft shadows and curves.
              </p>
              <p className="text-sm text-silver">
                Small text for captions and metadata. Technical precision meets bold visual presence.
              </p>
            </div>
          </div>

          {/* Code Examples */}
          <div>
            <h3 className="text-2xl mb-6 text-cyan">Code Typography</h3>
            <div className="bg-amethyst border border-indigo-dark p-8 clip-angled rim-light-cyan">
              <p className="mb-4">
                Inline code: <code className="font-code bg-midnight-indigo text-amber px-2 py-1 border border-grey">const power = "infinite"</code>
              </p>
              <p className="text-sm text-silver">
                Code blocks feature custom syntax highlighting with cyan keywords, amber strings, and magenta functions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TypographyShowcase;
