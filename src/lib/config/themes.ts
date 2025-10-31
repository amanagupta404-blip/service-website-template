/**
 * Theme System Configuration
 * Defines all available themes with colors, metadata, and accessibility information
 */

import type { ThemeConfig } from '../types/theme';

export const THEMES: ThemeConfig[] = [
  // Theme 1: Earthy Serenity (Current - Light)
  {
    id: 'earthy-serenity',
    name: 'earthy-serenity',
    displayName: 'Earthy Serenity',
    category: 'light',
    description: 'Natural, calming tones perfect for wellness and organic businesses',
    psychology: ['natural', 'calming', 'professional', 'organic'],
    useCases: ['Wellness coaches', 'Florists', 'Artisans', 'Eco-friendly businesses'],
    colors: {
      bgPrimary: '#FDFAF6',
      bgSecondary: '#FAF1E6',
      bgTertiary: '#E4EFE7',
      textPrimary: '#333333',
      textInverse: '#FDFAF6',
      accentPrimary: '#99BC85',
      accentSecondary: '#8AAD76',
      accentTertiary: '#7B9E67',
      border: '#D4E4D8',
      shadow: 'rgba(51, 51, 51, 0.08)',
    },
    accessibility: {
      primaryTextContrast: 14.57,
      wcagLevel: 'AAA',
      notes: 'Laurel green accent should only be used for large text (18pt+/24px+)',
    },
  },

  // Theme 2: Cosmic Dawn (Space Light)
  {
    id: 'cosmic-dawn',
    name: 'cosmic-dawn',
    displayName: 'Cosmic Dawn',
    category: 'light',
    description: 'Bold and energetic with modern tech-forward appeal',
    psychology: ['bold', 'energetic', 'modern', 'tech-forward'],
    useCases: ['Tech startups', 'Creative agencies', 'Modern services'],
    colors: {
      bgPrimary: '#E9E3DF',
      bgSecondary: '#FFFFFF',
      bgTertiary: '#FFE8D6',
      textPrimary: '#000000',
      textSecondary: '#333333',
      textInverse: '#E9E3DF',
      accentPrimary: '#FF7A30',
      accentSecondary: '#3D5AFE',
      accentTertiary: '#FF9955',
      border: '#B8B0A8',
      shadow: 'rgba(0, 0, 0, 0.1)',
    },
    accessibility: {
      primaryTextContrast: 13.42,
      wcagLevel: 'AAA',
      notes: 'Orange accent best for large text and buttons. Electric blue provides modern vibrancy.',
    },
  },

  // Theme 3: Galactic Night (Space Dark)
  {
    id: 'galactic-night',
    name: 'galactic-night',
    displayName: 'Galactic Night',
    category: 'dark',
    description: 'Mysterious and creative with premium sophistication',
    psychology: ['mysterious', 'creative', 'premium', 'sophisticated'],
    useCases: ['Creative studios', 'Entertainment', 'Premium services'],
    colors: {
      bgPrimary: '#3B0270',
      bgSecondary: '#4D039E',
      bgTertiary: '#2A0252',
      textPrimary: '#FFF1F1',
      textInverse: '#3B0270',
      accentPrimary: '#E9B3FB',
      accentSecondary: '#6F00FF',
      border: '#6F00FF',
      shadow: 'rgba(111, 0, 255, 0.2)',
    },
    accessibility: {
      primaryTextContrast: 13.89,
      wcagLevel: 'AAA',
    },
  },

  // Theme 4: Vintage Sunrise (Retro Light)
  {
    id: 'vintage-sunrise',
    name: 'vintage-sunrise',
    displayName: 'Vintage Sunrise',
    category: 'light',
    description: 'Playful and nostalgic with cheerful approachability',
    psychology: ['playful', 'nostalgic', 'cheerful', 'approachable'],
    useCases: ['Bakeries', 'Cafes', "Children's services", 'Creative businesses'],
    colors: {
      bgPrimary: '#FEFBC7',
      bgSecondary: '#FFE4CC',
      bgTertiary: '#FFB4B4',
      textPrimary: '#1A1A1A',
      textSecondary: '#444444',
      textInverse: '#FEFBC7',
      accentPrimary: '#E14434',
      accentSecondary: '#5EABD6',
      accentTertiary: '#FF8866',
      border: '#E6D585',
      shadow: 'rgba(26, 26, 26, 0.08)',
    },
    accessibility: {
      primaryTextContrast: 15.82,
      wcagLevel: 'AAA',
      notes: 'Warm red and sky blue provide vibrant, playful contrast.',
    },
  },

  // Theme 5: Midnight Retro (Retro Dark)
  {
    id: 'midnight-retro',
    name: 'midnight-retro',
    displayName: 'Midnight Retro',
    category: 'dark',
    description: 'Professional and trustworthy with stable sophistication',
    psychology: ['professional', 'trustworthy', 'stable', 'sophisticated'],
    useCases: ['Financial services', 'Law firms', 'Consulting', 'Corporate'],
    colors: {
      bgPrimary: '#021526',
      bgSecondary: '#03346E',
      bgTertiary: '#052440',
      textPrimary: '#E2E2B6',
      textSecondary: '#C9C99A',
      textInverse: '#021526',
      accentPrimary: '#6EACDA',
      accentSecondary: '#D4AF37',
      accentTertiary: '#9DD4F5',
      border: '#1E4A7A',
      shadow: 'rgba(110, 172, 218, 0.15)',
    },
    accessibility: {
      primaryTextContrast: 15.67,
      wcagLevel: 'AAA',
      notes: 'Antique gold secondary accent adds retro luxury warmth.',
    },
  },

  // Theme 6: Electric Neon (Neon Dark)
  {
    id: 'electric-neon',
    name: 'electric-neon',
    displayName: 'Electric Neon',
    category: 'dark',
    description: 'Edgy and modern with vibrant youth appeal',
    psychology: ['edgy', 'modern', 'vibrant', 'youth-oriented'],
    useCases: ['Nightlife', 'Entertainment', 'Gaming', 'Youth brands'],
    colors: {
      bgPrimary: '#000000',
      bgSecondary: '#0D0D0D',
      bgTertiary: '#1F1F1F',
      textPrimary: '#FAEB92',
      textSecondary: '#E6D67A',
      textInverse: '#000000',
      accentPrimary: '#FF0080',
      accentSecondary: '#00F0FF',
      accentTertiary: '#39FF14',
      border: '#00F0FF',
      shadow: 'rgba(0, 240, 255, 0.4)',
    },
    accessibility: {
      primaryTextContrast: 16.78,
      wcagLevel: 'AAA',
      notes: 'BOLD neon transformation: hot magenta, cyan, and neon green for maximum electric impact.',
    },
  },

  // Theme 7: Neon Burst (Neon Light)
  {
    id: 'neon-burst',
    name: 'neon-burst',
    displayName: 'Neon Burst',
    category: 'light',
    description: 'Energetic and bold with attention-grabbing creativity',
    psychology: ['energetic', 'bold', 'attention-grabbing', 'creative'],
    useCases: ['Fashion', 'Design studios', 'Events', 'Creative services'],
    colors: {
      bgPrimary: '#FFFF80',
      bgSecondary: '#FFB366',
      bgTertiary: '#FFF4CC',
      textPrimary: '#1A0010',
      textSecondary: '#3D0028',
      textInverse: '#FFFF80',
      accentPrimary: '#FF0080',
      accentSecondary: '#00D4FF',
      accentTertiary: '#9D00FF',
      border: '#FFBB33',
      shadow: 'rgba(26, 0, 16, 0.1)',
    },
    accessibility: {
      primaryTextContrast: 15.34,
      wcagLevel: 'AAA',
      notes: 'Full spectrum with magenta, cyan, and purple for maximum creative energy.',
    },
  },

  // Theme 8: Soft Pastels (Pastel Light)
  {
    id: 'soft-pastels',
    name: 'soft-pastels',
    displayName: 'Soft Pastels',
    category: 'light',
    description: 'Gentle and feminine with soothing approachability',
    psychology: ['gentle', 'feminine', 'soothing', 'approachable'],
    useCases: ['Beauty salons', 'Spas', 'Boutiques', 'Lifestyle brands'],
    colors: {
      bgPrimary: '#FCF9EA',
      bgSecondary: '#B5E5E1',
      bgTertiary: '#FFCCD5',
      textPrimary: '#2A2520',
      textSecondary: '#1A4A45',
      textInverse: '#FCF9EA',
      accentPrimary: '#FFA4A4',
      accentSecondary: '#8FCCC7',
      accentTertiary: '#C4B5FD',
      border: '#D5C9BA',
      shadow: 'rgba(42, 37, 32, 0.08)',
    },
    accessibility: {
      primaryTextContrast: 14.23,
      wcagLevel: 'AAA',
      notes: 'Lavender tertiary accent adds gentle variety to pastel palette.',
    },
  },

  // Theme 9: Twilight Pastels (Pastel Dark)
  {
    id: 'twilight-pastels',
    name: 'twilight-pastels',
    displayName: 'Twilight Pastels',
    category: 'dark',
    description: 'Luxurious and dreamy with elegant sophistication',
    psychology: ['luxurious', 'dreamy', 'elegant', 'sophisticated'],
    useCases: ['High-end services', 'Boutique hotels', 'Premium brands'],
    colors: {
      bgPrimary: '#624E88',
      bgSecondary: '#9575C4',
      bgTertiary: '#4A3563',
      textPrimary: '#F5ECC8',
      textSecondary: '#D4C78E',
      textInverse: '#624E88',
      accentPrimary: '#FFD700',
      accentSecondary: '#CB80AB',
      accentTertiary: '#9FB8D6',
      border: '#A688CC',
      shadow: 'rgba(203, 128, 171, 0.2)',
    },
    accessibility: {
      primaryTextContrast: 8.5,
      wcagLevel: 'AAA',
      notes: 'Rich gold accent distinct from text. Dusty blue provides complementary variety. Improved contrast.',
    },
  },
];

/**
 * Helper functions for theme management
 */

export function getThemeById(id: string): ThemeConfig | undefined {
  return THEMES.find((theme) => theme.id === id);
}

export function getThemesByCategory(category: 'light' | 'dark'): ThemeConfig[] {
  return THEMES.filter((theme) => theme.category === category);
}

export function getDefaultTheme(mode?: 'light' | 'dark'): ThemeConfig {
  if (mode === 'dark') {
    return THEMES.find((t) => t.id === 'galactic-night') || THEMES[0];
  }
  return THEMES.find((t) => t.id === 'earthy-serenity') || THEMES[0];
}

export function searchThemes(query: string): ThemeConfig[] {
  const lowerQuery = query.toLowerCase();
  return THEMES.filter(
    (theme) =>
      theme.displayName.toLowerCase().includes(lowerQuery) ||
      theme.description.toLowerCase().includes(lowerQuery) ||
      theme.psychology.some((p) => p.toLowerCase().includes(lowerQuery)) ||
      theme.useCases.some((u) => u.toLowerCase().includes(lowerQuery)),
  );
}
