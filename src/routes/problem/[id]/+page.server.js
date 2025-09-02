import { promises as fs } from 'fs';
import { join } from 'path';
import { redirect } from '@sveltejs/kit';

export async function load({ params, locals }) {
	if (!locals.user) {
		throw redirect(302, '/login');
	}
	const cwd = process.cwd();
	const filePath = join(cwd, 'src/lib/data/problems.json');
	const data = await fs.readFile(filePath, 'utf8');

	const Problems = JSON.parse(data);
	const Problem = Problems.filter((Problems) => Problems.id == params.id);
	return { problem: Problem };
}
