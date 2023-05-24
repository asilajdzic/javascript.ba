import Link from 'next/link';

const PostListItem = ({ post }) => {
	return (
		<Link
			href={`/posts/${post._id}`}
			className='max-w-[280px] items-center justify-center p-2 cursor-pointer hover:scale-[1.075]'
		>
			<h3 className='font-roboto font-semibold mt-3 text-gray-800 hover:text-gray-800'>
				{post.heading} &#128065; {post.views}
			</h3>
		</Link>
	);
};

export default PostListItem;
