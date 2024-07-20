'use server';

import { revalidatePath } from 'next/cache';
import { Post } from './models';
import { connectToDb } from './utils';
import { signIn, signOut } from '@/lib/auth';

export const addPost = async (formData) => {
	// const title = formData.get('title');
	// const desc = formData.get('desc');
	// const slug = formData.get('slug');

	// console.log(title, desc, slug);

	const { title, desc, slug, userId } = Object.fromEntries(formData);

	try {
		connectToDb();
		const newPost = new Post({
			title,
			desc,
			slug,
			userId,
		});

		await newPost.save();
		console.log('saved to DB!');
		revalidatePath('/blog');
	} catch (err) {
		console.log(err);
		return { error: 'Something went wrong!' };
	}
};

export const deletePost = async (formData) => {
	const { id } = Object.fromEntries(formData);

	try {
		connectToDb();

		await Post.findByIdAndDelete(id);
		console.log('deleted from DB!');
		revalidatePath('/blog');
	} catch (err) {
		console.log(err);
		return { error: 'Something went wrong!' };
	}
};

export const handleGithubLogin = async () => {
	await signIn('github');
};

export const handleLogout = async () => {
	await signOut();
};
