<script lang="ts">
  /**
   * Header.svelte
   * Main site header with responsive navigation
   *
   * Features:
   * - Logo/brand name
   * - Desktop horizontal navigation menu
   * - Mobile menu toggle
   * - Active page indicators
   * - Hover states and transitions
   * - Accessibility (keyboard navigation, ARIA labels)
   * - Sticky header support (optional)
   *
   * Phase 3.3: Header Component
   */

  import { onMount } from 'svelte';
  import ThemeSwitcher from '@/components/ui/ThemeSwitcher.svelte';

  // Navigation links configuration
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ];

  // Props
  let {
    currentPath = '/',
    sticky = false,
  }: {
    currentPath?: string;
    sticky?: boolean;
  } = $props();

  // State
  let isMobileMenuOpen = $state(false);
  let scrolled = $state(false);

  // Toggle mobile menu
  function toggleMobileMenu() {
    isMobileMenuOpen = !isMobileMenuOpen;

    // Prevent body scroll when mobile menu is open
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  // Close mobile menu
  function closeMobileMenu() {
    isMobileMenuOpen = false;
    document.body.style.overflow = '';
  }

  // Check if link is active
  function isActive(href: string): boolean {
    if (href === '/') {
      return currentPath === '/';
    }
    return currentPath.startsWith(href);
  }

  // Handle scroll for sticky header styling
  onMount(() => {
    const handleScroll = () => {
      scrolled = window.scrollY > 20;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = ''; // Cleanup
    };
  });

  // Close mobile menu on escape key
  $effect(() => {
    if (isMobileMenuOpen) {
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          closeMobileMenu();
        }
      };

      document.addEventListener('keydown', handleEscape);

      return () => {
        document.removeEventListener('keydown', handleEscape);
      };
    }
  });
</script>

<header
  class="header {sticky ? 'sticky top-0' : ''} {scrolled ? 'scrolled' : ''}"
  class:sticky
  class:scrolled
