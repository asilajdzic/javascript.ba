'use client';

import { useState } from 'react';

import Link from 'next/link';
import Image from 'next/image';

const Nav = () => {
	const [toggleDropdown, setToggleDropdown] = useState(false);

	const TECHNOLOGIES = [
		'javascript',
		'typescript',
		'nodejs',
		'denojs',
		'reactjs',
		'angularjs',
		'vuejs',
		'emberjs',
		'jquerry',
		'meteorjs',
		'other',
	];

	return (
		<nav className='nav'>
			{/* Desktop Nav */}
			<div className='md:flex hidden'>
				<div className='flex gap-5 flex-wrap'>
					<Link href='/' className='nav_link'>
						Home
					</Link>
					{TECHNOLOGIES.map((tech) => (
						<Link key={tech} href={'technologies/' + tech} className='nav_link'>
							{tech}
						</Link>
					))}
				</div>
			</div>
			{/* Mobile Nav */}

			<div className='md:hidden flex'>
				<span
					className='nav_link cursor-pointer'
					onClick={() => setToggleDropdown((prev) => !prev)}
				>
					Menu
					{toggleDropdown && (
						<div className='dropdown'>
							<Link href='/' className='dropdown_link'>
								Home
							</Link>
							{TECHNOLOGIES.map((tech) => (
								<Link
									key={tech}
									href={'technologies/' + tech}
									className='dropdown_link'
								>
									{tech}
								</Link>
							))}
						</div>
					)}
				</span>
			</div>

			{/* Social Media */}
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
		</nav>
	);
};

export default Nav;
