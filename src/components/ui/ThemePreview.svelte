<script lang="ts">
  /**
   * Theme Preview Card Component
   * Visual preview card for a single theme with sample UI elements
   *
   * Features:
   * - Color palette display
   * - Sample UI elements (text, button, card)
   * - Theme metadata (name, description, psychology, use cases)
   * - Accessibility info (WCAG level, contrast ratio)
   * - Click to apply theme
   * - Keyboard accessible
   */

  import { themeStore } from '@/lib/stores/themeStore.svelte';
  import type { ThemeConfig } from '@/lib/types/theme';

  interface Props {
    theme: ThemeConfig;
    compact?: boolean;
  }

  let { theme, compact = false }: Props = $props();

  // Check if this theme is currently active
  const isActive = $derived(themeStore.current.id === theme.id);

  // Apply theme
  function applyTheme() {
    themeStore.setTheme(theme.id);
  }

  // Handle keyboard activation
  function handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter' || event.key === ' ') {
      applyTheme();
      event.preventDefault();
    }
  }
</script>

<div
  class="theme-preview-card"
  class:active={isActive}
  class:compact
  role="button"
  tabindex="0"
  onclick={applyTheme}
  onkeydown={handleKeydown}
  aria-label="Preview and apply {theme.displayName} theme"
