<script>
	import { goto } from '$app/navigation';
	function navigateTo(path) {
		goto(path);
	}
</script>

<nav class="fixed top-0 left-0 z-50 w-full bg-gray-900 text-white shadow-lg backdrop-blur-lg">
	<div class="mx-auto flex max-w-7xl items-center p-4">
		<div class="flex flex-1 items-center justify-start">
			<button
				class="text-xl font-bold tracking-wider transition-colors hover:text-cyan-400"
				onclick={() => navigateTo('/')}
			>
				PracticeCP
			</button>
		</div>

		<div class="hidden items-center space-x-6 md:flex">
			<button
				class="text-sm font-medium text-gray-300 transition-colors hover:text-white"
				onclick={() => navigateTo('/')}
			>
				Home
			</button>
			<button
				class="text-sm font-medium text-gray-300 transition-colors hover:text-white"
				onclick={() => navigateTo('/problems')}
			>
				Problems
			</button>
			<button
				class="text-sm font-medium text-gray-300 transition-colors hover:text-white"
				onclick={() => navigateTo('/categories')}
			>
				Categories
			</button>
		</div>

		<div class="flex flex-1 items-center justify-end space-x-4">
			<button
				class="flex items-center space-x-2 rounded-lg bg-cyan-500 px-3 py-2 text-sm font-semibold text-white transition duration-200 hover:bg-cyan-600"
				onclick={() => navigateTo('/auth/signin')}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="currentColor"
					viewBox="0 0 20 20"
				>
					<path
						fill-rule="evenodd"
						d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
						clip-rule="evenodd"
					/>
				</svg>
				<span>Sign In</span>
			</button>
			<button
				class="flex items-center space-x-2 rounded-lg bg-green-500 px-3 py-2 text-sm font-semibold text-white transition duration-200 hover:bg-green-600"
				onclick={() => navigateTo('/auth/signup')}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="currentColor"
					viewBox="0 0 20 20"
				>
					<path
						fill-rule="evenodd"
						d="M10 3a1 1 0 011 1v4h4a1 1 0 110 2h-4v4a1 1 0 11-2 0v-4H5a1 1 0 110-2h4V4a1 1 0 011-1z"
						clip-rule="evenodd"
					/>
				</svg>
				<span>Sign Up</span>
			</button>
		</div>
	</div>
</nav>
