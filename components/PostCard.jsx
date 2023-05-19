import Image from 'next/image';
import { useRouter } from 'next/navigation';

const PostCard = ({ post }) => {
	const router = useRouter();
	return (
		<div
			onClick={() => router.push('/posts/' + post._id)}
			className='min-w-[120px] max-w-[220px]  flex flex-col items-center overflow-hidden cursor-pointer'
		>
			<Image
				src={post.imageUrl}
				width={150}
				height={150}
				alt='post image'
				className='transition-transform duration-700 transform hover:scale-110'
			/>
			<h3 className='font-roboto font-semibold mt-3 text-gray-900 text-justify'>
				{post.heading}
			</h3>
		</div>
	);
};

export default PostCard;
