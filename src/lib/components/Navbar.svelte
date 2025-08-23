<script>
	import { goto } from '$app/navigation';

	let { data } = $props();

	function handleLogout() {
		goto('/logout', { invalidateAll: true });
	}

	function navigateTo(path) {
		goto(path);
	}

	let mobileOpen = $state(false);

	// Stopwatch (visible only when logged in)
	let running = $state(false);
	let elapsedMs = $state(0);
	let lastStart = $state(0);
	let timerId = $state(null);

	function formatMs(ms) {
		const totalMs = Math.max(0, ms | 0);
		const totalSec = Math.floor(totalMs / 1000);
		const h = Math.floor(totalSec / 3600);
		const m = Math.floor((totalSec % 3600) / 60);
		const s = totalSec % 60;
		const cs = Math.floor((totalMs % 1000) / 10); // centiseconds 00-99

		const hh = h > 0 ? String(h).padStart(2, '0') + ':' : '';
		return `${hh}${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}.${String(cs).padStart(2, '0')}`;
	}

	function tick() {
		const now = Date.now();
		elapsedMs += now - lastStart;
		lastStart = now;
	}

	function startStop() {
		if (!running) {
			running = true;
			lastStart = Date.now();
			// 10ms cadence for smooth centiseconds without being too CPU-heavy
			timerId = setInterval(tick, 10);
		} else {
			running = false;
			if (timerId) clearInterval(timerId);
			timerId = null;
			tick(); // flush final delta
		}
	}

	function resetTimer() {
		running = false;
		if (timerId) clearInterval(timerId);
		timerId = null;
		elapsedMs = 0;
		lastStart = 0;
	}
</script>

