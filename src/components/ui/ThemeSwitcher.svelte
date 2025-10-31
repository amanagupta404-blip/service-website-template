<script lang="ts">
  /**
   * Theme Switcher Component
   * Dropdown UI for switching between themes with search and mode toggle
   *
   * Features:
   * - Theme search/filter
   * - Light/dark mode toggle
   * - Visual theme previews
   * - Keyboard navigation
   * - Accessible with ARIA labels
   */

  import { themeStore } from '@/lib/stores/themeStore.svelte';
  import type { ThemeConfig } from '@/lib/types/theme';

  // Reactive state
  let isOpen = $state(false);
  let searchQuery = $state('');
  let focusedIndex = $state(0);

  // Derived filtered themes
  const filteredThemes = $derived.by(() => {
    if (!searchQuery.trim()) {
      return themeStore.themes;
    }
    return themeStore.searchThemes(searchQuery);
  });

  // Derived light and dark themes
  const lightThemes = $derived(themeStore.getThemesByCategory('light'));
  const darkThemes = $derived(themeStore.getThemesByCategory('dark'));

  // Close dropdown when clicking outside
  function handleClickOutside(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.theme-switcher')) {
      isOpen = false;
    }
  }

  // Toggle dropdown
  function toggleDropdown() {
    isOpen = !isOpen;
    if (isOpen) {
      searchQuery = '';
      focusedIndex = 0;
    }
  }

  // Select theme
  function selectTheme(theme: ThemeConfig) {
    themeStore.setTheme(theme.id);
    isOpen = false;
  }

  // Toggle light/dark mode
  function toggleMode() {
    themeStore.toggleMode();
  }

  // Keyboard navigation
  function handleKeydown(event: KeyboardEvent) {
    if (!isOpen) return;

    switch (event.key) {
      case 'Escape':
        isOpen = false;
        event.preventDefault();
        break;
      case 'ArrowDown':
        focusedIndex = Math.min(focusedIndex + 1, filteredThemes.length - 1);
        event.preventDefault();
        break;
      case 'ArrowUp':
        focusedIndex = Math.max(focusedIndex - 1, 0);
        event.preventDefault();
        break;
      case 'Enter':
        if (filteredThemes[focusedIndex]) {
          selectTheme(filteredThemes[focusedIndex]);
        }
        event.preventDefault();
        break;
    }
  }

  // Setup click outside listener
  $effect(() => {
    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  });
</script>

<svelte:window on:keydown={handleKeydown} />

