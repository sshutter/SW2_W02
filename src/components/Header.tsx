import Image from "next/image";
import HeaderItem from "./HeaderItem";

const Header = () => {
  return (
    <div className="h-[50px] inset-0 bg-transparent fixed z-30 flex flex-row text-white justify-end p-2">
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
};

export default Header;
