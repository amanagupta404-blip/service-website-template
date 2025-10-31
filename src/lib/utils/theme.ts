/**
 * Theme Utility Functions
 * Helper functions for theme operations, validation, and queries
 */

import type { ThemeConfig, ThemeColors } from '@/lib/types/theme';
import { THEMES } from '@/lib/config/themes';

/**
 * Validate if a theme ID exists
 */
export function isValidThemeId(id: string): boolean {
  return THEMES.some((theme) => theme.id === id);
}

/**
 * Get theme by ID with fallback
 */
export function getThemeSafe(id: string, fallback?: ThemeConfig): ThemeConfig | null {
  const theme = THEMES.find((t) => t.id === id);
  return theme || fallback || null;
}

/**
 * Get color value from theme by semantic token name
 */
export function getThemeColor(
  theme: ThemeConfig,
  token: keyof ThemeColors,
): string | undefined {
  return theme.colors[token];
}

/**
 * Check if theme is dark
 */
export function isThemeDark(theme: ThemeConfig): boolean {
  return theme.category === 'dark';
}

/**
 * Check if theme is light
 */
export function isThemeLight(theme: ThemeConfig): boolean {
  return theme.category === 'light';
}

/**
 * Get contrasting theme (light ↔ dark)
 * Returns a theme of the opposite category with similar psychology
 */
export function getContrastingTheme(theme: ThemeConfig): ThemeConfig | null {
  const targetCategory = theme.category === 'light' ? 'dark' : 'light';

  // Try to find theme with similar psychology
  const similar = THEMES.find(
    (t) =>
      t.category === targetCategory &&
      t.psychology.some((p) => theme.psychology.includes(p)),
  );

  if (similar) return similar;

  // Fallback to first theme of opposite category
  return THEMES.find((t) => t.category === targetCategory) || null;
}

/**
 * Get theme pairs (light + dark variants)
 * Groups themes by similar psychology/use cases
 */
export function getThemePairs(): Array<{
  light: ThemeConfig;
  dark: ThemeConfig | null;
  category: string;
}> {
  const pairs: Array<{ light: ThemeConfig; dark: ThemeConfig | null; category: string }> =
    [];

  // Define theme pairs manually based on design intent
  const pairings = [
    {
      light: 'earthy-serenity',
      dark: 'galactic-night',
      category: 'Default',
    },
    {
      light: 'cosmic-dawn',
      dark: 'midnight-retro',
      category: 'Professional',
    },
    {
      light: 'vintage-sunrise',
      dark: 'twilight-pastels',
      category: 'Nostalgic',
    },
    {
      light: 'neon-burst',
      dark: 'electric-neon',
      category: 'Bold',
    },
    {
      light: 'soft-pastels',
      dark: null,
      category: 'Gentle',
    },
  ];

  pairings.forEach(({ light, dark, category }) => {
    const lightTheme = THEMES.find((t) => t.id === light);
    const darkTheme = dark ? THEMES.find((t) => t.id === dark) : null;

    if (lightTheme) {
      pairs.push({
        light: lightTheme,
        dark: darkTheme || null,
        category,
      });
    }
  });

  return pairs;
}

/**
 * Filter themes by use case
 */
export function getThemesByUseCase(useCase: string): ThemeConfig[] {
  const lowerUseCase = useCase.toLowerCase();
  return THEMES.filter((theme) =>
    theme.useCases.some((u) => u.toLowerCase().includes(lowerUseCase)),
  );
}

/**
 * Filter themes by psychology tag
 */
export function getThemesByPsychology(psychology: string): ThemeConfig[] {
  const lowerPsychology = psychology.toLowerCase();
  return THEMES.filter((theme) =>
    theme.psychology.some((p) => p.toLowerCase().includes(lowerPsychology)),
  );
}

/**
 * Get all unique psychology tags
 */
export function getAllPsychologyTags(): string[] {
  const tags = new Set<string>();
  THEMES.forEach((theme) => {
    theme.psychology.forEach((p) => tags.add(p));
  });
  return Array.from(tags).sort();
}

/**
 * Get all unique use cases
 */