<div class="theme-switcher">
  <!-- Trigger Button -->
  <button
    type="button"
    class="theme-switcher-trigger"
    onclick={toggleDropdown}
    aria-label="Theme switcher"
    aria-expanded={isOpen}
    aria-haspopup="true"
  >
    <span class="theme-icon">
      {#if themeStore.isDark}
        🌙
      {:else}
        ☀️
      {/if}
    </span>
    <span class="theme-name">{themeStore.current.displayName}</span>
    <span class="dropdown-arrow" class:open={isOpen}>▼</span>
  </button>

  <!-- Dropdown Menu -->
  {#if isOpen}
    <div class="theme-dropdown" role="menu">
      <!-- Search Input -->
      <div class="search-container">
        <input
          type="text"
          class="theme-search"
          placeholder="Search themes..."
          bind:value={searchQuery}
          aria-label="Search themes"
        />
      </div>

      <!-- Mode Toggle -->
      <div class="mode-toggle-container">
        <button
          type="button"
          class="mode-toggle"
          onclick={toggleMode}
          aria-label="Toggle light/dark mode"
        >
          <span class="mode-icon">
            {#if themeStore.isDark}
              ☀️ Switch to Light
            {:else}
              🌙 Switch to Dark
            {/if}
          </span>
        </button>
      </div>

      <!-- Theme List -->
      <div class="theme-list" role="listbox">
        {#if filteredThemes.length === 0}
          <div class="no-results">No themes found</div>
        {:else}
          <!-- Light Themes Section -->
          {#if lightThemes.some((t) => filteredThemes.includes(t))}
            <div class="theme-section">
              <div class="section-label">Light Themes</div>
              {#each lightThemes.filter((t) => filteredThemes.includes(t)) as theme, i}
                <button
                  type="button"
                  class="theme-option"
                  class:active={theme.id === themeStore.current.id}
                  class:focused={filteredThemes.indexOf(theme) === focusedIndex}
                  onclick={() => selectTheme(theme)}
                  role="option"
                  aria-selected={theme.id === themeStore.current.id}
                >
                  <div class="theme-preview">
                    <div class="preview-colors">
                      <span
                        class="color-swatch"
                        style="background-color: {theme.colors.bgPrimary}"
                      ></span>
                      <span
                        class="color-swatch"
                        style="background-color: {theme.colors.accentPrimary}"
                      ></span>
                      <span
                        class="color-swatch"
                        style="background-color: {theme.colors.textPrimary}"
                      ></span>
                    </div>
                  </div>
                  <div class="theme-info">
                    <div class="theme-title">{theme.displayName}</div>
                    <div class="theme-description">{theme.description}</div>
                  </div>
                  {#if theme.id === themeStore.current.id}
                    <span class="check-icon">✓</span>
                  {/if}
                </button>
              {/each}
            </div>
          {/if}

          <!-- Dark Themes Section -->
          {#if darkThemes.some((t) => filteredThemes.includes(t))}
            <div class="theme-section">
              <div class="section-label">Dark Themes</div>
              {#each darkThemes.filter((t) => filteredThemes.includes(t)) as theme}
                <button
                  type="button"
                  class="theme-option"
                  class:active={theme.id === themeStore.current.id}
                  class:focused={filteredThemes.indexOf(theme) === focusedIndex}
                  onclick={() => selectTheme(theme)}
                  role="option"
                  aria-selected={theme.id === themeStore.current.id}
                >
                  <div class="theme-preview">
                    <div class="preview-colors">
                      <span
                        class="color-swatch"
                        style="background-color: {theme.colors.bgPrimary}"
                      ></span>
                      <span
                        class="color-swatch"
                        style="background-color: {theme.colors.accentPrimary}"
                      ></span>
                      <span
                        class="color-swatch"
                        style="background-color: {theme.colors.textPrimary}"
                      ></span>
                    </div>
                  </div>
                  <div class="theme-info">
                    <div class="theme-title">{theme.displayName}</div>
                    <div class="theme-description">{theme.description}</div>
                  </div>
                  {#if theme.id === themeStore.current.id}
                    <span class="check-icon">✓</span>
                  {/if}
                </button>
              {/each}
            </div>
          {/if}
        {/if}
      </div>

      <!-- Theme Stats Footer -->
      <div class="theme-footer">
        <small>
          {filteredThemes.length} of {themeStore.themes.length} themes
        </small>
      </div>
    </div>
  {/if}
</div>

<style>
  .theme-switcher {
    position: relative;
    display: inline-block;
  }

  .theme-switcher-trigger {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    background-color: var(--color-bg-secondary);
    border: 1px solid var(--color-border);
    border-radius: 0.5rem;
    color: var(--color-text-primary);
    font-size: 0.875rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .theme-switcher-trigger:hover {
    background-color: var(--color-bg-tertiary);
    border-color: var(--color-accent-primary);
  }

  .theme-switcher-trigger:focus-visible {
    outline: 3px solid var(--color-accent-primary);
    outline-offset: 2px;
  }

  .theme-icon {
    font-size: 1.25rem;
    line-height: 1;
  }

  .theme-name {
    min-width: 120px;
    text-align: left;
  }

  .dropdown-arrow {
    font-size: 0.75rem;
    transition: transform 0.2s ease;
  }

  .dropdown-arrow.open {
    transform: rotate(180deg);
  }

  .theme-dropdown {
    position: absolute;
    top: calc(100% + 0.5rem);
    right: 0;
    min-width: 360px;
    max-width: 480px;
    max-height: 500px;
    background-color: var(--color-bg-primary);
    border: 1px solid var(--color-border);
    border-radius: 0.75rem;
    box-shadow: 0 8px 24px var(--color-shadow);
    overflow: hidden;
    z-index: 1000;
    animation: slideDown 0.2s ease;
  }

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .search-container {
    padding: 1rem;
    border-bottom: 1px solid var(--color-border);
  }

  .theme-search {
    width: 100%;
    padding: 0.5rem 0.75rem;
    background-color: var(--color-bg-secondary);
    border: 1px solid var(--color-border);
    border-radius: 0.375rem;
    color: var(--color-text-primary);
    font-size: 0.875rem;
  }

  .theme-search:focus {
    outline: 2px solid var(--color-accent-primary);
    outline-offset: 0;
  }

  .mode-toggle-container {
    padding: 0.75rem 1rem;
    border-bottom: 1px solid var(--color-border);
  }

  .mode-toggle {
    width: 100%;
    padding: 0.5rem 0.75rem;
    background-color: var(--color-accent-primary);
    color: var(--color-text-inverse);
    border: none;
    border-radius: 0.375rem;
    font-size: 0.875rem;
    font-weight: 600;
    cursor: pointer;
    transition: opacity 0.2s ease;
  }

  .mode-toggle:hover {
    opacity: 0.9;
  }

  .mode-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }

  .theme-list {
    max-height: 300px;
    overflow-y: auto;
  }

  .theme-section {
    padding: 0.5rem 0;
  }

  .section-label {
    padding: 0.5rem 1rem;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--color-text-secondary);
  }

  .theme-option {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    width: 100%;
    padding: 0.75rem 1rem;
    background: none;
    border: none;
    color: var(--color-text-primary);
    text-align: left;
    cursor: pointer;
    transition: background-color 0.2s ease;
  }

  .theme-option:hover,
  .theme-option.focused {
    background-color: var(--color-bg-secondary);
  }

  .theme-option.active {
    background-color: var(--color-bg-tertiary);
  }

  .theme-preview {
    flex-shrink: 0;
  }

  .preview-colors {
    display: flex;
    gap: 0.25rem;
  }

  .color-swatch {
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 0.25rem;
    border: 1px solid var(--color-border);
  }

  .theme-info {
    flex: 1;
    min-width: 0;
  }

  .theme-title {
    font-size: 0.875rem;
    font-weight: 600;
    margin-bottom: 0.125rem;
  }

  .theme-description {
    font-size: 0.75rem;
    color: var(--color-text-secondary);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .check-icon {
    flex-shrink: 0;
    font-size: 1.25rem;
    color: var(--color-accent-primary);
  }

  .no-results {
    padding: 2rem 1rem;
    text-align: center;
    color: var(--color-text-secondary);
    font-size: 0.875rem;
  }

  .theme-footer {
    padding: 0.75rem 1rem;
    border-top: 1px solid var(--color-border);
    background-color: var(--color-bg-secondary);
    text-align: center;
    color: var(--color-text-secondary);
  }
</style>
