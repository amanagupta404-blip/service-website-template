<script lang="ts">
  /**
   * CategoryFilter Component
   * Displays clickable category filter buttons for portfolio items
   *
   * Features:
   * - Active category highlighting
   * - "All" option to clear filter
   * - Responsive chip/button design
   * - Theme-aware styling
   * - Accessible button controls
   *
   * Usage:
   * <CategoryFilter
   *   categories={['Web Development', 'Mobile', 'UI/UX Design']}
   *   activeCategory={activeCategory}
   *   onCategoryClick={(category) => setActiveCategory(category)}
   * />
   */

  interface Props {
    categories: string[];
    activeCategory?: string;
    onCategoryClick?: (category: string | null) => void;
  }

  let { categories, activeCategory, onCategoryClick }: Props = $props();

  const handleCategoryClick = (category: string | null) => {
    if (onCategoryClick) {
      onCategoryClick(category);
    }
  };
</script>

<div class="category-filter">
  <button
    class="category-button"
    class:category-active={!activeCategory}
    onclick={() => handleCategoryClick(null)}
    type="button"
  >
    All Projects
  </button>

  {#each categories as category}
    <button
      class="category-button"
      class:category-active={activeCategory === category}
      onclick={() => handleCategoryClick(category)}
      type="button"
    >
      {category}
    </button>
  {/each}
</div>

<style>
  /**
   * Category Filter Styles
   * Horizontal list of category buttons
   */
  .category-filter {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: var(--space-3);
    padding: var(--space-6) 0;
  }

  .category-button {
    padding: var(--space-3) var(--space-5);
    background: var(--color-bg-secondary);
    color: var(--color-text-primary);
    border: 2px solid transparent;
    border-radius: 24px;
    font-size: var(--text-base);
    font-weight: 600;
    cursor: pointer;
    transition: all var(--duration-fast) var(--ease-out);
    white-space: nowrap;
  }

  .category-button:hover {
    background: var(--color-accent-primary);
    color: var(--color-bg-primary);
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .category-button:focus-visible {
    outline: 2px solid var(--color-accent-primary);
    outline-offset: 2px;
  }

  /* Active state */
  .category-active {
    background: var(--color-accent-primary);
    color: var(--color-bg-primary);
    border-color: var(--color-accent-primary);
  }

  .category-active:hover {
    transform: none;
  }
</style>
