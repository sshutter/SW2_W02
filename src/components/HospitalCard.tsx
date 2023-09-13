import Image from "next/image";
import InteractiveCard from "./InterActiveCard";
import { Rating } from "@mui/material";
import { useState } from "react";

const HospitalCard = ({
  imgSrc,
  title,
  onRatingChange,
}: {
  imgSrc: string;
  title: string;
  onRatingChange: Function;
}) => {
  const [rating, setRating] = useState<number | null>(0);
  return (
    <InteractiveCard>
      <div className="w-full h-[80%] relative rounded-t-lg">
        <Image
          src={imgSrc}
          alt="Hospital Image"
          fill={true}
          className="object-right-top object-cover rounded-t-lg"
        />
      </div>
      <div className="w-full h-[10%] p-4 text-black align-center">
        <h3 className="font-sans font-bold">{title}</h3>
      </div>
      <Rating
        className="h-[8%] w-full p-2"
        name="simple-controlled"
        value={rating}
        onChange={(event, newValue: number | null) => {
          onRatingChange(newValue);
          setRating(newValue);
        }}
      />
    </InteractiveCard>
  );
};

export default HospitalCard;
