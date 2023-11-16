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
        data-testid="hospital-catalog"
      >
        {hospitalReady.data.map((hospital: any) => (
          <Link
            href={`/hospital/${hospital.id}`}
            key={hospital.id}
            className="w-[100%] sm:w-[50%] md:w-[30%] lg:w-[25%] p-2 sm:p-4 md:p-4 lg:p-8"
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
