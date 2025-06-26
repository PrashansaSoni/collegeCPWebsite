<script>
	import { onMount } from 'svelte';

	let { data } = $props();
	let { problemTable = [] } = data;

	// State
	let problemsToDisplay = $state([]);
	let pageNumber = $state(1);
	const pageSize = 10;
	let searchTerm = $state('');

	const getActiveList = () => {
		if (searchTerm.trim()) {
			const term = searchTerm.trim().toLowerCase();
			return problemTable.filter(
				(p) =>
					p.id.toString().includes(term) ||
					p.problem.toLowerCase().includes(term) ||
					p.tag.toLowerCase().includes(term)
			);
		}
		return problemTable;
	};

	function updateProblemsForPage() {
		const list = getActiveList();
		const start = (pageNumber - 1) * pageSize;
		const end = start + pageSize;
		problemsToDisplay = list.slice(start, end);
	}

	onMount(() => {
		updateProblemsForPage();
	});

	function handleSearch() {
		pageNumber = 1;
		updateProblemsForPage();
	}

	function prevPage() {
		if (pageNumber > 1) {
			pageNumber--;
			updateProblemsForPage();
		}
	}

	function nextPage() {
		const totalPages = Math.ceil(getActiveList().length / pageSize);
		if (pageNumber < totalPages) {
			pageNumber++;
			updateProblemsForPage();
		}
	}

	function toggleComplete(event, problem) {
		if (event.target.closest('a')) {
			return;
		}
		problem.completed = !problem.completed;
		problemsToDisplay = [...problemsToDisplay];
	}
</script>

<svelte:head>
	<title>All Problems</title>
</svelte:head>

