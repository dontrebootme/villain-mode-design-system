Here is a text-only Markdown style guide derived from the visual elements of the provided image, tailored for a personal developer website.

"Infinite Power" Developer Style Guide
1. Design Philosophy & Theme
Theme Keyword: Villain Mode / Architect of Chaos Visual Inspiration: Comic book vibrancy, sharp geometric facets, dramatic lighting, cosmic energy.

The aesthetic for this developer site is not subtle. It is bold, high-contrast, and energetic. It embraces a "dark mode" foundation accented by intense, glowing primary colors. The visual language uses sharp angles and distinct facets rather than smooth curves or flat design. It should feel powerful, slightly intimidating, and technically advanced.

2. Color Palette
The color scheme is dominated by deep cosmic background tones punctuated by intense, glowing light sources (gold, cyan, magenta).

Core Colors (Backgrounds & Base)
These colors form the foundation of the site.

Deep Cosmic Navy (Main Background): #0D0F26 (A very dark blue, almost black, serving as the canvas.)

Abyssal Purple (Secondary Background / Cards): #1A1233 (Slightly lighter purple-toned dark for contrasting sections or content cards.)

Nebula Magenta (Ambient Glows/Shadows): #590C57 (Used for deep gradients or subtle background glow effects.)

Accent & Action Colors
These colors are used for buttons, links, highlights, and calls to action. They must look like glowing energy sources.

Infinity Gold (Primary CTA / Highlights): #FF9D00 to #FFD700 (Vibrant orange-gold, used for main buttons, important keywords, and border glows. Think Thanos’s Gauntlet.)

Ultron Cyan (Secondary Accent / Links): #00FFFF to #00C3E3 (Electric blue-cyan. Used for hyperlinks, tech accents, and secondary buttons.)

Reality Red (Alerts / Intense Highlights): #FF003C (Deep, intense red. Use sparingly for errors or areas needing extreme emphasis.)

Neutral Colors (Typography & Borders)
Starlight White (Primary Text): #EAEAEA (Off-white for maximum readability against dark backgrounds.)

Faded Silver (Secondary Text / Metadata): #A0A8B8 (Muted gray-blue for subtitles, dates, or less important text.)

Facet Grey (Borders / Dividers): #3E4259 (Mid-tone gray-blue for subtle structural lines.)

3. Typography
Typography should be strong, modern, and highly legible, with headings that feel blocky or slightly futuristic.

Font Family (Headings): A bold, geometric Sans-Serif font (e.g., "Montserrat Bold," "Russo One," or equivalent). They should command attention.

Font Family (Body): A clean, highly readable Sans-Serif (e.g., "Inter," "Roboto," or equivalent).

Font Family (Code): A clean Monospace font with good ligature support (e.g., "Fira Code," "JetBrains Mono").

Type Hierarchy Styling
H1, H2: Use the Heading font. Color: Starlight White. Optional: Apply a subtle text shadow in Nebula Magenta to make it pop.

H3, H4: Heading font. Color: Ultron Cyan or Infinity Gold depending on section context.

Links: Color: Ultron Cyan. Underline is optional; a glowing bottom border on hover is preferred.

Inline Code Snippets: Background: Abyssal Purple. Text Color: Infinity Gold. Font: Monospace.

4. UI Components & Elements
The components should reflect the "faceted" and "sharp" nature of the artwork. Avoid rounded corners.

Buttons
Buttons should look like concentrated energy facets.

Shape: Sharp corners (0px border-radius).

