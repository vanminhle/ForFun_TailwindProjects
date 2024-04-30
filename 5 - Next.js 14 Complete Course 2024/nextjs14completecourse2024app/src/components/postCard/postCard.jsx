import styles from './postCard.module.css';
import Image from 'next/image';
import Link from 'next/link';

const postCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image
            src='https://images.pexels.com/photos/12954030/pexels-photo-12954030.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt='' fill className={styles.img} />
        </div>
        <span className={styles.date}>01.01.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.desc}>velit repudiare euismod tellus habeo ludus fringilla fusce vestibulum vulputate
          sociis unum ancillae odio posuere senserit definiebas viderer persius facilis senserit curabitur delicata
          liber mazim maiorum iisque ad ubique taciti audire definitionem quam conclusionemque eum ridiculus
          comprehensam efficitur pla</p>
        <Link className={styles.link} href='/blog/post'>READ MORE</Link>
      </div>
    </div>
  );
};
export default postCard;
