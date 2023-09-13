"use client";
import Image from "next/image";
import styles from "./Banner.module.css";
import { useState } from "react";

const Banner = () => {
  const covers = [
    "/img/cover.jpg",
    "/img/cover2.jpg",
    "/img/cover3.jpg",
    "/img/cover4.jpg",
  ];
  let [index, setIndex] = useState(0);
  return (
    <div
      className={styles.banner}
      onClick={() => {
        setIndex((index + 1) % covers.length);
      }}
    >
      <Image
        className={`${styles.bannerImg} brightness-50`}
        src={covers[index]}
        alt="Cover"
        fill={true}
        objectFit="cover"
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
