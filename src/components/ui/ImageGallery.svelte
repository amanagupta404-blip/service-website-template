<script lang="ts">
  /**
   * ImageGallery Component
   * Displays a grid of images for portfolio projects
   *
   * Features:
   * - Responsive grid layout
   * - Lazy loading images
   * - Lightbox-ready (click to enlarge)
   * - Theme-aware styling
   * - Accessible image alt text
   *
   * Usage:
   * <ImageGallery
   *   images={[
   *     { src: 'image1.jpg', alt: 'Project screenshot 1' },
   *     { src: 'image2.jpg', alt: 'Project screenshot 2' }
   *   ]}
   *   columns={3}
   * />
   */

  interface Image {
    src: string;
    alt: string;
  }

  interface Props {
    images: Image[];
    columns?: 2 | 3 | 4;
  }

  let { images, columns = 3 }: Props = $props();

  let selectedImage = $state<number | null>(null);

  const openLightbox = (index: number) => {
    selectedImage = index;
  };

  const closeLightbox = () => {
    selectedImage = null;
  };

  const nextImage = () => {
    if (selectedImage !== null && selectedImage < images.length - 1) {
      selectedImage = selectedImage + 1;
    }
  };

  const prevImage = () => {
    if (selectedImage !== null && selectedImage > 0) {
      selectedImage = selectedImage - 1;
    }
  };

  // Handle keyboard navigation
  const handleKeydown = (event: KeyboardEvent) => {
    if (selectedImage === null) return;

    if (event.key === 'Escape') {
      closeLightbox();
    } else if (event.key === 'ArrowRight') {
      nextImage();
    } else if (event.key === 'ArrowLeft') {
      prevImage();
    }
  };
</script>

<svelte:window on:keydown={handleKeydown} />

<div class="image-gallery" class:gallery-col-2={columns === 2} class:gallery-col-3={columns === 3} class:gallery-col-4={columns === 4}>
  {#each images as image, index}
    <button
      class="gallery-item"
      onclick={() => openLightbox(index)}
      type="button"
      aria-label={`View full size: ${image.alt}`}
    >
      <img src={image.src} alt={image.alt} loading="lazy" />
      <div class="gallery-overlay">
        <span class="gallery-icon">+</span>
      </div>
    </button>
  {/each}
</div>

<!-- Lightbox Modal -->
{#if selectedImage !== null}
  <div class="lightbox" onclick={closeLightbox} role="dialog" aria-label="Image lightbox">
    <button class="lightbox-close" onclick={closeLightbox} type="button" aria-label="Close lightbox">
      ×
    </button>

    {#if selectedImage > 0}
      <button class="lightbox-prev" onclick={(e) => { e.stopPropagation(); prevImage(); }} type="button" aria-label="Previous image">
        ‹
      </button>
    {/if}

    <div class="lightbox-content" onclick={(e) => e.stopPropagation()}>
      <img src={images[selectedImage].src} alt={images[selectedImage].alt} />
      <p class="lightbox-caption">{images[selectedImage].alt}</p>
    </div>

    {#if selectedImage < images.length - 1}
      <button class="lightbox-next" onclick={(e) => { e.stopPropagation(); nextImage(); }} type="button" aria-label="Next image">
        ›
      </button>
    {/if}

    <div class="lightbox-counter">
      {selectedImage + 1} / {images.length}
    </div>
  </div>
{/if}

<style>
  /**
   * Image Gallery Styles
   * Grid layout with lightbox modal
   */
  .image-gallery {
    display: grid;
    gap: var(--space-4);
    grid-template-columns: 1fr;
  }

  @media (min-width: 640px) {
    .gallery-col-2 { grid-template-columns: repeat(2, 1fr); }
    .gallery-col-3 { grid-template-columns: repeat(2, 1fr); }
    .gallery-col-4 { grid-template-columns: repeat(2, 1fr); }
  }

  @media (min-width: 1024px) {
    .gallery-col-3 { grid-template-columns: repeat(3, 1fr); }
    .gallery-col-4 { grid-template-columns: repeat(4, 1fr); }
  }

  /* Gallery Items */
  .gallery-item {
    position: relative;
    aspect-ratio: 4 / 3;
    overflow: hidden;
    border-radius: 8px;
    cursor: pointer;
    border: none;
    padding: 0;
    background: var(--color-bg-secondary);
  }

  .gallery-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform var(--duration-normal) var(--ease-out);
  }

  .gallery-overlay {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity var(--duration-normal) var(--ease-out);
  }

  .gallery-icon {
    font-size: 3rem;
    color: white;
    font-weight: 300;
  }

  .gallery-item:hover img {
    transform: scale(1.05);
  }

  .gallery-item:hover .gallery-overlay {
    opacity: 1;
  }

  .gallery-item:focus-visible {
    outline: 2px solid var(--color-accent-primary);
    outline-offset: 2px;
  }

  /* Lightbox */
  .lightbox {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.95);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    padding: var(--space-4);
  }

  .lightbox-content {
    max-width: 90vw;
    max-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .lightbox-content img {
    max-width: 100%;
    max-height: 80vh;
    object-fit: contain;
    border-radius: 8px;
  }

  .lightbox-caption {
    color: white;
    margin-top: var(--space-4);
    font-size: var(--text-base);
    text-align: center;
  }

  /* Lightbox Controls */
  .lightbox-close,
  .lightbox-prev,
  .lightbox-next {
    position: absolute;
    background: rgba(255, 255, 255, 0.2);
    color: white;
    border: none;
    font-size: 3rem;
    cursor: pointer;
    padding: var(--space-4);
    transition: background var(--duration-fast) var(--ease-out);
    border-radius: 4px;
  }

  .lightbox-close:hover,
  .lightbox-prev:hover,
  .lightbox-next:hover {
    background: rgba(255, 255, 255, 0.3);
  }

  .lightbox-close {
    top: var(--space-4);
    right: var(--space-4);
    width: 60px;
    height: 60px;
    font-size: 2.5rem;
    line-height: 1;
  }

  .lightbox-prev,
  .lightbox-next {
    top: 50%;
    transform: translateY(-50%);
  }

  .lightbox-prev { left: var(--space-4); }
  .lightbox-next { right: var(--space-4); }

  .lightbox-counter {
    position: absolute;
    bottom: var(--space-4);
    left: 50%;
    transform: translateX(-50%);
    color: white;
    font-size: var(--text-base);
    background: rgba(0, 0, 0, 0.5);
    padding: var(--space-2) var(--space-4);
    border-radius: 20px;
  }
</style>
