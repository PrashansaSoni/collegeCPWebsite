import { allProblems } from '$lib/data/problems.js';

export function load() {
	return {
		problemTable: allProblems
	};
}
