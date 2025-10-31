import { defineConfig, presetUno, presetAttributify, presetTypography } from 'unocss';

export default defineConfig({
  presets: [
    presetUno(), // Tailwind-compatible preset
    presetAttributify(), // Enables attributify mode
    presetTypography(), // Typography utilities
  ],
  theme: {
    colors: {
      // Design system colors
      primary: '#99BC85',
      snow: '#FDFAF6',
      almond: '#FAF1E6',
      'mint-cream': '#E4EFE7',
      dark: '#333333',
      white: '#FFFFFF',
    },
    fontFamily: {
      body: ['Inter', 'system-ui', 'sans-serif'],
      heading: ['Playfair Display', 'Georgia', 'serif'],
    },
    fontWeight: {
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    },
    // Spacing scale (8px baseline) - maps to design tokens
    spacing: {
      1: '0.25rem', // 4px
      2: '0.5rem', // 8px
      3: '0.75rem', // 12px
      4: '1rem', // 16px
      5: '1.25rem', // 20px
      6: '1.5rem', // 24px
      8: '2rem', // 32px
      10: '2.5rem', // 40px
      12: '3rem', // 48px
      16: '4rem', // 64px
      20: '5rem', // 80px
      24: '6rem', // 96px
    },
    // Breakpoints (mobile-first)
    breakpoints: {
      sm: '640px', // Small tablets
      md: '768px', // Tablets
      lg: '1024px', // Small laptops
      xl: '1280px', // Desktops
      '2xl': '1536px', // Large screens
    },
  },
  shortcuts: {
    // Button utilities
    btn: 'px-4 py-2 rounded-md font-medium cursor-pointer transition-colors',
    'btn-primary': 'btn bg-primary text-snow hover:opacity-90',

    // Typography utilities
    'heading-1': 'font-heading font-bold text-3xl md:text-5xl lg:text-6xl',
    'heading-2': 'font-heading font-bold text-2xl md:text-4xl',
    'heading-3': 'font-heading font-bold text-xl md:text-3xl',
    'heading-4': 'font-heading font-bold text-lg md:text-2xl',

    // Container utilities
    'container-sm': 'max-w-[640px] mx-auto px-6 md:px-8 lg:px-12',
    'container-md': 'max-w-[768px] mx-auto px-6 md:px-8 lg:px-12',
    'container-lg': 'max-w-[1024px] mx-auto px-6 md:px-8 lg:px-12',
    'container-xl': 'max-w-[1280px] mx-auto px-6 md:px-8 lg:px-12',
    'container-2xl': 'max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12',
    'container-padding': 'px-6 md:px-8 lg:px-12',

    // Section utilities
    'section-sm': 'py-12 md:py-16',
    'section-md': 'py-16 md:py-20 lg:py-24',
    'section-lg': 'py-20 md:py-24 lg:py-32',
  },
});
