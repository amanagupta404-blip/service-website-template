<script lang="ts">
/**
 * Section.svelte
 * Section wrapper component with consistent spacing and background colors
 *
 * Features:
 * - Configurable vertical padding (small, medium, large, none)
 * - Background color support (primary, secondary, tertiary, custom)
 * - Optional ID for anchor links
 * - Semantic HTML <section> element
 *
 * Phase 3.7: Section Component
 */

// Props
let {
  id,
  backgroundColor = 'primary',
  paddingY = 'large',
  customBackground,
  children,
}: {
  id?: string;
  backgroundColor?: 'primary' | 'secondary' | 'tertiary' | 'custom';
  paddingY?: 'none' | 'small' | 'medium' | 'large' | 'xlarge';
  customBackground?: string;
  children?: any;
} = $props();

// Calculate section classes
const sectionClass = `section bg-${backgroundColor} py-${paddingY}`;
</script>

<section {id} class={sectionClass} style={customBackground ? `background-color: ${customBackground}` : undefined}>
  {@render children?.()}
</section>

<style>
  /**
   * Base Section Styles
   */
  .section {
    position: relative;
    width: 100%;
  }

  /**
   * Background Colors (using semantic tokens)
   */
  .bg-primary {
    background-color: var(--color-bg-primary);
  }

  .bg-secondary {
    background-color: var(--color-bg-secondary);
  }

  .bg-tertiary {
    background-color: var(--color-bg-tertiary);
  }

  .bg-custom {
    /* Background color will be set via inline style */
  }

  /**
   * Vertical Padding Options
   * Mobile-first with responsive scaling
   */

  /* None - No padding */
  .py-none {
    padding-top: 0;
    padding-bottom: 0;
  }

  /* Small - 32px mobile, 48px tablet+ */
  .py-small {
    padding-top: var(--space-8); /* 32px */
    padding-bottom: var(--space-8);
  }

  @media (min-width: 768px) {
    .py-small {
      padding-top: var(--space-12); /* 48px */
      padding-bottom: var(--space-12);
    }
  }

  /* Medium - 48px mobile, 64px tablet+ */
  .py-medium {
    padding-top: var(--space-12); /* 48px */
    padding-bottom: var(--space-12);
  }

  @media (min-width: 768px) {
    .py-medium {
      padding-top: var(--space-16); /* 64px */
      padding-bottom: var(--space-16);
    }
  }

  /* Large - 64px mobile, 96px tablet+ (default) */
  .py-large {
    padding-top: var(--space-16); /* 64px */
    padding-bottom: var(--space-16);
  }

  @media (min-width: 768px) {
    .py-large {
      padding-top: var(--space-20); /* 80px */
      padding-bottom: var(--space-20);
    }
  }

  @media (min-width: 1024px) {
    .py-large {
      padding-top: var(--space-24); /* 96px */
      padding-bottom: var(--space-24);
    }
  }

  /* Extra Large - 80px mobile, 120px tablet+, 160px desktop */
  .py-xlarge {
    padding-top: var(--space-20); /* 80px */
    padding-bottom: var(--space-20);
  }

  @media (min-width: 768px) {
    .py-xlarge {
      padding-top: 120px;
      padding-bottom: 120px;
    }
  }

  @media (min-width: 1024px) {
    .py-xlarge {
      padding-top: 160px;
      padding-bottom: 160px;
    }
  }
</style>
