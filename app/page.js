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

	return (
		<section className='w-full flex-center flex-col'>
			<div className='w-full flex flex-row flex-wrap gap-5 p-10'>
				{latestPosts.map((post) => (
					<PostCard key={post._id} post={post} />
				))}
			</div>
		</section>
	);
};

export default Home;
