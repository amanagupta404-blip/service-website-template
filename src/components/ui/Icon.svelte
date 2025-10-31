<script lang="ts">
/**
 * Icon Component
 * Wrapper for Lucide icons with accessibility and theme support
 *
 * Features:
 * - Accessible by default (aria-label or aria-hidden)
 * - Theme-aware colors
 * - Flexible sizing (sm/md/lg or number)
 * - TypeScript support
 *
 * Phase 4.6: Icon Component
 */

import {
  Menu,
  X,
  ArrowRight,
  ArrowLeft,
  ArrowUp,
  ArrowDown,
  Check,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Github,
  Calendar,
  Clock,
  User,
  Star,
  Heart,
  Search,
  Settings,
  AlertCircle,
  CheckCircle,
  Info,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
} from 'lucide-svelte';

// Icon mapping
const icons = {
  // Navigation
  menu: Menu,
  close: X,
  'arrow-right': ArrowRight,
  'arrow-left': ArrowLeft,
  'arrow-up': ArrowUp,
  'arrow-down': ArrowDown,
  'chevron-down': ChevronDown,
  'chevron-up': ChevronUp,
  'chevron-left': ChevronLeft,
  'chevron-right': ChevronRight,

  // Actions
  check: Check,
  search: Search,
  settings: Settings,
  'external-link': ExternalLink,

  // Contact
  phone: Phone,
  mail: Mail,
  'map-pin': MapPin,

  // Social
  facebook: Facebook,
  instagram: Instagram,
  twitter: Twitter,
  linkedin: Linkedin,
  github: Github,

  // Other
  calendar: Calendar,
  clock: Clock,
  user: User,
  star: Star,
  heart: Heart,
  'alert-circle': AlertCircle,
  'check-circle': CheckCircle,
  info: Info,
} as const;

// Props
let {
  name,
  size = 'md',
  color,
  ariaLabel,
  ariaHidden = false,
  class: className = '',
}: {
  name: keyof typeof icons;
  size?: 'sm' | 'md' | 'lg' | number;
  color?: string;
  ariaLabel?: string;
  ariaHidden?: boolean;
  class?: string;
} = $props();

// Get icon component
const IconComponent = icons[name];

// Calculate size in pixels
const sizeMap = {
  sm: 16,
  md: 24,
  lg: 32,
};

const iconSize = typeof size === 'number' ? size : sizeMap[size];

// Determine if decorative (no aria-label and not hidden)
const isDecorative = ariaHidden || !ariaLabel;
</script>

<svelte:component
  this={IconComponent}
  size={iconSize}
  color={color}
  aria-label={ariaLabel}
  aria-hidden={isDecorative}
  class={className}
/>

<style>
  /* Icons inherit color from parent by default */
  :global(.icon) {
    display: inline-block;
    vertical-align: middle;
    flex-shrink: 0;
  }
</style>


