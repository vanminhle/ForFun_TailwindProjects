import styles from './home.module.css';
import Image from 'next/image';

const Home = () => {
  return <div className={styles.container}>
    <div className={styles.textContainer}>
      <h1 className={styles.title}>Creative Thoughts Agency.</h1>
      <p className={styles.desc}>Montes utinam option utinam autem veniam ne quaeque erat
        volutpat laoreet civibus bibendum quisque</p>
      <div className={styles.buttons}>
        <button className={styles.button}>Learn More</button>
        <button className={styles.button}>Contact</button>
      </div>
      <div className={styles.brands}>
        <Image src='/brands.png' alt='' fill className={styles.brandImg} />
      </div>
    </div>
    <div className={styles.imgContainer}>
      <Image src='/hero.gif' alt='' fill unoptimized className={styles.heroImg} />
    </div>
  </div>;
};

export default Home;
