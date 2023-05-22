'use client';

import { useState, useEffect } from 'react';

import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
	const [searchText, setSearchText] = useState('');
	const [analytics, setAnalytics] = useState({
		homepage_visits: 0,
		posts_visits: 0,
	});

	useEffect(() => {
		const fetchAnalytics = async () => {
			const response = await fetch('/api/analytics');
			const data = await response.json();
			setAnalytics(data);
		};
		fetchAnalytics();
	}, []);

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
			<div className='max-w-md min-w-[300px] flex-1 h-30 flex items-center relative'>
				<input
					onChange={(e) => setSearchText(e.target.value)}
					type='text'
					placeholder='Search Posts'
					className='search'
				></input>
				<Link
					href={searchText === '' ? '#' : `/search/${searchText}`}
					className='absolute right-0 border-l border-gray-200 p-2.5 font-roboto text-gray-700 font-medium text-sm'
				>
					Search
				</Link>
			</div>
			<div className='w-250 h-30'>
				<h1 className='font-roboto text-gray-700 text-sm'>
					Visits from 25. May 2021.
				</h1>
				<p className='font-roboto text-gray-500 text-xs'>
					Homepage visits: {analytics.homepage_visits} <br /> Posts visits:{' '}
					{analytics.posts_visits} <br /> Total visits:{' '}
					{analytics.homepage_visits + analytics.posts_visits}
				</p>
			</div>
		</header>
	);
};

export default Header;
