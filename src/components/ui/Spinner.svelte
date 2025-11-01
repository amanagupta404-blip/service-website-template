<script lang="ts">
  /**
   * Loading Spinner Component
   * Animated spinner for loading states
   *
   * Features:
   * - Multiple sizes (sm, md, lg)
   * - Theme-aware colors
   * - Smooth CSS animation
   * - Accessible with aria-label
   * - Optional text label
   *
   * Phase 6.6: Loading Animations
   */

  // Props
  let {
    size = 'md',
    color = 'primary',
    label = 'Loading...',
    showLabel = false,
    class: className = '',
  }: {
    size?: 'sm' | 'md' | 'lg';
    color?: 'primary' | 'accent' | 'white';
    label?: string;
    showLabel?: boolean;
    class?: string;
  } = $props();

  // Size mappings
  const sizeClasses = {
    sm: 'spinner-sm',
    md: 'spinner-md',
    lg: 'spinner-lg',
  };

  // Color mappings
  const colorClasses = {
    primary: 'spinner-primary',
    accent: 'spinner-accent',
    white: 'spinner-white',
  };
</script>

<div
  class="spinner-container {className}"
  role="status"
  aria-label={label}
  aria-live="polite"
>
  <div class="spinner {sizeClasses[size]} {colorClasses[color]}">
    <div class="spinner-inner"></div>
  </div>

  {#if showLabel}
    <span class="spinner-label">{label}</span>
  {/if}
</div>

<style>
  /**
   * Spinner Container
   */
  .spinner-container {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-3);
  }

  /**
   * Spinner Base
   */
  .spinner {
    display: inline-block;
    position: relative;
  }

  .spinner-inner {
    box-sizing: border-box;
    display: block;
    border-radius: 50%;
    border-style: solid;
    border-top-color: transparent;
    animation: spin 0.8s linear infinite;
  }

  /**
   * Sizes
   */
  .spinner-sm .spinner-inner {
    width: 16px;
    height: 16px;
    border-width: 2px;
  }

  .spinner-md .spinner-inner {
    width: 32px;
    height: 32px;
    border-width: 3px;
  }

  .spinner-lg .spinner-inner {
    width: 48px;
    height: 48px;
    border-width: 4px;
  }

  /**
   * Colors
   */
  .spinner-primary .spinner-inner {
    border-color: var(--color-text-primary);
    border-top-color: transparent;
  }

  .spinner-accent .spinner-inner {
    border-color: var(--color-accent-primary);
    border-top-color: transparent;
  }

  .spinner-white .spinner-inner {
    border-color: white;
    border-top-color: transparent;
  }

  /**
   * Spinner Label
   */
  .spinner-label {
    font-size: var(--text-sm);
    color: var(--color-text-secondary);
    text-align: center;
  }

  /**
   * Spin Animation
   */
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  /**
   * Reduced Motion
   */
  @media (prefers-reduced-motion: reduce) {
    .spinner-inner {
      animation: none;
      border-top-color: var(--color-accent-primary);
      opacity: 0.5;
    }
  }

  /**
   * Pulsing animation as fallback for reduced motion
   */
  @media (prefers-reduced-motion: reduce) {
    .spinner-inner {
      animation: pulse 1.5s ease-in-out infinite;
    }

    @keyframes pulse {
      0%,
      100% {
        opacity: 0.5;
      }
      50% {
        opacity: 1;
      }
    }
  }
</style>
