// 'use client';
import Image from 'next/image';
import styles from './contact.module.css';
// import { useEffect, useState } from 'react';
// import dynamic from 'next/dynamic';

// import HydrationTest from '@/components/hydrationtest';

// const HydrationTestNoSSR = dynamic(() => import('@/components/hydrationtest'), { ssr: false });

const ContactPage = () => {
	// const [isClient, setIsClient] = useState(false);

	// useEffect(() => {
	// 	setIsClient(true);
	// });

	// const a = Math.random();

	// console.log(a);

	return (
		<div className={styles.container}>
			<div className={styles.imgContainer}>
				<Image src='/contact.png' fill className={styles.img} />
			</div>
			<div className={styles.formContainer}>
				{/* <HydrationTestNoSSR /> */}
				{/* {isClient && a} */}
				<form action='' className={styles.form}>
					<input type='text' placeholder='Name or surname' />
					<input type='text' placeholder='Email Address' />
					<input type='phone' placeholder='Phone Number' />
					<textarea
						className='text-area'
						name=''
						id=''
						cols='30'
						rows='10'
						placeholder='Message'
					></textarea>
					<button>Send</button>
				</form>
			</div>
		</div>
	);
};
export default ContactPage;
