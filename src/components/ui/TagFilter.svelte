<script lang="ts">
  /**
   * TagFilter Component
   * Displays clickable tag filter buttons for blog posts
   *
   * Features:
   * - Active tag highlighting
   * - "All" option to clear filter
   * - Responsive chip/button design
   * - Theme-aware styling
   * - Accessible button controls
   *
   * Usage:
   * <TagFilter
   *   tags={['JavaScript', 'Web Development', 'Design', 'Tutorial']}
   *   activeTag={activeTag}
   *   onTagClick={(tag) => setActiveTag(tag)}
   * />
   */

  interface Props {
    tags: string[];
    activeTag?: string;
    onTagClick?: (tag: string | null) => void;
  }

  let { tags, activeTag, onTagClick }: Props = $props();

  const handleTagClick = (tag: string | null) => {
    if (onTagClick) {
      onTagClick(tag);
    }
  };
</script>

<div class="tag-filter">
  <button
    class="tag-button"
    class:tag-active={!activeTag}
    onclick={() => handleTagClick(null)}
    type="button"
  >
    All
  </button>

  {#each tags as tag}
    <button
      class="tag-button"
      class:tag-active={activeTag === tag}
      onclick={() => handleTagClick(tag)}
      type="button"
    >
      {tag}
    </button>
  {/each}
</div>

<style>
  /**
   * Tag Filter Styles
   * Horizontal scrolling list of tag buttons
   */
  .tag-filter {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-3);
    padding: var(--space-4) 0;
  }

  .tag-button {
    padding: var(--space-2) var(--space-4);
    background: var(--color-bg-secondary);
    color: var(--color-text-primary);
    border: 2px solid transparent;
    border-radius: 20px;
    font-size: var(--text-sm);
    font-weight: 500;
    cursor: pointer;
    transition: all var(--duration-fast) var(--ease-out);
    white-space: nowrap;
  }

  .tag-button:hover {
    background: var(--color-accent-primary);
    color: var(--color-bg-primary);
    transform: translateY(-2px);
  }

  .tag-button:focus-visible {
    outline: 2px solid var(--color-accent-primary);
    outline-offset: 2px;
  }

  /* Active state */
  .tag-active {
    background: var(--color-accent-primary);
    color: var(--color-bg-primary);
    border-color: var(--color-accent-primary);
  }

  .tag-active:hover {
    transform: none;
  }
</style>
