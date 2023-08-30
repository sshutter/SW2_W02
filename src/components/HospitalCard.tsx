import Image from "next/image";

const HospitalCard = ({ imgSrc, title }: { imgSrc: string; title: string }) => {
  return (
    <div className="w-[30vw] h-[60vh] bg-[#f2f2f2] shadow-md rounded-lg overflow-hidden">
      <div className="w-[100%] h-[90%] relative">
        <Image
          src={imgSrc}
          alt="Hospital Image"
          fill={true}
          className="object-right-top object-cover"
        />
      </div>
      <div className="h-[10%] p-4 text-black align-bottom">
        <h3 className="font-sans font-bold">{title}</h3>
      </div>
    </div>
  );
};

export default HospitalCard;
