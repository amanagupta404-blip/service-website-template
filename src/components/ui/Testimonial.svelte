<script lang="ts">
/**
 * Testimonial Component
 * Display client testimonials with quote styling
 *
 * Features:
 * - Semantic HTML (blockquote, cite)
 * - Optional star rating
 * - Optional client photo (circular)
 * - Quote styling with visual treatment
 * - Card-based styling
 * - Theme-aware
 *
 * Phase 4.5: Testimonial Component
 */

import Icon from './Icon.svelte';

// Props
let {
  quote,
  author,
  role,
  photo,
  rating,
  class: className = '',
}: {
  quote: string;
  author: string;
  role?: string;
  photo?: string;
  rating?: number;
  class?: string;
} = $props();

// Validate rating is between 1-5
const validRating = rating && rating >= 1 && rating <= 5 ? Math.round(rating) : undefined;
</script>

<div class="testimonial {className}">
  <blockquote class="testimonial-quote">
    <div class="quote-icon" aria-hidden="true">"</div>
    <p class="quote-text">{quote}</p>
  </blockquote>
  
  {#if validRating}
    <div class="testimonial-rating" aria-label="{validRating} out of 5 stars">
      {#each Array(5) as _, i}
        <Icon
          name="star"
          size="sm"
          color={i < validRating ? 'gold' : 'currentColor'}
          ariaHidden
        />
      {/each}
    </div>
  {/if}
  
  <footer class="testimonial-footer">
    {#if photo}
      <img src={photo} alt={author} class="author-photo" />
    {/if}
    <div class="author-info">
      <cite class="author-name">{author}</cite>
      {#if role}
        <p class="author-role">{role}</p>
      {/if}
    </div>
  </footer>
</div>

<style>
  /**
   * Testimonial Container
   * Uses card-based styling
   */
  .testimonial {
    display: flex;
    flex-direction: column;
    gap: var(--space-6);
    padding: var(--space-8);
    background-color: var(--color-bg-primary);
    border: 1px solid var(--color-border);
    border-radius: 8px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    transition: all var(--duration-normal) var(--ease-in-out);
    position: relative;
    overflow: visible;
  }

  /**
   * Quote Section
   */
  .testimonial-quote {
    margin: 0;
    position: relative;
  }

  .quote-icon {
    position: absolute;
    top: -1.5rem;
    left: -0.5rem;
    font-size: 4rem;
    font-family: Georgia, serif;
    color: var(--color-accent-primary);
    opacity: 0.3;
    line-height: 1;
    pointer-events: none;
  }

  .quote-text {
    font-size: var(--text-lg);
    line-height: var(--leading-relaxed);
    color: var(--color-text-primary);
    font-style: italic;
    margin: 0;
    position: relative;
    z-index: 1;
  }

  /**
   * Star Rating
   */
  .testimonial-rating {
    display: flex;
    gap: var(--space-1);
    color: var(--color-text-primary);
    opacity: 0.6;
  }

  /**
   * Footer with Author Info
   */
  .testimonial-footer {
    display: flex;
    align-items: center;
    gap: var(--space-4);
    margin-top: auto;
  }

  /**
   * Author Photo
   */
  .author-photo {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid var(--color-border);
    flex-shrink: 0;
  }

  /**
   * Author Info
   */
  .author-info {
    display: flex;
    flex-direction: column;
    gap: var(--space-1);
  }

  .author-name {
    font-size: var(--text-base);
    font-weight: var(--font-semibold);
    color: var(--color-text-primary);
    font-style: normal;
  }

  .author-role {
    font-size: var(--text-sm);
    color: var(--color-text-primary);
    opacity: 0.7;
    margin: 0;
  }

  /**
   * Responsive
   */
  @media (prefers-reduced-motion: reduce) {
    .testimonial {
      transition: none;
    }
  }
</style>


