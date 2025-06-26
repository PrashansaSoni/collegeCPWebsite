import { error } from '@sveltejs/kit';

export async function load({ params }) {
	try {
		const planModule = await import(`../../../lib/data/plans/${params.slug}.js`);
		console.log(planModule);

		return {
			studyPlan: planModule.default
		};
	} catch (e) {
		throw error(404, `Study plan not found with this error ${e}`);
	}
}
