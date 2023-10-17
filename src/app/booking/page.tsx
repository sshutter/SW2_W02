import VaccineBookingForm from "@/components/VaccineBookingForm";
import { authOptions } from "../api/auth/[...nextauth]/route";
import getUserProfile from "@/libs/getUserProfile";
import { getServerSession } from "next-auth";

export default async function Booking() {
  const session = await getServerSession(authOptions);
  if (!session || !session.user.token) {
    return null;
  }
  const profile = await getUserProfile(session.user.token);
  var createdAt = new Date(profile.data.createdAt);
  return (
    <main className="w-[100%] flex flex-col items-center space-y-4 text-[#f2f2f2] pt-[50px]">
      <div className="bg-slate-100 m-5 p-5 text-black">
        <div className="text-2xl">{profile.data.name}</div>
        <table className="table-auto border-separate border-spacing-2">
          <tbody>
            <tr>
              <td>Email</td>
              <td>{profile.data.email}</td>
            </tr>
            <tr>
              <td>Tel.</td>
              <td>{profile.data.tel}</td>
            </tr>
            <tr>
              <td>Member Since</td>
              <td>{createdAt.toString()}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="text-[#f2f2f2] text-4xl font-extrabold">
        Vaccine Appointment
      </div>
      <div className="w-fit space-y-2">
        <VaccineBookingForm />
      </div>
    </main>
  );
}
