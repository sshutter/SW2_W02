import Image from "next/image";

export default function HospitalDetailPage({
  params,
}: {
  params: { hid: string };
}) {
  // For Get one hospital data
  const mockHospitalData = new Map();
  mockHospitalData.set("001", {
    hid: "001",
    name: "Chulalongkorn",
    imgSrc: "/img/chula.jpg",
  });
  mockHospitalData.set("002", {
    hid: "002",
    name: "Rajavithi",
    imgSrc: "/img/rajavithi.jpg",
  });
  mockHospitalData.set("003", {
    hid: "003",
    name: "Thammasat",
    imgSrc: "/img/thammasat.jpg",
  });

  return (
    <main className="text-center p-5 mt-[50px]">
      <h1 className="text-lg font-medium">Hospital ID {params.hid}</h1>
      <div className="flex flex-row my-5">
        <Image
          src={mockHospitalData.get(params.hid).imgSrc}
          alt="Car Image"
          width={0}
          height={0}
          sizes="100vw"
          className="rounded-lg w-[30%]"
        />
        <div className="text-md mx-5">
          {mockHospitalData.get(params.hid).name}
        </div>
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  return [{ hid: "001" }, { hid: "002" }, { hid: "003" }, { hid: "004" }];
}
