import Image from 'next/image';
import styles from './about.module.css';

const AboutPage = () => {
  return (
    <div>
      <div className={styles.imgContainer}>
        {/*<Image*/}
        {/*  src='https://images.pexels.com/photos/19845817/pexels-photo-19845817/free-photo-of-a-small-white-building-in-the-middle-of-a-field.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'*/}
        {/*  alt='' fill />*/}
        <Image src='/about.png' alt='' fill />
      </div>
    </div>
  );
};
export default AboutPage;
