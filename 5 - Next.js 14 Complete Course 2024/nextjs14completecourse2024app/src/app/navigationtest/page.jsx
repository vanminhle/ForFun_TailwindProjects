'use client';
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const NavigationTestPage = () => {
	// CLIENT SIDE ONLY
	const router = useRouter();
	const pathName = usePathname();
	const searchParams = useSearchParams();

	const q = searchParams.get('q');

	console.log(pathName);
	console.log(q);

	const handleClick = () => {
		console.log('clicked');
		router.push('/');
		// router.replace('/');
		// router.refresh();
		// router.forward();
		// router.back();
	};

	return (
		<div>
			<Link href='/' prefetch={false}>
				Click Here
			</Link>
			<button onClick={handleClick}>Write And Redirect</button>
		</div>
	);
};

export default NavigationTestPage;
