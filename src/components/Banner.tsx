"use client";
import Image from "next/image";
import styles from "./Banner.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const Banner = () => {
  const covers = [
    "/img/cover.jpg",
    "/img/cover2.jpg",
    "/img/cover3.jpg",
    "/img/cover4.jpg",
  ];
  let [index, setIndex] = useState(0);
  const router = useRouter();

  const { data: session } = useSession();

  return (
    <div
      className={styles.banner}
      onClick={() => {
        setIndex((index + 1) % covers.length);
      }}
    >
      <Image
        className={"brightness-50"}
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
      {session ? (
        <div className="absolute top-20 right-10 font-semibold text-[#f2f2f2] text-xl">
          Hello {session.user?.name}
        </div>
      ) : null}
      <button
        className="bg-white text-[#3B88D2] border-[#3B88D2] font-semibold py-2 px-2 m-7 rounded z-30 absolute bottom-0 right-0 hover:bg-[#3B88D2] hover:text-white hover:border-transparent"
        onClick={(e) => {
          e.stopPropagation();
          router.push("/hospital");
        }}
      >
        Select Hospital For Vaccine Booking Now
      </button>
    </div>
  );
};

export default Banner;
