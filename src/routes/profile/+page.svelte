<script>
	let { data } = $props();
	let user = data.user.username;
	console.log(data);
</script>

<svelte:head>
	<title>Profile</title>
</svelte:head>

<div class="min-h-screen bg-slate-900 pt-20 font-sans text-slate-300">
	<h1>Hello {user}</h1>
</div>
