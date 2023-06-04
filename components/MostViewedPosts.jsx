'use client';

import { useState, useEffect } from 'react';

import PostListItem from './PostListItem';

const MostViewedPosts = () => {
	const [mostViewedPosts, setMostViewedPosts] = useState([]);

	useEffect(() => {
		const fetchMostViewedPosts = async () => {
			const timestamp = Date.now(); // Generate a timestamp
			const url = `/api/posts/most-viewed-posts?timestamp=${timestamp}`; // Append the timestamp as a query parameter

			const response = await fetch(url, { cache: 'no-cache' }); // Add cache: 'no-cache' option to the fetch request
			const data = await response.json();
			setMostViewedPosts(data);
		};
		fetchMostViewedPosts();
	}, []);

	return (
		<section className='max-w-[320px] flex mb-10 flex-col p-6 justify-center items-center shadow-2xl hover:shadow-3xl bg-opacity-75'>
			<h1 className='font-roboto text-2xl font-semibold text-gray-700 text-center'>
				Most Viewed Posts
			</h1>
			{mostViewedPosts.map((post) => (
				<PostListItem key={post._id} post={post} />
			))}
		</section>
	);
};

export default MostViewedPosts;
