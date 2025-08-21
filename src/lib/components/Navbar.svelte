<script>
	import { goto } from '$app/navigation';

	let { data } = $props();

	function handleLogout() {
		goto('/logout', { invalidateAll: true });
	}

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
			{#if data.user}
				<button
					class="relative flex items-center rounded-lg bg-cyan-500 py-2 pr-4 pl-10 text-sm font-semibold text-white transition duration-200 hover:bg-cyan-600"
					onclick={() => navigateTo('/login')}
				>
					<img
						src="/user.png"
						alt="Sign In"
						class="absolute top-1/2 left-1 h-8 w-8 -translate-y-1/2"
					/>
					<span>{data.user.username}</span>
				</button>

				<button
					class="relative flex items-center rounded-lg bg-green-500 py-2 pr-4 pl-10 text-sm font-semibold text-white transition duration-200 hover:bg-green-600"
					onclick={handleLogout}
				>
					<img
						src="/user.png"
						alt="Sign Up"
						class="absolute top-1/2 left-1 h-8 w-8 -translate-y-1/2"
					/>
					<span>Sign Out</span>
				</button>
			{:else}
				<button
					class="relative flex items-center rounded-lg bg-cyan-500 py-2 pr-4 pl-10 text-sm font-semibold text-white transition duration-200 hover:bg-cyan-600"
					onclick={() => navigateTo('/login')}
				>
					<img
						src="/user.png"
						alt="Sign In"
						class="absolute top-1/2 left-1 h-8 w-8 -translate-y-1/2"
					/>
					<span>Sign In</span>
				</button>

				<button
					class="relative flex items-center rounded-lg bg-green-500 py-2 pr-4 pl-10 text-sm font-semibold text-white transition duration-200 hover:bg-green-600"
					onclick={() => navigateTo('/login')}
				>
					<img
						src="/user.png"
						alt="Sign Up"
						class="absolute top-1/2 left-1 h-8 w-8 -translate-y-1/2"
					/>
					<span>Sign Up</span>
				</button>
			{/if}
		</div>
	</div>
</nav>
