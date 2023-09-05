import Banner from "@/components/Banner";
// import VaccineCard from "@/components/VaccineCard";
import HospitalCard from "@/components/HospitalCard";

// const vaccineList: any = [
//   {
//     imgSrc: "/img/moderna.jpg",
//     title: "Moderna",
//     effectiveness: "94.1%",
//     dosing: "2 Doses (4 Weeks between the shots)",
//     possibleSideEffect:
//       "Pain, Swelling, Redness at the injection site, Chills or shivers, Headache, Fatigue",
//   },
//   {
//     imgSrc: "/img/astrazeneca.jpg",
//     title: "AstraZeneca",
//     effectiveness: "70.4 - 82.4%",
//     dosing: "2 Doses (4-12 Weeks between the shots)",
//     possibleSideEffect:
//       "Pain at the injection site, Chills or shivers, Fever, Headache, Fatigue, Muscle pain, Thrombosis",
//   },
// ];

const hospitalsList: any = [
  {
    imgSrc: "/img/chula.jpg",
    title: "Chulalongkorn Hospital",
  },
  {
    imgSrc: "/img/rajavithi.jpg",
    title: "Rajavithi Hospital",
  },
  {
    imgSrc: "/img/thammasat.jpg",
    title: "Thammasat Hospital",
  },
];

export default function Home() {
  return (
    <main>
      <Banner />
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
        {hospitalsList.map((hospital: any) => (
          <HospitalCard
            imgSrc={hospital.imgSrc}
            title={hospital.title}
            key={hospital.title}
          />
        ))}
      </div>
    </main>
  );
}
