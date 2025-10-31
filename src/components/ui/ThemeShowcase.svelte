<script lang="ts">
  /**
   * Theme Showcase Component
   * Gallery view of all available themes with filtering and sorting
   *
   * Features:
   * - Grid layout of theme preview cards
   * - Filter by category (light/dark)
   * - Filter by psychology/use case tags
   * - Sort by name, contrast ratio
   * - Search functionality
   * - Theme statistics
   */

  import { themeStore } from '@/lib/stores/themeStore.svelte';
  import { getThemeStats } from '@/lib/utils/theme';
  import ThemePreview from './ThemePreview.svelte';
  import type { ThemeConfig } from '@/lib/types/theme';

  // Reactive state
  let searchQuery = $state('');
  let categoryFilter = $state<'all' | 'light' | 'dark'>('all');
  let sortBy = $state<'name' | 'contrast'>('name');
  let compact = $state(false);

  // Derived filtered and sorted themes
  const filteredThemes = $derived.by(() => {
    let themes = [...themeStore.themes];

    // Apply search filter
    if (searchQuery.trim()) {
      themes = themeStore.searchThemes(searchQuery);
    }

    // Apply category filter
    if (categoryFilter !== 'all') {
      themes = themes.filter((t) => t.category === categoryFilter);
    }

    // Apply sorting
    if (sortBy === 'name') {
      themes.sort((a, b) => a.displayName.localeCompare(b.displayName));
    } else if (sortBy === 'contrast') {
      themes.sort(
        (a, b) =>
          b.accessibility.primaryTextContrast - a.accessibility.primaryTextContrast,
      );
    }

    return themes;
  });

  // Theme statistics
  const stats = $derived(getThemeStats());

  // Clear all filters
  function clearFilters() {
    searchQuery = '';
    categoryFilter = 'all';
    sortBy = 'name';
  }
</script>

