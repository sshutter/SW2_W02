import Banner from "@/components/Banner";
import VaccineCard from "@/components/VaccineCard";

const vaccineList: any = [
  {
    imageUrl: "/img/moderna.jpg",
    title: "Moderna",
    effectiveness: "94.1%",
    dosing: "2 Doses (4 Weeks between the shots)",
    possibleSideEffect:
      "Pain, Swelling, Redness at the injection site, Chills or shivers, Headache, Fatigue",
  },
  // {
  //   imageUrl: "/img/astrazeneca.jpg",
  //   title: "AstraZeneca",
  //   effectiveness: "70.4 - 82.4%",
  //   dosing: "2 Doses (4-12 Weeks between the shots)",
  //   possibleSideEffect:
  //     "Pain at the injection site, Chills or shivers, Fever, Headache, Fatigue, Muscle pain, Thrombosis",
  // },
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
        {vaccineList.map((vaccine: any) => (
          <VaccineCard
            key={vaccine.title}
            imageUrl={vaccine.imageUrl}
            title={vaccine.title}
            effectiveness={vaccine.effectiveness}
            dosing={vaccine.dosing}
            possibleSideEffect={vaccine.possibleSideEffect}
          />
        ))}
      </div>
    </main>
  );
}
