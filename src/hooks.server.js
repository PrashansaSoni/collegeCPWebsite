import { POCKETBASE_URL } from '$env/static/private';
import PocketBase from 'pocketbase';

export async function handle({ event, resolve }) {
	event.locals.pb = new PocketBase(POCKETBASE_URL);

	event.locals.pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '');

	try {
		if (event.locals.pb.authStore.isValid) {
			await event.locals.pb.collection('users').authRefresh();
			event.locals.user = { ...event.locals.pb.authStore.model };
			//console.log(event.locals.user);
		} else {
			event.locals.user = null;
		}
	} catch (_) {
		event.locals.pb.authStore.clear();
		event.locals.user = null;
	}

	const response = await resolve(event);

	response.headers.set(
		'set-cookie',
		event.locals.pb.authStore.exportToCookie({
			httpOnly: true,
			secure: process.env.NODE_ENV === 'production'
		})
	);
	// console.log(response);
	return response;
}
