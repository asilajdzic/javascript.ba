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
			<div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mx-auto shadow-md hover:shadow-xl p-10 justify-center items-center'>
				{latestPosts.map((post) => (
					<div className='flex justify-center' key={post._id}>
						<PostCard post={post} />
					</div>
				))}
			</div>
		</section>
	);
};

export default LatestPosts;
