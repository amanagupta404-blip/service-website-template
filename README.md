# Service Website Template

A modern, high-performance website template built specifically for service-based businesses (florists, chefs, wellness coaches, artisans, etc.). Optimized for speed, accessibility, and ease of customization.

## ✨ Features

- **🚀 Blazing Fast**: Static-first with Astro's partial hydration (Island Architecture)
- **⚡ Svelte 5**: Modern reactive UI components with runes system
- **🎨 UnoCSS**: Tailwind-compatible utility-first CSS with superior performance
- **♿ Accessible**: WCAG 2.1 AA compliant design system
- **📱 Responsive**: Mobile-first with modern container queries
- **🔍 SEO Optimized**: Comprehensive schema markup and Core Web Vitals optimization
- **🎭 Animated**: GSAP-powered smooth animations and interactions
- **📝 TypeScript**: Fully typed for better developer experience
- **🛠️ Developer Friendly**: Path aliases, Prettier formatting, VS Code configuration

## 📦 Tech Stack

- **[Astro 5.15+](https://astro.build)** - Meta-framework with zero JS by default
- **[Svelte 5](https://svelte.dev)** - UI component library with runes
- **[UnoCSS](https://unocss.dev)** - Atomic CSS engine (Tailwind-compatible)
- **[TypeScript 5](https://www.typescriptlang.org/)** - Type safety
- **[GSAP 3.13+](https://gsap.com)** - Professional animations (100% free in 2025)

### Planned Integrations (Phase 7)

- **Web3Forms** - Serverless contact form handling
- **Cal.com** - Appointment scheduling
- **Juicer.io** - Social media feed aggregation

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ (LTS recommended)
- npm 9+ or pnpm

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/service-website-template.git
   cd service-website-template
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Copy environment variables**

   ```bash
   cp .env.example .env
   # Edit .env with your actual values (optional for development)
   ```

4. **Start development server**

   ```bash
   npm run dev
   ```

   Open [http://localhost:4321](http://localhost:4321) in your browser.

## 🧞 Commands

All commands are run from the root of the project:

| Command           | Action                                     |
| :---------------- | :----------------------------------------- |
| `npm install`     | Install dependencies                       |
| `npm run dev`     | Start local dev server at `localhost:4321` |
| `npm run build`   | Build production site to `./dist/`         |
| `npm run preview` | Preview production build locally           |
| `npm run format`  | Format code with Prettier                  |
| `npm run check`   | Type-check with TypeScript and Astro       |
| `npm run astro`   | Run Astro CLI commands                     |

## 📁 Project Structure

```
service-website-template/
├── public/                      # Static assets
│   ├── fonts/                   # Web fonts
│   ├── images/                  # Public images
│   └── favicon/                 # Favicon files
├── src/
│   ├── assets/                  # Build-time optimized assets
│   │   ├── images/              # Optimized images
│   │   └── icons/               # SVG icons
│   ├── components/              # Reusable components
│   │   ├── layout/              # Layout components (Header, Footer, etc.)
│   │   ├── ui/                  # UI components (Button, Card, etc.)
│   │   ├── sections/            # Page sections (Hero, CTA, etc.)
│   │   └── animations/          # Animation components
│   ├── layouts/                 # Page layout templates
│   ├── pages/                   # File-based routing
│   │   ├── index.astro          # Home page
│   │   ├── about.astro          # (Future)
│   │   ├── contact.astro        # (Future)
│   │   ├── blog/                # (Future)
│   │   ├── portfolio/           # (Future)
│   │   └── services/            # (Future)
│   ├── content/                 # Markdown content (Astro Content Collections)
│   │   ├── blog/                # Blog posts
│   │   └── portfolio/           # Portfolio items
│   ├── styles/                  # Global styles
│   │   ├── design-tokens.css    # CSS custom properties
│   │   └── global.css           # Global base styles
│   └── utils/                   # Utility functions
├── .vscode/                     # VS Code workspace settings
├── astro.config.mjs             # Astro configuration
├── tsconfig.json                # TypeScript configuration
├── uno.config.ts                # UnoCSS configuration
└── package.json                 # Dependencies and scripts
```

## 🎨 Design System

### Color Palette

The template uses a nature-inspired, accessible color scheme:

| Color        | Hex       | Usage                               |
| :----------- | :-------- | :---------------------------------- |
| Snow         | `#FDFAF6` | Primary background                  |
| Almond       | `#FAF1E6` | Secondary background                |
| Mint Cream   | `#E4EFE7` | Tertiary background                 |
| Laurel Green | `#99BC85` | Primary accent (buttons, headlines) |
| Dark Gray    | `#333333` | Body text                           |

**Accessibility Note**: All color combinations meet WCAG 2.1 Level AA standards. See `src/styles/design-tokens.css` for compliant combinations.

### Typography

- **Body Font**: System font stack (Inter as preferred)
- **Heading Font**: Serif stack (Playfair Display as preferred)
- **Scale**: Based on rem units for accessibility

### Spacing

8px baseline grid system using CSS custom properties (`--space-1` through `--space-24`).

## 🔧 Configuration

### TypeScript Path Aliases

The project uses TypeScript path aliases for cleaner imports:

```typescript
import Button from '@components/ui/Button.svelte';
import { formatDate } from '@utils/date';
import '@styles/global.css';
```

Available aliases:

- `@components/*` → `src/components/*`
- `@layouts/*` → `src/layouts/*`
- `@utils/*` → `src/utils/*`
- `@styles/*` → `src/styles/*`
- `@assets/*` → `src/assets/*`

### Environment Variables

Copy `.env.example` to `.env` and configure:

```env
# Required for contact form (Phase 7)
WEB3FORMS_ACCESS_KEY=your_key_here

# Required for social feed (Phase 7)
JUICER_FEED_ID=your_feed_id

# Site configuration
PUBLIC_SITE_URL=https://yourdomain.com
```

**Note**: Variables prefixed with `PUBLIC_` are exposed to the browser. Keep sensitive data without the prefix.

## 🏗️ Development Status

### Phase 1: Project Setup ✅ COMPLETE

- [x] Astro 5.15.3 initialized with TypeScript strict mode
- [x] Svelte 5.43.2 integrated with runes support
- [x] UnoCSS configured with Tailwind-compatible preset
- [x] Project directory structure established
- [x] TypeScript path aliases configured
- [x] Development tooling (Prettier, VS Code) configured
- [x] Environment variables template created
- [x] Design tokens defined (colors, typography, spacing)

### Phase 2: Design System Implementation ✅ COMPLETE

- [x] Color palette with WCAG AA compliant combinations
- [x] Typography system with Inter + Playfair Display fonts
- [x] Responsive type scale (12px → 60px) with mobile-first sizing
- [x] Spacing system (8px baseline grid)
- [x] Responsive breakpoints (640px → 1536px)
- [x] Container components with responsive padding
- [x] Section components for consistent page structure
- [x] Accessibility foundations (focus states, skip links, sr-only)
- [x] Animation tokens and reduced motion support
- [x] Comprehensive accessibility documentation (WCAG 2.1 AA)

**View the design system**: Start dev server and visit localhost:4321 to see all design tokens, typography, colors, responsive behavior, and accessibility features in action.

### Next Phases (Upcoming)

- **Phase 3**: Core Layout & Structure
- **Phase 4**: Component Library Development
- **Phase 5**: Page Development
- **Phase 6**: Animation & Interactions
- **Phase 7**: Business Integrations
- **Phase 8**: SEO & Performance Optimization
- **Phase 9**: Testing & Quality Assurance
- **Phase 10**: Documentation & Deployment

See `developmentPlan.md` for detailed implementation checklist.

## 🌐 Deployment

### Recommended: Cloudflare Pages

1. Push code to GitHub/GitLab
2. Connect repository to [Cloudflare Pages](https://pages.cloudflare.com/)
3. Configure build settings:
   - **Build command**: `npm run build`
   - **Build output**: `dist`
4. Add environment variables in dashboard
5. Deploy!

**Why Cloudflare Pages?**

- Unlimited bandwidth on free tier
- Global edge network (fastest CDN)
- Automatic HTTPS and previews
- Perfect for Astro static sites

### Alternatives

- **Vercel**: Best DX, good for serverless functions
- **Netlify**: Great for JAMstack, generous free tier

## 📚 Resources

- [Astro Documentation](https://docs.astro.build/)
- [Svelte 5 Runes Guide](https://svelte-5-preview.vercel.app/docs/runes)
- [UnoCSS Documentation](https://unocss.dev/)
- [GSAP Documentation](https://gsap.com/docs/)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

## 🤝 Contributing

This is a template project. Contributions, issues, and feature requests are welcome!

## 📝 License

MIT License - feel free to use this template for your projects.

## 👤 Author

Built with 💚 for service-based businesses.

---

**Version**: 0.0.1 (Phase 1 Complete)
**Last Updated**: 2025-10-31
