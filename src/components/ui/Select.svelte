<script lang="ts">
/**
 * Select Component
 * Accessible dropdown select with label, error states, and custom styling
 *
 * Features:
 * - Accessible label association
 * - Error state with message
 * - Required indicator
 * - Custom arrow icon
 * - Disabled state
 * - Theme-aware styling
 *
 * Phase 4.4.3: Select Component
 */

import Icon from './Icon.svelte';

// Props
let {
  label,
  id,
  options,
  placeholder,
  required = false,
  error,
  value = $bindable(''),
  disabled = false,
  name,
  class: className = '',
}: {
  label: string;
  id: string;
  options: Array<{ value: string; label: string }>;
  placeholder?: string;
  required?: boolean;
  error?: string;
  value?: string;
  disabled?: boolean;
  name?: string;
  class?: string;
} = $props();

// Determine if select has error
const hasError = !!error;
</script>

<div class="select-wrapper {className}">
  <label for={id} class="select-label">
    {label}
    {#if required}
      <span class="select-required" aria-label="required">*</span>
    {/if}
  </label>
  
  <div class="select-container">
    <select
      {id}
      {name}
      {required}
      {disabled}
      bind:value
      class="select {hasError ? 'select-error' : ''}"
      aria-invalid={hasError}
      aria-describedby={hasError ? `${id}-error` : undefined}
    >
      {#if placeholder}
        <option value="" disabled selected={!value}>
          {placeholder}
        </option>
      {/if}
      {#each options as option}
        <option value={option.value}>
          {option.label}
        </option>
      {/each}
    </select>
    <div class="select-icon" aria-hidden="true">
      <Icon name="chevron-down" size="sm" />
    </div>
  </div>
  
  {#if hasError}
    <span id="{id}-error" class="select-error-message" role="alert">
      {error}
    </span>
  {/if}
</div>

<style>
  /**
   * Select Wrapper
   */
  .select-wrapper {
    display: flex;
    flex-direction: column;
    gap: var(--space-2);
  }

  /**
   * Label
   */
  .select-label {
    font-size: var(--text-sm);
    font-weight: var(--font-medium);
    color: var(--color-text-primary);
    display: flex;
    align-items: center;
    gap: var(--space-1);
  }

  .select-required {
    color: var(--color-accent-secondary);
    font-weight: var(--font-bold);
  }

  /**
   * Select Container (for custom arrow)
   */
  .select-container {
    position: relative;
  }

  /**
   * Select Field
   */
  .select {
    width: 100%;
    padding: var(--space-3) var(--space-4);
    padding-right: var(--space-10);
    font-size: var(--text-base);
    font-family: var(--font-body);
    color: var(--color-text-primary);
    background-color: var(--color-bg-primary);
    border: 2px solid var(--color-border);
    border-radius: 6px;
    transition: all var(--duration-normal) var(--ease-in-out);
    appearance: none;
    cursor: pointer;
  }

  .select:hover:not(:disabled) {
    border-color: var(--color-accent-primary);
  }

  .select:focus {
    outline: none;
    border-color: var(--color-accent-primary);
    box-shadow: 0 0 0 3px rgba(var(--color-accent-primary-rgb, 153, 188, 133), 0.1);
  }

  .select:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    background-color: var(--color-bg-secondary);
  }

  /**
   * Custom Arrow Icon
   */
  .select-icon {
    position: absolute;
    right: var(--space-4);
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
    color: var(--color-text-primary);
    opacity: 0.7;
  }

  .select:disabled + .select-icon {
    opacity: 0.3;
  }

  /**
   * Error State
   */
  .select-error {
    border-color: var(--color-accent-secondary);
  }

  .select-error:focus {
    border-color: var(--color-accent-secondary);
    box-shadow: 0 0 0 3px rgba(255, 0, 0, 0.1);
  }

  .select-error-message {
    font-size: var(--text-sm);
    color: var(--color-accent-secondary);
    display: flex;
    align-items: center;
    gap: var(--space-2);
  }

  /**
   * Responsive
   */
  @media (prefers-reduced-motion: reduce) {
    .select {
      transition: none;
    }
  }
</style>

