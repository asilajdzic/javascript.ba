import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
	return (
		<header className='header'>
			<Link href='/'>
				<Image
					src='/assets/images/logo.png'
					className='object-contain'
					width={240}
					height={80}
					alt='logo'
				/>
			</Link>
			<div className='max-w-md min-w-[300px] flex-1 h-30 flex items-center'>
				<input
					type='text'
					placeholder='Search Posts'
					className='search'
				></input>
			</div>
			<div className='w-250 h-30'>
				<h1 className='font-roboto text-gray-700 text-sm'>
					Visits from 25. May 2021.
				</h1>
				<p className='font-roboto text-gray-500 text-xs'>
					Homepage visits: 0 <br /> Posts visits: 0 <br /> Total visits: 0
				</p>
			</div>
		</header>
	);
};

export default Header;
