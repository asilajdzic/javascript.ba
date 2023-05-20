'use client';

import { useState } from 'react';

import Link from 'next/link';

const SUBCATEGORIES = [
	'tutorials',
	'blogs',
	'news',
	'videos',
	'meetups',
	'jobs',
];

const SecondNav = () => {
	const [toggleDropdown, setToggleDropdown] = useState(false);

	return (
		<nav className='nav'>
			{/* Desktop Nav */}
			<div className='sm:flex hidden'>
				<div className='flex gap-5 flex-wrap'>
					{SUBCATEGORIES.map((category) => (
						<Link
							key={category}
							href={`categories/${category}`}
							className='nav_link'
						>
							{category}
						</Link>
					))}
				</div>
			</div>
			{/* Mobile Nav */}

			<div className='sm:hidden flex'>
				<span
					className='nav_link cursor-pointer'
					onClick={() => setToggleDropdown((prev) => !prev)}
				>
					Categories
					{toggleDropdown && (
						<div className='dropdown'>
							{SUBCATEGORIES.map((category) => (
								<Link
									key={category}
									href={`categories/${category}`}
									className='dropdown_link'
								>
									{category}
								</Link>
							))}
						</div>
					)}
				</span>
			</div>
		</nav>
	);
};

export default SecondNav;
