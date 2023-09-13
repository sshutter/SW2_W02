"use client";
import HospitalCard from "./HospitalCard";
import { useReducer } from "react";

export default function CardPanel() {
  const ratingReducer = (
    ratingMap: Map<string, number>,
    action: { vaccineName: string; rating: number }
  ) => {
    if (action.rating == 0) {
      ratingMap.delete(action.vaccineName);
      return new Map(ratingMap);
    } else {
      return new Map(ratingMap.set(action.vaccineName, action.rating));
    }
  };

  const [ratingMap, dispatchRating] = useReducer(
    ratingReducer,
    new Map<string, number>()
  );

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
        <HospitalCard
          imgSrc={"/img/chula.jpg"}
          title={"Chalalongkorn Hospital"}
          onRatingChange={(rating: number) => {
            dispatchRating({ rating: rating, vaccineName: "Chula" });
          }}
          rating={ratingMap.get("Chula")}
        />
        <HospitalCard
          imgSrc={"/img/rajavithi.jpg"}
          title={"Rajavithi Hospital"}
          onRatingChange={(rating: number) => {
            dispatchRating({ rating: rating, vaccineName: "Rajavithi" });
          }}
          rating={ratingMap.get("Rajavithi")}
        />
        <HospitalCard
          imgSrc={"/img/thammasat.jpg"}
          title={"Thammasat Hospital"}
          onRatingChange={(rating: number) => {
            dispatchRating({ rating: rating, vaccineName: "Thammasat" });
          }}
          rating={ratingMap.get("Thammasat")}
        />
      </div>

      {Array.from(ratingMap).map((vaccine) => (
        <div
          key={vaccine[0]}
          className="text-white mx-4 py-1"
          onClick={() => {
            dispatchRating({ rating: 0, vaccineName: vaccine[0] });
          }}
        >
          {vaccine[0]}: {vaccine[1]}
        </div>
      ))}
    </div>
  );
}
