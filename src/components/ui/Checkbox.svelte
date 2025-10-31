<script lang="ts">
/**
 * Checkbox Component
 * Accessible custom checkbox with label and error states
 *
 * Features:
 * - Custom styled checkbox
 * - Check icon indicator
 * - Error state with message
 * - Required indicator
 * - Disabled state
 * - Keyboard accessible
 * - Theme-aware styling
 *
 * Phase 4.4.4: Checkbox Component
 */

import Icon from './Icon.svelte';

// Props
let {
  label,
  id,
  checked = $bindable(false),
  required = false,
  error,
  disabled = false,
  name,
  class: className = '',
}: {
  label: string;
  id: string;
  checked?: boolean;
  required?: boolean;
  error?: string;
  disabled?: boolean;
  name?: string;
  class?: string;
} = $props();

// Determine if checkbox has error
const hasError = !!error;
</script>

<div class="checkbox-wrapper {className}">
  <div class="checkbox-container">
    <input
      {id}
      {name}
      {required}
      {disabled}
      type="checkbox"
      bind:checked
      class="checkbox-input"
      aria-invalid={hasError}
      aria-describedby={hasError ? `${id}-error` : undefined}
    />
    <div class="checkbox-box {hasError ? 'checkbox-error' : ''}">
      {#if checked}
        <Icon name="check" size="sm" ariaHidden />
      {/if}
    </div>
    <label for={id} class="checkbox-label">
      {label}
      {#if required}
        <span class="checkbox-required" aria-label="required">*</span>
      {/if}
    </label>
  </div>
  
  {#if hasError}
    <span id="{id}-error" class="checkbox-error-message" role="alert">
      {error}
    </span>
  {/if}
</div>

<style>
  /**
   * Checkbox Wrapper
   */
  .checkbox-wrapper {
    display: flex;
    flex-direction: column;
    gap: var(--space-2);
  }

  /**
   * Checkbox Container (input + box + label)
   */
  .checkbox-container {
    display: flex;
    align-items: center;
    gap: var(--space-3);
    position: relative;
    cursor: pointer;
  }

  .checkbox-container:has(:disabled) {
    cursor: not-allowed;
    opacity: 0.5;
  }

  /**
   * Hidden Native Checkbox (for accessibility)
   */
  .checkbox-input {
    position: absolute;
    opacity: 0;
    width: 20px;
    height: 20px;
    cursor: pointer;
  }

  .checkbox-input:disabled {
    cursor: not-allowed;
  }

  /**
   * Custom Checkbox Box
   */
  .checkbox-box {
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--color-bg-primary);
    border: 2px solid var(--color-border);
    border-radius: 4px;
    transition: all var(--duration-normal) var(--ease-in-out);
    flex-shrink: 0;
    color: var(--color-text-inverse);
  }

  .checkbox-input:hover + .checkbox-box {
    border-color: var(--color-accent-primary);
  }

  .checkbox-input:checked + .checkbox-box {
    background-color: var(--color-accent-primary);
    border-color: var(--color-accent-primary);
  }

  .checkbox-input:focus + .checkbox-box {
    outline: 3px solid var(--color-accent-primary);
    outline-offset: 2px;
  }

  .checkbox-input:disabled + .checkbox-box {
    background-color: var(--color-bg-secondary);
    opacity: 0.5;
  }

  /**
   * Error State
   */
  .checkbox-error {
    border-color: var(--color-accent-secondary);
  }

  .checkbox-input:checked + .checkbox-error {
    background-color: var(--color-accent-secondary);
    border-color: var(--color-accent-secondary);
  }

  .checkbox-input:focus + .checkbox-error {
    outline-color: var(--color-accent-secondary);
  }

  /**
   * Label
   */
  .checkbox-label {
    font-size: var(--text-base);
    color: var(--color-text-primary);
    cursor: pointer;
    user-select: none;
    display: flex;
    align-items: center;
    gap: var(--space-1);
  }

  .checkbox-input:disabled ~ .checkbox-label {
    cursor: not-allowed;
  }

  .checkbox-required {
    color: var(--color-accent-secondary);
    font-weight: var(--font-bold);
  }

  /**
   * Error Message
   */
  .checkbox-error-message {
    font-size: var(--text-sm);
    color: var(--color-accent-secondary);
    display: flex;
    align-items: center;
    gap: var(--space-2);
    margin-left: calc(20px + var(--space-3));
  }

  /**
   * Responsive
   */
  @media (prefers-reduced-motion: reduce) {
    .checkbox-box {
      transition: none;
    }
  }
</style>

