import { connectToDB } from '@utils/database';

import Analytics from '@models/analytics';

export const GET = async () => {
	try {
		await connectToDB();

		const analytics = await Analytics.findOne();
		return new Response(JSON.stringify(analytics), { status: 200 });
	} catch (error) {
		return new Response('Failed to fetch technology posts', { status: 500 });
	}
};

export const PATCH = async (req) => {
	const { name } = await req.json();
	try {
		await connectToDB();

		const analytics = await Analytics.findOne();

		switch (name) {
			case 'homepage_visits':
				analytics.homepage_visits++;
				break;
			case 'posts_visits':
				analytics.posts_visits++;
				break;
			default:
				break;
		}

		await analytics.save();

		return new Response(JSON.stringify(analytics), { status: 200 });
	} catch (error) {
		return new Response('Failed to fetch technology posts', { status: 500 });
	}
};
