<script lang="ts">
/**
 * Footer.svelte
 * Site footer with multi-column layout
 *
 * Features:
 * - Multi-column layout (company info, quick links, contact, social)
 * - Responsive design (stacks on mobile)
 * - Social media icon links
 * - Legal links (Privacy, Terms, Sitemap)
 * - Copyright notice with dynamic year
 * - Background color styling
 * - Accessibility (proper ARIA labels)
 *
 * Phase 3.5: Footer Component
 */

// Social media links configuration
const socialLinks = [
  {
    name: 'Facebook',
    href: '#',
    icon: 'facebook',
    ariaLabel: 'Follow us on Facebook',
  },
  {
    name: 'Twitter',
    href: '#',
    icon: 'twitter',
    ariaLabel: 'Follow us on Twitter',
  },
  {
    name: 'Instagram',
    href: '#',
    icon: 'instagram',
    ariaLabel: 'Follow us on Instagram',
  },
  {
    name: 'LinkedIn',
    href: '#',
    icon: 'linkedin',
    ariaLabel: 'Connect on LinkedIn',
  },
];

// Quick links configuration
const quickLinks = [
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About Us' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

// Legal links configuration
const legalLinks = [
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms of Service' },
  { href: '/sitemap.xml', label: 'Sitemap' },
];

// Get current year for copyright
const currentYear = new Date().getFullYear();
</script>

<footer class="footer">
  <div class="container mx-auto px-6 py-12">
    <!-- Footer Grid (Multi-column layout) -->
    <div class="footer-grid">
      <!-- Column 1: Company Info -->
      <div class="footer-column">
        <h3 class="footer-heading">Service Co.</h3>
        <p class="footer-description">
          Providing exceptional services tailored to your unique needs. Your trusted partner for
          professional solutions.
        </p>
        <!-- Social Media Links -->
        <div class="social-links">
          {#each socialLinks as social}
            <a
              href={social.href}
              class="social-link"
              aria-label={social.ariaLabel}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span class="social-icon" aria-hidden="true">
                {#if social.icon === 'facebook'}
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path
                      d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                    />
                  </svg>
                {/if}
                {#if social.icon === 'twitter'}
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path
                      d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
                    />
                  </svg>
                {/if}
                {#if social.icon === 'instagram'}
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path
                      d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"
                    />
                  </svg>
                {/if}
                {#if social.icon === 'linkedin'}
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path
                      d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                    />
                  </svg>
                {/if}
              </span>
            </a>
          {/each}
        </div>
      </div>

      <!-- Column 2: Quick Links -->
      <div class="footer-column">
        <h3 class="footer-heading">Quick Links</h3>
        <ul class="footer-links">
          {#each quickLinks as link}
            <li class="footer-link-item">
              <a href={link.href} class="footer-link">
                {link.label}
              </a>
            </li>
          {/each}
        </ul>
      </div>

      <!-- Column 3: Contact Info -->
      <div class="footer-column">
        <h3 class="footer-heading">Contact Us</h3>
        <ul class="contact-list">
          <li class="contact-item">
            <span class="contact-label">Email:</span>
            <a href="mailto:hello@serviceco.com" class="contact-link"> hello@serviceco.com </a>
          </li>
          <li class="contact-item">
            <span class="contact-label">Phone:</span>
            <a href="tel:+15551234567" class="contact-link"> (555) 123-4567 </a>
          </li>
          <li class="contact-item">
            <span class="contact-label">Address:</span>
            <span class="contact-text"> 123 Main Street<br />City, State 12345 </span>
          </li>
        </ul>
      </div>

      <!-- Column 4: Newsletter (optional, can be customized) -->
      <div class="footer-column">
        <h3 class="footer-heading">Stay Updated</h3>
        <p class="newsletter-text">Subscribe to our newsletter for updates and special offers.</p>
        <form class="newsletter-form" action="#" method="post">
          <input
            type="email"
            name="email"
            placeholder="Your email"
            class="newsletter-input"
            required
            aria-label="Email address for newsletter"
          />
          <button type="submit" class="newsletter-button"> Subscribe </button>
        </form>
      </div>
    </div>

    <!-- Divider -->
    <div class="footer-divider"></div>

    <!-- Footer Bottom (Legal Links + Copyright) -->
    <div class="footer-bottom">
      <!-- Legal Links -->
      <nav class="legal-links" aria-label="Legal navigation">
        {#each legalLinks as link, index}
          <a href={link.href} class="legal-link">
            {link.label}
          </a>
          {#if index < legalLinks.length - 1}
            <span class="legal-separator" aria-hidden="true">•</span>
          {/if}
        {/each}
      </nav>

      <!-- Copyright -->
      <p class="copyright">
        &copy; {currentYear} Service Co. All rights reserved.
      </p>
    </div>
  </div>
</footer>

<style>
  /**
   * Footer Styles
   */
  .footer {
    background-color: var(--color-bg-secondary);
    border-top: 1px solid var(--color-border);
    color: var(--color-text-primary);
  }

  /**
   * Footer Grid (Multi-column layout)
   * Responsive: 1 column (mobile) → 2 columns (tablet) → 4 columns (desktop)
   */
  .footer-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--space-8);
    margin-bottom: var(--space-12);
  }

  @media (min-width: 768px) {
    .footer-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 1024px) {
    .footer-grid {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  /**
   * Footer Column
   */
  .footer-column {
    display: flex;
    flex-direction: column;
    gap: var(--space-4);
  }

  .footer-heading {
    font-size: var(--text-lg);
    font-weight: 700;
    font-family: var(--font-heading);
    color: var(--color-text-primary);
    margin: 0 0 var(--space-2) 0;
  }

  .footer-description {
    font-size: var(--text-sm);
    line-height: 1.6;
    color: var(--color-text-primary);
    opacity: 0.8;
    margin: 0;
  }

  /**
   * Social Media Links
   */
  .social-links {
    display: flex;
    gap: var(--space-3);
    margin-top: var(--space-2);
  }

  .social-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background-color: var(--color-bg-tertiary);
    color: var(--color-text-primary);
    border-radius: 50%;
    transition: all var(--duration-fast) var(--ease-in-out);
  }

  .social-link:hover {
    background-color: var(--color-accent-primary);
    color: var(--color-text-inverse);
    transform: translateY(-2px);
  }

  .social-link:focus-visible {
    outline: 3px solid var(--color-accent-primary);
    outline-offset: 2px;
  }

  .social-icon {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /**
   * Footer Links
   */
  .footer-links {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .footer-link-item {
    margin-bottom: var(--space-2);
  }

  .footer-link {
    font-size: var(--text-base);
    color: var(--color-text-primary);
    text-decoration: none;
    opacity: 0.8;
    transition: all var(--duration-fast) var(--ease-in-out);
  }

  .footer-link:hover {
    color: var(--color-accent-primary);
    opacity: 1;
  }

  .footer-link:focus-visible {
    outline: 3px solid var(--color-accent-primary);
    outline-offset: 2px;
    border-radius: 2px;
  }

  /**
   * Contact List
   */
  .contact-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .contact-item {
    margin-bottom: var(--space-3);
    font-size: var(--text-sm);
  }

  .contact-label {
    display: block;
    font-weight: 600;
    margin-bottom: var(--space-1);
  }

  .contact-link {
    color: var(--color-accent-primary);
    text-decoration: none;
    transition: opacity var(--duration-fast) var(--ease-in-out);
  }

  .contact-link:hover {
    opacity: 0.8;
  }

  .contact-link:focus-visible {
    outline: 3px solid var(--color-accent-primary);
    outline-offset: 2px;
    border-radius: 2px;
  }

  .contact-text {
    display: block;
    opacity: 0.8;
  }

  /**
   * Newsletter Form
   */
  .newsletter-text {
    font-size: var(--text-sm);
    opacity: 0.8;
    margin: 0;
  }

  .newsletter-form {
    display: flex;
    flex-direction: column;
    gap: var(--space-2);
    margin-top: var(--space-2);
  }

  .newsletter-input {
    padding: var(--space-3) var(--space-4);
    background-color: var(--color-bg-primary);
    color: var(--color-text-primary);
    border: 1px solid var(--color-border);
    border-radius: 4px;
    font-size: var(--text-sm);
    font-family: var(--font-body);
    transition: border-color var(--duration-fast) var(--ease-in-out);
  }

  .newsletter-input:focus {
    outline: none;
    border-color: var(--color-accent-primary);
  }

  .newsletter-input::placeholder {
    color: var(--color-text-primary);
    opacity: 0.5;
  }

  .newsletter-button {
    padding: var(--space-3) var(--space-4);
    background-color: var(--color-accent-primary);
    color: var(--color-text-inverse);
    border: none;
    border-radius: 4px;
    font-size: var(--text-sm);
    font-weight: 600;
    font-family: var(--font-body);
    cursor: pointer;
    transition: all var(--duration-fast) var(--ease-in-out);
  }

  .newsletter-button:hover {
    opacity: 0.9;
    transform: translateY(-1px);
  }

  .newsletter-button:focus-visible {
    outline: 3px solid var(--color-text-primary);
    outline-offset: 2px;
  }

  /**
   * Footer Divider
   */
  .footer-divider {
    height: 1px;
    background-color: var(--color-border);
    margin: var(--space-8) 0;
  }

  /**
   * Footer Bottom (Legal Links + Copyright)
   */
  .footer-bottom {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-4);
    padding-top: var(--space-6);
  }

  @media (min-width: 768px) {
    .footer-bottom {
      flex-direction: row;
      justify-content: space-between;
    }
  }

  /**
   * Legal Links
   */
  .legal-links {
    display: flex;
    align-items: center;
    gap: var(--space-3);
    flex-wrap: wrap;
    justify-content: center;
  }

  @media (min-width: 768px) {
    .legal-links {
      justify-content: flex-start;
    }
  }

  .legal-link {
    font-size: var(--text-sm);
    color: var(--color-text-primary);
    text-decoration: none;
    opacity: 0.7;
    transition: opacity var(--duration-fast) var(--ease-in-out);
  }

  .legal-link:hover {
    opacity: 1;
  }

  .legal-link:focus-visible {
    outline: 3px solid var(--color-accent-primary);
    outline-offset: 2px;
    border-radius: 2px;
  }

  .legal-separator {
    opacity: 0.5;
  }

  /**
   * Copyright
   */
  .copyright {
    font-size: var(--text-sm);
    color: var(--color-text-primary);
    opacity: 0.7;
    margin: 0;
    text-align: center;
  }

  @media (min-width: 768px) {
    .copyright {
      text-align: right;
    }
  }
</style>
