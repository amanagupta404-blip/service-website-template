<!--
  Responsive Design Demo Component
  Demonstrates spacing system and breakpoint behavior
-->

<div class="responsive-demo">
  <!-- Breakpoint Indicator -->
  <section class="demo-section">
    <h3 class="section-title">Current Breakpoint</h3>
    <div class="breakpoint-indicator">
      <div class="indicator-item mobile">
        <span class="block sm:hidden font-bold text-primary">📱 Mobile (&lt; 640px)</span>
        <span class="hidden sm:block text-dark opacity-50">📱 Mobile (&lt; 640px)</span>
      </div>
      <div class="indicator-item">
        <span class="hidden sm:block md:hidden font-bold text-primary">
          📱 Small Tablet (≥ 640px)
        </span>
        <span class="block sm:hidden md:block text-dark opacity-50">📱 Small Tablet (≥ 640px)</span>
      </div>
      <div class="indicator-item">
        <span class="hidden md:block lg:hidden font-bold text-primary">💻 Tablet (≥ 768px)</span>
        <span class="block md:hidden lg:block text-dark opacity-50">💻 Tablet (≥ 768px)</span>
      </div>
      <div class="indicator-item">
        <span class="hidden lg:block xl:hidden font-bold text-primary">
          🖥️ Small Laptop (≥ 1024px)
        </span>
        <span class="block lg:hidden xl:block text-dark opacity-50">
          🖥️ Small Laptop (≥ 1024px)
        </span>
      </div>
      <div class="indicator-item">
        <span class="hidden xl:block font-bold text-primary">🖥️ Desktop (≥ 1280px)</span>
        <span class="block xl:hidden text-dark opacity-50">🖥️ Desktop (≥ 1280px)</span>
      </div>
    </div>
    <p class="help-text">Resize your browser window to see the active breakpoint change</p>
  </section>

  <!-- Responsive Grid -->
  <section class="demo-section">
    <h3 class="section-title">Responsive Grid Layout</h3>
    <div
      class="responsive-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
    >
      <div class="grid-item">1 col (mobile)</div>
      <div class="grid-item">2 cols (sm+)</div>
      <div class="grid-item">3 cols (lg+)</div>
      <div class="grid-item">4 cols (xl+)</div>
      <div class="grid-item">Always adapts</div>
      <div class="grid-item">To screen size</div>
    </div>
    <code class="utility-code">grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4</code>
  </section>

  <!-- Spacing Scale Demonstration -->
  <section class="demo-section">
    <h3 class="section-title">Spacing Scale (8px Baseline)</h3>
    <div class="spacing-demo">
      <div class="spacing-item">
        <div class="spacing-box p-1">p-1</div>
        <code>4px</code>
      </div>
      <div class="spacing-item">
        <div class="spacing-box p-2">p-2</div>
        <code>8px</code>
      </div>
      <div class="spacing-item">
        <div class="spacing-box p-4">p-4</div>
        <code>16px</code>
      </div>
      <div class="spacing-item">
        <div class="spacing-box p-6">p-6</div>
        <code>24px</code>
      </div>
      <div class="spacing-item">
        <div class="spacing-box p-8">p-8</div>
        <code>32px</code>
      </div>
      <div class="spacing-item">
        <div class="spacing-box p-12">p-12</div>
        <code>48px</code>
      </div>
    </div>
  </section>

  <!-- Responsive Padding -->
  <section class="demo-section">
    <h3 class="section-title">Responsive Padding</h3>
    <div class="padding-demo px-4 md:px-8 lg:px-16 py-6 md:py-8 lg:py-12 bg-almond rounded-lg">
      <p class="text-dark font-medium">
        This box has responsive padding that increases at larger breakpoints:
      </p>
      <ul class="padding-list">
        <li>Mobile: 16px horizontal, 24px vertical</li>
        <li>Tablet (md): 32px horizontal, 32px vertical</li>
        <li>Desktop (lg): 64px horizontal, 48px vertical</li>
      </ul>
      <code class="utility-code">px-4 md:px-8 lg:px-16 py-6 md:py-8 lg:py-12</code>
    </div>
  </section>

  <!-- Responsive Visibility -->
  <section class="demo-section">
    <h3 class="section-title">Responsive Visibility</h3>
    <div class="visibility-demo">
      <div class="visibility-item block sm:hidden bg-primary text-white">
        <p>Visible only on MOBILE</p>
        <code>block sm:hidden</code>
      </div>
      <div class="visibility-item hidden sm:block md:hidden bg-primary text-white">
        <p>Visible only on SMALL TABLET</p>
        <code>hidden sm:block md:hidden</code>
      </div>
      <div class="visibility-item hidden md:block lg:hidden bg-primary text-white">
        <p>Visible only on TABLET</p>
        <code>hidden md:block lg:hidden</code>
      </div>
      <div class="visibility-item hidden lg:block bg-primary text-white">
        <p>Visible on LAPTOP+</p>
        <code>hidden lg:block</code>
      </div>
    </div>
  </section>

  <!-- Gap Utilities -->
  <section class="demo-section">
    <h3 class="section-title">Gap Utilities (Flexbox/Grid)</h3>
    <div class="flex flex-wrap gap-2 md:gap-4 lg:gap-6">
      <div class="gap-item">Item 1</div>
      <div class="gap-item">Item 2</div>
      <div class="gap-item">Item 3</div>
      <div class="gap-item">Item 4</div>
      <div class="gap-item">Item 5</div>
    </div>
    <code class="utility-code mt-4">gap-2 md:gap-4 lg:gap-6 (8px → 16px → 24px)</code>
  </section>
