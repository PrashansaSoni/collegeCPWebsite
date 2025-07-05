<script>
	import Card from '$lib/components/Card.svelte';
	import cards from '$lib/data/cards.json';
</script>

<svelte:head>
	<title>Categories</title>
</svelte:head>

<div class="flex justify-center px-4 py-10 sm:px-6 lg:px-8">
	<div class="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10 md:grid-cols-3">
		{#each cards as card}
			<div class="transform transition-transform duration-300 hover:scale-105">
				<Card url={card.url} Title={card.Title} Description={card.Description} name={card.name} />
			</div>
		{/each}
	</div>
</div>
