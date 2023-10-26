import VaccineBookingForm from "@/components/VaccineBookingForm";
import { authOptions } from "../api/auth/[...nextauth]/route";
import getUserProfile from "@/libs/getUserProfile";
import { getServerSession } from "next-auth";
import Link from "next/link";
import dayjs, { Dayjs } from "dayjs";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { BookingItem } from "../../../interfaces";
import { addBookingItem } from "@/redux/features/bookSlice";

export default async function Booking() {
  const session = await getServerSession(authOptions);
  if (!session || !session.user.token) {
    return (
      <main className="w-[100%] flex flex-col items-center space-y-4 text-[#f2f2f2] pt-[50px]">
        <div className="m-5 p-5 items-center flex flex-col">
          <div className="text-2xl">Please login before start booking</div>
          <Link href="/api/auth/signin" className="items-center">
            <button className="bg-white text-[#3B88D2] border-[#3B88D2] font-semibold py-2 px-2 m-7 rounded z-30 hover:bg-[#3B88D2] hover:text-white hover:border-transparent">
              Go to Login
            </button>
          </Link>
        </div>
      </main>
    );
  }
  const profile = await getUserProfile(session.user.token);
  var createdAt = new Date(profile.data.createdAt);

  return (
    <main className="w-[100%] flex flex-col items-center space-y-4 text-[#f2f2f2]">
      <div className="bg-slate-100 m-5 p-5 text-black">
        <div className="text-2xl font-bold">{profile.data.name}</div>
        <table className="table-auto border-separate border-spacing-2">
          <tbody>
            <tr>
              <td className="font-semibold">Email</td>
              <td>{profile.data.email}</td>
            </tr>
            <tr>
              <td className="font-semibold">Tel.</td>
              <td>{profile.data.tel}</td>
            </tr>
            <tr>
              <td className="font-semibold">Member Since</td>
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
