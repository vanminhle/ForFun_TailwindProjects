import Image from 'next/image';
import styles from './singlePost.module.css';

const SinglePostPage = () => {
	return (
		<div className={styles.container}>
			<div className={styles.imgContainer}>
				<Image
					src='https://images.pexels.com/photos/12954030/pexels-photo-12954030.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
					alt=''
					fill
					className={styles.img}
				/>
			</div>
			<div className={styles.textContainer}>
				<h1 className={styles.title}>Title</h1>
				<div className={styles.detail}>
					<Image
						className={styles.avatar}
						src='https://images.pexels.com/photos/12954030/pexels-photo-12954030.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
						alt=''
						width={50}
						height={50}
					/>
					<div className={styles.detailText}>
						<span className={styles.detailTitle}>Author: </span>
						<span className={styles.detailValue}>Terry Jefferson</span>
					</div>
					<div className={styles.detailText}>
						<span className={styles.detailTitle}>Published: </span>
						<span className={styles.detailValue}>01.01.2024</span>
					</div>
				</div>
				<div className={styles.content}>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime illo iste labore tempora
					ipsum numquam illum, fuga quisquam minima aspernatur. Voluptas voluptate natus voluptatem
					blanditiis magni, optio ipsam ad consequatur alias reprehenderit.
				</div>
			</div>
		</div>
	);
};

export default SinglePostPage;
