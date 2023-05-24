import { connectToDB } from '@utils/database';
import Question from '@models/question';

export const GET = async (req, { params }) => {
	try {
		await connectToDB();

		const questions = await Question.aggregate([
			{ $match: { difficulty: params.difficulty } },
			{ $sample: { size: 10 } },
		]);

		return new Response(JSON.stringify(questions), { status: 200 });
	} catch (error) {
		console.log(error);
		return new Response('Failed to fetch question', { status: 500 });
	}
};
