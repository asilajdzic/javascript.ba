import { connectToDB } from '@utils/database.js';

import Post from '@models/post';

export const GET = async () => {
	try {
		connectToDB();

		const posts = await Post.find({}).sort({ views: -1 }).limit(6);

		return new Response(JSON.stringify(posts), { status: 200 });
	} catch (error) {
		console.log(error);
		return new Response('Failed to fetch posts', { status: 500 });
	}
};
