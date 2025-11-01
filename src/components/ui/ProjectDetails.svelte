<script lang="ts">
  /**
   * ProjectDetails Component
   * Displays portfolio project metadata in a structured format
   *
   * Features:
   * - Client name, date, category, tags
   * - Two-column responsive layout
   * - Icon integration
   * - Theme-aware styling
   * - Accessible markup
   *
   * Usage:
   * <ProjectDetails
   *   client="Acme Corp"
   *   date="2025-10-15"
   *   category="Web Development"
   *   tags={['React', 'TypeScript', 'Tailwind CSS']}
   *   projectUrl="https://example.com"
   * />
   */

  import Icon from './Icon.svelte';

  interface Props {
    client?: string;
    date?: string;
    category?: string;
    tags?: string[];
    projectUrl?: string;
  }

  let { client, date, category, tags, projectUrl }: Props = $props();

  // Format date
  const formatDate = (dateString: string): string => {
    const d = new Date(dateString);
    return d.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
    });
  };

  const formattedDate = date ? formatDate(date) : undefined;
</script>

<div class="project-details">
  <h3 class="project-details-title">Project Details</h3>

  <dl class="project-details-list">
    {#if client}
      <div class="detail-item">
        <dt class="detail-label">
          <Icon name="user" size="sm" ariaHidden />
          Client
        </dt>
        <dd class="detail-value">{client}</dd>
      </div>
    {/if}

    {#if formattedDate}
      <div class="detail-item">
        <dt class="detail-label">
          <Icon name="calendar" size="sm" ariaHidden />
          Date
        </dt>
        <dd class="detail-value">{formattedDate}</dd>
      </div>
    {/if}

    {#if category}
      <div class="detail-item">
        <dt class="detail-label">
          <Icon name="folder" size="sm" ariaHidden />
          Category
        </dt>
        <dd class="detail-value">{category}</dd>
      </div>
    {/if}

    {#if projectUrl}
      <div class="detail-item">
        <dt class="detail-label">
          <Icon name="external-link" size="sm" ariaHidden />
          Website
        </dt>
        <dd class="detail-value">
          <a href={projectUrl} target="_blank" rel="noopener noreferrer" class="project-link">
            View Live Project
            <Icon name="arrow-right" size="sm" ariaHidden />
          </a>
        </dd>
      </div>
    {/if}

    {#if tags && tags.length > 0}
      <div class="detail-item detail-tags">
        <dt class="detail-label">
          <Icon name="tag" size="sm" ariaHidden />
          Technologies
        </dt>
        <dd class="detail-value">
          <div class="tag-list">
            {#each tags as tag}
              <span class="tag">{tag}</span>
            {/each}
          </div>
        </dd>
      </div>
    {/if}
  </dl>
</div>

<style>
  /**
   * Project Details Styles
   * Structured metadata display with icons
   */
  .project-details {
    padding: var(--space-8);
    background: var(--color-bg-secondary);
    border-radius: 12px;
    border-left: 4px solid var(--color-accent-primary);
  }

  .project-details-title {
    font-size: var(--text-2xl);
    font-weight: bold;
    color: var(--color-text-primary);
    margin-bottom: var(--space-6);
  }

  /* Details List */
  .project-details-list {
    display: flex;
    flex-direction: column;
    gap: var(--space-4);
    margin: 0;
  }

  .detail-item {
    display: grid;
    grid-template-columns: 140px 1fr;
    gap: var(--space-4);
    align-items: start;
  }

  .detail-tags {
    grid-template-columns: 140px 1fr;
    align-items: start;
  }

  .detail-label {
    display: flex;
    align-items: center;
    gap: var(--space-2);
    font-size: var(--text-sm);
    font-weight: 600;
    color: var(--color-text-secondary);
    margin: 0;
  }

  .detail-value {
    font-size: var(--text-base);
    color: var(--color-text-primary);
    margin: 0;
  }

  /* Project Link */
  .project-link {
    display: inline-flex;
    align-items: center;
    gap: var(--space-2);
    color: var(--color-accent-primary);
    text-decoration: none;
    font-weight: 600;
    transition: transform var(--duration-fast) var(--ease-out);
  }

  .project-link:hover {
    text-decoration: underline;
    transform: translateX(4px);
  }

  .project-link:focus-visible {
    outline: 2px solid var(--color-accent-primary);
    outline-offset: 2px;
    border-radius: 4px;
  }

  /* Tags */
  .tag-list {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-2);
  }

  .tag {
    padding: var(--space-1) var(--space-3);
    background: var(--color-accent-primary);
    color: var(--color-bg-primary);
    border-radius: 12px;
    font-size: var(--text-xs);
    font-weight: 600;
  }

  /* Responsive */
  @media (max-width: 640px) {
    .detail-item,
    .detail-tags {
      grid-template-columns: 1fr;
      gap: var(--space-2);
    }
  }
</style>
