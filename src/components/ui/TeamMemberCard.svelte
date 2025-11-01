<script lang="ts">
  /**
   * TeamMemberCard Component
   * Displays a team member with photo, name, role, and optional bio
   *
   * Features:
   * - Responsive card layout
   * - Circular photo with fallback initials
   * - Optional bio text
   * - Theme-aware styling
   * - Accessible markup
   *
   * Usage:
   * <TeamMemberCard
   *   name="Jane Doe"
   *   role="CEO & Founder"
   *   photo="https://i.pravatar.cc/400?img=1"
   *   bio="Jane has over 15 years of experience..."
   * />
   */

  interface Props {
    name: string;
    role: string;
    photo?: string;
    bio?: string;
  }

  let { name, role, photo, bio }: Props = $props();

  // Get initials from name for fallback
  const getInitials = (fullName: string): string => {
    const names = fullName.trim().split(' ');
    if (names.length === 1) return names[0].charAt(0).toUpperCase();
    return (names[0].charAt(0) + names[names.length - 1].charAt(0)).toUpperCase();
  };

  const initials = getInitials(name);
</script>

<div class="team-member-card">
  <div class="team-member-photo">
    {#if photo}
      <img src={photo} alt={name} loading="lazy" />
    {:else}
      <div class="team-member-initials" aria-label={`Photo of ${name}`}>
        {initials}
      </div>
    {/if}
  </div>

  <div class="team-member-content">
    <h3 class="team-member-name">{name}</h3>
    <p class="team-member-role">{role}</p>
    {#if bio}
      <p class="team-member-bio">{bio}</p>
    {/if}
  </div>
</div>

<style>
  /**
   * Team Member Card Styles
   * Card layout for team member display with photo and details
   */
  .team-member-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: var(--space-6);
    background: var(--color-bg-secondary);
    border-radius: 12px;
    transition: transform var(--duration-normal) var(--ease-out),
                box-shadow var(--duration-normal) var(--ease-out);
  }

  .team-member-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  }

  /* Photo Container */
  .team-member-photo {
    width: 150px;
    height: 150px;
    margin-bottom: var(--space-4);
    border-radius: 50%;
    overflow: hidden;
    border: 4px solid var(--color-accent-primary);
  }

  .team-member-photo img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  /* Fallback Initials */
  .team-member-initials {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--color-accent-primary);
    color: var(--color-bg-primary);
    font-size: 3rem;
    font-weight: bold;
  }

  /* Content */
  .team-member-content {
    width: 100%;
  }

  .team-member-name {
    font-size: var(--text-xl);
    font-weight: bold;
    color: var(--color-text-primary);
    margin-bottom: var(--space-2);
  }

  .team-member-role {
    font-size: var(--text-base);
    color: var(--color-accent-primary);
    font-weight: 600;
    margin-bottom: var(--space-3);
  }

  .team-member-bio {
    font-size: var(--text-sm);
    color: var(--color-text-secondary);
    line-height: 1.6;
  }

  /* Responsive adjustments */
  @media (min-width: 768px) {
    .team-member-card {
      padding: var(--space-8);
    }
  }
</style>
