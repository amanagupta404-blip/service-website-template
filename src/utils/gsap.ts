/**
 * GSAP Animation Utilities
 * Reusable animation functions using GSAP 3.13+ (100% FREE as of 2025)
 *
 * GSAP is now completely free including all plugins:
 * - ScrollTrigger, ScrollSmoother, Flip, etc.
 * - No more club memberships needed!
 *
 * @see https://gsap.com/docs/
 */

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Check if user prefers reduced motion
 */
export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Fade in element on scroll
 * @param element - Element selector or HTML element
 * @param options - Animation options
 */
export function fadeInOnScroll(
  element: HTMLElement | string,
  options: {
    trigger?: HTMLElement | string;
    start?: string;
    y?: number;
    duration?: number;
    delay?: number;
    stagger?: number;
  } = {}
) {
  if (prefersReducedMotion()) return;

  const {
    trigger = element,
    start = 'top 80%',
    y = 30,
    duration = 0.8,
    delay = 0,
    stagger,
  } = options;

  const animation: gsap.TweenVars = {
    scrollTrigger: {
      trigger,
      start,
      toggleActions: 'play none none reverse',
    },
    opacity: 0,
    y,
    duration,
    delay,
    ease: 'power2.out',
  };

  if (stagger) {
    animation.stagger = stagger;
  }

  return gsap.from(element, animation);
}

/**
 * Slide in element from left on scroll
 * @param element - Element selector or HTML element
 * @param options - Animation options
 */
export function slideInFromLeft(
  element: HTMLElement | string,
  options: {
    trigger?: HTMLElement | string;
    start?: string;
    x?: number;
    duration?: number;
  } = {}
) {
  if (prefersReducedMotion()) return;

  const {
    trigger = element,
    start = 'top 80%',
    x = -50,
    duration = 0.8,
  } = options;

  return gsap.from(element, {
    scrollTrigger: {
      trigger,
      start,
      toggleActions: 'play none none reverse',
    },
    opacity: 0,
    x,
    duration,
    ease: 'power2.out',
  });
}

/**
 * Slide in element from right on scroll
 * @param element - Element selector or HTML element
 * @param options - Animation options
 */
export function slideInFromRight(
  element: HTMLElement | string,
  options: {
    trigger?: HTMLElement | string;
    start?: string;
    x?: number;
    duration?: number;
  } = {}
) {
  if (prefersReducedMotion()) return;

  const {
    trigger = element,
    start = 'top 80%',
    x = 50,
    duration = 0.8,
  } = options;

  return gsap.from(element, {
    scrollTrigger: {
      trigger,
      start,
      toggleActions: 'play none none reverse',
    },
    opacity: 0,
    x,
    duration,
    ease: 'power2.out',
  });
}

/**
 * Stagger animation for grid items
 * @param elements - Element selector or HTML elements
 * @param options - Animation options
 */
export function staggerGrid(
  elements: HTMLElement[] | string,
  options: {
    trigger?: HTMLElement | string;
    start?: string;
    y?: number;
    stagger?: number;
    duration?: number;
  } = {}
) {
  if (prefersReducedMotion()) return;

  const {
    trigger,
    start = 'top 80%',
    y = 50,
    stagger = 0.1,
    duration = 0.8,
  } = options;

  return gsap.from(elements, {
    scrollTrigger: trigger ? {
      trigger,
      start,
      toggleActions: 'play none none reverse',
    } : undefined,
    opacity: 0,
    y,
    stagger,
    duration,
    ease: 'power2.out',
  });
}

/**
 * Parallax scroll effect
 * @param element - Element selector or HTML element
 * @param options - Animation options
 */
export function parallaxScroll(
  element: HTMLElement | string,
  options: {
    trigger?: HTMLElement | string;
    start?: string;
    end?: string;
    yPercent?: number;
    scale?: number;
  } = {}
) {
  if (prefersReducedMotion()) return;

  const {
    trigger = element,
    start = 'top top',
    end = 'bottom top',
    yPercent = 30,
    scale,
  } = options;

  const animation: gsap.TweenVars = {
    scrollTrigger: {
      trigger,
      start,
      end,
      scrub: true,
    },
    yPercent,
    ease: 'none',
  };

  if (scale) {
    animation.scale = scale;
  }

  return gsap.to(element, animation);
}

/**
 * Scale in element on scroll
 * @param element - Element selector or HTML element
 * @param options - Animation options
 */
