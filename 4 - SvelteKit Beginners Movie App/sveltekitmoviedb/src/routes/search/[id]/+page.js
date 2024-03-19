const authorization = {
	method: 'GET',
	headers: {
		accept: 'application/json',
		Authorization: import.meta.env.VITE_API
	}
};

export async function load({ fetch, params }) {
	const req = await fetch(
		`https://api.themoviedb.org/3/search/movie?query=${params.id}&include_adult=true&language=en-US`,
		authorization
	);
	const res = await req.json();

	if (req.ok) {
		return res;
	}
}
