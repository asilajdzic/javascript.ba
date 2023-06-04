import Image from 'next/image';
import Link from 'next/link';

const PostPreview = ({ post }) => {
	const createdAt = new Date(post.createdAt);
	const formattedDate = createdAt.toLocaleString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	});

	return (
		<section className='w-full  flex flex-col items-center my-8'>
			<h1 className='font-roboto sm:w-[30rem] text-gray-800 font-semibold text-xl text-center'>
				{post.heading}
			</h1>
			<span className='sm:w-[30rem] flex justify-between my-4'>
				<p className='font-roboto text-gray-400 text-sm text-center'>
					&#128198; {formattedDate}
				</p>
				<p className='font-roboto text-gray-400 text-sm text-center'>
					&#128065; {post.views}
				</p>
			</span>
			{post?.imageUrl && (
				<Image src={post.imageUrl} width={200} height={200} alt='post image' />
			)}
			<hr className='w-[60%] my-8 ' />
			<p className='sm:w-[30rem] font-roboto text-gray-500 text-base text-justify'>
				{post.body}
			</p>
			<Link
				target='_blank'
				href={post.source_link || '#'}
				className='font-roboto mb-3 text-sm mt-3 text-js_black font-semibold outline-0 uppercase bg-js_yellow px-2 py-1'
			>
				Read More
			</Link>
			<hr className='w-[60%] my-8 ' />
			<p className='sm:w-[30rem] font-roboto text-gray-400 text-base text-justify italic '>
				Tags: {post?.tags && post.tags.map((tag) => ' #' + tag)}
			</p>
			<hr className='sm:w-[60%] my-8 ' />
			{post?.creator && (
				<div className='sm:w-[30rem] flex flex-row'>
					<div className='w-1/3 flex flex-col items-center gap-3'>
						<Image
							className='rounded-full'
							src={post.creator.imageUrl}
							width={60}
							height={60}
							alt='profile picture'
						/>
						<p className='font-roboto text-gray-600 font-medium text-base'>
							{post.creator.first_name} {post.creator.last_name}
						</p>
					</div>
					<div className='w-1/3 flex items-center justify-center'>
						<Link href={post.creator.facebook_link} className='w-8 h-8'>
							<Image
								alt='Facebook Icon'
								src='/assets/images/facebook-icon.svg'
								className='object-contain'
								width={28}
								height={28}
							/>
						</Link>
						<Link href={post.creator.twitter_link} className='w-8 h-8'>
							<Image
								alt='Twitter Icon'
								src='/assets/images/twitter-icon.svg'
								className='object-contain'
								width={28}
								height={28}
							/>
						</Link>
						<Link href={post.creator.github_link} className='w-8 h-8'>
							<Image
								alt='Github Icon'
								src='/assets/images/github-icon.svg'
								className='object-contain'
								width={24}
								height={24}
							/>
						</Link>
						<Link href={post.creator.linkedin_link} className='w-8 h-8'>
							<Image
								alt='LinkedIn Icon'
								src='/assets/images/linkedin-icon.svg'
								className='object-contain'
								width={28}
								height={28}
							/>
						</Link>
					</div>
				</div>
			)}
		</section>
	);
};

export default PostPreview;
