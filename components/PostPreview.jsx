import Image from 'next/image';

const PostPreview = ({ post }) => {
	const createdAt = new Date(post.createdAt);
	const formattedDate = createdAt.toLocaleString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	});

	return (
		<section className='w-full flex flex-col items-center my-8'>
			<h1 className='font-roboto w-[30rem] text-gray-800 font-semibold text-xl text-center'>
				{post.heading}
			</h1>
			<span className='w-[30rem] flex justify-between my-4'>
				<p className='font-roboto text-gray-300 text-sm text-center'>
					&#128198; {formattedDate}
				</p>
				<p className='font-roboto text-gray-300 text-sm text-center'>
					&#128065; {post.views}
				</p>
			</span>
			{post?.imageUrl && (
				<Image src={post.imageUrl} width={200} height={200} alt='post image' />
			)}
			<hr className='w-[60%] my-8 ' />
			<p className='w-[30rem] font-roboto text-gray-500 text-base text-justify'>
				{post.body}
			</p>
			<hr className='w-[60%] my-8 ' />
			<p className='w-[30rem] font-roboto text-gray-400 text-base text-justify italic '>
				Tags: {post?.tags && post.tags.map((tag) => ' #' + tag)}
			</p>
			<div className='w-[30rem] flex flex-row flex-around'>
				<div className='w-1/4 flex justify-center'></div>
			</div>
		</section>
	);
};

export default PostPreview;
