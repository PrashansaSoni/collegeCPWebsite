<script>
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
	let { children } = $props();
</script>

<div class="min-h-screen w-full bg-gray-900 text-gray-200">
	<Navbar />
	<main class="mx-auto w-full px-4 py-6">
		{@render children()}
	</main>
</div>
