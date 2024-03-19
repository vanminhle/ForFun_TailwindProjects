const authorization = {
	method: 'GET',
	headers: {
		accept: 'application/json',
		Authorization: import.meta.env.VITE_API
	}
};

export async function load({ fetch }) {
	const res = await fetch(
		'https://api.themoviedb.org/3/movie/popular?language=en-US&include_adult=true&page=1',
		authorization
	);
	const data = await res.json();

	if (res.ok) {
		return {
			popular: data.results
		};
	}
}
