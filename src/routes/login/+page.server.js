import { fail, redirect } from '@sveltejs/kit';
export const actions = {
	register: async ({ locals, request }) => {
		console.log('Register action triggered');

		const formData = Object.fromEntries(await request.formData());
		const { username, email, password, passwordConfirm } = formData;

		if (!username || !email || !password || !passwordConfirm) {
			console.warn(' Missing required fields');
			return fail(400, { formData, error: true, message: 'All fields are required.' });
		}
		if (password !== passwordConfirm) {
			console.warn('Passwords do not match');
			return fail(400, { formData, error: true, message: 'Passwords do not match.' });
		}

		try {
			const user = await locals.pb
				.collection('users')
				.create({ username, email, password, passwordConfirm });
			console.log(' User created:', user);
		} catch (err) {
			console.error('❌ User creation failed:', err?.response?.data || err.message);
			return fail(err.status || 500, {
				formData,
				error: true,
				message: 'User creation failed. Email or username may already be in use.'
			});
		}

		try {
			await locals.pb.collection('users').requestVerification(email);
			console.log('Verification email sent');
		} catch (err) {
			console.error('❌ Email verification failed:', err?.response?.data || err.message);
			return fail(500, {
				formData,
				error: true,
				message: 'User created but verification email failed. Try again later.'
			});
		}

		return fail(200, {
			formData,
			success: true,
			verifyNotice: true,
			message: 'Registration successful. Please verify your email before logging in.'
		});
	},
	// Login Action
	login: async ({ request, locals }) => {
		const formData = await request.formData();
		const data = Object.fromEntries(formData);

		try {
			const authData = await locals.pb
				.collection('users')
				.authWithPassword(data.email, data.password);

			// Check if the user is verified
			if (!authData.record.verified) {
				locals.pb.authStore.clear(); // Clear session if unverified
				return fail(403, {
					data,
					error: true,
					message: 'Please verify your email before logging in.'
				});
			}

			// Optional: You can also store the user in locals if needed
			// locals.user = authData.record;
		} catch (err) {
			console.error('❌ Login Error:', err);
			return fail(401, {
				data,
				error: true,
				message: 'Invalid credentials. Please check your email and password.'
			});
		}

		throw redirect(303, '/categories');
	},

	logout: ({ locals }) => {
		locals.pb.authStore.clear();
		locals.user = null;
		throw redirect(303, '/login');
	},

	resetPassword: async ({ locals, request }) => {
		const formData = Object.fromEntries(await request.formData());
		const { email } = formData;

		if (!email) {
			return fail(400, { error: true, message: 'Email field is required.' });
		}

		try {
			await locals.pb.collection('users').requestPasswordReset(email);
		} catch (err) {
			console.error('❌ Password Reset Error:', err);
			return fail(500, {
				formData,
				error: true,
				message: 'Something went wrong. Please check the email and try again.'
			});
		}

		return fail(200, {
			formData,
			success: true,
			resetNotice: true,
			message: 'If an account exists for this email, a reset link has been sent.'
		});
	},
	//================================================
	// OAuth2 (Not working)
	//================================================
	loginWithOAuth: async ({ locals, request, cookies }) => {
		const formData = await request.formData();
		const provider = formData.get('provider');

		if (!provider) {
			return fail(400, { error: true, message: 'No provider specified.' });
		}

		try {
			const authMethods = await locals.pb.collection('users').listAuthMethods();
			if (!authMethods.authProviders || authMethods.authProviders.length === 0) {
				return fail(500, {
					error: true,
					message: 'Authentication is not configured on the server.'
				});
			}

			const selectedProvider = authMethods.authProviders.find((p) => p.name === provider);
			if (!selectedProvider) {
				return fail(404, { error: true, message: 'Authentication provider not available.' });
			}

			const redirectURL = `POCKETBASE_URL/auth/callback`;

			cookies.set('oauth_state', selectedProvider.state, { path: '/', httpOnly: true });
			cookies.set('oauth_verifier', selectedProvider.codeVerifier, { path: '/', httpOnly: true });

			throw redirect(303, selectedProvider.authUrl + redirectURL);
		} catch (err) {
			console.error('OAuth Init Error:', err);
			return fail(500, { error: true, message: 'Failed to initiate OAuth flow.' });
		}
	}
};
