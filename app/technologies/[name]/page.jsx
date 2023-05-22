'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';

import PostCard from '@components/PostCard';

const Technology = () => {
	const params = useParams();
	const [filteredPosts, setFilteredPosts] = useState([]);

	useEffect(() => {
		const fetchPosts = async () => {
			const response = await fetch(`/api/technologies/${params.name}`);
			const data = await response.json();
			setFilteredPosts(data);
		};
		fetchPosts();
	}, []);
	return (
		<section className='w-full flex-center flex-col flex-1'>
			<div className='w-full flex flex-row flex-wrap gap-5 p-10'>
				{filteredPosts.map((post) => (
					<PostCard key={post._id} post={post} />
				))}
			</div>
		</section>
	);
};

export default Technology;
