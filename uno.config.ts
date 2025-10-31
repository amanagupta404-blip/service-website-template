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
  },
});
