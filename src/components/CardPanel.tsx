"use client";
import Link from "next/link";
import HospitalCard from "./HospitalCard";
import { useReducer } from "react";

export default function CardPanel() {
  const ratingReducer = (
    ratingMap: Map<string, number>,
    action: { hospitalName: string; rating: number }
  ) => {
    if (action.rating == 0) {
      ratingMap.delete(action.hospitalName);
      return new Map(ratingMap);
    } else {
      return new Map(ratingMap.set(action.hospitalName, action.rating));
    }
  };

  const [ratingMap, dispatchRating] = useReducer(
    ratingReducer,
    new Map<string, number>()
  );

  // For Get all hospital data
  const mockHospitalData = [
    { hid: "001", name: "Chulalongkorn", imgSrc: "/img/chula.jpg" },
    { hid: "002", name: "Rajavithi", imgSrc: "/img/rajavithi.jpg" },
    { hid: "003", name: "Thammasat", imgSrc: "/img/thammasat.jpg" },
  ];

  return (
    <div>
      <div
        style={{
          margin: "20px",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-around",
          alignContent: "space-around",
        }}
      >
        {mockHospitalData.map((hospital) => (
          <Link
            href={`/hospital/${hospital.hid}`}
            key={hospital.hid}
            className="w-1/4"
          >
            <HospitalCard
              key={hospital.hid}
              imgSrc={hospital.imgSrc}
              title={`${hospital.name} Hospital`}
              onRatingChange={(rating: number) => {
                dispatchRating({ rating: rating, hospitalName: hospital.name });
              }}
              rating={ratingMap.get(hospital.name)}
            />
          </Link>
        ))}
      </div>

      {Array.from(ratingMap).map((hospital) => (
        <div
          key={hospital[0]}
          className="text-white mx-4 py-1"
          onClick={() => {
            dispatchRating({ rating: 0, hospitalName: hospital[0] });
          }}
        >
          {hospital[0]}: {hospital[1]}
        </div>
      ))}
    </div>
  );
}
