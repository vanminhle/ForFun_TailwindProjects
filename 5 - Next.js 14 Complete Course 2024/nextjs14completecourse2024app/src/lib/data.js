// // TEMPORARY DATA
// const users = [
// 	{ id: 1, email: 'john@example.com', username: 'John' },
// 	{ id: 2, email: 'david@example.com', username: 'David' }
// ];

import { Post, User } from './models';
import { connectToDb } from './utils';

// const posts = [
// 	{ id: 1, title: 'tile1', body: '........', userId: 1 },
// 	{ id: 2, title: 'tile2', body: '........', userId: 1 },
// 	{ id: 3, title: 'tile3', body: '........', userId: 2 },
// 	{ id: 4, title: 'tile4', body: '........', userId: 2 }
// ];

export const getPosts = async () => {
	try {
		connectToDb();
		const posts = await Post.find();
		return posts;
	} catch (err) {
		console.log(err);
		throw new Error('Failed to fetch posts!');
	}
};

export const getPost = async (slug) => {
	// // console.log(typeof id); id is a string
	// return posts.find((post) => post.id === parseInt(id));

	try {
		connectToDb();
		const post = await Post.findOne({ slug });
		return post;
	} catch (err) {
		console.log(err);
		throw new Error('Failed to fetch post!');
	}
};

export const getUser = async (id) => {
	// // console.log(typeof id); id is a string
	// return users.find((user) => user.id === parseInt(id));

	try {
		connectToDb();
		const user = await User.findById(id);
		return user;
	} catch (err) {
		console.log(err);
		throw new Error('Failed to fetch user!');
	}
};

export const getUsers = async () => {
	try {
		connectToDb();
		const users = await User.find();
		return users;
	} catch (err) {
		console.log(err);
		throw new Error('Failed to fetch users!');
	}
};
