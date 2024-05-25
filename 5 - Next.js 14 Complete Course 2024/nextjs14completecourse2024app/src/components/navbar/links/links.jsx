'use client';
import styles from './link.module.css';
import NavLink from '@/components/navbar/links/navLink/navLink';
import Image from 'next/image';
import { useState } from 'react';

const links = [
	{
		title: 'Homepage',
		path: '/'
	},
	{
		title: 'About',
		path: '/about'
	},
	{
		title: 'Contact',
		path: '/contact'
	},
	{
		title: 'Blog',
		path: '/blog'
	}
];
const Links = () => {
	const [open, setOpen] = useState(false);

	const session = true;
	const isAdmin = true;

	return (
		<div className={styles.container}>
			<div className={styles.links}>
				{links.map((link) => (
					// <Link href={link.path} key={link.title}>{link.title}</Link>
					<NavLink item={link} key={link.title} />
				))}
				{session ? (
					<>
						{isAdmin && <NavLink item={{ title: 'Admin', path: '/Admin' }} />}
						<button className={styles.logout}>Logout</button>
					</>
				) : (
					<NavLink item={{ title: 'Login', path: '/login' }} />
				)}
			</div>
			{/* <button className={styles.menuButton} onClick={() => setOpen((prev) => !prev)}>
				Menu
			</button> */}
			<Image
				className={styles.menuButton}
				src='/menu.png'
				alt=''
				width={30}
				height={30}
				onClick={() => setOpen((prev) => !prev)}
			/>
			{open && (
				<div className={styles.mobileLinks} onClick={() => setOpen((prev) => !prev)}>
					{links.map((link) => (
						<NavLink item={link} key={link.title} />
					))}
				</div>
			)}
		</div>
	);
};

export default Links;
