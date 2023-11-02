import CardPanel from "@/components/CardPanel";
import HospitalCatalog from "@/components/HospitalCatalog";
import getHospitals from "@/libs/getHospitals";
import { Suspense } from "react";
import { LinearProgress } from "@mui/material";
import AddHospitalForm from "@/components/AddHospitalForm";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import getUserProfile from "@/libs/getUserProfile";

export default async function HospitalPage() {
  const session = await getServerSession(authOptions);
  if (!session || !session.user.token) {
    return null;
  }
  const profile = await getUserProfile(session.user.token);
  const hospitalJson = getHospitals();

  return (
    <main className="text-center p-5">
      <h1 className="text-xl font-medium">View Hospital Info</h1>
      <Suspense fallback={<LinearProgress className="my-4" />}>
        <HospitalCatalog hospitalJson={hospitalJson} />
      </Suspense>
      {profile.data.role === "admin" ? <AddHospitalForm /> : null}
    </main>
  );
}