>
  <!-- Preview Panel -->
  <div
    class="preview-panel"
    style="
      background-color: {theme.colors.bgPrimary};
      color: {theme.colors.textPrimary};
      border-color: {theme.colors.border || theme.colors.bgTertiary};
    "
  >
    {#if !compact}
      <!-- Sample UI -->
      <div class="sample-ui">
        <div
          class="sample-header"
          style="background-color: {theme.colors.bgSecondary}"
        >
          <div
            class="sample-title"
            style="color: {theme.colors.textPrimary}"
          >
            {theme.displayName}
          </div>
        </div>

        <div class="sample-content">
          <p
            class="sample-text"
            style="color: {theme.colors.textPrimary}"
          >
            Sample text paragraph showing how body copy looks in this theme.
          </p>

          <button
            type="button"
            class="sample-button"
            style="
              background-color: {theme.colors.accentPrimary};
              color: {theme.colors.textInverse};
            "
          >
            Sample Button
          </button>
        </div>
      </div>
    {/if}

    <!-- Color Swatches -->
    <div class="color-swatches">
      <div
        class="swatch"
        style="background-color: {theme.colors.bgPrimary}"
        title="Background Primary: {theme.colors.bgPrimary}"
      ></div>
      <div
        class="swatch"
        style="background-color: {theme.colors.bgSecondary}"
        title="Background Secondary: {theme.colors.bgSecondary}"
      ></div>
      <div
        class="swatch"
        style="background-color: {theme.colors.bgTertiary}"
        title="Background Tertiary: {theme.colors.bgTertiary}"
      ></div>
      <div
        class="swatch"
        style="background-color: {theme.colors.accentPrimary}"
        title="Accent Primary: {theme.colors.accentPrimary}"
      ></div>
      <div
        class="swatch"
        style="background-color: {theme.colors.textPrimary}"
        title="Text Primary: {theme.colors.textPrimary}"
      ></div>
    </div>
  </div>

  <!-- Info Panel -->
  <div class="info-panel">
    <div class="theme-header">
      <h3 class="theme-name">{theme.displayName}</h3>
      <span class="theme-category" class:dark={theme.category === 'dark'}>
        {theme.category}
      </span>
    </div>

    {#if !compact}
      <p class="theme-description">{theme.description}</p>

      <!-- Psychology Tags -->
      <div class="theme-tags">
        <div class="tags-label">Psychology:</div>
        <div class="tags-list">
          {#each theme.psychology as tag}
            <span class="tag">{tag}</span>
          {/each}
        </div>
      </div>

      <!-- Use Cases -->
      <div class="theme-use-cases">
        <div class="use-cases-label">Best for:</div>
        <ul class="use-cases-list">
          {#each theme.useCases.slice(0, 3) as useCase}
            <li>{useCase}</li>
          {/each}
        </ul>
      </div>

      <!-- Accessibility Info -->
      <div class="accessibility-info">
        <span class="wcag-badge" class:aaa={theme.accessibility.wcagLevel === 'AAA'}>
          WCAG {theme.accessibility.wcagLevel}
        </span>
        <span class="contrast-ratio">
          {theme.accessibility.primaryTextContrast.toFixed(2)}:1 contrast
        </span>
      </div>

      {#if theme.accessibility.notes}
        <div class="accessibility-notes">
          ℹ️ {theme.accessibility.notes}
        </div>
      {/if}
    {/if}

    <!-- Active Indicator -->
    {#if isActive}
      <div class="active-indicator">
        ✓ Currently Active
      </div>
    {/if}
  </div>
</div>

<style>
  .theme-preview-card {
    display: flex;
    flex-direction: column;
    border: 2px solid var(--color-border);
    border-radius: 0.75rem;
    overflow: hidden;
    transition: all 0.2s ease;
    cursor: pointer;
    background-color: var(--color-bg-primary);
  }

  .theme-preview-card:hover {
    border-color: var(--color-accent-primary);
    box-shadow: 0 4px 12px var(--color-shadow);
    transform: translateY(-2px);
  }

  .theme-preview-card:focus-visible {
    outline: 3px solid var(--color-accent-primary);
    outline-offset: 2px;
  }

  .theme-preview-card.active {
    border-color: var(--color-accent-primary);
    box-shadow: 0 0 0 3px rgba(var(--color-accent-primary), 0.2);
  }

  .theme-preview-card.compact {
    max-width: 240px;
  }

  .preview-panel {
    position: relative;
    padding: 1rem;
    border-bottom: 1px solid;
    min-height: 140px;
  }

  .theme-preview-card.compact .preview-panel {
    min-height: 80px;
  }

  .sample-ui {
    margin-bottom: 1rem;
  }

  .sample-header {
    padding: 0.75rem;
    border-radius: 0.375rem;
    margin-bottom: 0.75rem;
  }

  .sample-title {
    font-size: 0.875rem;
    font-weight: 600;
  }

  .sample-content {
    padding: 0 0.75rem;
  }

  .sample-text {
    font-size: 0.75rem;
    line-height: 1.5;
    margin-bottom: 0.75rem;
  }

  .sample-button {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 0.375rem;
    font-size: 0.75rem;
    font-weight: 600;
    cursor: pointer;
  }

  .color-swatches {
    display: flex;
    gap: 0.5rem;
  }

  .swatch {
    flex: 1;
    height: 2rem;
    border-radius: 0.25rem;
    border: 1px solid rgba(0, 0, 0, 0.1);
  }

  .theme-preview-card.compact .swatch {
    height: 1.5rem;
  }

  .info-panel {
    padding: 1rem;
  }

  .theme-preview-card.compact .info-panel {
    padding: 0.75rem;
  }

  .theme-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.5rem;
  }

  .theme-name {
    font-size: 1.125rem;
    font-weight: 700;
    color: var(--color-text-primary);
    margin: 0;
  }

  .theme-preview-card.compact .theme-name {
    font-size: 0.875rem;
  }

  .theme-category {
    padding: 0.25rem 0.5rem;
    background-color: var(--color-bg-tertiary);
    color: var(--color-text-primary);
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    border-radius: 0.25rem;
  }

  .theme-category.dark {
    background-color: var(--color-text-primary);
    color: var(--color-text-inverse);
  }

  .theme-description {
    font-size: 0.875rem;
    color: var(--color-text-secondary);
    line-height: 1.5;
    margin-bottom: 1rem;
  }

  .theme-tags,
  .theme-use-cases {
    margin-bottom: 1rem;
  }

  .tags-label,
  .use-cases-label {
    font-size: 0.75rem;
    font-weight: 600;
    color: var(--color-text-secondary);
    margin-bottom: 0.5rem;
  }

  .tags-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.375rem;
  }

  .tag {
    padding: 0.25rem 0.5rem;
    background-color: var(--color-bg-tertiary);
    color: var(--color-text-primary);
    font-size: 0.75rem;
    border-radius: 0.25rem;
  }

  .use-cases-list {
    margin: 0;
    padding-left: 1.25rem;
    font-size: 0.875rem;
    color: var(--color-text-primary);
  }

  .use-cases-list li {
    margin-bottom: 0.25rem;
  }

  .accessibility-info {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem;
    background-color: var(--color-bg-secondary);
    border-radius: 0.375rem;
    margin-bottom: 0.75rem;
  }

  .wcag-badge {
    padding: 0.25rem 0.5rem;
    background-color: #f59e0b;
    color: white;
    font-size: 0.75rem;
    font-weight: 700;
    border-radius: 0.25rem;
  }

  .wcag-badge.aaa {
    background-color: #10b981;
  }

  .contrast-ratio {
    font-size: 0.75rem;
    color: var(--color-text-secondary);
    font-weight: 600;
  }

  .accessibility-notes {
    padding: 0.75rem;
    background-color: var(--color-bg-tertiary);
    border-left: 3px solid var(--color-accent-primary);
    font-size: 0.75rem;
    color: var(--color-text-primary);
    line-height: 1.5;
    margin-bottom: 0.75rem;
  }

  .active-indicator {
    padding: 0.5rem;
    background-color: var(--color-accent-primary);
    color: var(--color-text-inverse);
    font-size: 0.875rem;
    font-weight: 600;
    text-align: center;
    border-radius: 0.375rem;
  }
</style>
