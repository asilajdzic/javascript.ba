import { connectToDB } from '@utils/database.js';

import Post from '@models/post';

export const GET = async (req, { params }) => {
	try {
		connectToDB();

		const searchText = params.searchText;
		const posts = await Post.find({
			$or: [
				{ heading: { $regex: searchText, $options: 'i' } },
				{ body: { $regex: searchText, $options: 'i' } },
				{ tags: { $regex: searchText, $options: 'i' } },
				{ technology: { $regex: searchText, $options: 'i' } },
			],
		});

		return new Response(JSON.stringify(posts), { status: 200 });
	} catch (error) {
		console.log(error);
		return new Response('Failed to fetch posts', { status: 500 });
	}
};