</div>

<style>
  .responsive-demo {
    display: flex;
    flex-direction: column;
    gap: var(--space-8);
  }

  .demo-section {
    background: white;
    border-radius: 8px;
    padding: var(--space-6);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  }

  .section-title {
    font-size: var(--text-xl);
    font-weight: 700;
    color: var(--color-primary);
    margin-bottom: var(--space-4);
    font-family: var(--font-heading);
  }

  .breakpoint-indicator {
    display: flex;
    flex-direction: column;
    gap: var(--space-2);
  }

  .indicator-item {
    padding: var(--space-3);
    background: var(--color-almond);
    border-radius: 6px;
    font-size: var(--text-sm);
  }

  .help-text {
    margin-top: var(--space-4);
    font-size: var(--text-sm);
    color: #666;
    font-style: italic;
  }

  .grid-item {
    background: var(--color-primary);
    color: white;
    padding: var(--space-6);
    border-radius: 6px;
    text-align: center;
    font-weight: 600;
  }

  .spacing-demo {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: var(--space-4);
  }

  .spacing-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-2);
  }

  .spacing-box {
    background: var(--color-mint-cream);
    border: 2px solid var(--color-primary);
    border-radius: 4px;
    font-size: var(--text-sm);
    font-weight: 600;
    color: var(--color-dark-gray);
  }

  .padding-list {
    list-style: none;
    padding: 0;
    margin: var(--space-4) 0;
    color: var(--color-dark-gray);
  }

  .padding-list li {
    padding-left: var(--space-4);
    margin-bottom: var(--space-2);
    position: relative;
  }

  .padding-list li::before {
    content: '→';
    position: absolute;
    left: 0;
    color: var(--color-primary);
    font-weight: bold;
  }

  .visibility-demo {
    display: flex;
    flex-direction: column;
    gap: var(--space-4);
  }

  .visibility-item {
    padding: var(--space-6);
    border-radius: 6px;
    text-align: center;
  }

  .visibility-item p {
    margin-bottom: var(--space-2);
    font-weight: 600;
  }

  .gap-item {
    padding: var(--space-4);
    background: var(--color-mint-cream);
    border-radius: 4px;
    font-weight: 600;
    color: var(--color-dark-gray);
  }

  .utility-code {
    display: block;
    font-family: 'Courier New', monospace;
    font-size: var(--text-sm);
    color: #666;
    background: var(--color-snow);
    padding: var(--space-2) var(--space-3);
    border-radius: 4px;
    border: 1px solid #e0e0e0;
    margin-top: var(--space-3);
  }

  code {
    font-family: 'Courier New', monospace;
    font-size: var(--text-xs);
    color: #666;
    background: white;
    padding: 2px 6px;
    border-radius: 3px;
    border: 1px solid #e0e0e0;
  }
</style>
