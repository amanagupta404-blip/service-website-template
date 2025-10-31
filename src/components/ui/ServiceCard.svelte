<script lang="ts">
/**
 * ServiceCard Component
 * Display service offerings with icon, title, and description
 *
 * Features:
 * - Uses Card component internally
 * - Icon or image display
 * - Entire card clickable
 * - Hover animations
 * - Container query responsive layout
 * - Theme-aware styling
 *
 * Phase 4.3: ServiceCard Component
 */

import Card from './Card.svelte';
import Icon from './Icon.svelte';
import type { icons } from './Icon.svelte';

// Props
let {
  title: serviceTitle,
  description,
  icon,
  href,
  image,
  class: className = '',
}: {
  title: string;
  description: string;
  icon?: keyof typeof icons;
  href: string;
  image?: string;
  class?: string;
} = $props();
</script>

<Card {href} clickable class="service-card {className}">
  {#snippet title()}
    <div class="service-card-header">
      {#if image}
        <div class="service-image">
          <img src={image} alt={serviceTitle} />
        </div>
      {:else if icon}
        <div class="service-icon">
          <Icon name={icon} size="lg" ariaHidden />
        </div>
      {/if}
      <h3 class="service-title">{serviceTitle}</h3>
    </div>
  {/snippet}
  
  <p class="service-description">{description}</p>
</Card>

<style>
  /**
   * Service Card
   */
  :global(.service-card) {
    height: 100%;
  }

  /**
   * Service Card Header (icon/image + title)
   */
  .service-card-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: var(--space-4);
  }

  /**
   * Service Icon
   */
  .service-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 64px;
    height: 64px;
    border-radius: 12px;
    background-color: var(--color-bg-tertiary);
    color: var(--color-accent-primary);
    transition: all var(--duration-normal) var(--ease-in-out);
    flex-shrink: 0;
  }

  :global(.service-card:hover) .service-icon {
    background-color: var(--color-accent-primary);
    color: var(--color-text-inverse);
    transform: scale(1.1);
  }

  /**
   * Service Image
   */
  .service-image {
    width: 64px;
    height: 64px;
    border-radius: 12px;
    overflow: hidden;
    flex-shrink: 0;
  }

  .service-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  /**
   * Service Title
   */
  .service-title {
    font-size: var(--text-xl);
    font-weight: var(--font-semibold);
    color: var(--color-text-primary);
    margin: 0;
  }

  /**
   * Service Description
   */
  .service-description {
    font-size: var(--text-base);
    line-height: var(--leading-relaxed);
    color: var(--color-text-primary);
    opacity: 0.8;
    margin: 0;
  }

  /**
   * Container Query: Horizontal layout at 400px+
   */
  @container (min-width: 400px) {
    .service-card-header {
      flex-direction: row;
      text-align: left;
      align-items: flex-start;
    }
  }

  /**
   * Responsive & Reduced Motion
   */
  @media (prefers-reduced-motion: reduce) {
    .service-icon {
      transition: none;
    }

    :global(.service-card:hover) .service-icon {
      transform: none;
    }
  }
</style>

