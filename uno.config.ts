import {
  defineConfig,
  presetUno,
  presetAttributify,
  presetTypography,
} from 'unocss';

export default defineConfig({
  presets: [
    presetUno(), // Tailwind-compatible preset
    presetAttributify(), // Enables attributify mode
    presetTypography(), // Typography utilities
  ],
  theme: {
    colors: {
      // Design system colors from developmentPlan.md
      'primary': '#99BC85',
      'snow': '#FDFAF6',
      'almond': '#FAF1E6',
      'mint-cream': '#E4EFE7',
      'dark': '#333333',
    },
  },
  shortcuts: {
    // Reusable utility shortcuts
    'btn': 'px-4 py-2 rounded-md font-medium cursor-pointer transition-colors',
    'btn-primary': 'btn bg-primary text-snow hover:opacity-90',
  },
});
