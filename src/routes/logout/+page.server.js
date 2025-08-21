import { redirect } from '@sveltejs/kit';

export function load({ locals, cookies }) {
	locals.pb?.authStore?.clear?.();

	cookies.delete('pb_auth', { path: '/' });

	locals.user = null;
	console.log('hi');
	throw redirect(303, '/login');
}
