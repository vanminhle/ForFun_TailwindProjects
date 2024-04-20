import Image from 'next/image';
import styles from './about.module.css';

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subTitle}>About Agency</h2>
        <h1 className={styles.title}>We create digital ideas that are bigger, bolder, braver and better</h1>
        <p className={styles.desc}>Ubique viderer sagittis ne conubia placerat eum expetenda libero dictum
          repudiandae theophrastus quaerendum utinam delicata semper ridens
          elementum pertinax deseruisse nullam neque amet instructior sed </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Year of experience</p>
          </div>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Year of experience</p>
          </div>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Year of experience</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src='/about.png' alt='About Agency' fill className={styles.img} />
      </div>
    </div>
  );
};
export default AboutPage;
