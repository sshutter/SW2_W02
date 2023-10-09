import Image from "next/image";
import InteractiveCard from "./InterActiveCard";
import { Rating } from "@mui/material";
import { useEffect, useState } from "react";

const HospitalCard = ({
  imgSrc,
  title,
  onRatingChange,
  rating,
}: {
  imgSrc: string;
  title: string;
  onRatingChange?: Function;
  rating?: any;
}) => {
  return (
    <InteractiveCard>
      <div className="w-full h-[80%] relative rounded-t-lg">
        <Image
          src={imgSrc}
          alt="Hospital Image"
          fill={true}
          className="object-cover rounded-t-lg"
        />
      </div>
      <div className="w-full h-[10%] p-[3px] text-black">
        <h3 className="font-sans font-bold">{title}</h3>
      </div>

      {onRatingChange ? (
        <div
          className="flex justify-center items-center h-[8%] w-full"
          onClick={(e) => {
            e.stopPropagation();
            console.log(e);
          }}
        >
          <Rating
            name="simple-controlled"
            value={rating || 0}
            onChange={(e, newValue: number | null) => {
              e.stopPropagation();
              onRatingChange(newValue);
            }}
          />
        </div>
      ) : (
        ""
      )}
    </InteractiveCard>
  );
};

export default HospitalCard;
