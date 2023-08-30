import Image from "next/image";
import styles from "./Banner.module.css";

const Banner = () => {
  return (
    <div className={styles.banner}>
      <Image
        className={`${styles.bannerImg} brightness-50`}
        src={"/img/cover.jpg"}
        alt="Cover"
        fill={true}
        // objectFit="cover"
        priority
      />
      <div className={styles.bannerText}>
        <h1 className="font-sans font-extrabold text-[#f2f2f2]">
          Protecting Our Future Together
        </h1>
        <p className="font-sans font-medium text-[#f2f2f2]">
          Schedule Your Vaccine Today!
        </p>
      </div>
    </div>
  );
};

export default Banner;
