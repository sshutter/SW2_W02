import CardPanel from "@/components/CardPanel";
import HospitalCatalog from "@/components/HospitalCatalog";
import getHospitals from "@/libs/getHospitals";
import { Suspense } from "react";
import { LinearProgress } from "@mui/material";

export default async function HospitalPage() {
  const hospitalJson = getHospitals();
  return (
    <main className="text-center p-5">
      <h1 className="text-xl font-medium mt-[50px]">View Hospital Info</h1>
      <Suspense fallback={<LinearProgress className="my-4" />}>
        <HospitalCatalog hospitalJson={hospitalJson} />
      </Suspense>
    </main>
  );
}
