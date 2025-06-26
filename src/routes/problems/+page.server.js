import { allProblems } from '$lib/data/problems.js';

export function load() {
	// 1. Import the data.
	// 2. Return it as a prop named `problemTable`.
	return {
		problemTable: allProblems
	};
}
