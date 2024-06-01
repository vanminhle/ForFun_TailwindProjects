// TEMPORARY DATA
const users = [
	{ id: 1, email: 'john@example.com', username: 'John' },
	{ id: 2, email: 'david@example.com', username: 'David' }
];

const posts = [
	{ id: 1, title: 'tile1', body: '........', userId: 1 },
	{ id: 2, title: 'tile2', body: '........', userId: 1 },
	{ id: 3, title: 'tile3', body: '........', userId: 2 },
	{ id: 4, title: 'tile4', body: '........', userId: 2 }
];

export const getPosts = async () => {
	return posts;
};

export const getPost = async (id) => {
	// console.log(typeof id); id is a string
	return posts.find((post) => post.id === parseInt(id));
};

export const getUser = async (id) => {
	// console.log(typeof id); id is a string
	return users.find((user) => user.id === parseInt(id));
};
