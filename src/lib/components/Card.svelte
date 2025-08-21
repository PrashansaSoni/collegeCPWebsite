<script>
	import { goto } from '$app/navigation';

	let {
		url = '/dp.png',
		Description = 'No description given',
		Title = 'No title given', // used for routing
		name = 'No name given',
		solved = 0, // solved count
		total = 0, // total questions
		categories = 0 // integer: number of categories
	} = $props();

	function handleClick(Title) {
		goto(`/categories/${Title}`);
	}
</script>

<!-- Dark-only container (no card hover effects) -->
<div
	class="relative my-6 w-[28rem] overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 shadow-sm"
>
	<!-- Media (no hover/zoom) -->
	<div class="relative">
		<div class="aspect-[16/9] w-full overflow-hidden">
			<img src={url} alt={name + ' cover'} class="h-full w-full object-cover" loading="lazy" />
		</div>
		<!-- Subtle vignette -->
		<div
			class="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-black/0 to-black/0"
		></div>

		<!-- Meta chip (dark-only) -->
		<div class="absolute top-4 left-4">
			<span
				class="inline-flex items-center gap-2 rounded-full bg-gray-900/85 px-2.5 py-1 text-[11px] font-medium text-gray-200 ring-1 ring-white/10 backdrop-blur-sm"
			>
				<span class="inline-block h-1.5 w-1.5 rounded-full bg-blue-500"></span>
				{Title}
			</span>
		</div>
	</div>

	<!-- Body -->
	<div class="px-5 pt-4 pb-5">
		<!-- Title -->
		<h3 class="text-[15px] font-semibold tracking-tight text-gray-100">
			{name}
		</h3>

		<!-- Description (kept) -->
		<p class="mt-2 line-clamp-2 text-[13px] leading-6 text-gray-300">
			{Description}
		</p>

		<!-- Divider -->
		<div class="mt-4 h-px w-full bg-gray-800"></div>

		<!-- Bottom row: three items + Solve button -->
		<div class="mt-3 flex items-center justify-between">
			<div class="flex items-center gap-3 text-[12px] text-gray-400">
				<!-- Solved -->
				<span class="inline-flex items-center gap-1 rounded-md border border-gray-800 px-2 py-1">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-[14px] w-[14px] text-gray-300"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							d="M16.707 5.293a1 1 0 0 1 0 1.414l-7.25 7.25a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 1.414-1.414L8.5 11.586l6.543-6.543a1 1 0 0 1 1.414 0z"
						/>
					</svg>
					{solved} solved
				</span>

				<!-- Total -->
				<span class="inline-flex items-center gap-1 rounded-md border border-gray-800 px-2 py-1">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-[14px] w-[14px] text-gray-300"
						viewBox="0 0 24 24"
						fill="currentColor"
					>
						<path d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h10v2H4v-2z" />
					</svg>
					{total} total
				</span>

				<!-- Categories (integer) -->
				<span class="inline-flex items-center gap-1 rounded-md border border-gray-800 px-2 py-1">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-[14px] w-[14px] text-gray-300"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							d="M2.5 5A1.5 1.5 0 0 1 4 3.5h3A1.5 1.5 0 0 1 8.5 5v3A1.5 1.5 0 0 1 7 9.5H4A1.5 1.5 0 0 1 2.5 8V5zm9 0A1.5 1.5 0 0 1 13 3.5h3A1.5 1.5 0 0 1 17.5 5v3A1.5 1.5 0 0 1 16 9.5h-3A1.5 1.5 0 0 1 11.5 8V5zm-9 9A1.5 1.5 0 0 1 4 12.5h3A1.5 1.5 0 0 1 8.5 14v3A1.5 1.5 0 0 1 7 18.5H4A1.5 1.5 0 0 1 2.5 17v-3zm9 0A1.5 1.5 0 0 1 13 12.5h3A1.5 1.5 0 0 1 17.5 14v3A1.5 1.5 0 0 1 16 18.5h-3A1.5 1.5 0 0 1 11.5 17v-3z"
						/>
					</svg>
					{categories} categories
				</span>
			</div>

			<!-- Solve (only element with hover/focus) -->
			<button
				type="button"
				class="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-3.5 py-2 text-[13px] font-semibold text-white shadow-sm
               ring-1 ring-blue-600/10 transition-colors ring-inset
               hover:bg-blue-700 focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:outline-none active:translate-y-[0.5px]"
				onclick={() => handleClick(Title)}
				aria-label={'Open ' + Title}
			>
				Solve
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-[14px] w-[14px]"
					viewBox="0 0 20 20"
					fill="currentColor"
					aria-hidden="true"
				>
					<path
						fill-rule="evenodd"
						d="M3 10a1 1 0 011-1h9.586l-3.293-3.293A1 1 0 0111 4.293l5 5a1 1 0 010 1.414l-5 5a1 1 0 11-1.414-1.414L13.586 11H4a1 1 0 01-1-1z"
						clip-rule="evenodd"
					/>
				</svg>
			</button>
		</div>
	</div>
</div>
