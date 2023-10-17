import Image from "next/image";
import HeaderItem from "./HeaderItem";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Link } from "@mui/material";

export default async function Header() {
  const session = await getServerSession(authOptions);
  return (
    <div className="h-[50px] inset-0 bg-transparent fixed z-30 flex flex-row text-[#f2f2f2] justify-end p-2">
      {session ? (
        <Link href="/api/auth/signout">
          <div className="flex items-center absolute top-0 left-2 h-full px-3 text-[#f2f2f2] my-auto">
            Sign-Out
          </div>
        </Link>
      ) : (
        <Link href="/api/auth/signin">
          <div className="flex items-center absolute top-0 left-2 h-full px-3 text-[#f2f2f2] my-auto">
            Sign-In
          </div>
        </Link>
      )}
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
