/**
 * Theme Store
 * Svelte 5 runes-based reactive theme management
 *
 * Features:
 * - Reactive theme state with $state
 * - Derived properties with $derived
 * - localStorage persistence
 * - System preference detection
 * - Cross-tab synchronization
 * - Type-safe theme operations
 */

import { THEMES, getThemeById, getDefaultTheme } from '@/lib/config/themes';
import type { ThemeConfig, ThemeMode, ThemePreference } from '@/lib/types/theme';

const STORAGE_KEY = 'theme-preference';

/**
 * Create theme store with Svelte 5 runes
 */
function createThemeStore() {
  // Reactive state
  let preference = $state<ThemePreference>('auto');
  let currentTheme = $state<ThemeConfig>(getDefaultTheme('light'));
  let systemPrefersDark = $state(false);

  // Initialize on client-side
  if (typeof window !== 'undefined') {
    // Get stored preference
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      preference = stored as ThemePreference;
    }

    // Check system preference
    systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Resolve initial theme
    currentTheme = resolveTheme(preference, systemPrefersDark);
  }

  // Derived properties
  const isDark = $derived(currentTheme.category === 'dark');
  const isLight = $derived(currentTheme.category === 'light');
  const isAuto = $derived(preference === 'auto');

  /**
   * Resolve theme based on preference and system settings
   */
  function resolveTheme(pref: ThemePreference, systemDark: boolean): ThemeConfig {
    if (pref === 'auto') {
      return getDefaultTheme(systemDark ? 'dark' : 'light');
    }
    if (pref === 'light') {
      return getDefaultTheme('light');
    }
    if (pref === 'dark') {
      return getDefaultTheme('dark');
    }
    return getThemeById(pref) || getDefaultTheme('light');
  }

  /**
   * Apply theme to document
   */
  function applyTheme(theme: ThemeConfig) {
    if (typeof document === 'undefined') return;

    document.documentElement.setAttribute('data-theme', theme.id);

    // Update color-scheme meta for browser UI
    let metaColorScheme = document.querySelector('meta[name="color-scheme"]');
    if (!metaColorScheme) {
      metaColorScheme = document.createElement('meta');
      metaColorScheme.setAttribute('name', 'color-scheme');
      document.head.appendChild(metaColorScheme);
    }
    metaColorScheme.setAttribute('content', theme.category);
  }

  /**
   * Save preference to localStorage
   */
  function savePreference(pref: ThemePreference) {
    if (typeof localStorage === 'undefined') return;
    try {
      localStorage.setItem(STORAGE_KEY, pref);
    } catch (e) {
      console.error('Failed to save theme preference:', e);
    }
  }

  /**
   * Set theme by ID
   */
  function setTheme(themeId: string) {
    const theme = getThemeById(themeId);
    if (!theme) {
      console.warn(`Theme "${themeId}" not found`);
      return;
    }

    preference = themeId;
    currentTheme = theme;
    savePreference(themeId);
    applyTheme(theme);
  }

  /**
   * Set theme mode (light/dark/auto)
   */
  function setThemeMode(mode: ThemeMode) {
    preference = mode;
    const resolved = resolveTheme(mode, systemPrefersDark);
    currentTheme = resolved;
    savePreference(mode);
    applyTheme(resolved);
  }

  /**
   * Toggle between light and dark modes
   */
  function toggleMode() {
    if (isAuto) {
      // If auto, switch to opposite of current system preference
      setThemeMode(systemPrefersDark ? 'light' : 'dark');
    } else if (isDark) {
      setThemeMode('light');
    } else {
      setThemeMode('dark');
    }
  }

  /**
   * Get all themes by category
   */
  function getThemesByCategory(category: 'light' | 'dark'): ThemeConfig[] {
    return THEMES.filter((theme) => theme.category === category);
  }

  /**
   * Search themes by query
   */
  function searchThemes(query: string): ThemeConfig[] {
    const lowerQuery = query.toLowerCase();
    return THEMES.filter(
      (theme) =>
        theme.displayName.toLowerCase().includes(lowerQuery) ||
        theme.description.toLowerCase().includes(lowerQuery) ||
        theme.psychology.some((p) => p.toLowerCase().includes(lowerQuery)) ||
        theme.useCases.some((u) => u.toLowerCase().includes(lowerQuery)),
    );
  }

  // Setup system preference listener (client-side only)
  if (typeof window !== 'undefined') {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleSystemChange = (e: MediaQueryListEvent) => {
      systemPrefersDark = e.matches;

      // Only apply system preference if user is in auto mode
      if (preference === 'auto') {
        const resolved = resolveTheme('auto', e.matches);
        currentTheme = resolved;
        applyTheme(resolved);
      }
    };

    mediaQuery.addEventListener('change', handleSystemChange);

    // Cleanup handled by Svelte when component unmounts
  }

  // Setup cross-tab synchronization (client-side only)
  if (typeof window !== 'undefined') {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY && e.newValue) {
        preference = e.newValue as ThemePreference;
        const resolved = resolveTheme(preference, systemPrefersDark);
        currentTheme = resolved;
        applyTheme(resolved);
      }
    };

    window.addEventListener('storage', handleStorageChange);

    // Cleanup handled by Svelte when component unmounts
  }

  return {
    // Reactive state (getters)
    get current() {
      return currentTheme;
    },
    get preference() {
      return preference;
    },
    get isDark() {
      return isDark;
    },
    get isLight() {
      return isLight;
    },
    get isAuto() {
      return isAuto;
    },
    get themes() {
      return THEMES;
    },

    // Methods
    setTheme,
    setThemeMode,
    toggleMode,
    getThemesByCategory,
    searchThemes,
  };
}

// Export singleton instance
export const themeStore = createThemeStore();
