import { connectToDB } from '@utils/database';

import Post from '@models/post';

export const GET = async (req, { params }) => {
	try {
		await connectToDB();

		const posts = await Post.find({ category: params.category });
		return new Response(JSON.stringify(posts), { status: 200 });
	} catch (error) {
		console.log(error);
		return new Response('Failed to fetch technology posts', { status: 500 });
	}
};
