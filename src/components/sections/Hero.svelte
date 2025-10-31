<script lang="ts">
/**
 * Hero Section Component
 * Large hero banner with headline, CTA buttons, and optional background
 *
 * Features:
 * - Responsive typography
 * - Primary and secondary CTA buttons
 * - Optional background image with overlay
 * - Full-height or fixed height options
 * - Text readability over backgrounds
 * - Theme-aware
 *
 * Phase 4.7: Hero Section Component
 */

import Button from '../ui/Button.svelte';

// Props
let {
  headline,
  subheadline,
  primaryCTA,
  secondaryCTA,
  backgroundImage,
  backgroundOverlay = true,
  fullHeight = false,
  class: className = '',
}: {
  headline: string;
  subheadline?: string;
  primaryCTA?: { text: string; href: string };
  secondaryCTA?: { text: string; href: string };
  backgroundImage?: string;
  backgroundOverlay?: boolean;
  fullHeight?: boolean;
  class?: string;
} = $props();
</script>

<section
  class="hero {fullHeight ? 'hero-full-height' : ''} {className}"
  style:background-image={backgroundImage ? `url(${backgroundImage})` : undefined}
>
  {#if backgroundImage && backgroundOverlay}
    <div class="hero-overlay"></div>
  {/if}
  
  <div class="hero-content">
    <h1 class="hero-headline">{headline}</h1>
    
    {#if subheadline}
      <p class="hero-subheadline">{subheadline}</p>
    {/if}
    
    {#if primaryCTA || secondaryCTA}
      <div class="hero-cta">
        {#if primaryCTA}
          <Button variant="primary" size="lg" href={primaryCTA.href}>
            {primaryCTA.text}
          </Button>
        {/if}
        {#if secondaryCTA}
          <Button variant="outline" size="lg" href={secondaryCTA.href}>
            {secondaryCTA.text}
          </Button>
        {/if}
      </div>
    {/if}
  </div>
</section>

<style>
  /**
   * Hero Section Base
   */
  .hero {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--space-20) var(--space-6);
    background-color: var(--color-bg-primary);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    overflow: hidden;
  }

  /**
   * Full Height Variant
   */
  .hero-full-height {
    min-height: 100vh;
  }

  /**
   * Hero Overlay (for background images)
   */
  .hero-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.3),
      rgba(0, 0, 0, 0.5)
    );
    z-index: 1;
  }

  /**
   * Hero Content
   */
  .hero-content {
    position: relative;
    z-index: 2;
    max-width: 900px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-6);
  }

  /**
   * Hero Headline
   * Responsive typography scaling
   */
  .hero-headline {
    font-family: var(--font-heading);
    font-weight: var(--font-bold);
    font-size: var(--text-4xl);
    line-height: var(--leading-tight);
    color: var(--color-text-primary);
    margin: 0;
  }

  /* When there's a background image, use light text */
  .hero[style*="background-image"] .hero-headline {
    color: white;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }

  @media (min-width: 768px) {
    .hero-headline {
      font-size: var(--text-5xl);
    }
  }

  @media (min-width: 1024px) {
    .hero-headline {
      font-size: var(--text-6xl);
    }
  }

  /**
   * Hero Subheadline
   */
  .hero-subheadline {
    font-size: var(--text-lg);
    line-height: var(--leading-relaxed);
    color: var(--color-text-primary);
    opacity: 0.9;
    max-width: 700px;
    margin: 0;
  }

  /* When there's a background image, use light text */
  .hero[style*="background-image"] .hero-subheadline {
    color: white;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  }

  @media (min-width: 768px) {
    .hero-subheadline {
      font-size: var(--text-xl);
    }
  }

  @media (min-width: 1024px) {
    .hero-subheadline {
      font-size: var(--text-2xl);
    }
  }

  /**
   * Hero CTA Buttons
   */
  .hero-cta {
    display: flex;
    flex-direction: column;
    gap: var(--space-4);
    margin-top: var(--space-4);
  }

  @media (min-width: 640px) {
    .hero-cta {
      flex-direction: row;
      gap: var(--space-6);
    }
  }

  /**
   * Responsive Padding
   */
  @media (min-width: 768px) {
    .hero {
      padding: var(--space-24) var(--space-8);
    }
  }

  @media (min-width: 1280px) {
    .hero {
      padding: var(--space-24) var(--space-12);
    }
  }
</style>


