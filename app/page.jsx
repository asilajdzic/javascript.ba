'use client';

import { useEffect } from 'react';

import LatestPosts from '@components/LatestPosts';
import MostViewedPosts from '@components/MostViewedPosts';
import QuizGame from '@components/QuizGame';

const Home = () => {
	useEffect(() => {
		const addHomepageVisit = async () => {
			await fetch('/api/analytics', {
				method: 'PATCH',
				body: JSON.stringify({
					name: 'homepage_visits',
				}),
			});
		};
		addHomepageVisit();
	}, []);

	return (
		<section className='w-full flex-1 flex-center flex-col p-2'>
			<LatestPosts />
			<div className='w-full flex my-4 gap-5 flex-col md:flex-row px-8 justify-between items-center'>
				<QuizGame />
				<MostViewedPosts />
			</div>
		</section>
	);
};

export default Home;
