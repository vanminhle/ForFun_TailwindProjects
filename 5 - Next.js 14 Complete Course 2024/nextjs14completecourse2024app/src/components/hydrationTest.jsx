'use client';

const hydrationtest = () => {
	const a = Math.random();

	console.log(a);

	return <div>{a}</div>;
};

export default hydrationtest;
