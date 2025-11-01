<script lang="ts">
  /**
   * Pagination Component
   * Displays page navigation for blog posts, portfolio items, etc.
   *
   * Features:
   * - Previous/Next buttons
   * - Page number buttons
   * - Current page highlighting
   * - Responsive design
   * - Accessible navigation
   *
   * Usage:
   * <Pagination
   *   currentPage={1}
   *   totalPages={5}
   *   baseUrl="/blog"
   * />
   */

  import Icon from './Icon.svelte';

  interface Props {
    currentPage: number;
    totalPages: number;
    baseUrl: string;
  }

  let { currentPage, totalPages, baseUrl }: Props = $props();

  // Generate page numbers to display
  const getPageNumbers = (): (number | 'ellipsis')[] => {
    const pages: (number | 'ellipsis')[] = [];
    const showEllipsis = totalPages > 7;

    if (!showEllipsis) {
      // Show all pages if 7 or fewer
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Show first, last, current, and nearby pages with ellipsis
      pages.push(1);

      if (currentPage > 3) {
        pages.push('ellipsis');
      }

      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      if (currentPage < totalPages - 2) {
        pages.push('ellipsis');
      }

      pages.push(totalPages);
    }

    return pages;
  };

  const pageNumbers = getPageNumbers();

  // Generate URL for page
  const getPageUrl = (page: number): string => {
    return page === 1 ? baseUrl : `${baseUrl}/page/${page}`;
  };
</script>

<nav aria-label="Pagination" class="pagination">
  <ul class="pagination-list">
    <!-- Previous Button -->
    <li class="pagination-item">
      {#if currentPage > 1}
        <a
          href={getPageUrl(currentPage - 1)}
          class="pagination-link pagination-prev"
          aria-label="Previous page"
        >
          <Icon name="chevron-left" size="sm" ariaHidden />
          <span class="pagination-text">Previous</span>
        </a>
      {:else}
        <span class="pagination-link pagination-prev pagination-disabled" aria-disabled="true">
          <Icon name="chevron-left" size="sm" ariaHidden />
          <span class="pagination-text">Previous</span>
        </span>
      {/if}
    </li>

    <!-- Page Numbers -->
    {#each pageNumbers as page}
      <li class="pagination-item pagination-number">
        {#if page === 'ellipsis'}
          <span class="pagination-ellipsis" aria-hidden="true">…</span>
        {:else if page === currentPage}
          <span class="pagination-link pagination-current" aria-current="page">
            {page}
          </span>
        {:else}
          <a href={getPageUrl(page)} class="pagination-link">
            {page}
          </a>
        {/if}
      </li>
    {/each}

    <!-- Next Button -->
    <li class="pagination-item">
      {#if currentPage < totalPages}
        <a
          href={getPageUrl(currentPage + 1)}
          class="pagination-link pagination-next"
          aria-label="Next page"
        >
          <span class="pagination-text">Next</span>
          <Icon name="chevron-right" size="sm" ariaHidden />
        </a>
      {:else}
        <span class="pagination-link pagination-next pagination-disabled" aria-disabled="true">
          <span class="pagination-text">Next</span>
          <Icon name="chevron-right" size="sm" ariaHidden />
        </span>
      {/if}
    </li>
  </ul>
</nav>

<style>
  /**
   * Pagination Styles
   * Horizontal navigation with page numbers
   */
  .pagination {
    padding: var(--space-8) 0;
  }

  .pagination-list {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: var(--space-2);
    list-style: none;
    padding: 0;
    margin: 0;
    flex-wrap: wrap;
  }

  .pagination-item {
    display: flex;
  }

  .pagination-link {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 40px;
    height: 40px;
    padding: 0 var(--space-3);
    background: var(--color-bg-secondary);
    color: var(--color-text-primary);
    text-decoration: none;
    border-radius: 6px;
    font-weight: 500;
    transition: background var(--duration-fast) var(--ease-out),
                color var(--duration-fast) var(--ease-out),
                transform var(--duration-fast) var(--ease-out);
  }

  .pagination-link:hover:not(.pagination-disabled):not(.pagination-current) {
    background: var(--color-accent-primary);
    color: var(--color-bg-primary);
    transform: translateY(-2px);
  }

  .pagination-link:focus-visible {
    outline: 2px solid var(--color-accent-primary);
    outline-offset: 2px;
  }

  /* Current page */
  .pagination-current {
    background: var(--color-accent-primary);
    color: var(--color-bg-primary);
    font-weight: 600;
  }

  /* Disabled state */
  .pagination-disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  /* Previous/Next buttons */
  .pagination-prev,
  .pagination-next {
    gap: var(--space-2);
  }

  .pagination-text {
    display: none;
  }

  @media (min-width: 640px) {
    .pagination-text {
      display: inline;
    }
  }

  /* Hide page numbers on very small screens */
  .pagination-number {
    display: none;
  }

  @media (min-width: 480px) {
    .pagination-number {
      display: flex;
    }
  }

  .pagination-ellipsis {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 40px;
    height: 40px;
    color: var(--color-text-secondary);
    font-weight: 600;
  }
</style>
