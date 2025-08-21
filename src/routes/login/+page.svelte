<script>
	import { fade } from 'svelte/transition';
	import { User, Mail, Lock, Github } from 'lucide-svelte';

	let { form } = $props();

	let view = $state('login'); // 'login', 'register', or 'reset'

	function switchView(newView) {
		view = newView;
		form = null;
	}
</script>

<div class="flex min-h-screen flex-col bg-slate-950 text-white">
	<main class="flex flex-grow items-center justify-center p-4">
		{#key view}
			<div
				in:fade={{ duration: 300, delay: 300 }}
				class="w-full max-w-sm overflow-hidden rounded-xl border border-slate-700 bg-slate-900 shadow-xl"
			>
				<div class="p-6">
					<h2 class="mb-1 text-center text-2xl font-semibold text-white">
						{#if view === 'login'}
							Welcome Back
						{:else if view === 'register'}
							Create Account
						{:else}
							Reset Password
						{/if}
					</h2>
					<p class="mb-6 text-center text-sm text-slate-400">
						{#if view === 'login'}
							Sign in to your account
						{:else if view === 'register'}
							Get started today
						{:else}
							Enter your email for a reset link
						{/if}
					</p>

					{#if form?.resetNotice}
						<div class="mb-4 rounded-lg border border-green-700 bg-green-900/30 p-3 text-center">
							<p class="text-sm text-green-400">{form.message}</p>
						</div>
					{:else if form?.verifyNotice}
						<div class="mb-4 rounded-lg border border-green-700 bg-green-900/30 p-3 text-center">
							<p class="text-sm text-green-400">{form.message}</p>
						</div>
					{/if}
					{#if form?.error}
						<div class="mb-4 rounded-lg border border-red-700 bg-red-900/30 p-3 text-center">
							<p class="text-sm text-red-400">{form.message}</p>
						</div>
					{/if}

					{#if view === 'reset'}
						<form method="POST" action="?/resetPassword" class="space-y-4">
							<div class="relative">
								<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
									<Mail class="h-4 w-4 text-slate-400" />
								</div>
								<input
									name="email"
									type="email"
									placeholder="Email address"
									required
									value={form?.formData?.email ?? ''}
									class="block w-full rounded-lg border border-slate-600 bg-slate-800 py-3 pr-3 pl-10 text-white placeholder-slate-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 focus:outline-none"
								/>
							</div>
							<button
								type="submit"
								class="w-full rounded-lg bg-cyan-600 py-3 font-medium text-white hover:bg-cyan-500 focus:ring-2 focus:ring-cyan-500/50 focus:outline-none"
							>
								Send Reset Link
							</button>
						</form>
						<p class="mt-6 text-center text-sm text-slate-400">
							Remember your password?
							<button
								onclick={() => switchView('login')}
								class="font-medium text-cyan-400 hover:underline"
							>
								Sign In
							</button>
						</p>
					{:else}
						<div class="space-y-3">
							<form method="POST" action="?/loginWithOAuth">
								<input type="hidden" name="provider" value="google" />
								<button
									type="submit"
									disabled
									class="inline-flex h-11 w-full items-center justify-center gap-3 rounded-lg border border-slate-600 bg-slate-800 text-white hover:border-slate-500 disabled:cursor-not-allowed disabled:opacity-50"
								>
									<svg width="20" height="20" viewBox="0 0 24 24">
										<path
											fill="#4285F4"
											d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
										/>
										<path
											fill="#34A853"
											d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
										/>
										<path
											fill="#FBBC05"
											d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
										/>
										<path
											fill="#EA4335"
											d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
										/>
									</svg>
									<span>Continue with Google</span>
								</button>
							</form>
							<form method="POST" action="?/loginWithOAuth">
								<input type="hidden" name="provider" value="github" />
								<button
									type="submit"
									disabled
									class="inline-flex h-11 w-full items-center justify-center gap-3 rounded-lg border border-slate-600 bg-slate-800 text-white hover:border-slate-500 disabled:cursor-not-allowed disabled:opacity-50"
								>
									<Github class="h-5 w-5" />
									<span>Continue with GitHub</span>
								</button>
							</form>
						</div>

						<div class="my-6 flex items-center">
							<hr class="w-full border-slate-600" />
							<span class="mx-3 text-xs text-slate-500">OR</span>
							<hr class="w-full border-slate-600" />
						</div>

						<form
							method="POST"
							action={view === 'login' ? '?/login' : '?/register'}
							class="space-y-4"
						>
							{#if view === 'register'}
								<div class="relative">
									<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
										<User class="h-4 w-4 text-slate-400" />
									</div>
									<input
										name="username"
										type="text"
										placeholder="Username"
										required
										value={form?.formData?.username ?? ''}
										class="block w-full rounded-lg border border-slate-600 bg-slate-800 py-3 pr-3 pl-10 text-white placeholder-slate-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 focus:outline-none"
									/>
								</div>
							{/if}

							<div class="relative">
								<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
									<Mail class="h-4 w-4 text-slate-400" />
								</div>
								<input
									name="email"
									type="email"
									placeholder="Email"
									required
									value={view === 'login'
										? (form?.data?.email ?? '')
										: (form?.formData?.email ?? '')}
									class="block w-full rounded-lg border border-slate-600 bg-slate-800 py-3 pr-3 pl-10 text-white placeholder-slate-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 focus:outline-none"
								/>
							</div>
							<div class="relative">
								<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
									<Lock class="h-4 w-4 text-slate-400" />
								</div>
								<input
									name="password"
									type="password"
									placeholder="Password"
									required
									class="block w-full rounded-lg border border-slate-600 bg-slate-800 py-3 pr-3 pl-10 text-white placeholder-slate-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 focus:outline-none"
								/>
							</div>

							{#if view === 'register'}
								<div class="relative">
									<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
										<Lock class="h-4 w-4 text-slate-400" />
									</div>
									<input
										name="passwordConfirm"
										type="password"
										placeholder="Confirm Password"
										required
										class="block w-full rounded-lg border border-slate-600 bg-slate-800 py-3 pr-3 pl-10 text-white placeholder-slate-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 focus:outline-none"
									/>
								</div>
							{/if}

							{#if view === 'login'}
								<div class="flex items-center justify-end">
									<button
										type="button"
										onclick={() => switchView('reset')}
										class="text-sm font-medium text-cyan-400 hover:underline"
									>
										Forgot password?
									</button>
								</div>
							{/if}

							<button
								type="submit"
								class="w-full rounded-lg bg-cyan-600 py-3 font-medium text-white hover:bg-cyan-500 focus:ring-2 focus:ring-cyan-500/50 focus:outline-none"
							>
								{#if view === 'login'}Sign In{:else}Create Account{/if}
							</button>
						</form>

						<p class="mt-6 text-center text-sm text-slate-400">
							{#if view === 'login'}
								Don't have an account?
								<button
									onclick={() => switchView('register')}
									class="font-medium text-cyan-400 hover:underline"
								>
									Sign Up
								</button>
							{:else}
								Already have an account?
								<button
									onclick={() => switchView('login')}
									class="font-medium text-cyan-400 hover:underline"
								>
									Sign In
								</button>
							{/if}
						</p>
					{/if}
				</div>
			</div>
		{/key}
	</main>
</div>
