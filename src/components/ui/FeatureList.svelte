<script lang="ts">
  /**
   * FeatureList Component
   * Displays a list of features or benefits with icons
   *
   * Features:
   * - Icon integration (checkmark, star, etc.)
   * - Grid or list layout
   * - Theme-aware styling
   * - Responsive design
   *
   * Usage:
   * <FeatureList
   *   features={[
   *     'Responsive design for all devices',
   *     'SEO optimized for search engines',
   *     'Fast loading times'
   *   ]}
   *   variant="grid"
   *   icon="check"
   * />
   */

  import Icon from './Icon.svelte';

  interface Props {
    features: string[];
    variant?: 'list' | 'grid';
    icon?: string;
  }

  let { features, variant = 'list', icon = 'check' }: Props = $props();
</script>

<ul class="feature-list" class:feature-grid={variant === 'grid'}>
  {#each features as feature}
    <li class="feature-item">
      <span class="feature-icon">
        <Icon name={icon} size="sm" ariaHidden />
      </span>
      <span class="feature-text">{feature}</span>
    </li>
  {/each}
</ul>

<style>
  /**
   * Feature List Styles
   * List or grid layout for displaying features with icons
   */
  .feature-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: var(--space-3);
  }

  /* Grid variant */
  .feature-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--space-4);
  }

  @media (min-width: 768px) {
    .feature-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  .feature-item {
    display: flex;
    align-items: flex-start;
    gap: var(--space-3);
  }

  .feature-icon {
    flex-shrink: 0;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--color-accent-primary);
    color: var(--color-bg-primary);
    border-radius: 50%;
    margin-top: 2px; /* Optical alignment with text */
  }

  .feature-text {
    flex: 1;
    font-size: var(--text-base);
    color: var(--color-text-primary);
    line-height: 1.6;
  }
</style>
