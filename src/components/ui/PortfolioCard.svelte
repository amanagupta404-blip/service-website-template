<script lang="ts">
  /**
   * PortfolioCard Component
   * Display portfolio/project items with image, title, and description
   *
   * Features:
   * - Uses Card component
   * - Image display
   * - Optional category badge
   * - Hover effects
   * - Entire card clickable
   * - Theme-aware
   *
   * Phase 4.8: PortfolioCard Component
   */

  import Card from './Card.svelte';

  // Props
  let {
    portfolioTitle: projectTitle,
    description,
    image: projectImage,
    category,
    href,
    class: className = '',
  }: {
    portfolioTitle: string;
    description: string;
    image: string;
    category?: string;
    href: string;
    class?: string;
  } = $props();
</script>

<Card {href} clickable class="portfolio-card {className}">
  {#snippet image()}
    <img src={projectImage} alt={projectTitle} class="portfolio-image" />
  {/snippet}

  {#snippet title()}
    <div class="portfolio-header">
      <h3 class="portfolio-title">{projectTitle}</h3>
      {#if category}
        <span class="portfolio-category">{category}</span>
      {/if}
    </div>
  {/snippet}

  <p class="portfolio-description">{description}</p>
</Card>

<style>
  /**
   * Portfolio Card
   */
  :global(.portfolio-card) {
    height: 100%;
  }

  /**
   * Portfolio Image
   */
  .portfolio-image {
    width: 100%;
    height: 240px;
    object-fit: cover;
    transition: transform var(--duration-normal) var(--ease-in-out);
  }

  :global(.portfolio-card:hover) .portfolio-image {
    transform: scale(1.05);
  }

  /**
   * Portfolio Header
   */
  .portfolio-header {
    display: flex;
    flex-direction: column;
    gap: var(--space-2);
  }

  /**
   * Portfolio Title
   */
  .portfolio-title {
    font-size: var(--text-xl);
    font-weight: var(--font-semibold);
    color: var(--color-text-primary);
    margin: 0;
  }

  /**
   * Portfolio Category Badge
   */
  .portfolio-category {
    display: inline-block;
    padding: var(--space-1) var(--space-3);
    font-size: var(--text-xs);
    font-weight: var(--font-medium);
    color: var(--color-text-inverse);
    background-color: var(--color-accent-primary);
    border-radius: 12px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    align-self: flex-start;
  }

  /**
   * Portfolio Description
   */
  .portfolio-description {
    font-size: var(--text-base);
    line-height: var(--leading-relaxed);
    color: var(--color-text-primary);
    opacity: 0.8;
    margin: 0;
  }

  /**
   * Responsive & Reduced Motion
   */
  @media (prefers-reduced-motion: reduce) {
    .portfolio-image {
      transition: none;
    }

    :global(.portfolio-card:hover) .portfolio-image {
      transform: none;
    }
  }
</style>
