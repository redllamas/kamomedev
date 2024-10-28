<nav>
	<a href="/" class="text-xl font-bold mb40">Home</a>
	<a href="/about" class="text-xl font-bold mb40">About</a>
	<a href="/settings" class="text-xl font-bold mb40">Settings</a>
</nav>

<script>
  import "../app.css";
	/**
	 * @typedef {Object} Props
	 * @property {import('svelte').Snippet} [children]
	 */

	/** @type {Props} */
	let { children } = $props();
</script>

{@render children?.()}