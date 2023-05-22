import { connectToDB } from '@utils/database';

import Post from '@models/post';
import Author from '@models/author';

export const GET = async (req, { params }) => {
	try {
		await connectToDB();

		const post = await Post.findById(params.id).populate('creator');
		post.views++;
		await post.save();

		return new Response(JSON.stringify(post), { status: 200 });
	} catch (error) {
		console.log(error);
		return new Response('Failed to fetch post', { status: 500 });
	}
};
