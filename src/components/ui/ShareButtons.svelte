<script lang="ts">
  /**
   * ShareButtons Component
   * Social sharing buttons for blog posts
   *
   * Features:
   * - Share to Twitter, Facebook, LinkedIn, Email
   * - Copy link button
   * - Accessible button controls
   * - Theme-aware styling
   * - Responsive design
   *
   * Usage:
   * <ShareButtons
   *   url="https://example.com/blog/post"
   *   title="Post Title"
   * />
   */

  import Icon from './Icon.svelte';

  interface Props {
    url: string;
    title: string;
  }

  let { url, title }: Props = $props();

  let copySuccess = $state(false);

  // Encode URL and title for sharing
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  // Share URLs
  const shareUrls = {
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    email: `mailto:?subject=${encodedTitle}&body=Check%20out%20this%20article:%20${encodedUrl}`,
  };

  // Copy link to clipboard
  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      copySuccess = true;
      setTimeout(() => {
        copySuccess = false;
      }, 2000);
    } catch (error) {
      console.error('Failed to copy link:', error);
    }
  };
</script>

<div class="share-buttons">
  <span class="share-label">Share:</span>

  <div class="share-buttons-group">
    <a
      href={shareUrls.twitter}
      target="_blank"
      rel="noopener noreferrer"
      class="share-button share-twitter"
      aria-label="Share on Twitter"
    >
      <Icon name="twitter" size="sm" ariaHidden />
    </a>

    <a
      href={shareUrls.facebook}
      target="_blank"
      rel="noopener noreferrer"
      class="share-button share-facebook"
      aria-label="Share on Facebook"
    >
      <Icon name="facebook" size="sm" ariaHidden />
    </a>

    <a
      href={shareUrls.linkedin}
      target="_blank"
      rel="noopener noreferrer"
      class="share-button share-linkedin"
      aria-label="Share on LinkedIn"
    >
      <Icon name="linkedin" size="sm" ariaHidden />
    </a>

    <a
      href={shareUrls.email}
      class="share-button share-email"
      aria-label="Share via Email"
    >
      <Icon name="mail" size="sm" ariaHidden />
    </a>

    <button
      type="button"
      class="share-button share-copy"
      onclick={copyLink}
      aria-label="Copy link"
    >
      <Icon name={copySuccess ? 'check' : 'link'} size="sm" ariaHidden />
    </button>
  </div>

  {#if copySuccess}
    <span class="copy-success" role="status" aria-live="polite">
      Link copied!
    </span>
  {/if}
</div>

<style>
  /**
   * Share Buttons Styles
   * Horizontal row of social sharing buttons
   */
  .share-buttons {
    display: flex;
    align-items: center;
    gap: var(--space-4);
    padding: var(--space-6) 0;
    flex-wrap: wrap;
  }

  .share-label {
    font-size: var(--text-sm);
    font-weight: 600;
    color: var(--color-text-secondary);
  }

  .share-buttons-group {
    display: flex;
    gap: var(--space-3);
  }

  .share-button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background: var(--color-bg-secondary);
    color: var(--color-text-primary);
    border: none;
    border-radius: 50%;
    text-decoration: none;
    cursor: pointer;
    transition: all var(--duration-fast) var(--ease-out);
  }

  .share-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }

  .share-button:focus-visible {
    outline: 2px solid var(--color-accent-primary);
    outline-offset: 2px;
  }

  /* Platform-specific colors on hover */
  .share-twitter:hover {
    background: #1DA1F2;
    color: white;
  }

  .share-facebook:hover {
    background: #1877F2;
    color: white;
  }

  .share-linkedin:hover {
    background: #0A66C2;
    color: white;
  }

  .share-email:hover {
    background: var(--color-accent-primary);
    color: var(--color-bg-primary);
  }

  .share-copy:hover {
    background: var(--color-accent-primary);
    color: var(--color-bg-primary);
  }

  /* Copy success message */
  .copy-success {
    font-size: var(--text-sm);
    color: var(--color-accent-primary);
    font-weight: 600;
    animation: fadeIn 0.2s ease-out;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-4px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>
