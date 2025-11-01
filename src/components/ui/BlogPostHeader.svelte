<script lang="ts">
  /**
   * BlogPostHeader Component
   * Displays blog post header with title, metadata, and featured image
   *
   * Features:
   * - Featured image with gradient overlay
   * - Title, date, author, read time
   * - Tags display
   * - Responsive design
   * - Theme-aware styling
   *
   * Usage:
   * <BlogPostHeader
   *   title="Getting Started with Web Development"
   *   date="2025-10-15"
   *   author="Jane Doe"
   *   readTime="5 min read"
   *   image="https://..."
   *   tags={['JavaScript', 'Tutorial']}
   * />
   */

  interface Props {
    title: string;
    date: string;
    author?: string;
    readTime?: string;
    image?: string;
    tags?: string[];
  }

  let { title, date, author, readTime, image, tags }: Props = $props();

  // Format date
  const formatDate = (dateString: string): string => {
    const d = new Date(dateString);
    return d.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const formattedDate = formatDate(date);
</script>

<header class="blog-post-header">
  {#if image}
    <div class="blog-post-image">
      <img src={image} alt={title} loading="eager" />
      <div class="image-overlay"></div>
    </div>
  {/if}

  <div class="blog-post-content">
    <h1 class="blog-post-title">{title}</h1>

    <div class="blog-post-meta">
      <time datetime={date} class="blog-post-date">
        {formattedDate}
      </time>

      {#if author}
        <span class="blog-post-separator">•</span>
        <span class="blog-post-author">By {author}</span>
      {/if}

      {#if readTime}
        <span class="blog-post-separator">•</span>
        <span class="blog-post-readtime">{readTime}</span>
      {/if}
    </div>

    {#if tags && tags.length > 0}
      <div class="blog-post-tags">
        {#each tags as tag}
          <span class="blog-post-tag">{tag}</span>
        {/each}
      </div>
    {/if}
  </div>
</header>

<style>
  /**
   * Blog Post Header Styles
   * Hero-style header with image and metadata
   */
  .blog-post-header {
    position: relative;
    margin-bottom: var(--space-8);
  }

  /* Featured Image */
  .blog-post-image {
    position: relative;
    width: 100%;
    height: 400px;
    overflow: hidden;
    border-radius: 12px;
    margin-bottom: var(--space-6);
  }

  .blog-post-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .image-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.3) 100%);
  }

  /* Content */
  .blog-post-content {
    max-width: 800px;
    margin: 0 auto;
  }

  .blog-post-title {
    font-size: 2.5rem;
    font-weight: bold;
    color: var(--color-text-primary);
    line-height: 1.2;
    margin-bottom: var(--space-4);
  }

  @media (min-width: 768px) {
    .blog-post-title {
      font-size: 3rem;
    }
  }

  /* Metadata */
  .blog-post-meta {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: var(--space-2);
    font-size: var(--text-sm);
    color: var(--color-text-secondary);
    margin-bottom: var(--space-4);
  }

  .blog-post-date,
  .blog-post-author,
  .blog-post-readtime {
    font-weight: 500;
  }

  .blog-post-separator {
    opacity: 0.5;
  }

  /* Tags */
  .blog-post-tags {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-2);
  }

  .blog-post-tag {
    padding: var(--space-1) var(--space-3);
    background: var(--color-accent-primary);
    color: var(--color-bg-primary);
    border-radius: 16px;
    font-size: var(--text-xs);
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
</style>
