import { useState, useEffect } from 'react';

import PostCard from './PostCard';

const LatestPosts = () => {
	const [latestPosts, setLatestPosts] = useState([]);

	useEffect(() => {
		const fetchLatestPosts = async () => {
			const response = await fetch('/api/posts/latest-posts');
			const data = await response.json();
			setLatestPosts(data);
		};
		fetchLatestPosts();
	}, []);
	return (
		<section>
			<h1 className='font-roboto text-3xl font-semibold mt-3 text-gray-800 text-center'>
				Latest Posts
			</h1>
			<div className='w-full grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] shadow-md hover:shadow-xl p-10 justify-center items-center'>
				{latestPosts.map((post) => (
					<PostCard key={post._id} post={post} />
				))}
			</div>
		</section>
	);
};

export default LatestPosts;
