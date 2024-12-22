import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.home_container}>
        <div className={styles.home_content}>
            <h1><strong className={styles.life1}>Let us find your</strong> <br />
            <strong className={styles.life2}>Forever Food.</strong></h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br />
                 Nesciunt illo tenetur fuga ducimus numquam ea!</p>

            <div className={styles.btn_div}>
                <button className={styles.btn1}>Search Now</button>
                <button className={styles.btn2}>Know More</button>
            </div>
        </div>
    </div>
  );
}

export default Home;