<script>
	import { onMount } from 'svelte';

	let { problemTable = [] } = $props();

	// State
	let problems = $state([]);
	let pageNumber = $state(1);
	const pageSize = 10;

	let searchId = $state('');
	let filteredProblems = $state([]);
	let isSearching = $state(false);

	// This function returns the correct list (either all problems or filtered ones)
	const getActiveList = () => (isSearching ? filteredProblems : problemTable);

	onMount(() => {
		// Initialize the view with the first page of the full list
		problems = problemTable.slice(0, pageSize);
	});

	function searchFunc() {
		const term = searchId.trim().toLowerCase();
		if (term) {
			isSearching = true;
			filteredProblems = problemTable.filter((p) => {
				return (
					p.id.toString().toLowerCase().includes(term) ||
					p.problem.toLowerCase().includes(term) ||
					p.tag.toLowerCase().includes(term)
				);
			});
			pageNumber = 1; // Reset to first page on new search
		} else {
			isSearching = false;
			pageNumber = 1;
		}
		updateProblemsForPage();
	}

	function updateProblemsForPage() {
		const list = getActiveList();
		const start = (pageNumber - 1) * pageSize;
		const end = start + pageSize;
		problems = list.slice(start, end);
	}

	function prevNavigation() {
		if (pageNumber > 1) {
			pageNumber--;
			updateProblemsForPage();
		}
	}

	function nextNavigation() {
		const totalPages = Math.ceil(getActiveList().length / pageSize);
		if (pageNumber < totalPages) {
			pageNumber++;
			updateProblemsForPage();
		}
	}

	// Re-introducing the completion toggle function
	function toggleComplete(problem) {
		problem.completed = !problem.completed;
		// This will trigger a re-render because `problems` is a state variable
		problems = [...problems];
	}
</script>

<div class="mt-1 mb-3 w-full bg-gray-900 px-4">
	<div class="flex items-center">
		<div class="w-1/4"></div>

		<div class="flex-1 text-center">
			<h3 class="text-lg font-semibold text-white">Browse and filter through our problems set.</h3>
		</div>

		<div class="w-1/3">
			<div class="relative mx-auto w-full max-w-sm min-w-[200px]">
				<div class="relative">
					<input
						bind:value={searchId}
						on:input={searchFunc}
						class="ease h-10 w-full rounded border border-gray-600 bg-gray-800 py-2 pr-11 pl-3 text-sm text-white shadow-sm transition duration-200 placeholder:text-gray-400 hover:border-gray-500 focus:border-indigo-500 focus:shadow-md focus:outline-none"
						placeholder="Search by ID, name, or tag..."
					/>
				</div>
			</div>
		</div>
	</div>
</div>

