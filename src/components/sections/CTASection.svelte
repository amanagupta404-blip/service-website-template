<script lang="ts">
/**
 * CTASection Component
 * Call-to-action section with prominent messaging and buttons
 *
 * Features:
 * - Attention-grabbing headline
 * - Supporting description text
 * - Primary and optional secondary CTA buttons
 * - Configurable background colors
 * - Custom background support
 * - Fully responsive
 * - Theme-aware
 *
 * Phase 4.10: CTA Section Component
 */

import Button from '../ui/Button.svelte';

// Props
let {
  headline,
  description,
  primaryCTA,
  secondaryCTA,
  backgroundColor = 'primary',
  customBackground,
  class: className = '',
}: {
  headline: string;
  description?: string;
  primaryCTA: { text: string; href: string };
  secondaryCTA?: { text: string; href: string };
  backgroundColor?: 'primary' | 'secondary' | 'tertiary' | 'custom';
  customBackground?: string;
  class?: string;
} = $props();

// Build background class
const bgClass = backgroundColor !== 'custom' ? `cta-bg-${backgroundColor}` : '';
</script>

<section
  class="cta-section {bgClass} {className}"
  style:background-color={backgroundColor === 'custom' && customBackground ? customBackground : undefined}
>
  <div class="cta-content">
    <h2 class="cta-headline">{headline}</h2>
    
    {#if description}
      <p class="cta-description">{description}</p>
    {/if}
    
    <div class="cta-buttons">
      <Button variant="primary" size="lg" href={primaryCTA.href}>
        {primaryCTA.text}
      </Button>
      
      {#if secondaryCTA}
        <Button variant="outline" size="lg" href={secondaryCTA.href}>
          {secondaryCTA.text}
        </Button>
      {/if}
    </div>
  </div>
</section>

<style>
  /**
   * CTA Section Base
   */
  .cta-section {
    padding: var(--space-20) var(--space-6);
    text-align: center;
    position: relative;
    overflow: hidden;
  }

  /**
   * Background Color Variants
   */
  .cta-bg-primary {
    background-color: var(--color-bg-primary);
  }

  .cta-bg-secondary {
    background-color: var(--color-bg-secondary);
  }

  .cta-bg-tertiary {
    background-color: var(--color-bg-tertiary);
  }

  /**
   * CTA Content Container
   */
  .cta-content {
    max-width: 800px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-6);
  }

  /**
   * CTA Headline
   */
  .cta-headline {
    font-family: var(--font-heading);
    font-weight: var(--font-bold);
    font-size: var(--text-3xl);
    line-height: var(--leading-tight);
    color: var(--color-text-primary);
    margin: 0;
  }

  @media (min-width: 768px) {
    .cta-headline {
      font-size: var(--text-4xl);
    }
  }

  @media (min-width: 1024px) {
    .cta-headline {
      font-size: var(--text-5xl);
    }
  }

  /**
   * CTA Description
   */
  .cta-description {
    font-size: var(--text-lg);
    line-height: var(--leading-relaxed);
    color: var(--color-text-primary);
    opacity: 0.9;
    margin: 0;
  }

  @media (min-width: 768px) {
    .cta-description {
      font-size: var(--text-xl);
    }
  }

  /**
   * CTA Buttons
   */
  .cta-buttons {
    display: flex;
    flex-direction: column;
    gap: var(--space-4);
    margin-top: var(--space-4);
  }

  @media (min-width: 640px) {
    .cta-buttons {
      flex-direction: row;
      gap: var(--space-6);
    }
  }

  /**
   * Responsive Padding
   */
  @media (min-width: 768px) {
    .cta-section {
      padding: var(--space-24) var(--space-8);
    }
  }

  @media (min-width: 1280px) {
    .cta-section {
      padding: var(--space-24) var(--space-12);
    }
  }
</style>