Primary Button: Gradient background from Infinity Gold (#FF9D00) to a slightly deeper orange. Text: Deep Cosmic Navy. On Hover: The glow intensifies, perhaps a bright yellow border appears.

Secondary Button: Transparent background with a 2px solid Ultron Cyan (#00FFFF) border. Text: Ultron Cyan. On Hover: Background fills with solid Ultron Cyan, text turns Dark Navy.

Cards & Containers (Projects, Blog Posts)
Background: Abyssal Purple (#1A1233).

Borders: Sharp corners. A thin, 1px border in Facet Grey (#3E4259).

Hover Effect: On hover, the border should change to a glowing gradient of Infinity Gold and Ultron Cyan, and the card should lift slightly with a sharp drop shadow (no soft diffusions).

Imagery & Icons
Icons: Use angular, geometric icon sets. Line icons preferred over solid fill. Color them using the Accent Colors (Cyan or Gold).

Image Styling: Images should have sharp edges. Consider using CSS clip-paths to create non-rectangular, faceted image frames instead of standard squares.

Code Blocks (Prism/Syntax Highlighting Theme)
The code block needs to stand out as a central feature of a dev site.

Background: A very dark shade, slightly darker than the main background #080A1A.

Border: A sharp, glowing left border in Infinity Gold #FF9D00.

Syntax Colors:

Keywords/Storage: Ultron Cyan

Strings/Values: Infinity Gold

Comments: Faded Silver (italicized)

Functions/Classes: Nebula Magenta (shifted towards brighter pink)

5. Layout & Effects
Lighting: The site should feel like it is lit by multiple colored light sources. Use CSS radial gradients in the background layers to create subtle pockets of magenta or dark blue light behind content areas.

Borders & Dividers: Use glowing lines. A horizontal divider shouldn't just be gray; it should be a 1px gradient line from cyan to magenta to transparent.

Structure: Use strong diagonal lines where possible in the layout (e.g., slanted section backgrounds) to mimic the dynamic energy of the image.




This artwork is a striking example of **Geometric Vector Illustration**, specifically leaning into a style often called **"Low Poly"** or **"Prismatic Pop Art."**

It is likely a piece commissioned for **Disney’s Hotel New York – The Art of Marvel** at Disneyland Paris, which is known for reinterpreting Marvel characters through modern, high-fashion, and gallery-style aesthetics.

Here is a breakdown of the style, how to describe it to a designer (or AI), and the specific color theory used.

### 1. What to Call This Style

If you are searching for inspiration or prompting an AI (like Midjourney or DALL-E) to create assets for your site, use these terms:

* **Geometric Vector:** This describes the use of mathematical, clean lines and shapes.
* **Low Poly / Faceted:** Refers to the way the characters are built out of flat, angular shapes (polygons) rather than smooth curves, mimicking a 3D model with a low polygon count.
* **Prismatic / Crystalline:** The artwork looks like it is viewed through shattered glass or a prism. It uses "shards" of color to define light and shadow.
* **Vector Pop Art:** It retains the vibrancy and subject matter of comic books but stylizes them into abstract shapes.

> **Prompt Example for AI:**
> *"Marvel villain style character, vector art, low poly, faceted geometric style, sharp angles, crystalline shards, flat distinct colors, no gradients, deep dark background with glowing neon highlights, highly detailed, 8k resolution, energetic composition."*

### 2. Deconstructing the Design Elements

To replicate this on your website, you need to mimic these three core pillars:

**A. Hard-Edge Lighting (The "Shard" Effect)**
Unlike traditional painting where shadows blend smoothly, this style uses **hard edges** to show lighting. A cheekbone isn't a soft gradient; it is three distinct triangles: one bright (highlight), one mid-tone, and one dark (shadow).

* *Web Application:* Avoid soft drop-shadows (`box-shadow: 0 4px 20px ...`). Instead, use sharp, solid borders or offset backgrounds (e.g., a card that has a solid color block shifted 4px to the right and down behind it).

**B. The "Fractured" Composition**
The image feels dynamic because the backgrounds and characters overlap in diagonal, jagged shards.

* *Web Application:* Use `clip-path` in CSS to cut the corners off your images or div containers. Instead of a standard rectangular hero section, use a diagonal divider (slanted section break) to create that "cutting" motion.

**C. Rim Lighting (The "Glow")**
Notice how Thanos and Ultron have bright thin lines on their edges (cyan on Ultron, orange on Thanos). This separates them from the dark background.

* *Web Application:* Use bright 1px borders on your dark cards. If you have a dark purple card, give it a 1px bright cyan border to make it "pop" just like the artwork.

### 3. Color Theory Breakdown

The image utilizes a **Split-Complementary** palette that relies on extreme contrast between "Dark" and "Light."

* **The "Villain" Darks (Base):**
* *Void Purple:* `#1A0B2E` (The darkest shadow areas, used instead of pure black).
* *Deep Teal:* `#0B2E2E` (Used for shadowing on characters like Hela).


* **The "Energy" Lights (Highlights):**
* *Infinity Gold:* `#FFB800` (Thanos’s gauntlet). This is your primary "Action" color.
* *Arc Reactor Blue:* `#00F0FF` (Ultron’s energy). This is your secondary "Tech" color.
* *Wanda/Magical Magenta:* `#B026FF` (Background magic/glows). Use this for gradients or accents.



### Summary for your Developer Site

You are effectively building a **"Dark Mode" site that refuses to be boring.**

* **Backgrounds:** Deep, rich purples and navies (not grey/black).
* **Buttons:** Sharp, angular, and glowing.
* **Typography:** Bold, uppercase, and imposing.
* **Vibe:** "Technologically Advanced" meets "Cosmic Threat."