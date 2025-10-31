<script lang="ts">
/**
 * Textarea Component
 * Accessible multiline text input with label, error states, and validation
 *
 * Features:
 * - Accessible label association
 * - Error state with message
 * - Required indicator
 * - Configurable rows
 * - Disabled state
 * - Theme-aware styling
 *
 * Phase 4.4.2: Textarea Component
 */

// Props
let {
  label,
  id,
  placeholder,
  required = false,
  error,
  value = $bindable(''),
  disabled = false,
  name,
  rows = 4,
  class: className = '',
}: {
  label: string;
  id: string;
  placeholder?: string;
  required?: boolean;
  error?: string;
  value?: string;
  disabled?: boolean;
  name?: string;
  rows?: number;
  class?: string;
} = $props();

// Determine if textarea has error
const hasError = !!error;
</script>

<div class="textarea-wrapper {className}">
  <label for={id} class="textarea-label">
    {label}
    {#if required}
      <span class="textarea-required" aria-label="required">*</span>
    {/if}
  </label>
  
  <textarea
    {id}
    {name}
    {placeholder}
    {required}
    {disabled}
    {rows}
    bind:value
    class="textarea {hasError ? 'textarea-error' : ''}"
    aria-invalid={hasError}
    aria-describedby={hasError ? `${id}-error` : undefined}
  ></textarea>
  
  {#if hasError}
    <span id="{id}-error" class="textarea-error-message" role="alert">
      {error}
    </span>
  {/if}
</div>

<style>
  /**
   * Textarea Wrapper
   */
  .textarea-wrapper {
    display: flex;
    flex-direction: column;
    gap: var(--space-2);
  }

  /**
   * Label
   */
  .textarea-label {
    font-size: var(--text-sm);
    font-weight: var(--font-medium);
    color: var(--color-text-primary);
    display: flex;
    align-items: center;
    gap: var(--space-1);
  }

  .textarea-required {
    color: var(--color-accent-secondary);
    font-weight: var(--font-bold);
  }

  /**
   * Textarea Field
   */
  .textarea {
    width: 100%;
    padding: var(--space-3) var(--space-4);
    font-size: var(--text-base);
    font-family: var(--font-body);
    color: var(--color-text-primary);
    background-color: var(--color-bg-primary);
    border: 2px solid var(--color-border);
    border-radius: 6px;
    transition: all var(--duration-normal) var(--ease-in-out);
    resize: vertical;
    line-height: var(--leading-relaxed);
  }

  .textarea::placeholder {
    color: var(--color-text-primary);
    opacity: 0.5;
  }

  .textarea:hover:not(:disabled) {
    border-color: var(--color-accent-primary);
  }

  .textarea:focus {
    outline: none;
    border-color: var(--color-accent-primary);
    box-shadow: 0 0 0 3px rgba(var(--color-accent-primary-rgb, 153, 188, 133), 0.1);
  }

  .textarea:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    background-color: var(--color-bg-secondary);
    resize: none;
  }

  /**
   * Error State
   */
  .textarea-error {
    border-color: var(--color-accent-secondary);
  }

  .textarea-error:focus {
    border-color: var(--color-accent-secondary);
    box-shadow: 0 0 0 3px rgba(255, 0, 0, 0.1);
  }

  .textarea-error-message {
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
    .textarea {
      transition: none;
    }
  }
</style>


