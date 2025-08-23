<script>
	let { data } = $props();
	// Default values for props
	let user = $state({
		name: 'A',
		email: 'a@gmail.com',
		avatar: '/address.gif'
	});
	user.name = data.user.username;
	user.email = data.user.email;

	// CP categories
	const categories = $state([
		{
			key: 'strings',
			name: 'Strings',
			solved: 2,
			total: 12,
			color: 'bg-emerald-500'
		},
		{
			key: 'dp',
			name: 'Dynamic Programming',
			solved: 1,
			total: 28,
			color: 'bg-indigo-500'
		},
		{
			key: 'graph',
			name: 'Graphs',
			solved: 0,
			total: 47,
			color: 'bg-rose-500'
		},
		{
			key: 'greedy',
			name: 'Greedy',
			solved: 1,
			total: 11,
			color: 'bg-fuchsia-500'
		},
		{
			key: 'backtracking',
			name: 'Backtracking',
			solved: 0,
			total: 7,
			color: 'bg-emerald-600'
		},
		{
			key: 'recursion',
			name: 'Recursion',
			solved: 0,
			total: 11,
			color: 'bg-purple-500'
		},
		{
			key: 'queue',
			name: 'Queue',
			solved: 0,
			total: 7,
			color: 'bg-pink-500'
		},
		{
			key: 'array',
			name: 'Arrays',
			solved: 4,
			total: 12,
			color: 'bg-amber-500'
		},
		{
			key: 'linkedlist',
			name: 'Linked List',
			solved: 1,
			total: 12,
			color: 'bg-sky-500'
		}
	]);

	function pct(c) {
		if (!c.total) return 0;
		return Math.min(100, Math.round((c.solved / c.total) * 100));
	}

	function gotoCategory(key) {
		window.location.href = `/categories/${key}`;
	}
</script>

<svelte:head>
	<title>Profile</title>
</svelte:head>
<div class="min-h-screen bg-gray-900 pt-10 text-gray-100">
	<div class="mx-auto max-w-5xl p-4 sm:p-6">
		<!-- Header: Avatar, Name, Email, Theme -->
		<section class="flex items-center justify-between">
			<div class="flex items-center gap-4">
				<img
					alt="Avatar"
					src={user.avatar}
					class="h-14 w-14 rounded-full shadow ring-2 ring-white dark:ring-gray-800"
				/>
				<div>
					<h1 class="text-lg font-semibold">{user.name}</h1>
					<div class="text-sm text-gray-500 dark:text-gray-400">{user.email}</div>
				</div>
			</div>
		</section>

		<!-- Categories Grid -->
		<section class="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
			{#each categories as c (c.key)}
				<div
					class="rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-md dark:border-gray-800 dark:bg-gray-900"
				>
					<div class="flex items-start justify-between">
						<div>
							<div class="text-sm font-medium">{c.name}</div>
							<div class="mt-1 text-xs text-gray-500 dark:text-gray-400">
								{c.solved}/{c.total} solved
							</div>
						</div>
						<button
							class="rounded-md border border-gray-200 bg-white px-2 py-1 text-xs hover:bg-gray-50 dark:border-gray-800 dark:bg-gray-900 dark:hover:bg-gray-800"
							onclick={() => gotoCategory(c.key)}
							aria-label={'Go to ' + c.name + ' page'}
						>
							Open →
						</button>
					</div>
					<div
						class="mt-3 h-2 w-full overflow-hidden rounded bg-gray-100 dark:bg-gray-800"
						aria-label="Progress"
					>
						<div class={'h-full rounded ' + c.color} style={'width:' + pct(c) + '%'}></div>
					</div>
				</div>
			{/each}
		</section>
	</div>
</div>
