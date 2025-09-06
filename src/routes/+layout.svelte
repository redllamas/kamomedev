<nav class="text-center flex justify-center gap-20">
	<a href="/" class="text-xl font-bold mb40">Home</a>
	<a href="/about" class="text-xl font-bold mb40">About</a>
	<a href="/contact" class="text-xl font-bold mb40">Contact</a>
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