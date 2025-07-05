<!-- <script>
	import { onMount } from 'svelte';
	import { marked } from 'marked';
	let markdownContent;

	onMount(async () => {
		try {
			// Load files from the static folder
			const response = await fetch('/Welcome.md');
			if (!response.ok) {
				throw new Error(`Failed to fetch: ${response.statusText}`);
			}
			const textres = await response.text();
			markdownContent = marked.parse(textres);
		} catch (err) {
			console.error('Error loading markdown:', err);
			markdownContent =
				'<h1>Failed to load content</h1><p>Please check the console for more details.</p>';
		}
	});
</script>

<svelte:head>
	<title>CUH Codes</title>
</svelte:head>

<div class="main-content min-h-screen bg-gray-900 px-4 py-8 pt-20 font-mono text-gray-300">
	{#if markdownContent}
		<article class="prose prose-sm sm:prose-base lg:prose-lg prose-invert mx-auto max-w-4xl">
			{@html markdownContent}
		</article>
	{:else}
		<p class="text-center">Loading content...</p>
	{/if}
</div> -->
<script>
	import { sineIn } from 'svelte/easing';
	import { fly } from 'svelte/transition';
</script>

<svelte:head>
	<title>Practice CP</title>
</svelte:head>

<div
	class="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-gray-900 p-4 text-center"
>
	<div
		class="absolute top-0 left-0 h-full w-full bg-[url('/grid.svg')] [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] bg-center opacity-20"
	></div>
	<div
		class="constellation pointer-events-none absolute top-0 left-0 h-full w-full opacity-50"
	></div>
	<div
		class="constellation-2 pointer-events-none absolute top-0 left-0 h-full w-full opacity-40"
	></div>

	<div class="relative z-10 flex flex-col items-center">
		<div in:fly={{ y: 50, duration: 1200, easing: sineIn }} class="floating-island w-64 sm:w-80">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				shape-rendering="geometricPrecision"
				text-rendering="geometricPrecision"
				image-rendering="optimizeQuality"
				fill-rule="evenodd"
				clip-rule="evenodd"
				viewBox="0 0 512 406.8"
			>
				<path
					fill="#263036"
					d="M29.274 0h373.805c16.115 0 29.273 13.158 29.273 29.273v271.425c0 16.079-13.158 29.275-29.273 29.275H29.274C13.16 329.973 0 316.777 0 300.698V29.273C0 13.158 13.16 0 29.274 0z"
				/>
				<path
					fill="#fff"
					d="M412.859 81.944H20.831v221.605c0 4.5 3.591 8.091 8.093 8.091h375.702a8.045 8.045 0 008.093-8.091V81.944h.14z"
				/>
				<path
					fill="#0CB2ED"
					d="M50.479 110.803h268.354c-40.066 12.817-73.615 41.578-92.397 79.365H50.479c-3.654 0-6.653-2.992-6.653-6.652v-66.06c0-3.66 2.995-6.653 6.653-6.653z"
				/>
				<path
					fill="#263036"
					d="M49.481 217.069h166.025v15.536H49.481zM49.481 259.439h162.827v15.535H49.481z"
				/>
				<path
					fill="#263036"
					fill-rule="nonzero"
					d="M364.983 140.366a116.817 116.817 0 0182.714 34.269c30.339 30.337 41.625 75.066 29.406 116.146a116.446 116.446 0 01-11.885 26.888l45.305 49.379a5.599 5.599 0 01-.331 7.909l-33.259 30.381a5.583 5.583 0 01-7.888-.351l-43.339-47.664c-18.353 11.176-39.229 17.012-60.723 17.012-31.068 0-60.749-12.3-82.716-34.271a117.112 117.112 0 01-25.383-37.986c-18.134-43.668-7.827-94.221 25.394-127.432a116.819 116.819 0 0137.965-25.396c13.798-5.728 28.918-8.884 44.74-8.884z"
				/>
				<path
					fill="#90CAF8"
					fill-rule="nonzero"
					d="M435.913 186.41c-28.629-28.635-72.031-37.242-109.316-21.798-66.914 27.706-82.295 113.986-32.582 163.669 28.688 28.612 72 37.261 109.332 21.806 37.541-15.589 61.945-52.097 61.945-92.742 0-26.762-10.455-52.008-29.379-70.935z"
				/>
				<path
					fill="#fff"
					fill-rule="nonzero"
					d="M313.034 243.191c-2.093 4.438-7.392 6.338-11.83 4.244-4.439-2.093-6.338-7.392-4.245-11.831a109.097 109.097 0 0111.637-19.213c4.498-5.946 9.706-11.536 15.627-16.759 3.669-3.246 9.281-2.904 12.527.765 3.246 3.669 2.904 9.28-.765 12.527a96.59 96.59 0 00-13.192 14.186 91.323 91.323 0 00-9.759 16.081z"
				/>
				<path
					fill="#FFD150"
					d="M326.235 32.897c7.986 0 14.461 6.474 14.461 14.462 0 7.987-6.475 14.46-14.461 14.46-7.987 0-14.462-6.473-14.462-14.46 0-7.988 6.475-14.462 14.462-14.462z"
				/>
				<path
					fill="#F26A64"
					d="M277.258 32.897c7.986 0 14.46 6.474 14.46 14.462 0 7.987-6.474 14.46-14.46 14.46-7.987 0-14.462-6.473-14.462-14.46 0-7.988 6.475-14.462 14.462-14.462z"
				/>
				<path
					fill="#0CB2ED"
					d="M375.213 32.897c7.987 0 14.46 6.474 14.46 14.462 0 7.987-6.473 14.46-14.46 14.46-7.987 0-14.462-6.473-14.462-14.46.036-7.988 6.509-14.462 14.462-14.462z"
				/>
			</svg>
		</div>

		<p
			in:fly={{ y: 40, duration: 1000, delay: 400, easing: sineIn }}
			class="mt-12 max-w-2xl text-lg text-cyan-100/80 sm:text-xl"
		>
			This website organizes problem links from LeetCode, GeeksforGeeks, and Codeforces into clear
			categories.
		</p>
		<p
			in:fly={{ y: 40, duration: 1000, delay: 400, easing: sineIn }}
			class="mt-12 max-w-2xl text-lg text-cyan-100/80 sm:text-xl"
		>
			NOTE: The inbuilt code editor (in problems page) is still under development.
		</p>
		<div in:fly={{ y: 30, duration: 1000, delay: 800, easing: sineIn }} class="mt-12">
			<a
				href="/categories"
				class="rounded-full border border-cyan-300/50 bg-gray-800/50 px-10 py-4 text-lg font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-cyan-300 hover:bg-gray-800/80 hover:shadow-2xl hover:shadow-cyan-500/20"
			>
				Get Started
			</a>
		</div>
	</div>
</div>

<style>
	/* Animated Constellation Backgrounds */
	@keyframes move-constellation {
		from {
			transform: translateY(0px);
		}
		to {
			transform: translateY(-2000px);
		}
	}

	.constellation {
		background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><circle cx="10" cy="10" r="1" fill="white"/><circle cx="50" cy="90" r="0.5" fill="white"/><circle cx="150" cy="40" r="1" fill="white"/><circle cx="100" cy="150" r="1.5" fill="white"/></svg>');
		animation: move-constellation 200s linear infinite;
	}

	.constellation-2 {
		background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300"><circle cx="30" cy="210" r="1" fill="cyan"/><circle cx="120" cy="80" r="1.5" fill="cyan"/><circle cx="250" cy="180" r="1" fill="cyan"/><circle cx="200" cy="280" r="0.5" fill="cyan"/></svg>');
		animation: move-constellation 150s linear infinite;
	}

	/* Floating SVG Animation */
	@keyframes float {
		0% {
			transform: translateY(0px) rotate(0deg);
		}
		50% {
			transform: translateY(-20px) rotate(1deg);
		}
		100% {
			transform: translateY(0px) rotate(0deg);
		}
	}

	.floating-island {
		animation: float 10s ease-in-out infinite;
	}
</style>
