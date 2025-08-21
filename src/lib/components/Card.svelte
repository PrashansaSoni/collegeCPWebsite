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
	class="relative my-6 flex w-96 flex-col rounded-xl border border-gray-700 bg-gray-800 shadow-lg dark:border-gray-700 dark:bg-gray-800"
>
	<!-- Image container -->
	<div class="relative m-3 h-56 overflow-hidden rounded-lg">
		<img src={url} alt="card-image" class="h-full w-full object-cover" />
	</div>

	<!-- Content -->
	<div class="flex-1 px-6 py-4">
		<h6 class="mb-3 text-xl font-bold text-gray-900 dark:text-white">
			{name}
		</h6>
		<p class="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
			{Description}
		</p>
	</div>

	<!-- Button -->
	<div class="px-6 pb-6">
		<button
			class="to-grey-600 w-full rounded-lg bg-blue-400 px-6 py-3 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:bg-blue-900 focus:ring-4 focus:ring-indigo-300 focus:outline-none dark:focus:ring-indigo-800"
			type="button"
			onclick={() => handleClick(Title)}
		>
			Solve
		</button>
	</div>
</div>
