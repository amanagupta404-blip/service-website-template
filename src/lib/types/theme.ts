/**
 * Theme System Type Definitions
 * Defines interfaces for the multi-theme system
 */

export interface ThemeColors {
  bgPrimary: string;
  bgSecondary: string;
  bgTertiary: string;
  textPrimary: string;
  textSecondary?: string;
  textInverse: string;
  accentPrimary: string;
  accentSecondary?: string;
  accentTertiary?: string;
  border?: string;
  shadow?: string;
}

export interface ThemeAccessibility {
  primaryTextContrast: number;
  wcagLevel: 'AA' | 'AAA';
  notes?: string;
}

export interface ThemeConfig {
  id: string;
  name: string;
  displayName: string;
  category: 'light' | 'dark';
  description: string;
  psychology: string[];
  useCases: string[];
  colors: ThemeColors;
  accessibility: ThemeAccessibility;
}

export type ThemeMode = 'light' | 'dark' | 'auto';
export type ThemePreference = ThemeConfig['id'] | ThemeMode;

export interface ThemeStore {
  current: ThemeConfig;
  preference: ThemePreference;
  isDark: boolean;
  isLight: boolean;
  themes: ThemeConfig[];
  setTheme: (themeId: string) => void;
  setThemeMode: (mode: ThemeMode) => void;
}
