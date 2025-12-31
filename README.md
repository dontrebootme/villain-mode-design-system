# Villain Mode Design System

A bold, high-contrast design system inspired by Marvel villain aesthetics. Features cosmic colors, geometric precision, and sharp angular design elements.

**🌐 Live Demo:** [https://villain-mode.web.app](https://villain-mode.web.app)

![Villain Mode Design System](./screenshot.png)

## 🎨 Design Philosophy

**Theme:** Infinite Power • Architect of Chaos

- **Bold & High-Contrast:** Dark cosmic backgrounds with intense glowing accents
- **Geometric & Faceted:** Sharp corners (0px border-radius), angular design language
- **Hard-Edge Lighting:** Solid offset shadows instead of soft blurred shadows
- **Cosmic Energy:** Glowing borders, gradient effects, and vibrant color palette

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

Visit http://localhost:5173/ to view the design system.

## 🎨 Color Palette

### Core Colors (Backgrounds & Base)
- **Deep Cosmic Navy:** `#0D0F26` - Main background
- **Abyssal Purple:** `#1A1233` - Cards and sections
- **Nebula Magenta:** `#590C57` - Ambient glows and shadows

### Accent & Action Colors
- **Infinity Gold:** `#FF9D00` to `#FFD700` - Primary CTAs and highlights
- **Ultron Cyan:** `#00FFFF` to `#00C3E3` - Secondary accents and links
- **Reality Red:** `#FF003C` - Alerts and intense highlights

### Neutral Colors
- **Starlight White:** `#EAEAEA` - Primary text
- **Faded Silver:** `#A0A8B8` - Secondary text and metadata
- **Facet Grey:** `#3E4259` - Borders and dividers

## 📝 Typography

- **Headings:** Montserrat (Bold, geometric, commanding)
- **Body:** Inter (Clean, readable, modern)
- **Code:** Fira Code (Monospace with ligature support)

## 🧩 Components

### UI Components (`src/components/ui/`)
- **Button** - Primary (gold gradient) and Secondary (cyan outline) variants
- **Card** - Containers with optional hover glow effects
- **Input** - Form elements with cosmic styling
- **Badge** - Small labels with gold/cyan/red variants
- **CodeBlock** - Syntax-highlighted code with custom theme

### Showcase Sections (`src/components/showcase/`)
- **Hero** - Opening banner with diagonal section break
- **ColorPalette** - Interactive color swatches (click to copy)
- **TypographyShowcase** - Font families and heading hierarchy
- **ButtonShowcase** - Button variants and states
- **CardShowcase** - Card variations and grid layouts
- **InputShowcase** - Form elements and states
- **CodeBlockShowcase** - Syntax highlighting examples
- **EffectsShowcase** - Visual effects catalog
- **ChartShowcase** - Data visualization with Recharts

## ✨ Key Features

- **Sharp Corners:** All components use 0px border-radius
- **Glowing Effects:** Gold and cyan border glows on interactive elements
- **Hard-Edge Shadows:** Solid offset shadows maintain geometric aesthetic
- **Custom Syntax Theme:** Code blocks styled with cosmic colors
- **Responsive Design:** Mobile-friendly grid layouts
- **Interactive Elements:** Hover states with 300ms transitions

## 🛠️ Tech Stack

- **Vite** - Lightning-fast build tool
- **React** - Component-based UI library
- **Tailwind CSS** - Utility-first styling with custom configuration
- **Recharts** - Chart library for data visualization
- **Prism React Renderer** - Syntax highlighting for code blocks

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/              # Reusable design system components
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   ├── Input.jsx
│   │   ├── Badge.jsx
│   │   └── CodeBlock.jsx
│   └── showcase/        # Showcase sections
│       ├── Hero.jsx
│       ├── ColorPalette.jsx
│       ├── TypographyShowcase.jsx
│       ├── ButtonShowcase.jsx
│       ├── CardShowcase.jsx
│       ├── InputShowcase.jsx
│       ├── CodeBlockShowcase.jsx
│       ├── EffectsShowcase.jsx
│       └── ChartShowcase.jsx
├── styles/
│   └── index.css        # Global styles and Tailwind imports
├── utils/
│   └── colors.js        # Color palette constants
├── App.jsx              # Main application
└── main.jsx             # Application entry point
```

## 🎯 Design Principles

1. **No Rounded Corners** - All elements use sharp, geometric edges
2. **High Contrast** - Dark backgrounds with bright, glowing accents
3. **Cosmic Energy** - Gradient borders and glow effects
4. **Faceted Aesthetic** - Angular, crystalline visual language
5. **Hard-Edge Lighting** - Solid shadows, no blur
6. **Minimal Animation** - Subtle 300ms transitions only

## 📖 Usage Examples

### Button
```jsx
import Button from './components/ui/Button';

<Button variant="primary" size="medium">
  Unleash Power
</Button>

<Button variant="secondary" size="large">
  Cancel
</Button>
```

### Card
```jsx
import Card from './components/ui/Card';

<Card hover>
  <h3>Interactive Card</h3>
  <p>Hover for gradient border glow</p>
</Card>
```

### Input
```jsx
import Input from './components/ui/Input';

<Input
  placeholder="Enter villain name..."
  value={value}
  onChange={(e) => setValue(e.target.value)}
/>
```

## 📄 License

This is a design system showcase project.

---

**Built with cosmic energy and geometric precision** ⚡
