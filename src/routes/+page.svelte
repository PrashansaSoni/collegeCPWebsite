<script>
	// No transitions/easing imported
</script>

<svelte:head>
	<title>Practice CP</title>
	<meta
		name="description"
		content="Organized CP practice across LeetCode, GFG, and Codeforces. Study plans, categories, and progress tracking."
	/>
</svelte:head>

<div class="min-h-screen bg-slate-950 text-slate-100 antialiased">
	<!-- Hero -->
	<section class="relative overflow-hidden">
		<!-- Background: radial vignette + subtle animated particles (no grid.svg) -->
		<div class="pointer-events-none absolute inset-0">
			<!-- Subtle radial vignette -->
			<div
				class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(14,165,233,0.10),rgba(2,6,23,0)_55%)]"
			></div>
			<!-- Two very subtle constellation layers -->
			<div class="constellation absolute inset-0 opacity-[0.22]"></div>
			<div class="constellation-2 absolute inset-0 opacity-[0.18]"></div>
			<!-- Soft bottom gradient fade for depth -->
			<div
				class="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950 to-transparent"
			></div>
		</div>

		<div class="relative mx-auto max-w-6xl px-4 py-24 sm:py-28">
			<div class="grid items-center gap-10 md:grid-cols-2">
				<!-- Left: copy -->
				<div>
					<h1 class="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
						Practice competitive programming the organized way
					</h1>
					<p class="mt-4 max-w-xl text-lg text-slate-300">
						Curated categories, study plans, and quick links across LeetCode, GeeksforGeeks, and
						Codeforces — all in one place.
					</p>

					<div class="mt-8 flex flex-wrap items-center gap-3">
						<a
							href="/login"
							class="inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-600 px-5 py-3 text-sm font-semibold text-white shadow-sm ring-1 ring-cyan-600/20 transition-colors ring-inset hover:bg-cyan-700"
						>
							Get started
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-4 w-4"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									fill-rule="evenodd"
									d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
									clip-rule="evenodd"
								/>
							</svg>
						</a>
						<a
							href="/categories"
							class="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-900 px-5 py-3 text-sm font-medium text-slate-100 ring-1 ring-white/10 hover:bg-slate-800"
						>
							Explore study plans
						</a>
					</div>

					<div class="mt-6 flex flex-wrap items-center gap-4 text-xs text-slate-400">
						<span
							class="inline-flex items-center gap-2 rounded-md bg-slate-900/80 px-2.5 py-1 ring-1 ring-white/10"
						>
							<span class="h-1.5 w-1.5 rounded-full bg-emerald-400"></span> Track progress
						</span>
						<span
							class="inline-flex items-center gap-2 rounded-md bg-slate-900/80 px-2.5 py-1 ring-1 ring-white/10"
						>
							<span class="h-1.5 w-1.5 rounded-full bg-cyan-400"></span> Topic-based practice
						</span>
						<span
							class="inline-flex items-center gap-2 rounded-md bg-slate-900/80 px-2.5 py-1 ring-1 ring-white/10"
						>
							<span class="h-1.5 w-1.5 rounded-full bg-blue-400"></span> Multi-platform links
						</span>
					</div>
				</div>

				<!-- Right: floating illustration -->
				<div class="relative mx-auto w-72 sm:w-80 md:ml-auto">
					<div class="floating-island">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							shape-rendering="geometricPrecision"
							text-rendering="geometricPrecision"
							image-rendering="optimizeQuality"
							fill-rule="evenodd"
							clip-rule="evenodd"
							viewBox="0 0 512 406.8"
							class="drop-shadow-[0_10px_30px_rgba(0,0,0,0.45)]"
						>
							<path
								fill="#0B1220"
								d="M29.274 0h373.805c16.115 0 29.273 13.158 29.273 29.273v271.425c0 16.079-13.158 29.275-29.273 29.275H29.274C13.16 329.973 0 316.777 0 300.698V29.273C0 13.158 13.16 0 29.274 0z"
							/>
							<path
								fill="#0f172a"
								d="M412.859 81.944H20.831v221.605c0 4.5 3.591 8.091 8.093 8.091h375.702a8.045 8.045 0 008.093-8.091V81.944h.14z"
							/>
							<path
								fill="#0891b2"
								d="M50.479 110.803h268.354c-40.066 12.817-73.615 41.578-92.397 79.365H50.479c-3.654 0-6.653-2.992-6.653-6.652v-66.06c0-3.66 2.995-6.653 6.653-6.653z"
							/>
							<path
								fill="#0B1220"
								d="M49.481 217.069h166.025v15.536H49.481zM49.481 259.439h162.827v15.535H49.481z"
							/>
							<path
								fill="#0B1220"
								fill-rule="nonzero"
								d="M364.983 140.366a116.817 116.817 0 0182.714 34.269c30.339 30.337 41.625 75.066 29.406 116.146a116.446 116.446 0 01-11.885 26.888l45.305 49.379a5.599 5.599 0 01-.331 7.909l-33.259 30.381a5.583 5.583 0 01-7.888-.351l-43.339-47.664c-18.353 11.176-39.229 17.012-60.723 17.012-31.068 0-60.749-12.3-82.716-34.271a117.112 117.112 0 01-25.383-37.986c-18.134-43.668-7.827-94.221 25.394-127.432a116.819 116.819 0 0137.965-25.396c13.798-5.728 28.918-8.884 44.74-8.884z"
							/>
							<path
								fill="#38bdf8"
								fill-rule="nonzero"
								d="M435.913 186.41c-28.629-28.635-72.031-37.242-109.316-21.798-66.914 27.706-82.295 113.986-32.582 163.669 28.688 28.612 72 37.261 109.332 21.806 37.541-15.589 61.945-52.097 61.945-92.742 0-26.762-10.455-52.008-29.379-70.935z"
							/>
							<path
								fill="#fff"
								fill-rule="nonzero"
								d="M313.034 243.191c-2.093 4.438-7.392 6.338-11.83 4.244-4.439-2.093-6.338-7.392-4.245-11.831a109.097 109.097 0 0111.637-19.213c4.498-5.946 9.706-11.536 15.627-16.759 3.669-3.246 9.281-2.904 12.527.765 3.246 3.669 2.904 9.28-.765 12.527a96.59 96.59 0 00-13.192 14.186 91.323 91.323 0 00-9.759 16.081z"
							/>
							<circle cx="326.235" cy="47.359" r="14.46" fill="#eab308" />
							<circle cx="277.258" cy="47.359" r="14.46" fill="#ef4444" />
							<circle cx="375.213" cy="47.359" r="14.46" fill="#06b6d4" />
						</svg>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Value props -->
	<section class="relative border-t border-slate-900/60">
		<div class="mx-auto max-w-6xl px-4 py-16 sm:py-20">
			<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
				<div class="rounded-xl bg-slate-900/70 p-5 ring-1 ring-white/5">
					<div
						class="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-md bg-cyan-600/20 text-cyan-300 ring-1 ring-cyan-500/20"
					>
						1
					</div>
					<h3 class="text-sm font-semibold text-white">Curated categories</h3>
					<p class="mt-2 text-sm text-slate-300">
						Solve by topic: DP, Graphs, Trees, Sliding Window, and more.
					</p>
				</div>
				<div class="rounded-xl bg-slate-900/70 p-5 ring-1 ring-white/5">
					<div
						class="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-md bg-blue-600/20 text-blue-300 ring-1 ring-blue-500/20"
					>
						2
					</div>
					<h3 class="text-sm font-semibold text-white">Unified links</h3>
					<p class="mt-2 text-sm text-slate-300">
						Quick jump to LeetCode, GFG, and Codeforces for each problem.
					</p>
				</div>
				<div class="rounded-xl bg-slate-900/70 p-5 ring-1 ring-white/5">
					<div
						class="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-md bg-emerald-600/20 text-emerald-300 ring-1 ring-emerald-500/20"
					>
						3
					</div>
					<h3 class="text-sm font-semibold text-white">Progress tracking</h3>
					<p class="mt-2 text-sm text-slate-300">
						Mark problems done, keep streaks, and follow study plans.
					</p>
				</div>
			</div>

			<div class="mt-10 flex items-center justify-center">
				<a
					href="/categories"
					class="rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-slate-100 ring-1 ring-white/10 hover:bg-slate-800"
				>
					Browse categories
				</a>
			</div>
		</div>
	</section>