<div class="min-h-screen bg-gray-900 p-2 font-sans text-gray-400 sm:p-8 md:p-12">
	<div class="mx-auto max-w-6xl">
		<div class="mb-8 flex items-center justify-between pt-12">
			<h1 class="text-4xl font-bold text-gray-200">All Problems</h1>
			<div class="w-1/3 min-w-[300px]">
				<input
					bind:value={searchTerm}
					oninput={handleSearch}
					class="ease h-10 w-full rounded border border-gray-600 bg-gray-800 py-2 pr-4 pl-4 text-sm text-white shadow-sm transition duration-200 placeholder:text-gray-400 hover:border-gray-500 focus:border-indigo-500 focus:shadow-md focus:outline-none"
					placeholder="Search all problems..."
				/>
			</div>
		</div>

		<div
			class="relative flex h-full w-full flex-col overflow-hidden rounded-lg bg-gray-800 bg-clip-border text-gray-200 shadow-md"
		>
			<table class="w-full min-w-max table-auto text-left">
				<thead>
					<tr>
						<th class="border-b border-gray-700 bg-gray-700 p-4">
							<p class="text-sm leading-none font-normal text-gray-400">ID</p>
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
					{#each problemsToDisplay as problem (problem.id)}
						<tr
							onclick={(event) => toggleComplete(event, problem)}
							class="cursor-pointer border-b border-gray-700 transition-colors"
							class:bg-[rgba(34,197,94,0.08)]={problem.completed}
							class:hover:bg-gray-700={!problem.completed}
							class:hover:bg-[rgba(34,197,94,0.15)]={problem.completed}
						>
							<td class="p-4">
								<div class="flex items-center gap-3">
									{#if problem.completed}
										<svg
											xmlns="http://www.w3.org/2000/svg"
											class="h-5 w-5 text-green-400"
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
										<div class="h-5 w-5 flex-shrink-0"></div>
									{/if}
									<p
										class="block text-sm font-semibold"
										class:text-green-400={problem.completed}
										class:text-white={!problem.completed}
									>
										{problem.id}
									</p>
								</div>
							</td>
							<td class="p-4">
								<p class="text-sm text-gray-300">{problem.problem}</p>
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
								{/if}
							</td>
							<td class="p-4">
								<div class="flex items-center justify-center gap-4">
									<a
										href={problem.url}
										target="_blank"
										rel="noopener noreferrer"
										title="View on {problem.platform}"
										class="opacity-80 hover:opacity-100"
									>
										{#if problem.platform === 'leetcode'}
											<a
												href={problem.url}
												target="_blank"
												rel="noopener noreferrer"
												title="View on LeetCode"
											>
												<img
													class="h-6 w-6"
													src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAACkUlEQVR4nK2VzU8TQRTA1wC7207bXUA0Rjujgpe2saTcoJ8RFYNH0aAmICqejCcvalL8OGDUA+EifgTtDsH04G6LHjz5F3DQKEGMHgydpcagaEiM2o7ZJku3rWm3ti95p3nz+72Z2ZllmCpjwMWwvT7722YHlz0edjyudn5FuN8DPnIcS7X07QFf6wbv6mKa/G7wQYcDC0tPhMXLdYGHQkxjwAPe6XCrhaUDAced+nXuAe91uIVn6dA+YbJunfd4wJIO53mW3j6zmRIM11QJXacvmcaa4AEPWDTCx0faqIpRPiX4fGmig/u/zt15uIVn6cWBllcEw6gqIUwk9EeXEAnNvYm72Gr4DX4PWDAe6PAB8YGxYCXm3K9itJ5fDZRpnGkwBe9xFcJP94nT/yokMztDREI/DNvVX5Ee9trmjfDRQ0KsXH06BrtVjL4QDNPLs+3OsvDBkH3MCD/X3zxTsSOGYbRDplNdTRULvbutq7pgqFd8wdQ5mrSuNbhzC5+JR5mCr+KZokSSCeXbXEKhJjKTTMgPiwWi3r23A6wXDyYVZdwkPJdJRV4rZmxqFfiMJhDsHL1yss1rHJRl2ZlU5EfJhBw3k4nE08GSPQrutW1crG43WJ2+IIi17HlJDB8UA6KDy+qSiBd8nhptFirNUzE8TGKoz5TkWFC8BKxcTqBluNOWnjjf4igDv6FfNO1OmJIc9TuiBRKvbeXmSKu9BC6hWxvvEUaZZYw6TQlykpD9arHk9f1dW7Wx1NQ2q4rhXSNcjaFTpuEbkqBwzSiZn9zxU8VwgWD43fCSZlMYnq0arsdgRBjb3sZnjwQEDVbwLyAY/qoJrkd61tmuSuieKsFPREK/CYYqkeCTlAR9ZgB/Ac7jlcKnc3teAAAAAElFTkSuQmCC"
													alt="LeetCode Logo"
												/>
											</a>
										{:else if problem.platform === 'gfg'}
											<a href={problem.url} target="_blank" rel="noopener noreferrer">
												<svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
													<path
														fill="#43a047"
														d="M29.035,24C29.014,23.671,29,23.339,29,23c0-6.08,2.86-10,7-10c3.411,0,6.33,2.662,7,7l2,0l0.001-9	L43,11c0,0-0.533,1.506-1,1.16c-1.899-1.066-3.723-1.132-6.024-1.132C30.176,11.028,25,16.26,25,22.92	c0,0.364,0.021,0.723,0.049,1.08h-2.099C22.979,23.643,23,23.284,23,22.92c0-6.66-5.176-11.892-10.976-11.892	c-2.301,0-4.125,0.065-6.024,1.132C5.533,12.506,5,11,5,11l-2.001,0L3,20l2,0c0.67-4.338,3.589-7,7-7c4.14,0,7,3.92,7,10	c0,0.339-0.014,0.671-0.035,1H0v2h1.009c1.083,0,1.977,0.861,1.999,1.943C3.046,29.789,3.224,32.006,4,33c1.269,1.625,3,3,8,3	c5.022,0,9.92-4.527,11-10h2c1.08,5.473,5.978,10,11,10c5,0,6.731-1.375,8-3c0.776-0.994,0.954-3.211,0.992-5.057	C45.014,26.861,45.909,26,46.991,26H48v-2H29.035z M11.477,33.73C9.872,33.73,7.322,33.724,7,32	c-0.109-0.583-0.091-2.527-0.057-4.046C6.968,26.867,7.855,26,8.943,26H19C18.206,30.781,15.015,33.73,11.477,33.73z M41,32	c-0.322,1.724-2.872,1.73-4.477,1.73c-3.537,0-6.729-2.949-7.523-7.73h10.057c1.088,0,1.975,0.867,2,1.954	C41.091,29.473,41.109,31.417,41,32z"
													></path>
												</svg>
											</a>
										{/if}
									</a>

									<a
										href={problem.codeUrl}
										target="_blank"
										rel="noopener noreferrer"
										title="View Code"
										class="opacity-80 hover:opacity-100"
									>
										<svg
											class="h-7 w-7"
											viewBox="0 0 24 24"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M15.5 9L15.6716 9.17157C17.0049 10.5049 17.6716 11.1716 17.6716 12C17.6716 12.8284 17.0049 13.4951 15.6716 14.8284L15.5 15"
												stroke="rgb(248, 59, 172)"
												stroke-width="1.5"
												stroke-linecap="round"
											/>
											<path
												d="M13.2942 7.17041L12.0001 12L10.706 16.8297"
												stroke="rgb(248, 59, 172)"
												stroke-width="1.5"
												stroke-linecap="round"
											/>
											<path
												d="M8.49994 9L8.32837 9.17157C6.99504 10.5049 6.32837 11.1716 6.32837 12C6.32837 12.8284 6.99504 13.4951 8.32837 14.8284L8.49994 15"
												stroke="rgb(248, 59, 172)"
												stroke-width="1.5"
												stroke-linecap="round"
											/>
										</svg>
									</a>
									<a
										href={problem.githubUrl}
										target="_blank"
										rel="noopener noreferrer"
										title="View on GitHub"
										class="text-gray-400 hover:text-white"
									>
										<svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
											<path
												fill="#fff"
												d="M36.744,23.334c0-2.31-0.782-4.226-2.117-5.728c0.145-0.325,0.296-0.761,0.371-1.309	c0.172-1.25-0.031-2-0.203-2.734s-0.375-1.25-0.375-1.25s-0.922-0.094-1.703,0.172s-1.453,0.469-2.422,1.047	c-0.453,0.27-0.909,0.566-1.27,0.806C27.482,13.91,25.785,13.69,24,13.69c-1.801,0-3.513,0.221-5.067,0.652	c-0.362-0.241-0.821-0.539-1.277-0.811c-0.969-0.578-1.641-0.781-2.422-1.047s-1.703-0.172-1.703-0.172s-0.203,0.516-0.375,1.25	s-0.375,1.484-0.203,2.734c0.077,0.562,0.233,1.006,0.382,1.333c-1.31,1.493-2.078,3.397-2.078,5.704	c0,5.983,3.232,8.714,9.121,9.435c-0.687,0.726-1.148,1.656-1.303,2.691c-0.387,0.17-0.833,0.33-1.262,0.394	c-1.104,0.167-2.271,0-2.833-0.333s-1.229-1.083-1.729-1.813c-0.422-0.616-1.031-1.331-1.583-1.583	c-0.729-0.333-1.438-0.458-1.833-0.396c-0.396,0.063-0.583,0.354-0.5,0.563c0.083,0.208,0.479,0.521,0.896,0.75	c0.417,0.229,1.063,0.854,1.438,1.458c0.418,0.674,0.5,1.063,0.854,1.833c0.249,0.542,1.101,1.219,1.708,1.583	c0.521,0.313,1.562,0.491,2.688,0.542c0.389,0.018,1.308-0.096,2.083-0.206v3.75c0,0.639-0.585,1.125-1.191,1.013	C19.756,43.668,21.833,44,24,44c2.166,0,4.243-0.332,6.19-0.984C29.585,43.127,29,42.641,29,42.002v-5.804	c0-1.329-0.527-2.53-1.373-3.425C33.473,32.071,36.744,29.405,36.744,23.334z"
											></path>
										</svg>
									</a>

									<a
										href={problem.youtubeUrl}
										target="_blank"
										rel="noopener noreferrer"
										title="Watch on YouTube"
										class="text-gray-400 hover:text-red-500"
									>
										<svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
											<path
												fill="#FF3D00"
												d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"
											></path>
											<path fill="#FFF" d="M20 31L20 17 32 24z"></path>
										</svg>
									</a>
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
						onclick={prevPage}
						disabled={pageNumber === 1}
						class="min-h-9 min-w-9 rounded border border-gray-600 bg-gray-700 px-3 py-1 text-sm text-gray-300 transition-colors hover:border-gray-400 hover:bg-gray-600 disabled:opacity-50"
					>
						Prev
					</button>

					<button
						onclick={nextPage}
						disabled={pageNumber * pageSize >= getActiveList().length}
						class="min-h-9 min-w-9 rounded border border-gray-600 bg-gray-700 px-3 py-1 text-sm text-gray-300 transition-colors hover:border-gray-400 hover:bg-gray-600 disabled:opacity-50"
					>
						Next
					</button>
				</div>
			</div>
		</div>
	</div>
</div>
