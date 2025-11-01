<script lang="ts">
  /**
   * RelatedServices Component
   * Displays related services as clickable cards
   *
   * Features:
   * - Responsive grid layout
   * - Service card with icon, name, description
   * - Hover effects
   * - Theme-aware styling
   *
   * Usage:
   * <RelatedServices
   *   services={[
   *     { name: 'Web Development', description: 'Build modern websites', icon: 'external-link', href: '/services/web-development' },
   *     { name: 'Mobile Apps', description: 'Create mobile applications', icon: 'phone', href: '/services/mobile-apps' }
   *   ]}
   * />
   */

  import ServiceCard from './ServiceCard.svelte';

  interface Service {
    name: string;
    description: string;
    icon: string;
    href: string;
  }

  interface Props {
    services: Service[];
    title?: string;
  }

  let { services, title = 'Related Services' }: Props = $props();
</script>

<div class="related-services">
  <h3 class="related-services-title">{title}</h3>

  <div class="related-services-grid">
    {#each services as service}
      <ServiceCard
        title={service.name}
        description={service.description}
        icon={service.icon}
        href={service.href}
      />
    {/each}
  </div>
</div>

<style>
  /**
   * Related Services Styles
   * Grid layout for displaying related service cards
   */
  .related-services {
    padding: var(--space-8) 0;
  }

  .related-services-title {
    font-size: var(--text-3xl);
    font-weight: bold;
    color: var(--color-text-primary);
    margin-bottom: var(--space-6);
    text-align: center;
  }

  .related-services-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--space-6);
  }

  @media (min-width: 640px) {
    .related-services-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 1024px) {
    .related-services-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }
</style>
