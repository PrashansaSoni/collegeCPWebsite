<script>
	let { data } = $props();
	let { studyPlan } = $state(data);
	function toggleComplete(problem) {
		problem.completed = !problem.completed;
	}
</script>

<svelte:head>
	<title>{studyPlan.title}</title>
</svelte:head>

<div class="min-h-screen bg-gray-900 p-2 font-sans text-gray-400 sm:p-8 md:p-12">
	<div class="mx-auto max-w-4xl">
		<div class="mb-16 flex items-center justify-center pt-20">
			<div
				class="relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-500 after:transition-transform after:duration-300 after:ease-in-out hover:after:origin-bottom-left hover:after:scale-x-100"
			>
				<span class="text-4xl font-bold text-gray-200">{studyPlan.title}</span>
			</div>
		</div>

		<main>
			<div class="space-y-2">
				{#each studyPlan.sections as section}
					<div>
						<h2 class="mb-4 text-xs font-semibold tracking-wider text-gray-500 uppercase">
							{section.name}
						</h2>
						<ul class="space-y-2">
							{#each section.problems as problem (problem.name)}
								<li
									class="flex items-center justify-between rounded-lg p-3 transition-colors hover:bg-gray-800"
								>
									<div class="flex items-center gap-4">
										<button
											onclick={() => toggleComplete(problem)}
											title="Toggle completion status"
										>
											{#if problem.completed}
												<svg
													xmlns="http://www.w3.org/2000/svg"
													class="h-6 w-6 text-green-400"
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
												<div class="flex h-6 w-6 items-center justify-center">
													<div
														class="h-4 w-4 rounded-full border-2 border-gray-600 group-hover:border-gray-400"
													/>
												</div>
											{/if}
										</button>
										<span class="font-medium text-gray-200">{problem.name}</span>
									</div>

									<div class="flex items-center gap-6">
										<div class="flex items-center gap-4">
											{#if problem.codeUrl}
												<a
													href={problem.codeUrl}
													target="_blank"
													rel="noopener noreferrer"
													title="View Code"
													class="opacity-80 hover:opacity-100"
												>
													<svg
														class="h-6 w-6"
														viewBox="0 0 48 48"
														xmlns="http://www.w3.org/2000/svg"
													>
														<g transform="matrix(3.14 0 0 3.14 24 24)">
															<g>
																<g transform="matrix(1 0 0 1 0 5.25)">
																	<path
																		style="stroke: none; stroke-width: 1; fill: rgb(255,185,236);"
																		transform=" translate(-7, -12.25)"
																		d="M 5 13.5 L 6 11 L 8 11 L 9 13.5 L 5 13.5 Z"
																	/>
																</g>
																<g transform="matrix(1 0 0 1 0 -0.5)">
																	<path
																		style="stroke: none; stroke-width: 1; fill: rgb(255,255,255);"
																		transform=" translate(-7, -6.5)"
																		d="M 13 2 L 1 2 C 0.723858 2 0.5 2.22386 0.5 2.5 L 0.5 10.5 C 0.5 10.7761 0.723858 11 1 11 L 13 11 C 13.2761 11 13.5 10.7761 13.5 10.5 L 13.5 2.5 C 13.5 2.22386 13.2761 2 13 2 Z"
																	/>
																</g>
																<g transform="matrix(1 0 0 1 0 -0.5)">
																	<path
																		style="stroke: rgb(248,59,172); stroke-width: 1; stroke-linecap: round; stroke-linejoin: round; fill: none;"
																		transform=" translate(-7, -6.5)"
																		d="M 13 2 L 1 2 C 0.723858 2 0.5 2.22386 0.5 2.5 L 0.5 10.5 C 0.5 10.7761 0.723858 11 1 11 L 13 11 C 13.2761 11 13.5 10.7761 13.5 10.5 L 13.5 2.5 C 13.5 2.22386 13.2761 2 13 2 Z"
																	/>
																</g>
																<g transform="matrix(1 0 0 1 -1.5 5.25)">
																	<path
																		style="stroke: rgb(248,59,172); stroke-width: 1; stroke-linecap: round; stroke-linejoin: round; fill: none;"
																		transform=" translate(-5.5, -12.25)"
																		d="M 6 11 L 5 13.5"
																	/>
																</g>
																<g transform="matrix(1 0 0 1 1.5 5.25)">
																	<path
																		style="stroke: rgb(248,59,172); stroke-width: 1; stroke-linecap: round; stroke-linejoin: round; fill: none;"
																		transform=" translate(-8.5, -12.25)"
																		d="M 8 11 L 9 13.5"
																	/>
																</g>
																<g transform="matrix(1 0 0 1 0 6.5)">
																	<path
																		style="stroke: rgb(248,59,172); stroke-width: 1; stroke-linecap: round; stroke-linejoin: round; fill: none;"
																		transform=" translate(-7, -13.5)"
																		d="M 4 13.5 L 10 13.5"
																	/>
																</g>
																<g transform="matrix(1 0 0 1 -3.38 -0.38)">
																	<path
																		style="stroke: rgb(248,59,172); stroke-width: 1; stroke-linecap: round; stroke-linejoin: round; fill: none;"
																		transform=" translate(-3.63, -6.63)"
																		d="M 4.5 5.25 L 2.75 6.75 L 4.25 8"
																	/>
																</g>
																<g transform="matrix(1 0 0 1 3.38 -0.13)">
																	<path
																		style="stroke: rgb(248,59,172); stroke-width: 1; stroke-linecap: round; stroke-linejoin: round; fill: none;"
																		transform=" translate(-10.38, -6.88)"
																		d="M 9.75 5.5 L 11.25 6.75 L 9.5 8.25"
																	/>
																</g>
																<g transform="matrix(1 0 0 1 0 -0.5)">
																	<path
																		style="stroke: rgb(248,59,172); stroke-width: 1; stroke-linecap: round; stroke-linejoin: round; fill: none;"
																		transform=" translate(-7, -6.5)"
																		d="M 6.25 8.75 L 7.75 4.25"
																	/>
																</g>
															</g>
														</g>
													</svg>
												</a>
											{/if}
											{#if problem.platform === 'leetcode'}
												<a
													href={problem.url}
													target="_blank"
													rel="noopener noreferrer"
													title="View on LeetCode"
													class="opacity-70 hover:opacity-100"
												>
													<img
														class="h-6 w-6"
														src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAACkUlEQVR4nK2VzU8TQRTA1wC7207bXUA0Rjujgpe2saTcoJ8RFYNH0aAmICqejCcvalL8OGDUA+EifgTtDsH04G6LHjz5F3DQKEGMHgydpcagaEiM2o7ZJku3rWm3ti95p3nz+72Z2ZllmCpjwMWwvT7722YHlz0edjyudn5FuN8DPnIcS7X07QFf6wbv6mKa/G7wQYcDC0tPhMXLdYGHQkxjwAPe6XCrhaUDAced+nXuAe91uIVn6dA+YbJunfd4wJIO53mW3j6zmRIM11QJXacvmcaa4AEPWDTCx0faqIpRPiX4fGmig/u/zt15uIVn6cWBllcEw6gqIUwk9EeXEAnNvYm72Gr4DX4PWDAe6PAB8YGxYCXm3K9itJ5fDZRpnGkwBe9xFcJP94nT/yokMztDREI/DNvVX5Ee9trmjfDRQ0KsXH06BrtVjL4QDNPLs+3OsvDBkH3MCD/X3zxTsSOGYbRDplNdTRULvbutq7pgqFd8wdQ5mrSuNbhzC5+JR5mCr+KZokSSCeXbXEKhJjKTTMgPiwWi3r23A6wXDyYVZdwkPJdJRV4rZmxqFfiMJhDsHL1yss1rHJRl2ZlU5EfJhBw3k4nE08GSPQrutW1crG43WJ2+IIi17HlJDB8UA6KDy+qSiBd8nhptFirNUzE8TGKoz5TkWFC8BKxcTqBluNOWnjjf4igDv6FfNO1OmJIc9TuiBRKvbeXmSKu9BC6hWxvvEUaZZYw6TQlykpD9arHk9f1dW7Wx1NQ2q4rhXSNcjaFTpuEbkqBwzSiZn9zxU8VwgWD43fCSZlMYnq0arsdgRBjb3sZnjwQEDVbwLyAY/qoJrkd61tmuSuieKsFPREK/CYYqkeCTlAR9ZgB/Ac7jlcKnc3teAAAAAElFTkSuQmCC"
														alt="LeetCode Logo"
													/>
												</a>
											{:else if problem.platform === 'gfg'}
												<a
													href={problem.url}
													target="_blank"
													rel="noopener noreferrer"
													title="View on GeeksforGeeks"
													class="opacity-70 hover:opacity-100"
												>
													<svg
														class="h-6 w-6"
														xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 48 48"
													>
														<path
															fill="#43a047"
															d="M29.035,24C29.014,23.671,29,23.339,29,23c0-6.08,2.86-10,7-10c3.411,0,6.33,2.662,7,7l2,0l0.001-9	L43,11c0,0-0.533,1.506-1,1.16c-1.899-1.066-3.723-1.132-6.024-1.132C30.176,11.028,25,16.26,25,22.92	c0,0.364,0.021,0.723,0.049,1.08h-2.099C22.979,23.643,23,23.284,23,22.92c0-6.66-5.176-11.892-10.976-11.892	c-2.301,0-4.125,0.065-6.024,1.132C5.533,12.506,5,11,5,11l-2.001,0L3,20l2,0c0.67-4.338,3.589-7,7-7c4.14,0,7,3.92,7,10	c0,0.339-0.014,0.671-0.035,1H0v2h1.009c1.083,0,1.977,0.861,1.999,1.943C3.046,29.789,3.224,32.006,4,33c1.269,1.625,3,3,8,3	c5.022,0,9.92-4.527,11-10h2c1.08,5.473,5.978,10,11,10c5,0,6.731-1.375,8-3c0.776-0.994,0.954-3.211,0.992-5.057	C45.014,26.861,45.909,26,46.991,26H48v-2H29.035z M11.477,33.73C9.872,33.73,7.322,33.724,7,32	c-0.109-0.583-0.091-2.527-0.057-4.046C6.968,26.867,7.855,26,8.943,26H19C18.206,30.781,15.015,33.73,11.477,33.73z M41,32	c-0.322,1.724-2.872,1.73-4.477,1.73c-3.537,0-6.729-2.949-7.523-7.73h10.057c1.088,0,1.975,0.867,2,1.954	C41.091,29.473,41.109,31.417,41,32z"
														></path>
													</svg>
												</a>
											{/if}
											{#if problem.githubUrl}
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
											{/if}

											{#if problem.youtubeUrl}
												<a
													href={problem.youtubeUrl}
													target="_blank"
													rel="noopener noreferrer"
													title="Watch on YouTube"
													class="text-gray-400 hover:text-red-500"
												>
													<svg
														class="h-6 w-6"
														xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 48 48"
													>
														<path
															fill="#FF3D00"
															d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"
														></path>
														<path fill="#FFF" d="M20 31L20 17 32 24z"></path>
													</svg>
												</a>
											{/if}
										</div>

										<span
											class="w-20 text-center text-sm font-bold"
											class:text-yellow-400={problem.difficulty === 'Medium'}
											class:text-red-500={problem.difficulty === 'Hard'}
											class:text-green-400={problem.difficulty === 'Easy'}
										>
											{problem.difficulty}
										</span>
									</div>
								</li>
							{/each}
						</ul>
					</div>
				{/each}
			</div>
		</main>
	</div>
</div>
