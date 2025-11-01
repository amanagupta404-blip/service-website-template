<script lang="ts">
  /**
   * RelatedPosts Component
   * Displays related blog posts in a grid
   *
   * Features:
   * - Uses BlogCard component
   * - Responsive grid layout
   * - Theme-aware styling
   *
   * Usage:
   * <RelatedPosts
   *   posts={[
   *     { title: '...', excerpt: '...', image: '...', date: '...', href: '...' },
   *     { title: '...', excerpt: '...', image: '...', date: '...', href: '...' }
   *   ]}
   *   title="Related Articles"
   * />
   */

  import BlogCard from './BlogCard.svelte';

  interface Post {
    blogTitle: string;
    excerpt: string;
    image: string;
    date: string;
    author?: string;
    readTime?: string;
    category?: string;
    href: string;
  }

  interface Props {
    posts: Post[];
    title?: string;
  }

  let { posts, title = 'Related Articles' }: Props = $props();
</script>

<div class="related-posts">
  <h2 class="related-posts-title">{title}</h2>

  <div class="related-posts-grid">
    {#each posts as post}
      <BlogCard
        blogTitle={post.blogTitle}
        excerpt={post.excerpt}
        image={post.image}
        date={post.date}
        author={post.author}
        readTime={post.readTime}
        category={post.category}
        href={post.href}
      />
    {/each}
  </div>
</div>

<style>
  /**
   * Related Posts Styles
   * Grid layout for displaying related blog posts
   */
  .related-posts {
    padding: var(--space-12) 0;
    border-top: 2px solid rgba(0, 0, 0, 0.1);
  }

  .related-posts-title {
    font-size: var(--text-3xl);
    font-weight: bold;
    color: var(--color-text-primary);
    margin-bottom: var(--space-8);
    text-align: center;
  }

  .related-posts-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--space-6);
  }

  @media (min-width: 768px) {
    .related-posts-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 1024px) {
    .related-posts-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }
</style>
