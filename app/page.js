'use client';

import { useState, useEffect } from 'react';

import PostCard from '@components/PostCard';

const Home = () => {
	const [latestPosts, setLatestPosts] = useState([]);

	useEffect(() => {
		const fetchPosts = async () => {
			const response = await fetch('/api/posts/latest-posts');
			const data = await response.json();
			setLatestPosts(data);
		};
		fetchPosts();
	}, []);

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
		<section className='w-full flex-1 flex-center flex-col'>
			<h1 className='font-roboto text-3xl font-semibold mt-3 text-gray-900 text-center'>
				Latest Posts
			</h1>
			<div className='w-full grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] p-10 justify-center items-center'>
				{latestPosts.map((post) => (
					<PostCard key={post._id} post={post} />
				))}
			</div>
		</section>
	);
};

export default Home;
