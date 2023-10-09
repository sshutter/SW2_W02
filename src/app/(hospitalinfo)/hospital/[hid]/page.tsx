import Image from "next/image";
import getHospital from "@/libs/getHospital";

export default async function HospitalDetailPage({
  params,
}: {
  params: { hid: string };
}) {
  const hospitalDetail = await getHospital(params.hid);
  // // For Get one hospital data
  // const mockHospitalData = new Map();
  // mockHospitalData.set("001", {
  //   hid: "001",
  //   name: "Chulalongkorn",
  //   imgSrc: "/img/chula.jpg",
  // });
  // mockHospitalData.set("002", {
  //   hid: "002",
  //   name: "Rajavithi",
  //   imgSrc: "/img/rajavithi.jpg",
  // });
  // mockHospitalData.set("003", {
  //   hid: "003",
  //   name: "Thammasat",
  //   imgSrc: "/img/thammasat.jpg",
  // });

  return (
    <main className="text-center p-5 mt-[50px]">
      <h1 className="text-xl font-extrabold">{hospitalDetail.data.name}</h1>
      <div className="flex flex-row my-5">
        <Image
          src={hospitalDetail.data.picture}
          alt="Car Image"
          width={0}
          height={0}
          sizes="100vw"
          className="rounded-lg w-[30%]"
        />

        <div className="text-md mx-5 text-white text-left">
          <div className="text-md mx-5">Name: {hospitalDetail.data.name}</div>
          <div className="text-md mx-5">
            Address: {hospitalDetail.data.address}
          </div>
          <div className="text-md mx-5">
            District: {hospitalDetail.data.district}
          </div>
          <div className="text-md mx-5">
            Province: {hospitalDetail.data.province}
          </div>
          <div className="text-md mx-5">
            Postal Code: {hospitalDetail.data.postalcode}
          </div>
          <div className="text-md mx-5">
            Telephone Number: {hospitalDetail.data.tel}
          </div>
        </div>
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  return [{ hid: "001" }, { hid: "002" }, { hid: "003" }, { hid: "004" }];
}
