import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
	return (
		<footer className='footer'>
			<Link href='/'>
				<Image
					src='/assets/images/logo.png'
					width={240}
					height={80}
					alt='logo'
				/>
			</Link>
			<div>
				<p className='font-roboto text-gray-300 text-xs text-center'>
					&copy; 2023. All rights reserved.
					<br />
					Contact: asilajdzic2000@gmail.com
				</p>
			</div>
			<div className='social_media'>
				<Link href={'https://www.facebook.com/'} className='w-8 h-8'>
					<Image
						alt='Facebook Icon'
						src='/assets/images/facebook-icon.svg'
						className='object-contain'
						width={28}
						height={28}
					/>
				</Link>
				<Link href={'https://www.youtube.com/'} className='w-8 h-8'>
					<Image
						alt='Youtube Icon'
						src='/assets/images/youtube-icon.svg'
						className='object-contain'
						width={28}
						height={28}
					/>
				</Link>
				<Link href={'https://twitter.com/home'} className='w-8 h-8'>
					<Image
						alt='Twitter Icon'
						src='/assets/images/twitter-icon.svg'
						className='object-contain'
						width={28}
						height={28}
					/>
				</Link>
			</div>
		</footer>
	);
};

export default Footer;
