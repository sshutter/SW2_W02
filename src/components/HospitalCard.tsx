import Image from "next/image";
import InteractiveCard from "./InterActiveCard";

const HospitalCard = ({ imgSrc, title }: { imgSrc: string; title: string }) => {
  return (
    <InteractiveCard>
      <div className="w-full h-[90%] relative rounded-t-lg">
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
    </InteractiveCard>
  );
};

export default HospitalCard;
