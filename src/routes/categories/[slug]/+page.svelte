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
		<div class="mb-12">
			<div class="mx-auto flex max-w-5xl items-center justify-between gap-6 px-4 sm:px-0">
				<!-- Title + subtitle -->
				<div class="min-w-0">
					<div class="inline-block">
						<h1 class="mb-2 text-4xl font-semibold tracking-tight text-white">
							{studyPlan.title}
						</h1>
						<div class="mx-0 h-[3px] w-16 rounded-full bg-blue-500/80"></div>
					</div>
					<!-- Subline: quick meta (example: sections and problems) -->
					<p class="mt-3 line-clamp-1 text-sm text-slate-400">Consistency is the key</p>

					<!-- Optional compact action bar (remove if not needed, no functional change) -->
					<div class="mt-4 flex flex-wrap items-center gap-2 text-xs">
						<span
							class="inline-flex items-center gap-2 rounded-md border border-slate-800/80 bg-slate-900/70 px-2.5 py-1 text-slate-300"
						>
							<span class="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
							{studyPlan.sections?.length || 0} sections
						</span>
						<span
							class="inline-flex items-center gap-2 rounded-md border border-slate-800/80 bg-slate-900/70 px-2.5 py-1 text-slate-300"
						>
							<span class="inline-block h-1.5 w-1.5 rounded-full bg-blue-400"></span>
							{studyPlan.sections?.reduce((sum, s) => sum + (s.problems?.length || 0), 0) || 0} problems
						</span>
					</div>
				</div>
				<div class="hidden shrink-0 md:block">
					<div class="relative">
						<img
							src="/study.gif"
							alt="Study animation"
							class="h-35 w-30 scale-150"
							loading="lazy"
						/>
					</div>
				</div>
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
									class="mx-2 my-1 flex items-center gap-2 rounded-lg border border-transparent px-3 py-2 transition-all duration-200 hover:border-slate-600 hover:bg-slate-800"
								>
									<!-- Checkbox -->
									<div class="flex-shrink-0">
										<button
											onclick={() => toggleComplete(problem)}
											title="Toggle completion status"
											class="relative flex h-7 w-7 items-center justify-center rounded-full transition-all duration-300 hover:scale-110"
										>
											<div
												class="absolute inset-0 rounded-full border-2 transition-all duration-300"
												class:border-emerald-50={problem.completed}
												class:bg-emerald-200={problem.completed}
												class:border-slate-500={!problem.completed}
												class:hover:border-slate-400={!problem.completed}
											></div>
											{#if problem.completed}
												<img src="/check.png" alt="Completed" class="relative h-4 w-4" />
											{/if}
										</button>
									</div>

									<!-- Problem Name - Takes remaining space -->
									<div class="min-w-0 flex-1 overflow-hidden">
										<span
											class="block truncate text-sm font-medium transition-all duration-200"
											class:line-through={problem.completed}
											class:text-slate-500={problem.completed}
											class:text-slate-200={!problem.completed}
											title={problem.name}
										>
											{problem.name}
										</span>
									</div>

									<!-- Fixed width container for buttons and badge -->
									<div class="flex flex-shrink-0 items-center gap-2" style="width: 220px;">
										<!-- Action Buttons -->
										<div
											class="flex items-center gap-3 opacity-70 transition-opacity duration-200 hover:opacity-100"
										>
											{#if problem.codeUrl}
												<a
													href={problem.codeUrl}
													target="_blank"
													rel="noopener noreferrer"
													title="View Code"
													class="flex h-7 w-7 items-center justify-center text-slate-300 transition-all duration-200 hover:scale-110"
												>
													<img src="/code.png" alt="Code" class="h-5 w-5" />
												</a>
											{/if}

											{#if problem.platform === 'leetcode'}
												<a
													href={problem.url}
													target="_blank"
													rel="noopener noreferrer"
													title="View on LeetCode"
													class="flex h-7 w-7 items-center justify-center transition-all duration-200 hover:scale-130"
												>
													<img src="/leetcode.png" alt="LeetCode" class="h-5 w-5" />
												</a>
											{:else if problem.platform === 'gfg'}
												<a
													href={problem.url}
													target="_blank"
													rel="noopener noreferrer"
													title="View on GeeksforGeeks"
													class="flex h-7 w-7 items-center justify-center transition-all duration-200 hover:scale-130"
												>
													<img src="/gfg.png" alt="GeeksforGeeks" class="h-5 w-5" />
												</a>
											{:else if problem.platform === 'codeforces'}
												<a
													href={problem.url}
													target="_blank"
													rel="noopener noreferrer"
													title="View on GeeksforGeeks"
													class="flex h-7 w-7 items-center justify-center transition-all duration-200 hover:scale-130"
												>
													<img src="/codeforces.png" alt="GeeksforGeeks" class="h-5 w-5" />
												</a>
											{/if}

											{#if problem.githubUrl}
												<a
													href={problem.githubUrl}
													target="_blank"
													rel="noopener noreferrer"
													title="View on GitHub"
													class="flex h-7 w-7 items-center justify-center text-slate-300 transition-all duration-200 hover:scale-130"
												>
													<img src="/git.gif" alt="GitHub" class="h-5 w-5 scale-200" />
												</a>
											{/if}

											{#if problem.youtubeUrl}
												<a
													href={problem.youtubeUrl}
													target="_blank"
													rel="noopener noreferrer"
													title="Watch on YouTube"
													class="flex h-7 w-7 items-center justify-center text-red-400 transition-all duration-200 hover:scale-130"
												>
													<img src="/youtube.gif" alt="YouTube" class="h-8 w-8 scale-200" />
												</a>
											{/if}
										</div>

										<!-- Difficulty Badge - Always at the end -->
										<div class="ml-auto">
											<span
												class="inline-flex items-center rounded px-2 py-1 text-xs font-medium whitespace-nowrap"
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
								</div>
							{/each}
						</div>
					</div>
				{/each}
			</div>
		</main>
	</div>
</div>