>
  <div class="container mx-auto px-6">
    <div class="header-content">
      <!-- Logo / Brand -->
      <div class="logo">
        <a href="/" class="logo-link" aria-label="Home">
          <svg
            class="logo-icon"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <!-- Simple placeholder logo - replace with actual logo -->
            <circle cx="16" cy="16" r="14" fill="var(--color-accent-primary)" />
            <circle cx="16" cy="16" r="10" fill="var(--color-bg-primary)" />
          </svg>
          <span class="logo-text">Service Co.</span>
        </a>
      </div>

      <!-- Desktop Navigation -->
      <nav class="desktop-nav" aria-label="Main navigation">
        <ul class="nav-list">
          {#each navLinks as link}
            <li class="nav-item">
              <a
                href={link.href}
                class="nav-link {isActive(link.href) ? 'active' : ''}"
                aria-current={isActive(link.href) ? 'page' : undefined}
              >
                {link.label}
              </a>
            </li>
          {/each}
        </ul>
      </nav>

      <!-- Right Section: Theme Switcher + Mobile Menu Toggle -->
      <div class="header-actions">
        <!-- Theme Switcher -->
        <div class="theme-switcher-wrapper">
          <ThemeSwitcher />
        </div>

        <!-- Mobile Menu Toggle Button -->
        <button
          class="mobile-menu-toggle"
          onclick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-nav"
        >
          <span class="hamburger">
            <span class="line line-1" class:open={isMobileMenuOpen}></span>
            <span class="line line-2" class:open={isMobileMenuOpen}></span>
            <span class="line line-3" class:open={isMobileMenuOpen}></span>
          </span>
        </button>
      </div>
    </div>
  </div>

  <!-- Mobile Navigation -->
  {#if isMobileMenuOpen}
    <div class="mobile-nav-overlay" onclick={closeMobileMenu} role="presentation"></div>
  {/if}

  <nav
    id="mobile-nav"
    class="mobile-nav {isMobileMenuOpen ? 'open' : ''}"
    aria-label="Mobile navigation"
  >
    <ul class="mobile-nav-list">
      {#each navLinks as link}
        <li class="mobile-nav-item">
          <a
            href={link.href}
            class="mobile-nav-link {isActive(link.href) ? 'active' : ''}"
            onclick={closeMobileMenu}
            aria-current={isActive(link.href) ? 'page' : undefined}
          >
            {link.label}
          </a>
        </li>
      {/each}
    </ul>
  </nav>
</header>

<style>
  /**
   * Header Styles
   */
  .header {
    position: relative;
    background-color: var(--color-bg-primary);
    border-bottom: 1px solid var(--color-border);
    transition: all var(--duration-normal) var(--ease-in-out);
    overflow: visible;
  }

  .header.sticky {
    position: sticky;
    top: 0;
    z-index: 100;
  }

  .header.scrolled {
    box-shadow: 0 2px 8px var(--color-shadow);
  }

  /**
   * Header Content (Flexbox Layout)
   */
  .header-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 72px;
    gap: var(--space-8);
  }

  /**
   * Logo / Brand
   */
  .logo {
    display: flex;
    align-items: center;
    flex-shrink: 0;
  }

  .logo-link {
    display: flex;
    align-items: center;
    height: 44px;
    gap: var(--space-3);
    text-decoration: none;
    color: var(--color-text-primary);
    font-weight: 700;
    font-size: var(--text-lg);
    line-height: 1;
    transition: opacity var(--duration-fast) var(--ease-in-out);
  }

  .logo-link:hover {
    opacity: 0.8;
  }

  .logo-link:focus-visible {
    outline: 3px solid var(--color-accent-primary);
    outline-offset: 4px;
    border-radius: 4px;
  }

  .logo-icon {
    display: block;
    width: 32px;
    height: 32px;
    flex-shrink: 0;
  }

  .logo-text {
    display: flex;
    align-items: center;
    font-family: var(--font-heading);
    line-height: 1;
  }

  /**
   * Desktop Navigation
   */
  .desktop-nav {
    display: none;
  }

  @media (min-width: 768px) {
    .desktop-nav {
      display: flex;
      align-items: center;
      flex: 1;
    }
  }

  .nav-list {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--space-2);
    list-style: none;
  }

  .nav-item {
    display: flex;
    align-items: center;
    margin: 0;
  }

  .nav-link {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 44px;
    padding: 0 var(--space-4);
    color: var(--color-text-primary);
    text-decoration: none;
    font-weight: 500;
    font-size: var(--text-base);
    line-height: 1;
    border-radius: 4px;
    transition: all var(--duration-fast) var(--ease-in-out);
  }

  .nav-link:hover {
    background-color: var(--color-bg-secondary);
    color: var(--color-accent-primary);
  }

  .nav-link.active {
    background-color: var(--color-bg-tertiary);
    color: var(--color-accent-primary);
    font-weight: 600;
  }

  .nav-link:focus-visible {
    outline: 3px solid var(--color-accent-primary);
    outline-offset: 2px;
  }

  /**
   * Header Actions (Theme Switcher + Mobile Menu)
   */
  .header-actions {
    display: flex;
    align-items: center;
    gap: var(--space-4);
  }

  .theme-switcher-wrapper {
    display: none;
    position: relative;
    z-index: 9999;
  }

  @media (min-width: 768px) {
    .theme-switcher-wrapper {
      display: flex;
      align-items: center;
    }
  }

  /**
   * Mobile Menu Toggle Button
   */
  .mobile-menu-toggle {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    padding: 0;
    background: transparent;
    border: none;
    cursor: pointer;
    border-radius: 4px;
    transition: background-color var(--duration-fast) var(--ease-in-out);
  }

  @media (min-width: 768px) {
    .mobile-menu-toggle {
      display: none;
    }
  }

  .mobile-menu-toggle:hover {
    background-color: var(--color-bg-secondary);
  }

  .mobile-menu-toggle:focus-visible {
    outline: 3px solid var(--color-accent-primary);
    outline-offset: 2px;
  }

  /**
   * Hamburger Icon
   */
  .hamburger {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 24px;
    height: 18px;
  }

  .line {
    display: block;
    width: 100%;
    height: 2px;
    background-color: var(--color-text-primary);
    border-radius: 2px;
    transition: all var(--duration-normal) var(--ease-in-out);
  }

  .line.open.line-1 {
    transform: translateY(8px) rotate(45deg);
  }

  .line.open.line-2 {
    opacity: 0;
  }

  .line.open.line-3 {
    transform: translateY(-8px) rotate(-45deg);
  }

  /**
   * Mobile Navigation Overlay
   */
  .mobile-nav-overlay {
    position: fixed;
    top: 73px;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 90;
    animation: fadeIn var(--duration-normal) var(--ease-in-out);
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  /**
   * Mobile Navigation Menu
   */
  .mobile-nav {
    position: fixed;
    top: 73px;
    left: 0;
    right: 0;
    max-height: 0;
    overflow: hidden;
    background-color: var(--color-bg-primary);
    border-bottom: 1px solid var(--color-border);
    box-shadow: 0 4px 12px var(--color-shadow);
    z-index: 95;
    transition: max-height var(--duration-normal) var(--ease-in-out);
  }

  @media (min-width: 768px) {
    .mobile-nav {
      display: none;
    }
  }

  .mobile-nav.open {
    max-height: calc(100vh - 73px);
    overflow-y: auto;
  }

  .mobile-nav-list {
    list-style: none;
    padding: var(--space-4) 0;
  }

  .mobile-nav-item {
    margin: 0;
  }

  .mobile-nav-link {
    display: block;
    padding: var(--space-4) var(--space-6);
    color: var(--color-text-primary);
    text-decoration: none;
    font-weight: 500;
    font-size: var(--text-lg);
    transition: all var(--duration-fast) var(--ease-in-out);
    border-left: 4px solid transparent;
  }

  .mobile-nav-link:hover {
    background-color: var(--color-bg-secondary);
    border-left-color: var(--color-accent-primary);
  }

  .mobile-nav-link.active {
    background-color: var(--color-bg-tertiary);
    border-left-color: var(--color-accent-primary);
    color: var(--color-accent-primary);
    font-weight: 600;
  }

  .mobile-nav-link:focus-visible {
    outline: 3px solid var(--color-accent-primary);
    outline-offset: -3px;
  }
</style>
