<script>
	import { goto } from '$app/navigation';

	let {
		url = '/dp.png',
		Description = 'No description given',
		Title = 'No title given',
		name = 'No name given'
	} = $props();

	function handleClick(Title) {
		goto(`/categories/${Title}`);
	}
</script>

<div
	class="relative my-6 flex w-96 flex-col rounded-lg border border-gray-700 bg-gray-800 shadow-md"
>
	<div class="relative m-2.5 h-56 overflow-hidden rounded-md text-white">
		<img src={url} alt="card-image" class="h-full w-full object-cover" />
	</div>
	<div class="p-4">
		<h6 class="mb-2 text-xl font-semibold text-white">{name}</h6>
		<p class="leading-normal font-light text-gray-300">
			{Description}
		</p>
	</div>
	<div class="mt-2 px-4 pt-0 pb-4">
		<button
			class="w-full rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-center text-sm text-white shadow transition-all hover:bg-indigo-500 focus:bg-indigo-500"
			type="button"
			onclick={() => handleClick(Title)}
		>
			Solve
		</button>
	</div>
</div>
