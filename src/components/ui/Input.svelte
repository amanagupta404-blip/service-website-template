<script lang="ts">
/**
 * Input Component
 * Accessible text input with label, error states, and validation
 *
 * Features:
 * - Accessible label association
 * - Error state with message
 * - Required indicator
 * - Multiple input types
 * - Disabled state
 * - Theme-aware styling
 *
 * Phase 4.4.1: Input Component
 */

// Props
let {
  label,
  id,
  type = 'text',
  placeholder,
  required = false,
  error,
  value = $bindable(''),
  disabled = false,
  name,
  autocomplete,
  class: className = '',
}: {
  label: string;
  id: string;
  type?: 'text' | 'email' | 'tel' | 'password' | 'url' | 'number';
  placeholder?: string;
  required?: boolean;
  error?: string;
  value?: string;
  disabled?: boolean;
  name?: string;
  autocomplete?: string;
  class?: string;
} = $props();

// Determine if input has error
const hasError = !!error;
</script>

<div class="input-wrapper {className}">
  <label for={id} class="input-label">
    {label}
    {#if required}
      <span class="input-required" aria-label="required">*</span>
    {/if}
  </label>
  
  <input
    {id}
    {type}
    {name}
    {placeholder}
    {required}
    {disabled}
    {autocomplete}
    bind:value
    class="input {hasError ? 'input-error' : ''}"
    aria-invalid={hasError}
    aria-describedby={hasError ? `${id}-error` : undefined}
  />
  
  {#if hasError}
    <span id="{id}-error" class="input-error-message" role="alert">
      {error}
    </span>
  {/if}
</div>

<style>
  /**
   * Input Wrapper
   */
  .input-wrapper {
    display: flex;
    flex-direction: column;
    gap: var(--space-2);
  }

  /**
   * Label
   */
  .input-label {
    font-size: var(--text-sm);
    font-weight: var(--font-medium);
    color: var(--color-text-primary);
    display: flex;
    align-items: center;
    gap: var(--space-1);
  }

  .input-required {
    color: var(--color-accent-secondary);
    font-weight: var(--font-bold);
  }

  /**
   * Input Field
   */
  .input {
    width: 100%;
    padding: var(--space-3) var(--space-4);
    font-size: var(--text-base);
    font-family: var(--font-body);
    color: var(--color-text-primary);
    background-color: var(--color-bg-primary);
    border: 2px solid var(--color-border);
    border-radius: 6px;
    transition: all var(--duration-normal) var(--ease-in-out);
  }

  .input::placeholder {
    color: var(--color-text-primary);
    opacity: 0.5;
  }

  .input:hover:not(:disabled) {
    border-color: var(--color-accent-primary);
  }

  .input:focus {
    outline: none;
    border-color: var(--color-accent-primary);
    box-shadow: 0 0 0 3px rgba(var(--color-accent-primary-rgb, 153, 188, 133), 0.1);
  }

  .input:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    background-color: var(--color-bg-secondary);
  }

  /**
   * Error State
   */
  .input-error {
    border-color: var(--color-accent-secondary);
  }

  .input-error:focus {
    border-color: var(--color-accent-secondary);
    box-shadow: 0 0 0 3px rgba(255, 0, 0, 0.1);
  }

  .input-error-message {
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
    .input {
      transition: none;
    }
  }
</style>