export function scaleInOnScroll(
  element: HTMLElement | string,
  options: {
    trigger?: HTMLElement | string;
    start?: string;
    scale?: number;
    duration?: number;
  } = {}
) {
  if (prefersReducedMotion()) return;

  const {
    trigger = element,
    start = 'top 80%',
    scale = 0.8,
    duration = 0.8,
  } = options;

  return gsap.from(element, {
    scrollTrigger: {
      trigger,
      start,
      toggleActions: 'play none none reverse',
    },
    opacity: 0,
    scale,
    duration,
    ease: 'back.out(1.7)',
  });
}

/**
 * Rotate in element on scroll
 * @param element - Element selector or HTML element
 * @param options - Animation options
 */
export function rotateInOnScroll(
  element: HTMLElement | string,
  options: {
    trigger?: HTMLElement | string;
    start?: string;
    rotation?: number;
    duration?: number;
  } = {}
) {
  if (prefersReducedMotion()) return;

  const {
    trigger = element,
    start = 'top 80%',
    rotation = 15,
    duration = 0.8,
  } = options;

  return gsap.from(element, {
    scrollTrigger: {
      trigger,
      start,
      toggleActions: 'play none none reverse',
    },
    opacity: 0,
    rotation,
    duration,
    ease: 'power2.out',
  });
}

/**
 * Hover scale animation
 * @param element - Element selector or HTML element
 * @param scale - Scale amount (default: 1.05)
 * @param duration - Animation duration (default: 0.3s)
 */
export function hoverScale(
  element: HTMLElement,
  scale: number = 1.05,
  duration: number = 0.3
) {
  if (prefersReducedMotion()) return;

  element.addEventListener('mouseenter', () => {
    gsap.to(element, { scale, duration, ease: 'power2.out' });
  });

  element.addEventListener('mouseleave', () => {
    gsap.to(element, { scale: 1, duration, ease: 'power2.out' });
  });
}

/**
 * Hover lift animation (scale + shadow)
 * @param element - Element selector or HTML element
 * @param options - Animation options
 */
export function hoverLift(
  element: HTMLElement,
  options: {
    y?: number;
    scale?: number;
    duration?: number;
  } = {}
) {
  if (prefersReducedMotion()) return;

  const { y = -5, scale = 1.02, duration = 0.3 } = options;

  element.addEventListener('mouseenter', () => {
    gsap.to(element, {
      y,
      scale,
      duration,
      ease: 'power2.out',
    });
  });

  element.addEventListener('mouseleave', () => {
    gsap.to(element, {
      y: 0,
      scale: 1,
      duration,
      ease: 'power2.out',
    });
  });
}

/**
 * Count up animation for numbers
 * @param element - Element containing number
 * @param endValue - Target number
 * @param options - Animation options
 */
export function countUp(
  element: HTMLElement,
  endValue: number,
  options: {
    duration?: number;
    decimals?: number;
    prefix?: string;
    suffix?: string;
  } = {}
) {
  if (prefersReducedMotion()) {
    element.textContent = `${options.prefix || ''}${endValue}${options.suffix || ''}`;
    return;
  }

  const { duration = 2, decimals = 0, prefix = '', suffix = '' } = options;

  const obj = { value: 0 };

  gsap.to(obj, {
    value: endValue,
    duration,
    ease: 'power1.out',
    onUpdate: () => {
      element.textContent = `${prefix}${obj.value.toFixed(decimals)}${suffix}`;
    },
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      toggleActions: 'play none none none',
    },
  });
}

/**
 * Reveal text character by character
 * @param element - Text element
 * @param options - Animation options
 */
export function revealText(
  element: HTMLElement,
  options: {
    duration?: number;
    stagger?: number;
    trigger?: HTMLElement | string;
  } = {}
) {
  if (prefersReducedMotion()) return;

  const { duration = 0.8, stagger = 0.03, trigger = element } = options;

  // Split text into characters
  const text = element.textContent || '';
  element.innerHTML = text
    .split('')
    .map((char) => `<span style="display:inline-block">${char === ' ' ? '&nbsp;' : char}</span>`)
    .join('');

  const chars = element.querySelectorAll('span');

  return gsap.from(chars, {
    scrollTrigger: {
      trigger,
      start: 'top 80%',
      toggleActions: 'play none none reverse',
    },
    opacity: 0,
    y: 20,
    stagger,
    duration,
    ease: 'power2.out',
  });
}

// Export GSAP and ScrollTrigger for direct use
export { gsap, ScrollTrigger };