</div>

<style>
	/* Animated constellation backgrounds (subtle, long-loop) */
	@keyframes move-constellation {
		from {
			transform: translateY(0);
		}
		to {
			transform: translateY(-2000px);
		}
	}
	.constellation {
		background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="220" height="220"><circle cx="10" cy="10" r="1" fill="white"/><circle cx="50" cy="90" r="0.5" fill="white"/><circle cx="150" cy="40" r="1" fill="white"/><circle cx="100" cy="150" r="1.5" fill="white"/></svg>');
		animation: move-constellation 180s linear infinite;
	}
	.constellation-2 {
		background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="320" height="320"><circle cx="30" cy="210" r="1" fill="cyan"/><circle cx="120" cy="80" r="1.5" fill="cyan"/><circle cx="250" cy="180" r="1" fill="cyan"/><circle cx="200" cy="280" r="0.5" fill="cyan"/></svg>');
		animation: move-constellation 140s linear infinite;
	}
	/* Floating SVG Animation (kept subtle for polish) */
	@keyframes float {
		0% {
			transform: translateY(0) rotate(0);
		}
		50% {
			transform: translateY(-16px) rotate(0.8deg);
		}
		100% {
			transform: translateY(0) rotate(0);
		}
	}
	.floating-island {
		animation: float 10s ease-in-out infinite;
	}
</style>
