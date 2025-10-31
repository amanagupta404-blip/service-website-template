<script lang="ts">
/**
 * Card Component
 * Flexible card container with optional slots and container query support
 *
 * Features:
 * - Multiple slots (image, title, default, footer)
 * - Clickable variant (entire card as link)
 * - Container queries for responsive layout
 * - Configurable padding
 * - Theme-aware styling
 * - Hover effects for clickable cards
 *
 * Phase 4.2: Card Component
 */

// Props
let {
  clickable = false,
  href,
  padding = 'md',
  class: className = '',
  children,
  cardImage,
  cardTitle,
  cardFooter,
}: {
  clickable?: boolean;
  href?: string;
  padding?: 'sm' | 'md' | 'lg';
  class?: string;
  children?: any;
  cardImage?: any;
  cardTitle?: any;
  cardFooter?: any;
} = $props();

// Determine if card should be clickable
const isClickable = clickable || !!href;

// Build class names
const cardClasses = `card card-padding-${padding} ${isClickable ? 'card-clickable' : ''} ${className}`.trim();
</script>

{#if href && isClickable}
  <a {href} class={cardClasses}>
    {#if cardImage}
      <div class="card-image">
        {@render cardImage()}
      </div>
    {/if}
    <div class="card-content">
      {#if cardTitle}
        <div class="card-title">
          {@render cardTitle()}
        </div>
      {/if}
      <div class="card-body">
        {@render children?.()}
      </div>
    </div>
    {#if cardFooter}
      <div class="card-footer">
        {@render cardFooter()}
      </div>
    {/if}
  </a>
{:else}
  <div class={cardClasses}>
    {#if cardImage}
      <div class="card-image">
        {@render cardImage()}
      </div>
    {/if}
    <div class="card-content">
      {#if cardTitle}
        <div class="card-title">
          {@render cardTitle()}
        </div>
      {/if}
      <div class="card-body">
        {@render children?.()}
      </div>
    </div>
    {#if cardFooter}
      <div class="card-footer">
        {@render cardFooter()}
      </div>
    {/if}
  </div>
{/if}

<style>
  /**
   * Base Card Styles
   */
  .card {
    display: flex;
    flex-direction: column;
    background-color: var(--color-bg-primary);
    border: 1px solid var(--color-border);
    border-radius: 8px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    transition: all var(--duration-normal) var(--ease-in-out);
    overflow: hidden;
    container-type: inline-size;
    text-decoration: none;
    color: inherit;
  }

  /**
   * Clickable Card Styles
   */
  .card-clickable {
    cursor: pointer;
  }

  .card-clickable:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    border-color: var(--color-accent-primary);
  }

  .card-clickable:active {
    transform: translateY(0);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  }

  .card-clickable:focus-visible {
    outline: 3px solid var(--color-accent-primary);
    outline-offset: 2px;
  }

  /**
   * Card Padding Variants
   */
  .card-padding-sm .card-content,
  .card-padding-sm .card-footer {
    padding: var(--space-4);
  }

  .card-padding-md .card-content,
  .card-padding-md .card-footer {
    padding: var(--space-6);
  }

  .card-padding-lg .card-content,
  .card-padding-lg .card-footer {
    padding: var(--space-8);
  }

  /**
   * Card Image
   */
  .card-image {
    width: 100%;
    overflow: hidden;
  }

  .card-image :global(img) {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  /**
   * Card Content
   */
  .card-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: var(--space-4);
  }

  .card-title {
    font-size: var(--text-xl);
    font-weight: var(--font-semibold);
    color: var(--color-text-primary);
  }

  .card-body {
    flex: 1;
    font-size: var(--text-base);
    line-height: var(--leading-relaxed);
    color: var(--color-text-primary);
  }

  /**
   * Card Footer
   */
  .card-footer {
    border-top: 1px solid var(--color-border);
    background-color: var(--color-bg-secondary);
  }

  /**
   * Container Query: Horizontal layout at 400px+
   */
  @container (min-width: 400px) {
    .card {
      flex-direction: row;
    }

    .card-image {
      width: 40%;
      min-height: 200px;
    }

    .card-content {
      width: 60%;
    }

    .card-footer {
      border-top: none;
      border-left: 1px solid var(--color-border);
      display: flex;
      align-items: center;
    }
  }

  /**
   * Container Query: Reset to vertical at larger breakpoint for grid layouts
   */
  @container (min-width: 600px) {
    .card {
      flex-direction: column;
    }

    .card-image {
      width: 100%;
      min-height: auto;
    }

    .card-content {
      width: 100%;
    }

    .card-footer {
      border-left: none;
      border-top: 1px solid var(--color-border);
    }
  }

  /**
   * Accessibility and Reduced Motion
   */
  @media (prefers-reduced-motion: reduce) {
    .card,
    .card-clickable:hover,
    .card-clickable:active {
      transition: none;
      transform: none;
    }
  }
</style>

