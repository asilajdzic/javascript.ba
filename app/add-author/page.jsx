'use client';

import { useState } from 'react';

const defaultFormFields = {
	first_name: '',
	last_name: '',
	imageUrl: '',
	github_link: '',
	facebook_link: '',
	twitter_link: '',
	linkedin_link: '',
};

const AddAuthor = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);

	const handleFormSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await fetch('/api/add-author', {
				method: 'POST',
				body: JSON.stringify({
					first_name: formFields.first_name,
					last_name: formFields.last_name,
					imageUrl: formFields.imageUrl,
					github_link: formFields.github_link,
					facebook_link: formFields.facebook_link,
					twitter_link: formFields.twitter_link,
					linkedin_link: formFields.linkedin_link,
				}),
			});
		} catch (error) {
			console.log(error);
		}
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormFields({ ...formFields, [name]: value });
	};

	return (
		<section className='flex flex-col w-full items-center'>
			<form onSubmit={handleFormSubmit} className='flex flex-col items-center'>
				<input
					className='border border-gray-300 rounded-md px-4 py-2 mb-4'
					name='first_name'
					value={formFields.first_name}
					onChange={handleChange}
					placeholder='First Name'
					required
				/>
				<input
					className='border border-gray-300 rounded-md px-4 py-2 mb-4'
					name='last_name'
					value={formFields.last_name}
					onChange={handleChange}
					placeholder='Last Name'
					required
				/>
				<input
					className='border border-gray-300 rounded-md px-4 py-2 mb-4'
					name='imageUrl'
					value={formFields.imageUrl}
					onChange={handleChange}
					placeholder='Image URL'
					required
				/>
				<input
					className='border border-gray-300 rounded-md px-4 py-2 mb-4'
					name='github_link'
					value={formFields.github_link}
					onChange={handleChange}
					placeholder='GitHub Link'
					required
				/>
				<input
					className='border border-gray-300 rounded-md px-4 py-2 mb-4'
					name='facebook_link'
					value={formFields.facebook_link}
					onChange={handleChange}
					placeholder='Facebook Link'
					required
				/>
				<input
					className='border border-gray-300 rounded-md px-4 py-2 mb-4'
					name='twitter_link'
					value={formFields.twitter_link}
					onChange={handleChange}
					placeholder='Twitter Link'
					required
				/>
				<input
					className='border border-gray-300 rounded-md px-4 py-2 mb-4'
					name='linkedin_link'
					value={formFields.linkedin_link}
					onChange={handleChange}
					placeholder='LinkedIn Link'
					required
				/>
				<button
					className='bg-blue-500 text-white px-4 py-2 rounded-md'
					type='submit'
				>
					Submit Form
				</button>
			</form>
		</section>
	);
};

export default AddAuthor;
