<script>
	import Code from '$lib/components/Code.svelte';
	let { data } = $props();
	const { problem } = data;
	console.log(problem);
</script>

<svelte:head>
	<title>Problem-{problem[0].id}</title>
</svelte:head>
<div class="main-content pt-16">
	<Code template={problem[0]} />
</div>
