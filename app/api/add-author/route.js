import { connectToDB } from '@utils/database';

import Author from '@models/author';

export const POST = async (req) => {
	const {
		first_name,
		last_name,
		imageUrl,
		github_link,
		facebook_link,
		linkedin_link,
		twitter_link,
	} = await req.json();
	try {
		await connectToDB();

		const newAuthor = new Author({
			first_name,
			last_name,
			imageUrl,
			github_link,
			facebook_link,
			linkedin_link,
			twitter_link,
		});
		await newAuthor.save();
		return new Response(JSON.stringify(newAuthor), { status: 201 });
	} catch (error) {
		console.log(error);
		return new Response('Failed to create a new Author', { status: 500 });
	}
};