<nav class="fixed top-0 left-0 z-50 w-full bg-transparent text-white shadow-lg backdrop-blur-lg">
	<div class="relative flex items-center px-4 py-4">
		<div class="flex items-center">
			<button
				class="flex items-center gap-2 text-xl font-bold tracking-wider transition-colors hover:text-cyan-400"
				onclick={() => navigateTo('/')}
				aria-label="PracticeCP Home"
			>
				<img src="/code.png" alt="Logo" class="h-6 w-6 rounded-sm" />
				PracticeCP
			</button>
		</div>

		<div
			class="absolute left-1/2 hidden -translate-x-1/2 transform items-center space-x-10 md:flex"
		>
			<button
				class="text-sm font-medium text-gray-300 transition-colors hover:text-white"
				onclick={() => navigateTo('/')}>Home</button
			>
			<button
				class="text-sm font-medium text-gray-300 transition-colors hover:text-white"
				onclick={() => navigateTo('/problems')}>Problems</button
			>
			<button
				class="text-sm font-medium text-gray-300 transition-colors hover:text-white"
				onclick={() => navigateTo('/categories')}>Categories</button
			>
		</div>

		<div class="ml-auto hidden items-center space-x-3 md:flex">
			{#if data.user}
				<!-- Stopwatch -->
				<div
					class="flex items-center gap-2 rounded-lg bg-slate-900 px-2 py-1.5 text-sm text-slate-100 ring-1 ring-white/10"
				>
					<span class="inline-flex items-center gap-4">
						<img
							src="/stopwatch.svg"
							class="h-4 w-4 scale-150 text-cyan-400"
							alt="stopwatch"
							aria-hidden="true"
						/>
						<span class="tabular-nums"
							>{formatMs(running ? elapsedMs + (Date.now() - lastStart) : elapsedMs)}
						</span>
					</span>
					<div class="flex items-center gap-1.5">
						<button
							class="rounded-md bg-cyan-600 px-2 py-1 text-xs font-semibold text-white ring-1 ring-cyan-600/20 transition-colors ring-inset hover:bg-cyan-700"
							onclick={startStop}
							aria-label="Start/Stop stopwatch"
						>
							{running ? 'Pause' : 'Start'}
						</button>
						<button
							class="rounded-md bg-slate-800 px-2 py-1 text-xs text-slate-100 ring-1 ring-white/10 transition-colors hover:bg-slate-700"
							onclick={resetTimer}
							aria-label="Reset stopwatch"
						>
							Reset
						</button>
					</div>
				</div>

				<button
					class="relative inline-flex items-center gap-2 rounded-lg bg-blue-600 px-3 py-2 text-sm font-medium text-slate-100 ring-1 ring-white/10 transition-colors hover:bg-blue-400"
					onclick={() => navigateTo('/profile')}
					aria-label="Profile"
				>
					<img src="/user.png" alt="User" class="h-5 w-5" />
					<span class="max-w-[10rem] truncate">{data.user.username}</span>
				</button>

				<button
					class="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-3 py-2 text-sm font-semibold text-white ring-1 ring-emerald-600/20 transition-colors ring-inset hover:bg-green-400"
					onclick={handleLogout}
					aria-label="Sign Out"
				>
					<img src="/logout.png" class="h-4 w-4" alt="" />
					Sign Out
				</button>
			{:else}
				<button
					class="inline-flex items-center gap-2 rounded-lg bg-cyan-600 px-3 py-2 text-sm font-semibold text-white ring-1 ring-cyan-600/20 transition-colors ring-inset hover:bg-cyan-700"
					onclick={() => navigateTo('/login')}
					aria-label="Sign In"
				>
					<img src="/user.png" alt="Sign In" class="h-5 w-5 scale-200" />
					Sign In
				</button>

				<button
					class="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-3 py-2 text-sm font-semibold text-white ring-1 ring-emerald-600/20 transition-colors ring-inset hover:bg-emerald-700"
					onclick={() => navigateTo('/login')}
					aria-label="Sign Up"
				>
					<img src="/user.png" class="h-4 w-4 scale-200" alt="" />
					Sign Up
				</button>
			{/if}
		</div>

		<button
			class="ml-auto inline-flex items-center justify-center rounded-md p-2 ring-1 ring-white/10 transition-colors hover:bg-slate-900 md:hidden"
			onclick={() => (mobileOpen = !mobileOpen)}
			aria-label="Toggle Menu"
			aria-expanded={mobileOpen}
		>
			{#if mobileOpen}
				<img src="/close.png" class="h-5 w-5" alt="" />
			{:else}
				<img src="/menu.png" class="h-5 w-5" alt="" />
			{/if}
		</button>
	</div>

	{#if mobileOpen}
		<div class="px-4 pb-4 md:hidden">
			<div class="space-y-2 rounded-lg bg-slate-900 p-3 ring-1 ring-white/10">
				<button
					class="w-full rounded-md px-3 py-2 text-left text-sm text-slate-300 transition-colors hover:bg-slate-800"
					onclick={() => {
						mobileOpen = false;
						navigateTo('/');
					}}>Home</button
				>
				<button
					class="w-full rounded-md px-3 py-2 text-left text-sm text-slate-300 transition-colors hover:bg-slate-800"
					onclick={() => {
						mobileOpen = false;
						navigateTo('/problems');
					}}>Problems</button
				>
				<button
					class="w-full rounded-md px-3 py-2 text-left text-sm text-slate-300 transition-colors hover:bg-slate-800"
					onclick={() => {
						mobileOpen = false;
						navigateTo('/categories');
					}}>Categories</button
				>

				{#if data.user}
					<div class="mt-2 border-t border-white/10 pt-2">
						<button
							class="w-full rounded-md px-3 py-2 text-left text-sm text-slate-100 transition-colors hover:bg-slate-800"
							onclick={() => {
								mobileOpen = false;
								navigateTo('/profile');
							}}
						>
							{data.user.username}
						</button>
						<button
							class="mt-1 w-full rounded-md bg-emerald-600 px-3 py-2 text-left text-sm font-semibold text-white transition-colors hover:bg-emerald-700"
							onclick={() => {
								mobileOpen = false;
								handleLogout();
							}}
						>
							Sign Out
						</button>
					</div>
				{:else}
					<div class="mt-2 border-t border-white/10 pt-2">
						<button
							class="w-full rounded-md bg-cyan-600 px-3 py-2 text-left text-sm font-semibold text-white transition-colors hover:bg-cyan-700"
							onclick={() => {
								mobileOpen = false;
								navigateTo('/login');
							}}
						>
							Sign In
						</button>
						<button
							class="mt-1 w-full rounded-md bg-emerald-600 px-3 py-2 text-left text-sm font-semibold text-white transition-colors hover:bg-emerald-700"
							onclick={() => {
								mobileOpen = false;
								navigateTo('/login');
							}}
						>
							Sign Up
						</button>
					</div>
				{/if}
			</div>
		</div>
	{/if}
</nav>
