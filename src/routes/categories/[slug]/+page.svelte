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

<div class="min-h-screen bg-slate-900 pt-20 font-sans text-slate-300">
	<div class="mx-auto max-w-5xl">
		<!-- Elegant Header -->
		<div class="mb-16 text-center">
			<div class="inline-block">
				<h1 class="mb-4 text-4xl font-bold tracking-tight text-white">{studyPlan.title}</h1>
				<div class="mx-auto h-1 w-16 rounded-full bg-blue-500"></div>
			</div>
		</div>

		<main>
			<div class="space-y-6">
				{#each studyPlan.sections as section}
					<div
						class="group rounded-xl border border-slate-700 bg-gray-900 shadow-xl backdrop-blur-sm transition-all duration-300 hover:border-slate-600 hover:shadow-2xl"
					>
						<!-- Section Header -->
						<div
							class="flex items-center gap-4 rounded-t-xl border-b border-slate-700 bg-slate-800 px-5 py-4"
						>
							<div class="h-6 w-1 rounded-full bg-blue-500"></div>
							<h2 class="text-base font-semibold tracking-wide text-white">
								{section.name}
							</h2>
							<div class="ml-4 h-px flex-1 bg-slate-600"></div>
						</div>

						<!-- Problems List -->
						<div class="p-2">
							{#each section.problems as problem (problem.name)}
								<div
									class="mx-2 my-1 grid grid-cols-12 items-center gap-3 rounded-lg border border-transparent p-3 transition-all duration-200 hover:border-slate-600 hover:bg-slate-700"
								>
									<!-- Checkbox -->
									<div class="col-span-1">
										<button
											onclick={() => toggleComplete(problem)}
											title="Toggle completion status"
											class="relative flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300 hover:scale-110"
										>
											<div
												class="absolute inset-0 rounded-full border-2 transition-all duration-300"
												class:border-emerald-500={problem.completed}
												class:bg-emerald-500={problem.completed}
												class:border-slate-500={!problem.completed}
												class:hover:border-slate-400={!problem.completed}
												class:shadow-lg={problem.completed}
												class:shadow-emerald-500={problem.completed}
											></div>
											{#if problem.completed}
												<img src="/check.png" alt="Completed" class="relative h-3 w-3" />
											{/if}
										</button>
									</div>

									<!-- Problem Name -->
									<div class="col-span-6">
										<span
											class="text-base font-medium transition-all duration-200"
											class:line-through={problem.completed}
											class:text-slate-500={problem.completed}
											class:text-slate-200={!problem.completed}
										>
											{problem.name}
										</span>
									</div>

									<!-- Action Buttons and Difficulty Badge -->
									<div class="col-span-5 flex items-center justify-end gap-3">
										<!-- Action Buttons -->
										<div
											class="flex items-center gap-2 opacity-70 transition-opacity duration-200 hover:opacity-100"
										>
											{#if problem.codeUrl}
												<a
													href={problem.codeUrl}
													target="_blank"
													rel="noopener noreferrer"
													title="View Code"
													class="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-600 bg-slate-700 text-slate-300 backdrop-blur-sm transition-all duration-200 hover:border-slate-500 hover:bg-slate-600 hover:text-white hover:shadow-lg"
												>
													<img src="/code.png" alt="Code" class="h-6 w-6" />
												</a>
											{/if}

											{#if problem.platform === 'leetcode'}
												<a
													href={problem.url}
													target="_blank"
													rel="noopener noreferrer"
													title="View on LeetCode"
													class="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-600 bg-slate-700 backdrop-blur-sm transition-all duration-200 hover:border-yellow-500 hover:bg-yellow-500 hover:shadow-lg"
												>
													<img src="/leetcode.png" alt="LeetCode" class="h-6 w-6" />
												</a>
											{:else if problem.platform === 'gfg'}
												<a
													href={problem.url}
													target="_blank"
													rel="noopener noreferrer"
													title="View on GeeksforGeeks"
													class="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-600 bg-slate-700 backdrop-blur-sm transition-all duration-200 hover:border-green-500 hover:bg-green-900 hover:shadow-lg"
												>
													<img src="/gfg.png" alt="GeeksforGeeks" class="h-6 w-6" />
												</a>
											{/if}

											{#if problem.githubUrl}
												<a
													href={problem.githubUrl}
													target="_blank"
													rel="noopener noreferrer"
													title="View on GitHub"
													class="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-600 bg-slate-700 text-slate-300 backdrop-blur-sm transition-all duration-200 hover:border-slate-500 hover:bg-slate-600 hover:text-white hover:shadow-lg"
												>
													<img src="/github.png" alt="GitHub" class="h-9 w-9" />
												</a>
											{/if}

											{#if problem.youtubeUrl}
												<a
													href={problem.youtubeUrl}
													target="_blank"
													rel="noopener noreferrer"
													title="Watch on YouTube"
													class="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-600 bg-slate-700 text-red-400 backdrop-blur-sm transition-all duration-200 hover:border-red-500 hover:bg-red-900 hover:shadow-lg"
												>
													<img src="/youtube.svg" alt="YouTube" class="h-7 w-7" />
												</a>
											{/if}
										</div>

										<!-- Difficulty Badge -->
										<span
											class="inline-flex items-center rounded px-2 py-1 text-xs font-medium"
											class:bg-green-100={problem.difficulty === 'Easy'}
											class:text-green-800={problem.difficulty === 'Easy'}
											class:bg-yellow-100={problem.difficulty === 'Medium'}
											class:text-yellow-800={problem.difficulty === 'Medium'}
											class:bg-red-100={problem.difficulty === 'Hard'}
											class:text-red-800={problem.difficulty === 'Hard'}
										>
											{problem.difficulty}
										</span>
									</div>
								</div>
							{/each}
						</div>
					</div>
				{/each}
			</div>
		</main>
	</div>
</div>
