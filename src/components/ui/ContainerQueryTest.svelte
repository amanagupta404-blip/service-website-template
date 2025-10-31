<script lang="ts">
/**
 * ContainerQueryTest.svelte
 * Demonstration component for container query functionality
 *
 * Shows how container queries allow components to respond to their container size
 * instead of viewport size - crucial for reusable, adaptable components
 *
 * Phase 3.9: Container Queries Test Component
 */
</script>

<div class="test-wrapper">
  <h3 class="test-title">Container Query Test</h3>
  <p class="test-description">
    Resize your browser window to see how this component adapts based on its container width, not
    the viewport width.
  </p>

  <div class="container-demo">
    <!-- Container 1: Small width -->
    <div class="demo-container demo-small">
      <div class="demo-card">
        <div class="demo-content">
          <div class="demo-icon">📱</div>
          <h4>Small Container</h4>
          <p>Stacked layout</p>
        </div>
      </div>
    </div>

    <!-- Container 2: Medium width -->
    <div class="demo-container demo-medium">
      <div class="demo-card">
        <div class="demo-content">
          <div class="demo-icon">💻</div>
          <h4>Medium Container</h4>
          <p>Horizontal layout</p>
        </div>
      </div>
    </div>

    <!-- Container 3: Large width -->
    <div class="demo-container demo-large">
      <div class="demo-card">
        <div class="demo-content">
          <div class="demo-icon">🖥️</div>
          <h4>Large Container</h4>
          <p>Advanced grid layout</p>
        </div>
      </div>
    </div>
  </div>

  <div class="usage-example">
    <h4>Usage Example:</h4>
    <pre><code>&lt;div class="container-inline"&gt;
  &lt;!-- Component responds to this container's width --&gt;
  &lt;div class="component"&gt;...&lt;/div&gt;
&lt;/div&gt;

&lt;style&gt;
.container-inline &#123;
  container-type: inline-size;
}

/* Styles apply when container &gt; 400px */
@container (min-width: 400px) &#123;
  .component &#123;
    display: flex;
  }
}
&lt;/style&gt;</code></pre>
  </div>
</div>

<style>
  .test-wrapper {
    padding: var(--space-8);
    background-color: var(--color-bg-secondary);
    border-radius: 8px;
  }

  .test-title {
    font-size: var(--text-2xl);
    font-weight: 700;
    margin-bottom: var(--space-4);
    color: var(--color-text-primary);
  }

  .test-description {
    font-size: var(--text-base);
    margin-bottom: var(--space-8);
    color: var(--color-text-primary);
    opacity: 0.8;
  }

  /**
   * Container Demo Grid
   */
  .container-demo {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--space-6);
    margin-bottom: var(--space-8);
  }

  @media (min-width: 1024px) {
    .container-demo {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

  /**
   * Demo Containers with fixed widths to show container query behavior
   */
  .demo-container {
    container-type: inline-size;
    container-name: demo;
    border: 2px dashed var(--color-border);
    border-radius: 8px;
    padding: var(--space-4);
    background-color: var(--color-bg-primary);
  }

  .demo-small {
    max-width: 300px;
  }

  .demo-medium {
    max-width: 500px;
  }

  .demo-large {
    max-width: 800px;
  }

  /**
   * Demo Card - Responds to container size
   */
  .demo-card {
    padding: var(--space-4);
    background-color: var(--color-bg-tertiary);
    border-radius: 4px;
    transition: all var(--duration-normal) var(--ease-in-out);
  }

  .demo-content {
    display: flex;
    flex-direction: column;
    gap: var(--space-2);
    align-items: center;
    text-align: center;
  }

  /**
   * Container Query: Horizontal layout when container > 400px
   */
  @container demo (min-width: 400px) {
    .demo-content {
      flex-direction: row;
      text-align: left;
    }

    .demo-card {
      padding: var(--space-6);
    }
  }

  /**
   * Container Query: Grid layout when container > 600px
   */
  @container demo (min-width: 600px) {
    .demo-content {
      display: grid;
      grid-template-columns: auto 1fr;
      grid-template-rows: auto auto;
      gap: var(--space-3);
    }

    .demo-icon {
      grid-row: 1 / 3;
    }
  }

  .demo-icon {
    font-size: 48px;
  }

  .demo-content h4 {
    font-size: var(--text-lg);
    font-weight: 600;
    color: var(--color-text-primary);
    margin: 0;
  }

  .demo-content p {
    font-size: var(--text-sm);
    color: var(--color-text-primary);
    opacity: 0.7;
    margin: 0;
  }

  /**
   * Usage Example Styles
   */
  .usage-example {
    background-color: var(--color-bg-primary);
    border: 1px solid var(--color-border);
    border-radius: 4px;
    padding: var(--space-6);
    margin-top: var(--space-8);
  }

  .usage-example h4 {
    font-size: var(--text-lg);
    font-weight: 600;
    margin-bottom: var(--space-4);
    color: var(--color-text-primary);
  }

  .usage-example pre {
    background-color: var(--color-bg-tertiary);
    border: 1px solid var(--color-border);
    border-radius: 4px;
    padding: var(--space-4);
    overflow-x: auto;
    margin: 0;
  }

  .usage-example code {
    font-family: 'Monaco', 'Courier New', monospace;
    font-size: var(--text-sm);
    color: var(--color-text-primary);
    line-height: 1.6;
  }
</style>