<div class="mx-auto max-w-5xl">
	<div
		class="relative flex h-full w-full flex-col overflow-hidden rounded-lg bg-gray-800 bg-clip-border text-gray-200 shadow-md"
	>
		<table class="w-full min-w-max table-auto text-left">
			<thead>
				<tr>
					<th class="border-b border-gray-700 bg-gray-700 p-4 text-center">
						<p class="text-sm leading-none font-normal text-gray-400">Status</p>
					</th>
					<th class="border-b border-gray-700 bg-gray-700 p-4">
						<p class="text-sm leading-none font-normal text-gray-400">Problem</p>
					</th>
					<th class="border-b border-gray-700 bg-gray-700 p-4">
						<p class="text-sm leading-none font-normal text-gray-400">Tag</p>
					</th>
					<th class="border-b border-gray-700 bg-gray-700 p-4">
						<p class="text-sm leading-none font-normal text-gray-400">Difficulty</p>
					</th>
					<th class="border-b border-gray-700 bg-gray-700 p-4 text-center">
						<p class="text-sm leading-none font-normal text-gray-400">Links</p>
					</th>
				</tr>
			</thead>
			<tbody>
				{#each problems as problem (problem.id)}
					<tr
						on:click={() => toggleComplete(problem)}
						class="cursor-pointer border-b border-gray-700 transition-colors"
						class:bg-[rgba(34,197,94,0.08)]={problem.completed}
						class:hover:bg-gray-700={!problem.completed}
						class:hover:bg-[rgba(34,197,94,0.15)]={problem.completed}
					>
						<td class="p-4 text-center">
							{#if problem.completed}
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="mx-auto h-6 w-6 text-green-400"
									viewBox="0 0 20 20"
									fill="currentColor"
								>
									<path
										fill-rule="evenodd"
										d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
										clip-rule="evenodd"
									/>
								</svg>
							{:else}
								<div class="mx-auto flex h-6 w-6 items-center justify-center">
									<div class="h-4 w-4 rounded-full border-2 border-gray-600" />
								</div>
							{/if}
						</td>

						<td class="p-4">
							<p class="block text-sm font-semibold text-white">{problem.problem}</p>
							<p class="text-xs text-gray-500">ID: {problem.id}</p>
						</td>

						<td class="p-4">
							<p class="text-sm text-gray-300">{problem.tag}</p>
						</td>

						<td class="p-4">
							{#if problem.difficulty === 'Easy'}
								<span class="text-sm font-semibold text-green-400">{problem.difficulty}</span>
							{:else if problem.difficulty === 'Medium'}
								<span class="text-sm font-semibold text-yellow-400">{problem.difficulty}</span>
							{:else if problem.difficulty === 'Hard'}
								<span class="text-sm font-semibold text-red-400">{problem.difficulty}</span>
							{:else}
								<span class="text-sm font-semibold text-gray-300">{problem.difficulty}</span>
							{/if}
						</td>

						<td class="p-4">
							<div class="flex items-center justify-center gap-4">
								{#if problem.codeUrl}
									<a
										href={problem.codeUrl}
										on:click|stopPropagation
										target="_blank"
										rel="noopener noreferrer"
										title="View Code"
										class="opacity-80 hover:opacity-100"
									>
										<svg class="h-6 w-6" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"
											><g transform="matrix(3.14 0 0 3.14 24 24)"
												><g
													><g transform="matrix(1 0 0 1 0 5.25)"
														><path
															style="stroke: none; stroke-width: 1; fill: rgb(255,185,236);"
															transform=" translate(-7, -12.25)"
															d="M 5 13.5 L 6 11 L 8 11 L 9 13.5 L 5 13.5 Z"
														/></g
													><g transform="matrix(1 0 0 1 0 -0.5)"
														><path
															style="stroke: none; stroke-width: 1; fill: rgb(255,255,255);"
															transform=" translate(-7, -6.5)"
															d="M 13 2 L 1 2 C 0.723858 2 0.5 2.22386 0.5 2.5 L 0.5 10.5 C 0.5 10.7761 0.723858 11 1 11 L 13 11 C 13.2761 11 13.5 10.7761 13.5 10.5 L 13.5 2.5 C 13.5 2.22386 13.2761 2 13 2 Z"
														/></g
													><g transform="matrix(1 0 0 1 0 -0.5)"
														><path
															style="stroke: rgb(248,59,172); stroke-width: 1; stroke-linecap: round; stroke-linejoin: round; fill: none;"
															transform=" translate(-7, -6.5)"
															d="M 13 2 L 1 2 C 0.723858 2 0.5 2.22386 0.5 2.5 L 0.5 10.5 C 0.5 10.7761 0.723858 11 1 11 L 13 11 C 13.2761 11 13.5 10.7761 13.5 10.5 L 13.5 2.5 C 13.5 2.22386 13.2761 2 13 2 Z"
														/></g
													><g transform="matrix(1 0 0 1 -1.5 5.25)"
														><path
															style="stroke: rgb(248,59,172); stroke-width: 1; stroke-linecap: round; stroke-linejoin: round; fill: none;"
															transform=" translate(-5.5, -12.25)"
															d="M 6 11 L 5 13.5"
														/></g
													><g transform="matrix(1 0 0 1 1.5 5.25)"
														><path
															style="stroke: rgb(248,59,172); stroke-width: 1; stroke-linecap: round; stroke-linejoin: round; fill: none;"
															transform=" translate(-8.5, -12.25)"
															d="M 8 11 L 9 13.5"
														/></g
													><g transform="matrix(1 0 0 1 0 6.5)"
														><path
															style="stroke: rgb(248,59,172); stroke-width: 1; stroke-linecap: round; stroke-linejoin: round; fill: none;"
															transform=" translate(-7, -13.5)"
															d="M 4 13.5 L 10 13.5"
														/></g
													><g transform="matrix(1 0 0 1 -3.38 -0.38)"
														><path
															style="stroke: rgb(248,59,172); stroke-width: 1; stroke-linecap: round; stroke-linejoin: round; fill: none;"
															transform=" translate(-3.63, -6.63)"
															d="M 4.5 5.25 L 2.75 6.75 L 4.25 8"
														/></g
													><g transform="matrix(1 0 0 1 3.38 -0.13)"
														><path
															style="stroke: rgb(248,59,172); stroke-width: 1; stroke-linecap: round; stroke-linejoin: round; fill: none;"
															transform=" translate(-10.38, -6.88)"
															d="M 9.75 5.5 L 11.25 6.75 L 9.5 8.25"
														/></g
													><g transform="matrix(1 0 0 1 0 -0.5)"
														><path
															style="stroke: rgb(248,59,172); stroke-width: 1; stroke-linecap: round; stroke-linejoin: round; fill: none;"
															transform=" translate(-7, -6.5)"
															d="M 6.25 8.75 L 7.75 4.25"
														/></g
													></g
												></g
											></svg
										>
									</a>
								{/if}
								{#if problem.githubUrl}
									<a
										href={problem.githubUrl}
										on:click|stopPropagation
										target="_blank"
										rel="noopener noreferrer"
										title="View on GitHub"
										class="text-gray-400 hover:text-white"
									>
										<svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"
											><path
												fill="#fff"
												d="M36.744,23.334c0-2.31-0.782-4.226-2.117-5.728c0.145-0.325,0.296-0.761,0.371-1.309	c0.172-1.25-0.031-2-0.203-2.734s-0.375-1.25-0.375-1.25s-0.922-0.094-1.703,0.172s-1.453,0.469-2.422,1.047	c-0.453,0.27-0.909,0.566-1.27,0.806C27.482,13.91,25.785,13.69,24,13.69c-1.801,0-3.513,0.221-5.067,0.652	c-0.362-0.241-0.821-0.539-1.277-0.811c-0.969-0.578-1.641-0.781-2.422-1.047s-1.703-0.172-1.703-0.172s-0.203,0.516-0.375,1.25	s-0.375,1.484-0.203,2.734c0.077,0.562,0.233,1.006,0.382,1.333c-1.31,1.493-2.078,3.397-2.078,5.704	c0,5.983,3.232,8.714,9.121,9.435c-0.687,0.726-1.148,1.656-1.303,2.691c-0.387,0.17-0.833,0.33-1.262,0.394	c-1.104,0.167-2.271,0-2.833-0.333s-1.229-1.083-1.729-1.813c-0.422-0.616-1.031-1.331-1.583-1.583	c-0.729-0.333-1.438-0.458-1.833-0.396c-0.396,0.063-0.583,0.354-0.5,0.563c0.083,0.208,0.479,0.521,0.896,0.75	c0.417,0.229,1.063,0.854,1.438,1.458c0.418,0.674,0.5,1.063,0.854,1.833c0.249,0.542,1.101,1.219,1.708,1.583	c0.521,0.313,1.562,0.491,2.688,0.542c0.389,0.018,1.308-0.096,2.083-0.206v3.75c0,0.639-0.585,1.125-1.191,1.013	C19.756,43.668,21.833,44,24,44c2.166,0,4.243-0.332,6.19-0.984C29.585,43.127,29,42.641,29,42.002v-5.804	c0-1.329-0.527-2.53-1.373-3.425C33.473,32.071,36.744,29.405,36.744,23.334z"
											/></svg
										>
									</a>
								{/if}
								{#if problem.youtubeUrl}
									<a
										href={problem.youtubeUrl}
										on:click|stopPropagation
										target="_blank"
										rel="noopener noreferrer"
										title="Watch on YouTube"
										class="text-gray-400 hover:text-red-500"
									>
										<svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"
											><path
												fill="#FF3D00"
												d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"
											/><path fill="#FFF" d="M20 31L20 17 32 24z" /></svg
										>
									</a>
								{/if}
							</div>
						</td>
					</tr>
				{/each}
			</tbody>
		</table>

		<div class="flex items-center justify-between border-t border-gray-700 px-4 py-3">
			<div class="text-sm text-gray-400">
				Showing
				<b>
					{(pageNumber - 1) * pageSize + 1}-
					{Math.min(pageNumber * pageSize, getActiveList().length)}
				</b>
				of {getActiveList().length}
			</div>

			<div class="flex space-x-1">
				<button
					on:click={prevNavigation}
					disabled={pageNumber === 1}
					class="min-h-9 min-w-9 rounded border border-gray-600 bg-gray-700 px-3 py-1 text-sm text-gray-300 transition-colors hover:border-gray-400 hover:bg-gray-600 disabled:opacity-50"
				>
					Prev
				</button>

				<button
					on:click={nextNavigation}
					disabled={pageNumber * pageSize >= getActiveList().length}
					class="min-h-9 min-w-9 rounded border border-gray-600 bg-gray-700 px-3 py-1 text-sm text-gray-300 transition-colors hover:border-gray-400 hover:bg-gray-600 disabled:opacity-50"
				>
					Next
				</button>
			</div>
		</div>
	</div>
</div>
