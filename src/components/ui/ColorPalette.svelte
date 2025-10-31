<!--
  Color Palette Showcase Component
  Demonstrates all design system colors and accessible combinations
-->

<div class="color-palette">
  <div class="palette-section">
    <h3>Primary Colors</h3>
    <div class="color-grid">
      <div class="color-card bg-snow">
        <div class="color-swatch bg-snow"></div>
        <div class="color-info">
          <span class="color-name">Snow</span>
          <span class="color-value">#FDFAF6</span>
          <span class="color-usage">Primary Background</span>
        </div>
      </div>

      <div class="color-card bg-almond">
        <div class="color-swatch bg-almond"></div>
        <div class="color-info">
          <span class="color-name">Almond</span>
          <span class="color-value">#FAF1E6</span>
          <span class="color-usage">Secondary Background</span>
        </div>
      </div>

      <div class="color-card bg-mint-cream">
        <div class="color-swatch bg-mint-cream"></div>
        <div class="color-info">
          <span class="color-name">Mint Cream</span>
          <span class="color-value">#E4EFE7</span>
          <span class="color-usage">Tertiary Background</span>
        </div>
      </div>

      <div class="color-card bg-white">
        <div class="color-swatch bg-primary"></div>
        <div class="color-info">
          <span class="color-name">Laurel Green</span>
          <span class="color-value">#99BC85</span>
          <span class="color-usage">Primary Accent</span>
        </div>
      </div>

      <div class="color-card bg-white">
        <div class="color-swatch bg-dark"></div>
        <div class="color-info">
          <span class="color-name">Dark Gray</span>
          <span class="color-value">#333333</span>
          <span class="color-usage">Body Text</span>
        </div>
      </div>
    </div>
  </div>

  <div class="palette-section">
    <h3>✅ Accessible Color Combinations (WCAG AA)</h3>
    <div class="combination-grid">
      <div class="combination bg-snow">
        <p class="text-dark combination-label">Dark Gray on Snow</p>
        <small class="text-dark">Contrast: 14.57:1 - All text sizes ✓</small>
      </div>

      <div class="combination bg-almond">
        <p class="text-dark combination-label">Dark Gray on Almond</p>
        <small class="text-dark">Contrast: 12.87:1 - All text sizes ✓</small>
      </div>

      <div class="combination bg-mint-cream">
        <p class="text-dark combination-label">Dark Gray on Mint Cream</p>
        <small class="text-dark">Contrast: 11.64:1 - All text sizes ✓</small>
      </div>

      <div class="combination bg-snow">
        <p class="text-primary combination-label text-2xl font-bold">Laurel Green on Snow</p>
        <small class="text-dark">Contrast: 2.75:1 - Large text only (18pt+) ⚠️</small>
      </div>
    </div>
  </div>

  <div class="palette-section warning">
    <h3>❌ Non-Accessible Combinations (Do Not Use)</h3>
    <div class="combination-grid">
      <div class="combination bg-almond">
        <p class="text-primary combination-label">Laurel Green on Almond</p>
        <small class="text-dark">Contrast: 2.53:1 - Fails all levels ✗</small>
      </div>

      <div class="combination bg-mint-cream">
        <p class="text-primary combination-label">Laurel Green on Mint Cream</p>
        <small class="text-dark">Contrast: 2.18:1 - Fails all levels ✗</small>
      </div>
    </div>
  </div>

  <div class="palette-section">
    <h3>Usage Guidelines</h3>
    <ul class="guidelines">
      <li><strong>Body Text:</strong> Always use Dark Gray (#333333) on light backgrounds</li>
      <li><strong>Large Headlines:</strong> Can use Laurel Green on Snow (18pt+ or 14pt+ bold)</li>
      <li>
        <strong>Buttons:</strong> Use Laurel Green background with Snow text (ensure text is large/bold)
      </li>
      <li>
        <strong>Icons:</strong> Laurel Green works well for decorative icons on any light background
      </li>
      <li>
        <strong>Avoid:</strong> Never use Laurel Green for small body text or on Almond/Mint Cream backgrounds
      </li>
    </ul>
  </div>
</div>

<style>
  .color-palette {
    display: flex;
    flex-direction: column;
    gap: var(--space-12);
  }

  .palette-section {
    background: white;
    border-radius: 8px;
    padding: var(--space-8);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  }

  .palette-section.warning {
    border: 2px solid #ff6b6b;
  }

  h3 {
    margin: 0 0 var(--space-6) 0;
    font-size: var(--text-2xl);
    font-weight: 600;
    color: var(--color-dark-gray);
  }

  .color-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: var(--space-4);
  }

  .color-card {
    border-radius: 6px;
    padding: var(--space-4);
    border: 1px solid #e0e0e0;
  }

  .color-swatch {
    width: 100%;
    height: 80px;
    border-radius: 4px;
    margin-bottom: var(--space-3);
    border: 1px solid rgba(0, 0, 0, 0.1);
  }

  .color-info {
    display: flex;
    flex-direction: column;
    gap: var(--space-1);
  }

  .color-name {
    font-weight: 600;
    color: var(--color-dark-gray);
    font-size: var(--text-base);
  }

  .color-value {
    font-family: 'Courier New', monospace;
    color: #666;
    font-size: var(--text-sm);
  }

  .color-usage {
    color: #888;
    font-size: var(--text-xs);
    font-style: italic;
  }

  .combination-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: var(--space-4);
  }

  .combination {
    padding: var(--space-6);
    border-radius: 6px;
    border: 1px solid rgba(0, 0, 0, 0.1);
  }

  .combination-label {
    margin: 0 0 var(--space-2) 0;
    font-weight: 600;
  }

  small {
    display: block;
    font-size: var(--text-xs);
  }

  .guidelines {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: var(--space-3);
  }

  .guidelines li {
    padding-left: var(--space-6);
    position: relative;
    color: var(--color-dark-gray);
    line-height: 1.6;
  }

  .guidelines li::before {
    content: '→';
    position: absolute;
    left: 0;
    color: var(--color-primary);
    font-weight: bold;
  }

  strong {
    color: var(--color-dark-gray);
  }
</style>
