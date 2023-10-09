import Link from "next/link";
import HospitalCard from "./HospitalCard";

export default async function HospitalCatalog({
  hospitalJson,
}: {
  hospitalJson: any;
}) {
  const hospitalReady = await hospitalJson;
  return (
    <>
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
        {hospitalReady.data.map((hospital: any) => (
          <Link
            href={`/hospital/${hospital.id}`}
            key={hospital.id}
            className="w-1/4"
          >
            <HospitalCard
              key={hospital.id}
              imgSrc={hospital.picture}
              title={`${hospital.name} Hospital`}
            />
          </Link>
        ))}
      </div>
    </>
  );
}
