<script lang="ts">
  /**
   * ContactForm Component
   * Full contact form with validation and submission handling
   *
   * Features:
   * - Client-side validation
   * - Loading and success states
   * - Error handling
   * - Responsive two-column layout on desktop
   * - Placeholder submit handler (Web3Forms integration in Phase 7)
   * - Theme-aware styling
   * - Accessible form structure
   *
   * Usage:
   * <ContactForm
   *   onSubmit={handleSubmit}
   * />
   */

  import Input from './Input.svelte';
  import Textarea from './Textarea.svelte';
  import Select from './Select.svelte';
  import Checkbox from './Checkbox.svelte';
  import Button from './Button.svelte';

  interface Props {
    onSubmit?: (formData: FormData) => Promise<void> | void;
  }

  let { onSubmit }: Props = $props();

  // Form state
  let isSubmitting = $state(false);
  let isSuccess = $state(false);
  let errorMessage = $state('');

  // Form values
  let name = $state('');
  let email = $state('');
  let phone = $state('');
  let subject = $state('');
  let message = $state('');
  let consent = $state(false);

  // Error states
  let nameError = $state('');
  let emailError = $state('');
  let subjectError = $state('');
  let messageError = $state('');
  let consentError = $state('');

  // Subject options
  const subjectOptions = [
    { value: '', label: 'Select a subject' },
    { value: 'general', label: 'General Inquiry' },
    { value: 'support', label: 'Support Request' },
    { value: 'sales', label: 'Sales Question' },
    { value: 'partnership', label: 'Partnership Opportunity' },
    { value: 'other', label: 'Other' },
  ];

  // Validation
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (): boolean => {
    let isValid = true;

    // Reset errors
    nameError = '';
    emailError = '';
    subjectError = '';
    messageError = '';
    consentError = '';

    // Name validation
    if (!name.trim()) {
      nameError = 'Name is required';
      isValid = false;
    }

    // Email validation
    if (!email.trim()) {
      emailError = 'Email is required';
      isValid = false;
    } else if (!validateEmail(email)) {
      emailError = 'Please enter a valid email address';
      isValid = false;
    }

    // Subject validation
    if (!subject) {
      subjectError = 'Please select a subject';
      isValid = false;
    }

    // Message validation
    if (!message.trim()) {
      messageError = 'Message is required';
      isValid = false;
    } else if (message.trim().length < 10) {
      messageError = 'Message must be at least 10 characters';
      isValid = false;
    }

    // Consent validation
    if (!consent) {
      consentError = 'You must consent to being contacted';
      isValid = false;
    }

    return isValid;
  };

  // Handle form submission
  const handleSubmit = async (event: Event) => {
    event.preventDefault();
    errorMessage = '';

    if (!validateForm()) {
      return;
    }

    isSubmitting = true;

    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('email', email);
      formData.append('phone', phone);
      formData.append('subject', subject);
      formData.append('message', message);
      formData.append('consent', consent.toString());

      // Call custom onSubmit handler if provided
      if (onSubmit) {
        await onSubmit(formData);
      } else {
        // Placeholder: Web3Forms integration will happen in Phase 7
        // For now, simulate submission
        await new Promise((resolve) => setTimeout(resolve, 1500));
      }

      // Success
      isSuccess = true;

      // Reset form
      name = '';
      email = '';
      phone = '';
      subject = '';
      message = '';
      consent = false;

      // Hide success message after 5 seconds
      setTimeout(() => {
        isSuccess = false;
      }, 5000);
    } catch (error) {
      errorMessage = error instanceof Error ? error.message : 'An error occurred. Please try again.';
    } finally {
      isSubmitting = false;
    }
  };

  // Handle reset
  const handleReset = () => {
    name = '';
    email = '';
    phone = '';
    subject = '';
    message = '';
    consent = false;
    nameError = '';
    emailError = '';
    subjectError = '';
    messageError = '';
    consentError = '';
    errorMessage = '';
    isSuccess = false;
  };
</script>

<form class="contact-form" onsubmit={handleSubmit} novalidate>
  {#if isSuccess}
    <div class="form-success" role="alert">
      <strong>Thank you!</strong> Your message has been sent successfully. We'll get back to you soon.
    </div>
  {/if}

  {#if errorMessage}
    <div class="form-error" role="alert">
      <strong>Error:</strong> {errorMessage}
    </div>
  {/if}

  <div class="form-row">
    <Input
      id="contact-name"
      label="Name"
      type="text"
      placeholder="Your full name"
      bind:value={name}
      error={nameError}
      required
    />

    <Input
      id="contact-email"
      label="Email"
      type="email"
      placeholder="your@email.com"
      bind:value={email}
      error={emailError}
      required
    />
  </div>

  <div class="form-row">
    <Input
      id="contact-phone"
      label="Phone"
      type="tel"
      placeholder="(555) 123-4567"
      bind:value={phone}
    />

    <Select
      id="contact-subject"
      label="Subject"
      options={subjectOptions}
      bind:value={subject}
      error={subjectError}
      required
    />
  </div>

  <Textarea
    id="contact-message"
    label="Message"
    placeholder="Tell us about your project or inquiry..."
    rows={6}
    bind:value={message}
    error={messageError}
    required
  />

  <Checkbox
    id="contact-consent"
    label="I consent to being contacted about this inquiry"
    bind:checked={consent}
    error={consentError}
    required
  />

  <div class="form-actions">
    <Button
      type="submit"
      variant="primary"
      size="lg"
      loading={isSubmitting}
      disabled={isSubmitting}
    >
      {isSubmitting ? 'Sending...' : 'Send Message'}
    </Button>

    <Button
      type="button"
      variant="outline"
      size="lg"
      onclick={handleReset}
      disabled={isSubmitting}
    >
      Reset
    </Button>
  </div>
</form>

<style>
  /**
   * Contact Form Styles
   * Responsive form layout with validation states
   */
  .contact-form {
    display: flex;
    flex-direction: column;
    gap: var(--space-6);
    max-width: 800px;
    margin: 0 auto;
  }

  /* Two-column rows on desktop */
  .form-row {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--space-6);
  }

  @media (min-width: 768px) {
    .form-row {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  /* Success message */
  .form-success {
    padding: var(--space-4);
    background: #d4edda;
    border: 1px solid #c3e6cb;
    border-radius: 8px;
    color: #155724;
  }

  .form-success strong {
    font-weight: 600;
  }

  /* Error message */
  .form-error {
    padding: var(--space-4);
    background: #f8d7da;
    border: 1px solid #f5c6cb;
    border-radius: 8px;
    color: #721c24;
  }

  .form-error strong {
    font-weight: 600;
  }

  /* Form actions */
  .form-actions {
    display: flex;
    gap: var(--space-4);
    flex-direction: column;
  }

  @media (min-width: 640px) {
    .form-actions {
      flex-direction: row;
    }
  }
</style>
