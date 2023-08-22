import Image from "next/image";
import styles from "./Banner.module.css";

const Banner = () => {
  return (
    <div className={styles.banner}>
      <Image
        className={styles.bannerImg}
        src={"/img/cover.jpg"}
        alt="Cover"
        fill={true}
        objectFit="cover"
        priority
      />
      <div className={styles.bannerText}>
        <h1>Protecting Our Future Together</h1>
        <p>Schedule Your Vaccine Today!</p>
      </div>
    </div>
  );
};

export default Banner;
