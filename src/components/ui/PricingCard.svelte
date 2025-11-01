<script lang="ts">
  /**
   * PricingCard Component
   * Displays a pricing tier with features and CTA
   *
   * Features:
   * - Tier name, price, and billing period
   * - Feature list with checkmarks
   * - CTA button
   * - "Popular" highlight option
   * - Theme-aware styling
   * - Responsive design
   *
   * Usage:
   * <PricingCard
   *   tier="Professional"
   *   price="$99"
   *   period="per month"
   *   features={['Feature 1', 'Feature 2', 'Feature 3']}
   *   ctaText="Get Started"
   *   ctaHref="/contact"
   *   popular={true}
   * />
   */

  import Icon from './Icon.svelte';
  import Button from './Button.svelte';

  interface Props {
    tier: string;
    price: string;
    period?: string;
    features: string[];
    ctaText?: string;
    ctaHref?: string;
    popular?: boolean;
  }

  let {
    tier,
    price,
    period = 'per month',
    features,
    ctaText = 'Get Started',
    ctaHref = '/contact',
    popular = false,
  }: Props = $props();
</script>

<div class="pricing-card" class:pricing-popular={popular}>
  {#if popular}
    <div class="pricing-badge">Most Popular</div>
  {/if}

  <div class="pricing-header">
    <h3 class="pricing-tier">{tier}</h3>
    <div class="pricing-price">
      <span class="price-amount">{price}</span>
      <span class="price-period">{period}</span>
    </div>
  </div>

  <ul class="pricing-features">
    {#each features as feature}
      <li class="pricing-feature">
        <span class="feature-icon">
          <Icon name="check" size="sm" ariaHidden />
        </span>
        <span class="feature-text">{feature}</span>
      </li>
    {/each}
  </ul>

  <div class="pricing-cta">
    <Button
      href={ctaHref}
      variant={popular ? 'primary' : 'outline'}
      size="lg"
      fullWidth
    >
      {ctaText}
    </Button>
  </div>
</div>

<style>
  /**
   * Pricing Card Styles
   * Card layout for displaying pricing tiers
   */
  .pricing-card {
    display: flex;
    flex-direction: column;
    padding: var(--space-8);
    background: var(--color-bg-secondary);
    border: 2px solid transparent;
    border-radius: 12px;
    transition: transform var(--duration-normal) var(--ease-out),
                box-shadow var(--duration-normal) var(--ease-out),
                border-color var(--duration-normal) var(--ease-out);
    position: relative;
  }

  .pricing-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
  }

  /* Popular variant */
  .pricing-popular {
    border-color: var(--color-accent-primary);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  }

  .pricing-badge {
    position: absolute;
    top: -12px;
    left: 50%;
    transform: translateX(-50%);
    background: var(--color-accent-primary);
    color: var(--color-bg-primary);
    padding: var(--space-2) var(--space-4);
    border-radius: 20px;
    font-size: var(--text-sm);
    font-weight: 600;
  }

  /* Header */
  .pricing-header {
    text-align: center;
    margin-bottom: var(--space-6);
  }

  .pricing-tier {
    font-size: var(--text-2xl);
    font-weight: bold;
    color: var(--color-text-primary);
    margin-bottom: var(--space-3);
  }

  .pricing-price {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .price-amount {
    font-size: 3rem;
    font-weight: bold;
    color: var(--color-accent-primary);
    line-height: 1;
  }

  .price-period {
    font-size: var(--text-sm);
    color: var(--color-text-secondary);
    margin-top: var(--space-2);
  }

  /* Features List */
  .pricing-features {
    list-style: none;
    padding: 0;
    margin: 0 0 var(--space-6) 0;
    flex: 1; /* Push CTA to bottom */
  }

  .pricing-feature {
    display: flex;
    align-items: flex-start;
    gap: var(--space-3);
    padding: var(--space-3) 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  }

  .pricing-feature:last-child {
    border-bottom: none;
  }

  .feature-icon {
    flex-shrink: 0;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--color-accent-primary);
    color: var(--color-bg-primary);
    border-radius: 50%;
    margin-top: 2px; /* Optical alignment */
  }

  .feature-text {
    flex: 1;
    font-size: var(--text-base);
    color: var(--color-text-primary);
    line-height: 1.5;
  }

  /* CTA */
  .pricing-cta {
    margin-top: auto;
  }

  /* Responsive */
  @media (min-width: 768px) {
    .pricing-card {
      padding: var(--space-10);
    }
  }
</style>