export function getAllUseCases(): string[] {
  const cases = new Set<string>();
  THEMES.forEach((theme) => {
    theme.useCases.forEach((u) => cases.add(u));
  });
  return Array.from(cases).sort();
}

/**
 * Get theme statistics
 */
export function getThemeStats() {
  const lightThemes = THEMES.filter((t) => t.category === 'light');
  const darkThemes = THEMES.filter((t) => t.category === 'dark');

  const avgContrast =
    THEMES.reduce((sum, t) => sum + t.accessibility.primaryTextContrast, 0) /
    THEMES.length;

  const wcagLevels = {
    AA: THEMES.filter((t) => t.accessibility.wcagLevel === 'AA').length,
    AAA: THEMES.filter((t) => t.accessibility.wcagLevel === 'AAA').length,
  };

  return {
    total: THEMES.length,
    light: lightThemes.length,
    dark: darkThemes.length,
    averageContrast: Math.round(avgContrast * 100) / 100,
    wcagLevels,
    psychologyTags: getAllPsychologyTags().length,
    useCases: getAllUseCases().length,
  };
}

/**
 * Sort themes by contrast ratio
 */
export function sortThemesByContrast(
  ascending: boolean = false,
): ThemeConfig[] {
  return [...THEMES].sort((a, b) => {
    const diff = a.accessibility.primaryTextContrast - b.accessibility.primaryTextContrast;
    return ascending ? diff : -diff;
  });
}

/**
 * Get recommended themes based on business type
 */
export function getRecommendedThemes(businessType: string): ThemeConfig[] {
  const businessMap: Record<string, string[]> = {
    wellness: ['natural', 'calming', 'soothing', 'gentle'],
    tech: ['modern', 'tech-forward', 'bold', 'energetic'],
    creative: ['creative', 'bold', 'artistic', 'vibrant'],
    professional: ['professional', 'trustworthy', 'stable', 'sophisticated'],
    entertainment: ['edgy', 'vibrant', 'bold', 'energetic'],
    luxury: ['premium', 'luxurious', 'elegant', 'sophisticated'],
    youth: ['playful', 'energetic', 'bold', 'youth-oriented'],
  };

  const keywords = businessMap[businessType.toLowerCase()] || [];

  return THEMES.filter((theme) =>
    theme.psychology.some((p) =>
      keywords.some((k) => p.toLowerCase().includes(k.toLowerCase())),
    ),
  ).slice(0, 3); // Return top 3 matches
}

/**
 * Convert theme to CSS custom properties object
 * Useful for dynamic styling or CSS-in-JS
 */
export function themeToCSS(theme: ThemeConfig): Record<string, string> {
  return {
    '--color-bg-primary': theme.colors.bgPrimary,
    '--color-bg-secondary': theme.colors.bgSecondary,
    '--color-bg-tertiary': theme.colors.bgTertiary,
    '--color-text-primary': theme.colors.textPrimary,
    '--color-text-secondary': theme.colors.textSecondary || theme.colors.textPrimary,
    '--color-text-inverse': theme.colors.textInverse,
    '--color-accent-primary': theme.colors.accentPrimary,
    '--color-accent-secondary':
      theme.colors.accentSecondary || theme.colors.accentPrimary,
    '--color-accent-tertiary': theme.colors.accentTertiary || theme.colors.accentPrimary,
    '--color-border': theme.colors.border || theme.colors.bgTertiary,
    '--color-shadow': theme.colors.shadow || 'rgba(0, 0, 0, 0.1)',
  };
}

/**
 * Export theme configuration as JSON
 * Useful for theme sharing or configuration files
 */
export function exportThemeJSON(theme: ThemeConfig): string {
  return JSON.stringify(theme, null, 2);
}

/**
 * Check if browser supports color-scheme property
 */
export function supportsColorScheme(): boolean {
  if (typeof window === 'undefined') return false;
  return CSS.supports('color-scheme', 'light dark');
}

/**
 * Detect system color scheme preference
 */
export function getSystemColorScheme(): 'light' | 'dark' {
  if (typeof window === 'undefined') return 'light';
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}
