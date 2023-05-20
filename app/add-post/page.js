'use client';

import { useState } from 'react';

const defaultFormFields = {
	creator: '64681b273197ef9799682f67',
	technology: '',
	category: '',
	heading: '',
	body: '',
	imageUrl: '',
	tags: '',
};

const AddPost = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);

	const handleFormSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await fetch('/api/add-post', {
				method: 'POST',
				body: JSON.stringify({
					creator: formFields.creator,
					technology: formFields.technology,
					category: formFields.category,
					heading: formFields.heading,
					body: formFields.body,
					imageUrl: formFields.imageUrl,
					tags: formFields.tags.split(' '),
					createdAt: new Date(),
					views: 0,
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
		<section className='w-full flex flex-col items-center'>
			<form className='flex flex-col items-center' onSubmit={handleFormSubmit}>
				<input
					className='border border-gray-300 rounded-md px-4 py-2 mb-4'
					name='technology'
					value={formFields.technology}
					onChange={handleChange}
					placeholder='Technology'
				/>
				<input
					className='border border-gray-300 rounded-md px-4 py-2 mb-4'
					name='category'
					value={formFields.category}
					onChange={handleChange}
					placeholder='Category'
				/>
				<input
					className='border border-gray-300 rounded-md px-4 py-2 mb-4'
					name='heading'
					value={formFields.heading}
					onChange={handleChange}
					placeholder='Heading'
				/>
				<textarea
					className='border border-gray-300 rounded-md px-4 py-2 mb-4'
					name='body'
					value={formFields.body}
					onChange={handleChange}
					placeholder='Body'
				/>
				<input
					className='border border-gray-300 rounded-md px-4 py-2 mb-4'
					name='imageUrl'
					value={formFields.imageUrl}
					onChange={handleChange}
					placeholder='Image URL'
				/>
				<input
					className='border border-gray-300 rounded-md px-4 py-2 mb-4'
					name='tags'
					value={formFields.tags}
					onChange={handleChange}
					placeholder='Tags'
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

export default AddPost;
