<script lang="ts">
/**
 * PortfolioGrid Component
 * Display portfolio items in a responsive grid
 *
 * Features:
 * - Responsive grid layout (auto-fit, minmax)
 * - Configurable columns
 * - Uses PortfolioCard component
 * - Theme-aware
 *
 * Phase 4.8: PortfolioGrid Component
 */

import PortfolioCard from './PortfolioCard.svelte';

// Portfolio item type
export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  image: string;
  category?: string;
  href: string;
}

// Props
let {
  items,
  columns,
  class: className = '',
}: {
  items: PortfolioItem[];
  columns?: number;
  class?: string;
} = $props();

// Determine grid class based on columns prop
const gridClass = columns
  ? `portfolio-grid-cols-${columns}`
  : 'portfolio-grid-auto';
</script>

<div class="portfolio-grid {gridClass} {className}">
  {#each items as item (item.id)}
    <PortfolioCard
      portfolioTitle={item.title}
      description={item.description}
      image={item.image}
      category={item.category}
      href={item.href}
    />
  {/each}
</div>

<style>
  /**
   * Portfolio Grid Base
   */
  .portfolio-grid {
    display: grid;
    gap: var(--space-6);
    width: 100%;
  }

  /**
   * Auto Grid (responsive, auto-fit)
   */
  .portfolio-grid-auto {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }

  /**
   * Fixed Column Grids
   */
  .portfolio-grid-cols-1 {
    grid-template-columns: 1fr;
  }

  .portfolio-grid-cols-2 {
    grid-template-columns: 1fr;
  }

  @media (min-width: 768px) {
    .portfolio-grid-cols-2 {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  .portfolio-grid-cols-3 {
    grid-template-columns: 1fr;
  }

  @media (min-width: 768px) {
    .portfolio-grid-cols-3 {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 1024px) {
    .portfolio-grid-cols-3 {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  .portfolio-grid-cols-4 {
    grid-template-columns: 1fr;
  }

  @media (min-width: 640px) {
    .portfolio-grid-cols-4 {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 1024px) {
    .portfolio-grid-cols-4 {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (min-width: 1280px) {
    .portfolio-grid-cols-4 {
      grid-template-columns: repeat(4, 1fr);
    }
  }
</style>


