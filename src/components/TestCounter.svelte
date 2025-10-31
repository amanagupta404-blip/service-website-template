<script lang="ts">
  // Test Svelte 5 runes system
  let count = $state(0);
  let doubled = $derived(count * 2);

  function increment() {
    count++;
  }
</script>

<div style="padding: 2rem; border: 2px solid #99BC85; border-radius: 8px; text-align: center;">
  <h2>Svelte 5 Runes Test</h2>
  <p>Count: <strong>{count}</strong></p>
  <p>Doubled: <strong>{doubled}</strong></p>
  <button onclick={increment} style="padding: 0.5rem 1rem; background: #99BC85; color: white; border: none; border-radius: 4px; cursor: pointer;">
    Increment
  </button>
  <p style="margin-top: 1rem; font-size: 0.875rem; color: #666;">
    ✅ If this button works, Svelte 5 runes ($state, $derived) are working correctly!
  </p>
</div>
