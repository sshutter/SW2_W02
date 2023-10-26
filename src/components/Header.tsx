import Image from "next/image";
import HeaderItem from "./HeaderItem";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Link } from "@mui/material";

export default async function Header() {
  const session = await getServerSession(authOptions);
  return (
    <div className="h-[50px] inset-0 bg-[#5c5c5b] fixed z-30 flex flex-row text-[#f2f2f2] justify-end p-2">
      <div className="absolute top-0 left-2 my-3 flex flex-row">
        {session ? (
          <Link href="/api/auth/signout">
            <div className="flex items-center h-full px-3 text-[#f2f2f2]">
              Sign-Out
            </div>
          </Link>
        ) : (
          <Link href="/api/auth/signin">
            <div className="flex items-center h-full px-3 text-[#f2f2f2]">
              Sign-In
            </div>
          </Link>
        )}
        <HeaderItem title="My Booking" pageRef="/mybooking" />
      </div>
      <HeaderItem title="Booking" pageRef="/booking" />
      <Image
        src="/img/logo.png"
        className="h-[90%] w-auto"
        alt="Logo"
        width={0}
        height={0}
        sizes="100vh"
      />
    </div>
  );
}
