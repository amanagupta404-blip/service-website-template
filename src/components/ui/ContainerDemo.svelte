<!--
  Container & Layout Demo Component
  Demonstrates Container and Section components usage
-->

<div class="container-demo">
  <section class="demo-section">
    <h3 class="section-title">Container Sizes</h3>
    <p class="description">
      Container components center content with responsive padding and configurable max-widths. Each
      container below shows its max-width boundary.
    </p>

    <div class="containers">
      <div class="container-example">
        <div class="container-sm">
          <div class="content-box">
            <h4>Small Container</h4>
            <code>size="sm"</code>
            <p>Max-width: 640px</p>
          </div>
        </div>
      </div>

      <div class="container-example">
        <div class="container-md">
          <div class="content-box">
            <h4>Medium Container</h4>
            <code>size="md"</code>
            <p>Max-width: 768px</p>
          </div>
        </div>
      </div>

      <div class="container-example">
        <div class="container-lg">
          <div class="content-box">
            <h4>Large Container</h4>
            <code>size="lg"</code>
            <p>Max-width: 1024px</p>
          </div>
        </div>
      </div>

      <div class="container-example">
        <div class="container-xl">
          <div class="content-box">
            <h4>Extra Large Container (Default)</h4>
            <code>size="xl"</code>
            <p>Max-width: 1280px</p>
          </div>
        </div>
      </div>

      <div class="container-example">
        <div class="container-2xl">
          <div class="content-box">
            <h4>2XL Container</h4>
            <code>size="2xl"</code>
            <p>Max-width: 1400px</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="demo-section">
    <h3 class="section-title">Section Spacing</h3>
    <p class="description">
      Section components provide consistent vertical spacing for page sections. Resize the browser
      to see responsive padding.
    </p>

    <div class="sections-demo">
      <div class="section-example section-sm bg-snow">
        <h4>Small Section Spacing</h4>
        <code>spacing="sm"</code>
        <p>py-12 md:py-16 (48px → 64px)</p>
      </div>

      <div class="section-example section-md bg-almond">
        <h4>Medium Section Spacing (Default)</h4>
        <code>spacing="md"</code>
        <p>py-16 md:py-20 lg:py-24 (64px → 80px → 96px)</p>
      </div>

      <div class="section-example section-lg bg-mint-cream">
        <h4>Large Section Spacing</h4>
        <code>spacing="lg"</code>
        <p>py-20 md:py-24 lg:py-32 (80px → 96px → 128px)</p>
      </div>
    </div>
  </section>

  <section class="demo-section">
    <h3 class="section-title">Usage Examples</h3>
    <div class="usage-examples">
      <div class="example">
        <h4>Container Component</h4>
        <pre><code
            >{`<Container size="lg">
  <h1>Page Title</h1>
  <p>Content goes here...</p>
</Container>`}</code
          ></pre>
      </div>

      <div class="example">
        <h4>Section Component</h4>
        <pre><code
            >{`<Section spacing="md" background="almond">
  <Container size="xl">
    <h2>Section Title</h2>
    <p>Section content...</p>
  </Container>
</Section>`}</code
          ></pre>
      </div>

      <div class="example">
        <h4>Combined Example</h4>
        <pre><code
            >{`<Section id="hero" spacing="lg" background="snow">
  <Container size="2xl">
    <h1 class="heading-1">Hero Title</h1>
    <p class="lead">Hero description...</p>
  </Container>
</Section>`}</code
          ></pre>
      </div>
    </div>
  </section>
</div>

<style>
  .container-demo {
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

  .description {
    color: var(--color-dark-gray);
    margin-bottom: var(--space-6);
    line-height: 1.6;
  }

  .containers {
    display: flex;
    flex-direction: column;
    gap: var(--space-6);
  }

  .container-example {
    position: relative;
    background: var(--color-almond);
    border-radius: 4px;
    padding: var(--space-4);
  }

  .content-box {
    background: white;
    border: 2px dashed var(--color-primary);
    border-radius: 4px;
    padding: var(--space-6);
    text-align: center;
  }

  .content-box h4 {
    font-size: var(--text-lg);
    font-weight: 700;
    color: var(--color-dark-gray);
    margin-bottom: var(--space-2);
  }

  .content-box p {
    color: #666;
    font-size: var(--text-sm);
    margin-top: var(--space-2);
  }

  .sections-demo {
    display: flex;
    flex-direction: column;
    gap: var(--space-4);
  }

  .section-example {
    border-radius: 4px;
    text-align: center;
  }

  .section-example h4 {
    font-size: var(--text-lg);
    font-weight: 700;
    color: var(--color-dark-gray);
    margin-bottom: var(--space-2);
  }

  .section-example p {
    color: #666;
    font-size: var(--text-sm);
    margin-top: var(--space-2);
  }

  .usage-examples {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: var(--space-4);
  }

  .example {
    background: var(--color-snow);
    border-radius: 4px;
    padding: var(--space-4);
  }

  .example h4 {
    font-size: var(--text-base);
    font-weight: 700;
    color: var(--color-dark-gray);
    margin-bottom: var(--space-3);
  }

  pre {
    background: white;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
    padding: var(--space-3);
    overflow-x: auto;
  }

  code {
    font-family: 'Courier New', monospace;
    font-size: var(--text-sm);
    color: #666;
    background: var(--color-almond);
    padding: 2px 6px;
    border-radius: 3px;
  }

  pre code {
    background: transparent;
    padding: 0;
    display: block;
    white-space: pre;
    color: var(--color-dark-gray);
  }
</style>
