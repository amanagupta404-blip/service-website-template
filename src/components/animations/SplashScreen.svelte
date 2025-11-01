<script lang="ts">
  /**
   * Splash Screen Component
   * Full-screen animated splash screen with GSAP timeline
   * Shows once per session using localStorage
   */

  import { gsap } from 'gsap';
  import { prefersReducedMotion } from '@utils/gsap';
  import logoSvg from '@assets/icons/logo.svg?raw';

  // Props
  let {
    duration = 2.5,
    showOnce = true,
    storageKey = 'splash-screen-shown',
  }: {
    duration?: number;
    showOnce?: boolean;
    storageKey?: string;
  } = $props();

  // State
  let isVisible = $state(true);
  let splashRef: HTMLElement | undefined;

  // Check if splash should be shown
  function shouldShowSplash(): boolean {
    if (!showOnce) return true;
    if (typeof window === 'undefined') return true;

    try {
      const hasShown = sessionStorage.getItem(storageKey);
      return !hasShown;
    } catch (e) {
      // If sessionStorage is not available, always show
      return true;
    }
  }

  // Initialize splash screen
  $effect(() => {
    if (!shouldShowSplash()) {
      isVisible = false;
      return;
    }

    // If user prefers reduced motion, skip animation
    if (prefersReducedMotion()) {
      setTimeout(() => {
        hideSplash();
      }, 800); // Brief pause, then hide
      return;
    }

    // Run GSAP animation timeline
    const timeline = gsap.timeline({
      onComplete: () => {
        hideSplash();
      },
    });

    // Animate logo elements with stagger
    timeline
      .from('.logo-circle', {
        scale: 0.5,
        opacity: 0,
        duration: 0.6,
        ease: 'back.out(1.7)',
      })
      .from(
        '.logo-path',
        {
          opacity: 0,
          scale: 0.8,
          transformOrigin: 'center center',
          stagger: 0.1,
          duration: 0.5,
          ease: 'power2.out',
        },
        '-=0.3'
      )
      .from(
        '.logo-dot',
        {
          scale: 0,
          opacity: 0,
          stagger: 0.08,
          duration: 0.4,
          ease: 'back.out(2)',
        },
        '-=0.2'
      )
      .from(
        '.splash-tagline',
        {
          opacity: 0,
          y: 20,
          duration: 0.6,
          ease: 'power2.out',
        },
        '-=0.3'
      )
      .to(
        splashRef,
        {
          opacity: 0,
          duration: 0.6,
          ease: 'power2.inOut',
          delay: 0.4,
        },
        `+=${duration - 2.8}` // Calculate delay to match total duration
      );

    // Cleanup function
    return () => {
      timeline.kill();
    };
  });

  // Hide splash and mark as shown in sessionStorage
  function hideSplash() {
    isVisible = false;

    if (showOnce && typeof window !== 'undefined') {
      try {
        sessionStorage.setItem(storageKey, 'true');
      } catch (e) {
        // Silently fail if sessionStorage is not available
      }
    }

    // Remove element from DOM after fade out completes
    setTimeout(() => {
      splashRef?.remove();
    }, 600);
  }
</script>

{#if isVisible}
  <div
    bind:this={splashRef}
    class="splash-screen"
    role="img"
    aria-label="Loading animation"
  >
    <div class="splash-content">
      <!-- Logo SVG -->
      <div class="splash-logo">
        {@html logoSvg}
      </div>

      <!-- Tagline -->
      <p class="splash-tagline">
        Crafting Digital Excellence
      </p>
    </div>
  </div>
{/if}

<style>
  .splash-screen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: var(--color-bg-primary);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    overflow: hidden;
  }

  .splash-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: var(--space-8);
  }

  .splash-logo {
    width: 200px;
    height: 200px;
    color: var(--color-accent-primary);
  }

  .splash-logo :global(svg) {
    width: 100%;
    height: 100%;
  }

  .splash-tagline {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--color-text-primary);
    text-align: center;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }

  /* Responsive adjustments */
  @media (max-width: 640px) {
    .splash-logo {
      width: 150px;
      height: 150px;
    }

    .splash-tagline {
      font-size: 1.125rem;
      padding: 0 var(--space-6);
    }
  }

  /* Reduced motion - no animations, just fade */
  @media (prefers-reduced-motion: reduce) {
    .splash-screen {
      transition: opacity 0.3s ease;
    }

    .splash-logo,
    .splash-tagline {
      animation: none !important;
    }
  }
</style>
