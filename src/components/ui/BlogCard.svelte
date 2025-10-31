<script lang="ts">
  /**
   * BlogCard Component
   * Display blog posts with featured image, metadata, and excerpt
   *
   * Features:
   * - Uses Card component
   * - Featured image display
   * - Date formatting
   * - Optional author, read time, category
   * - Hover effects
   * - Entire card clickable
   * - Theme-aware
   *
   * Phase 4.9: BlogCard Component
   */

  import Card from './Card.svelte';
  import Icon from './Icon.svelte';

  // Props
  let {
    blogTitle: postTitle,
    excerpt,
    image: postImage,
    date,
    author,
    readTime,
    category,
    href,
    class: className = '',
  }: {
    blogTitle: string;
    excerpt: string;
    image?: string;
    date: string | Date;
    author?: string;
    readTime?: string;
    category?: string;
    href: string;
    class?: string;
  } = $props();

  // Format date
  const formattedDate =
    typeof date === 'string'
      ? date
      : date.toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        });
</script>

<Card {href} clickable class="blog-card {className}">
  {#if postImage}
    {#snippet cardImage()}
      <img src={postImage} alt={postTitle} class="blog-image" />
    {/snippet}
  {/if}

  {#snippet cardTitle()}
    <div class="blog-header">
      {#if category}
        <span class="blog-category">{category}</span>
      {/if}
      <h3 class="blog-title">{postTitle}</h3>
    </div>
  {/snippet}

  <p class="blog-excerpt">{excerpt}</p>

  {#snippet cardFooter()}
    <div class="blog-meta">
      <div class="meta-item">
        <Icon name="calendar" size="sm" ariaHidden />
        <time datetime={typeof date === 'string' ? date : date.toISOString()}>
          {formattedDate}
        </time>
      </div>

      {#if author}
        <div class="meta-item">
          <Icon name="user" size="sm" ariaHidden />
          <span>{author}</span>
        </div>
      {/if}

      {#if readTime}
        <div class="meta-item">
          <Icon name="clock" size="sm" ariaHidden />
          <span>{readTime}</span>
        </div>
      {/if}
    </div>
  {/snippet}
</Card>

<style>
  /**
   * Blog Card
   */
  :global(.blog-card) {
    height: 100%;
  }

  /**
   * Blog Image
   */
  .blog-image {
    width: 100%;
    height: 240px;
    object-fit: cover;
    transition: transform var(--duration-normal) var(--ease-in-out);
  }

  :global(.blog-card:hover) .blog-image {
    transform: scale(1.05);
  }

  /**
   * Blog Header
   */
  .blog-header {
    display: flex;
    flex-direction: column;
    gap: var(--space-2);
  }

  /**
   * Blog Category Badge
   */
  .blog-category {
    display: inline-block;
    padding: var(--space-1) var(--space-3);
    font-size: var(--text-xs);
    font-weight: var(--font-medium);
    color: var(--color-text-inverse);
    background-color: var(--color-accent-primary);
    border-radius: 12px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    align-self: flex-start;
  }

  /**
   * Blog Title
   */
  .blog-title {
    font-size: var(--text-xl);
    font-weight: var(--font-semibold);
    color: var(--color-text-primary);
    margin: 0;
    line-height: var(--leading-snug);
  }

  /**
   * Blog Excerpt
   */
  .blog-excerpt {
    font-size: var(--text-base);
    line-height: var(--leading-relaxed);
    color: var(--color-text-primary);
    opacity: 0.8;
    margin: 0;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  /**
   * Blog Meta Information
   */
  .blog-meta {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-4);
    font-size: var(--text-sm);
    color: var(--color-text-primary);
    opacity: 0.7;
  }

  .meta-item {
    display: flex;
    align-items: center;
    gap: var(--space-2);
  }

  /**
   * Responsive & Reduced Motion
   */
  @media (prefers-reduced-motion: reduce) {
    .blog-image {
      transition: none;
    }

    :global(.blog-card:hover) .blog-image {
      transform: none;
    }
  }
</style>
