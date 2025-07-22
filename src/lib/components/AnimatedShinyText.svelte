<script>
	export let classNames = '';
</script>

<h1
	class="animate-shine relative bg-[linear-gradient(110deg,#939393,45%,#ffffff,55%,#939393)] bg-[length:250%_100%] text-center text-5xl font-bold text-white/80 {classNames}"
>
	<slot />
</h1>

<style>
	@keyframes shine {
		to {
			background-position-x: -250%;
		}
	}
	.animate-shine {
		animation: shine 4s linear infinite;
	}
</style>