<div class="theme-showcase">
  <!-- Header -->
  <div class="showcase-header">
    <div class="header-content">
      <h2 class="showcase-title">Theme Gallery</h2>
      <p class="showcase-subtitle">
        Choose from {stats.total} professionally designed themes
      </p>
    </div>

    <!-- Theme Stats -->
    <div class="theme-stats">
      <div class="stat">
        <span class="stat-value">{stats.light}</span>
        <span class="stat-label">Light</span>
      </div>
      <div class="stat">
        <span class="stat-value">{stats.dark}</span>
        <span class="stat-label">Dark</span>
      </div>
      <div class="stat">
        <span class="stat-value">{stats.wcagLevels.AAA}</span>
        <span class="stat-label">WCAG AAA</span>
      </div>
      <div class="stat">
        <span class="stat-value">{stats.averageContrast.toFixed(1)}:1</span>
        <span class="stat-label">Avg Contrast</span>
      </div>
    </div>
  </div>

  <!-- Controls -->
  <div class="showcase-controls">
    <!-- Search -->
    <div class="control-group">
      <label for="theme-search" class="sr-only">Search themes</label>
      <input
        id="theme-search"
        type="text"
        class="search-input"
        placeholder="Search themes..."
        bind:value={searchQuery}
      />
    </div>

    <!-- Category Filter -->
    <div class="control-group">
      <label for="category-filter" class="control-label">Category:</label>
      <select
        id="category-filter"
        class="filter-select"
        bind:value={categoryFilter}
      >
        <option value="all">All Themes</option>
        <option value="light">Light Only</option>
        <option value="dark">Dark Only</option>
      </select>
    </div>

    <!-- Sort By -->
    <div class="control-group">
      <label for="sort-by" class="control-label">Sort by:</label>
      <select id="sort-by" class="filter-select" bind:value={sortBy}>
        <option value="name">Name</option>
        <option value="contrast">Contrast Ratio</option>
      </select>
    </div>

    <!-- View Toggle -->
    <div class="control-group">
      <label class="toggle-label">
        <input
          type="checkbox"
          class="toggle-input"
          bind:checked={compact}
        />
        <span>Compact View</span>
      </label>
    </div>

    <!-- Clear Filters -->
    {#if searchQuery || categoryFilter !== 'all' || sortBy !== 'name'}
      <button
        type="button"
        class="clear-filters-btn"
        onclick={clearFilters}
      >
        Clear Filters
      </button>
    {/if}
  </div>

  <!-- Results Count -->
  <div class="results-info">
    {#if filteredThemes.length === themeStore.themes.length}
      Showing all {filteredThemes.length} themes
    {:else}
      Showing {filteredThemes.length} of {themeStore.themes.length} themes
    {/if}
  </div>

  <!-- Theme Grid -->
  {#if filteredThemes.length === 0}
    <div class="no-results">
      <p class="no-results-icon">🎨</p>
      <p class="no-results-message">No themes found matching your criteria</p>
      <button type="button" class="reset-btn" onclick={clearFilters}>
        Reset Filters
      </button>
    </div>
  {:else}
    <div class="theme-grid" class:compact>
      {#each filteredThemes as theme (theme.id)}
        <ThemePreview {theme} {compact} />
      {/each}
    </div>
  {/if}

  <!-- Footer Info -->
  <div class="showcase-footer">
    <p class="footer-text">
      All themes meet WCAG 2.1 Level AA accessibility standards minimum.
      Most achieve AAA compliance.
    </p>
    <p class="footer-text">
      Click any theme card to apply it instantly.
    </p>
  </div>
</div>

<style>
  .theme-showcase {
    width: 100%;
  }

  .showcase-header {
    margin-bottom: 2rem;
  }

  .header-content {
    margin-bottom: 1.5rem;
  }

  .showcase-title {
    font-size: 2rem;
    font-weight: 700;
    color: var(--color-text-primary);
    margin-bottom: 0.5rem;
  }

  .showcase-subtitle {
    font-size: 1.125rem;
    color: var(--color-text-secondary);
  }

  .theme-stats {
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
  }

  .stat {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem 1.5rem;
    background-color: var(--color-bg-secondary);
    border-radius: 0.5rem;
  }

  .stat-value {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--color-accent-primary);
    margin-bottom: 0.25rem;
  }

  .stat-label {
    font-size: 0.875rem;
    color: var(--color-text-secondary);
  }

  .showcase-controls {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    align-items: center;
    padding: 1.5rem;
    background-color: var(--color-bg-secondary);
    border-radius: 0.75rem;
    margin-bottom: 1.5rem;
  }

  .control-group {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .control-label {
    font-size: 0.875rem;
    font-weight: 600;
    color: var(--color-text-primary);
  }

  .search-input {
    padding: 0.5rem 1rem;
    background-color: var(--color-bg-primary);
    border: 1px solid var(--color-border);
    border-radius: 0.375rem;
    color: var(--color-text-primary);
    font-size: 0.875rem;
    min-width: 240px;
  }

  .search-input:focus {
    outline: 2px solid var(--color-accent-primary);
    outline-offset: 0;
  }

  .filter-select {
    padding: 0.5rem 1rem;
    background-color: var(--color-bg-primary);
    border: 1px solid var(--color-border);
    border-radius: 0.375rem;
    color: var(--color-text-primary);
    font-size: 0.875rem;
    cursor: pointer;
  }

  .filter-select:focus {
    outline: 2px solid var(--color-accent-primary);
    outline-offset: 0;
  }

  .toggle-label {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.875rem;
    color: var(--color-text-primary);
    cursor: pointer;
  }

  .toggle-input {
    cursor: pointer;
  }

  .clear-filters-btn {
    padding: 0.5rem 1rem;
    background-color: var(--color-accent-primary);
    color: var(--color-text-inverse);
    border: none;
    border-radius: 0.375rem;
    font-size: 0.875rem;
    font-weight: 600;
    cursor: pointer;
    transition: opacity 0.2s ease;
  }

  .clear-filters-btn:hover {
    opacity: 0.9;
  }

  .results-info {
    padding: 0.75rem 0;
    color: var(--color-text-secondary);
    font-size: 0.875rem;
    font-weight: 500;
  }

  .theme-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
    gap: 2rem;
    margin-bottom: 3rem;
  }

  .theme-grid.compact {
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 1.5rem;
  }

  .no-results {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 4rem 2rem;
    text-align: center;
  }

  .no-results-icon {
    font-size: 4rem;
    margin-bottom: 1rem;
  }

  .no-results-message {
    font-size: 1.125rem;
    color: var(--color-text-secondary);
    margin-bottom: 1.5rem;
  }

  .reset-btn {
    padding: 0.75rem 1.5rem;
    background-color: var(--color-accent-primary);
    color: var(--color-text-inverse);
    border: none;
    border-radius: 0.5rem;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: opacity 0.2s ease;
  }

  .reset-btn:hover {
    opacity: 0.9;
  }

  .showcase-footer {
    padding: 2rem;
    background-color: var(--color-bg-secondary);
    border-radius: 0.75rem;
    text-align: center;
  }

  .footer-text {
    color: var(--color-text-secondary);
    font-size: 0.875rem;
    margin-bottom: 0.5rem;
  }

  .footer-text:last-child {
    margin-bottom: 0;
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    .showcase-controls {
      flex-direction: column;
      align-items: stretch;
    }

    .control-group {
      flex-direction: column;
      align-items: stretch;
    }

    .search-input {
      min-width: 100%;
    }

    .theme-grid {
      grid-template-columns: 1fr;
    }

    .theme-grid.compact {
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    }
  }
</style>
