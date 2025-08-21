export function load({ locals }) {
	// The `locals.user` object is created in hooks.server.js,we pass it to the page's data prop
	// console.log(locals.user);
	return {
		user: locals.user
	};
}
