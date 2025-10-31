<!--
  Typography Showcase Component
  Demonstrates all heading levels, type scale, and font combinations
-->

<div class="typography-showcase">
  <!-- Heading Hierarchy -->
  <section class="showcase-section">
    <h2 class="section-title">Heading Hierarchy</h2>
    <div class="heading-demo">
      <div class="demo-item">
        <h1>Heading 1 - Main Page Title</h1>
        <code>Playfair Display Bold, 30px → 48px → 60px</code>
      </div>
      <div class="demo-item">
        <h2>Heading 2 - Section Heading</h2>
        <code>Playfair Display Bold, 24px → 36px</code>
      </div>
      <div class="demo-item">
        <h3>Heading 3 - Subsection Heading</h3>
        <code>Playfair Display Bold, 20px → 30px</code>
      </div>
      <div class="demo-item">
        <h4>Heading 4 - Component Heading</h4>
        <code>Playfair Display Bold, 18px → 24px</code>
      </div>
      <div class="demo-item">
        <h5>Heading 5 - Small Heading</h5>
        <code>Playfair Display Semibold, 16px → 20px</code>
      </div>
      <div class="demo-item">
        <h6>Heading 6 - Smallest Heading</h6>
        <code>Playfair Display Semibold, 14px → 16px (uppercase)</code>
      </div>
    </div>
  </section>

  <!-- Type Scale -->
  <section class="showcase-section">
    <h2 class="section-title">Type Scale (rem-based)</h2>
    <div class="type-scale">
      <div class="scale-item">
        <span class="text-xs">Extra Small (12px / 0.75rem)</span>
        <code>.text-xs</code>
      </div>
      <div class="scale-item">
        <span class="text-sm">Small (14px / 0.875rem)</span>
        <code>.text-sm</code>
      </div>
      <div class="scale-item">
        <span class="text-base">Base (16px / 1rem)</span>
        <code>.text-base</code>
      </div>
      <div class="scale-item">
        <span class="text-lg">Large (18px / 1.125rem)</span>
        <code>.text-lg</code>
      </div>
      <div class="scale-item">
        <span class="text-xl">Extra Large (20px / 1.25rem)</span>
        <code>.text-xl</code>
      </div>
      <div class="scale-item">
        <span class="text-2xl">2XL (24px / 1.5rem)</span>
        <code>.text-2xl</code>
      </div>
      <div class="scale-item">
        <span class="text-3xl">3XL (30px / 1.875rem)</span>
        <code>.text-3xl</code>
      </div>
      <div class="scale-item">
        <span class="text-4xl">4XL (36px / 2.25rem)</span>
        <code>.text-4xl</code>
      </div>
    </div>
  </section>

  <!-- Font Families -->
  <section class="showcase-section">
    <h2 class="section-title">Font Families</h2>
    <div class="font-demo">
      <div class="font-sample">
        <p class="sample-text font-body">
          Inter (Body Font): The quick brown fox jumps over the lazy dog.
          ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789
        </p>
        <code>.font-body or var(--font-body)</code>
      </div>
      <div class="font-sample">
        <p class="sample-text font-heading">
          Playfair Display (Heading Font): The quick brown fox jumps over the lazy dog.
          ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789
        </p>
        <code>.font-heading or var(--font-heading)</code>
      </div>
    </div>
  </section>

  <!-- Body Text Example -->
  <section class="showcase-section">
    <h2 class="section-title">Body Text & Lead Paragraph</h2>
    <div class="body-demo">
      <p class="lead">
        This is a lead paragraph with larger text for introductory content. It uses the Inter font
        family at 18px (mobile) → 20px (tablet+) with a relaxed line height of 1.8 for improved
        readability.
      </p>
      <p>
        This is regular body text using the Inter font family. The base font size is 16px with a
        line height of 1.7, optimized for comfortable reading. This paragraph demonstrates how body
        text flows naturally with proper spacing and typography.
      </p>
      <p>
        Multiple paragraphs maintain consistent spacing using the design system's spacing tokens.
        Links within text are <a href="#">properly styled</a> with hover and focus states for accessibility.
      </p>
    </div>
  </section>

  <!-- Font Weights -->
  <section class="showcase-section">
    <h2 class="section-title">Font Weights (Inter)</h2>
    <div class="weight-demo">
      <p class="font-normal">Normal (400) - Regular body text weight</p>
      <p class="font-medium">Medium (500) - Slightly emphasized text</p>
      <p class="font-semibold">Semibold (600) - Strong emphasis</p>
      <p class="font-bold">Bold (700) - Boldest weight for headings</p>
    </div>
  </section>
</div>

<style>
  .typography-showcase {
    display: flex;
    flex-direction: column;
    gap: var(--space-12);
  }

  .showcase-section {
    background: white;
    border-radius: 8px;
    padding: var(--space-8);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  }

  .section-title {
    font-size: var(--text-2xl);
    font-family: var(--font-heading);
    font-weight: 700;
    color: var(--color-primary);
    margin-bottom: var(--space-6);
    padding-bottom: var(--space-3);
    border-bottom: 2px solid var(--color-mint-cream);
  }

  .heading-demo,
  .type-scale,
  .font-demo,
  .weight-demo {
    display: flex;
    flex-direction: column;
    gap: var(--space-6);
  }

  .demo-item {
    padding: var(--space-4);
    background: var(--color-snow);
    border-radius: 4px;
    border-left: 4px solid var(--color-primary);
  }

  .demo-item h1,
  .demo-item h2,
  .demo-item h3,
  .demo-item h4,
  .demo-item h5,
  .demo-item h6 {
    margin-bottom: var(--space-2);
  }

  .scale-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--space-3);
    background: var(--color-almond);
    border-radius: 4px;
  }

  .scale-item span {
    font-family: var(--font-body);
    color: var(--color-dark-gray);
  }

  .font-sample {
    padding: var(--space-4);
    background: var(--color-mint-cream);
    border-radius: 4px;
  }

  .sample-text {
    font-size: var(--text-lg);
    line-height: 1.6;
    margin-bottom: var(--space-2);
    color: var(--color-dark-gray);
  }

  .body-demo {
    padding: var(--space-4);
    background: var(--color-snow);
    border-radius: 4px;
  }

  .body-demo p {
    color: var(--color-dark-gray);
  }

  .body-demo a {
    color: var(--color-primary);
    text-decoration: underline;
  }

  .weight-demo p {
    font-size: var(--text-lg);
    color: var(--color-dark-gray);
    padding: var(--space-3);
    background: var(--color-almond);
    border-radius: 4px;
    margin-bottom: var(--space-3);
  }

  code {
    font-family: 'Courier New', monospace;
    font-size: var(--text-sm);
    color: #666;
    background: white;
    padding: 2px 6px;
    border-radius: 3px;
    border: 1px solid #e0e0e0;
  }
</style>
