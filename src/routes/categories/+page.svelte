<script>
	import Card from '$lib/components/Card.svelte';
	import cards from '$lib/data/cards.json';
</script>

<svelte:head>
	<title>Categories</title>
</svelte:head>

<div class="flex justify-center py-10">
	<div class="grid grid-cols-3 gap-10">
		{#each cards as card}
			<Card url={card.url} Title={card.Title} Description={card.Description} name={card.name} />
		{/each}
	</div>
</div>
