<script lang="ts">
/**
 * Button Component
 * Versatile button/link component with multiple variants and sizes
 *
 * Features:
 * - Renders as button or anchor based on href prop
 * - Multiple variants (primary, secondary, outline, ghost)
 * - Multiple sizes (sm, md, lg)
 * - Loading state with spinner
 * - Disabled state
 * - Full accessibility support
 * - Theme-aware styling
 *
 * Phase 4.1: Button Component
 */

// Props
let {
  variant = 'primary',
  size = 'md',
  href,
  disabled = false,
  type = 'button',
  loading = false,
  ariaLabel,
  class: className = '',
  children,
  onclick,
}: {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  loading?: boolean;
  ariaLabel?: string;
  class?: string;
  children?: any;
  onclick?: (event: MouseEvent) => void;
} = $props();

// Determine element type (button or anchor)
const isLink = !!href && !disabled;

// Build class names
const buttonClasses = `btn btn-${variant} btn-${size} ${className} ${loading ? 'btn-loading' : ''} ${disabled ? 'btn-disabled' : ''}`.trim();
</script>

{#if isLink}
  <a
    {href}
    class={buttonClasses}
    aria-label={ariaLabel}
    role="button"
    onclick={onclick}
  >
    {#if loading}
      <span class="btn-spinner" aria-hidden="true"></span>
    {/if}
    {@render children?.()}
  </a>
{:else}
  <button
    {type}
    class={buttonClasses}
    {disabled}
    aria-label={ariaLabel}
    onclick={onclick}
  >
    {#if loading}
      <span class="btn-spinner" aria-hidden="true"></span>
    {/if}
    {@render children?.()}
  </button>
{/if}

<style>
  /**
   * Base Button Styles
   */
  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--space-2);
    font-family: var(--font-body);
    font-weight: var(--font-medium);
    text-decoration: none;
    border: 2px solid transparent;
    border-radius: 6px;
    cursor: pointer;
    transition: all var(--duration-normal) var(--ease-in-out);
    white-space: nowrap;
    position: relative;
  }

  .btn:focus-visible {
    outline: 3px solid var(--color-accent-primary);
    outline-offset: 2px;
  }

  /**
   * Button Sizes
   */
  .btn-sm {
    padding: var(--space-2) var(--space-4);
    font-size: var(--text-sm);
    line-height: var(--leading-tight);
  }

  .btn-md {
    padding: var(--space-3) var(--space-6);
    font-size: var(--text-base);
    line-height: var(--leading-tight);
  }

  .btn-lg {
    padding: var(--space-4) var(--space-8);
    font-size: var(--text-lg);
    line-height: var(--leading-tight);
  }

  /**
   * Button Variants
   */

  /* Primary - Solid with primary color */
  .btn-primary {
    background-color: var(--color-accent-primary);
    color: var(--color-text-inverse);
    border-color: var(--color-accent-primary);
  }

  .btn-primary:hover:not(.btn-disabled) {
    background-color: var(--color-accent-secondary);
    border-color: var(--color-accent-secondary);
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  .btn-primary:active:not(.btn-disabled) {
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  /* Secondary - Solid with secondary color */
  .btn-secondary {
    background-color: var(--color-bg-secondary);
    color: var(--color-text-primary);
    border-color: var(--color-border);
  }

  .btn-secondary:hover:not(.btn-disabled) {
    background-color: var(--color-bg-tertiary);
    border-color: var(--color-accent-primary);
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  .btn-secondary:active:not(.btn-disabled) {
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
  }

  /* Outline - Transparent with border */
  .btn-outline {
    background-color: transparent;
    color: var(--color-accent-primary);
    border-color: var(--color-accent-primary);
  }

  .btn-outline:hover:not(.btn-disabled) {
    background-color: var(--color-accent-primary);
    color: var(--color-text-inverse);
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  .btn-outline:active:not(.btn-disabled) {
    transform: translateY(0);
  }

  /* Ghost - Transparent with subtle hover */
  .btn-ghost {
    background-color: transparent;
    color: var(--color-text-primary);
    border-color: transparent;
  }

  .btn-ghost:hover:not(.btn-disabled) {
    background-color: var(--color-bg-secondary);
    border-color: var(--color-border);
  }

  .btn-ghost:active:not(.btn-disabled) {
    background-color: var(--color-bg-tertiary);
  }

  /**
   * Button States
   */

  /* Disabled */
  .btn-disabled {
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
  }

  /* Loading */
  .btn-loading {
    cursor: wait;
    position: relative;
  }

  .btn-loading::after {
    content: '';
    position: absolute;
    inset: 0;
    background-color: inherit;
    border-radius: inherit;
    opacity: 0.7;
  }

  /**
   * Loading Spinner
   */
  .btn-spinner {
    display: inline-block;
    width: 1em;
    height: 1em;
    border: 2px solid currentColor;
    border-right-color: transparent;
    border-radius: 50%;
    animation: spin 0.6s linear infinite;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  /**
   * Responsive adjustments
   */
  @media (prefers-reduced-motion: reduce) {
    .btn {
      transition: none;
    }

    .btn:hover:not(.btn-disabled) {
      transform: none;
    }

    .btn-spinner {
      animation: none;
      border-right-color: currentColor;
      opacity: 0.5;
    }
  }
</style>


