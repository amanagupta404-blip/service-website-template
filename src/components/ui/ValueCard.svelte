<script lang="ts">
  /**
   * ValueCard Component
   * Displays a company value or mission statement with icon
   *
   * Features:
   * - Icon integration (Lucide icons)
   * - Title and description
   * - Theme-aware styling
   * - Accessible markup
   * - Responsive layout
   *
   * Usage:
   * <ValueCard
   *   icon="heart"
   *   title="Customer First"
   *   description="We put our customers at the center of everything we do."
   * />
   */

  import Icon from './Icon.svelte';

  interface Props {
    icon: string;
    title: string;
    description: string;
  }

  let { icon, title, description }: Props = $props();
</script>

<div class="value-card">
  <div class="value-icon">
    <Icon name={icon} size="lg" ariaHidden />
  </div>

  <div class="value-content">
    <h3 class="value-title">{title}</h3>
    <p class="value-description">{description}</p>
  </div>
</div>

<style>
  /**
   * Value Card Styles
   * Card layout for displaying company values with icon
   */
  .value-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: var(--space-6);
    background: var(--color-bg-secondary);
    border-radius: 12px;
    transition: transform var(--duration-normal) var(--ease-out),
                box-shadow var(--duration-normal) var(--ease-out);
  }

  .value-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  }

  /* Icon Container */
  .value-icon {
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--color-accent-primary);
    color: var(--color-bg-primary);
    border-radius: 50%;
    margin-bottom: var(--space-4);
    transition: transform var(--duration-normal) var(--ease-out);
  }

  .value-card:hover .value-icon {
    transform: scale(1.1);
  }

  /* Content */
  .value-content {
    width: 100%;
  }

  .value-title {
    font-size: var(--text-xl);
    font-weight: bold;
    color: var(--color-text-primary);
    margin-bottom: var(--space-3);
  }

  .value-description {
    font-size: var(--text-base);
    color: var(--color-text-secondary);
    line-height: 1.6;
  }

  /* Alternative horizontal layout for larger screens */
  @media (min-width: 768px) {
    .value-card {
      flex-direction: row;
      text-align: left;
      padding: var(--space-8);
    }

    .value-icon {
      margin-bottom: 0;
      margin-right: var(--space-6);
      flex-shrink: 0;
    }
  }
</style>
