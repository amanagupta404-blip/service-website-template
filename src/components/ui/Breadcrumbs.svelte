<script lang="ts">
  /**
   * Breadcrumbs Component
   * Displays navigation breadcrumb trail for better UX and SEO
   *
   * Features:
   * - Accessible ARIA navigation
   * - Structured data (BreadcrumbList schema) ready
   * - Current page indication
   * - Responsive design
   * - Theme-aware styling
   *
   * Usage:
   * <Breadcrumbs
   *   items={[
   *     { label: 'Home', href: '/' },
   *     { label: 'Services', href: '/services' },
   *     { label: 'Web Development', href: '/services/web-development' }
   *   ]}
   * />
   */

  import Icon from './Icon.svelte';

  interface BreadcrumbItem {
    label: string;
    href: string;
  }

  interface Props {
    items: BreadcrumbItem[];
  }

  let { items }: Props = $props();
</script>

<nav aria-label="Breadcrumb" class="breadcrumbs">
  <ol class="breadcrumb-list">
    {#each items as item, index}
      <li class="breadcrumb-item">
        {#if index < items.length - 1}
          <!-- Linkable breadcrumb -->
          <a href={item.href} class="breadcrumb-link">
            {item.label}
          </a>
          <span class="breadcrumb-separator" aria-hidden="true">
            <Icon name="chevron-right" size="sm" ariaHidden />
          </span>
        {:else}
          <!-- Current page (not linkable) -->
          <span class="breadcrumb-current" aria-current="page">
            {item.label}
          </span>
        {/if}
      </li>
    {/each}
  </ol>
</nav>

<style>
  /**
   * Breadcrumbs Styles
   * Horizontal navigation trail with separators
   */
  .breadcrumbs {
    padding: var(--space-4) 0;
  }

  .breadcrumb-list {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    list-style: none;
    padding: 0;
    margin: 0;
    gap: var(--space-2);
  }

  .breadcrumb-item {
    display: flex;
    align-items: center;
    gap: var(--space-2);
    font-size: var(--text-sm);
  }

  .breadcrumb-link {
    color: var(--color-text-secondary);
    text-decoration: none;
    transition: color var(--duration-fast) var(--ease-out);
  }

  .breadcrumb-link:hover {
    color: var(--color-accent-primary);
    text-decoration: underline;
  }

  .breadcrumb-link:focus-visible {
    outline: 2px solid var(--color-accent-primary);
    outline-offset: 2px;
    border-radius: 4px;
  }

  .breadcrumb-separator {
    color: var(--color-text-secondary);
    opacity: 0.5;
    display: flex;
    align-items: center;
  }

  .breadcrumb-current {
    color: var(--color-text-primary);
    font-weight: 600;
  }

  /* Responsive: truncate on very small screens */
  @media (max-width: 640px) {
    .breadcrumb-item:not(:last-child) {
      max-width: 120px;
    }

    .breadcrumb-link {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
</style>
