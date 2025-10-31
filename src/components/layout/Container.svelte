<script lang="ts">
/**
 * Container.svelte
 * Centered container component with responsive max-widths
 *
 * Features:
 * - Centered layout with horizontal padding
 * - Configurable max-width (sm, md, lg, xl, 2xl)
 * - Responsive padding
 * - Full-width option
 *
 * Phase 3.6: Container Component
 */

// Props
let {
  maxWidth = 'xl',
  fluid = false,
  children,
}: {
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  fluid?: boolean;
  children?: any;
} = $props();

// Calculate container classes
const containerClass = fluid ? 'container-fluid' : `container container-${maxWidth}`;
</script>

<div class={containerClass}>
  {@render children?.()}
</div>

<style>
  /**
   * Base Container Styles
   * Centered with horizontal padding
   */
  .container,
  .container-fluid {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding-left: var(--space-6); /* 24px */
    padding-right: var(--space-6); /* 24px */
  }

  /**
   * Fluid Container (no max-width)
   */
  .container-fluid {
    max-width: none;
  }

  /**
   * Container Max-Widths (matching design tokens)
   */

  /* Small - 640px */
  .container-sm {
    max-width: var(--container-sm);
  }

  /* Medium - 768px */
  .container-md {
    max-width: var(--container-md);
  }

  /* Large - 1024px */
  .container-lg {
    max-width: var(--container-lg);
  }

  /* Extra Large - 1280px (default) */
  .container-xl {
    max-width: var(--container-xl);
  }

  /* 2X Large - 1400px */
  .container-2xl {
    max-width: var(--container-2xl);
  }

  /**
   * Responsive Padding
   * Increase padding on larger screens for better spacing
   */
  @media (min-width: 768px) {
    .container,
    .container-fluid {
      padding-left: var(--space-8); /* 32px on tablet+ */
      padding-right: var(--space-8);
    }
  }

  @media (min-width: 1280px) {
    .container,
    .container-fluid {
      padding-left: var(--space-12); /* 48px on desktop */
      padding-right: var(--space-12);
    }
  }
</style>
