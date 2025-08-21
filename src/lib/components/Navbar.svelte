<script>
	import { goto } from '$app/navigation';
	import { enhance } from '$app/forms';

	let { user } = $props();

	function navigateTo(path) {
		goto(path);
	}
</script>

<nav class="fixed top-0 left-0 z-50 w-full bg-gray-900 text-white shadow-lg backdrop-blur-lg">
	<div class="relative flex items-center px-4 py-4">
		<div class="flex items-center">
			<button
				class="text-xl font-bold tracking-wider transition-colors hover:text-cyan-400"
				onclick={() => navigateTo('/')}
			>
				PracticeCP
			</button>
		</div>

		<div
			class="absolute left-1/2 hidden -translate-x-1/2 transform items-center space-x-10 md:flex"
		>
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

		<div class="ml-auto flex items-center space-x-3">
			{#if !user}
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
			{:else}
				<button
					class="rounded-full p-2 text-gray-300 transition-colors hover:bg-gray-700 hover:text-white"
					aria-label="User Profile"
					onclick={() => navigateTo('/profile')}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="2"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
						/>
					</svg>
				</button>

				<form action="/auth/logout" method="POST" use:enhance>
					<button
						type="submit"
						class="rounded-full p-2 text-gray-300 transition-colors hover:bg-gray-700 hover:text-white"
						aria-label="Logout"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
							/>
						</svg>
					</button>
				</form>
			{/if}
		</div>
	</div>
</nav>
