'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';

import PostPreview from '@components/PostPreview';

const Post = () => {
	const [post, setPost] = useState({});
	const params = useParams();

	useEffect(() => {
		const fetchPost = async () => {
			const response = await fetch(`/api/posts/${params.id}`);
			const data = await response.json();

			setPost(data);
		};

		fetchPost();
	}, [params.id]);

	useEffect(() => {
		const addHomepageVisit = async () => {
			await fetch('/api/analytics', {
				method: 'PATCH',
				body: JSON.stringify({
					name: 'posts_visits',
				}),
			});
		};
		addHomepageVisit();
	}, []);

	return <PostPreview post={post} />;
};

export default Post;
