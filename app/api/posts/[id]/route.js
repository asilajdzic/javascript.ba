import { connectToDB } from '@utils/database';

import Post from '@models/post';

export const GET = async (req, { params }) => {
	try {
		await connectToDB();

		const post = await Post.findById(params.id);

		return new Response(JSON.stringify(post), { status: 200 });
	} catch (error) {
		return new Response('Failed to fetch post', { status: 500 });
	}
};
