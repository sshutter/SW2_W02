import Link from "next/link";

const HeaderItem = ({ title, pageRef }: { title: string; pageRef: string }) => {
  return (
    <Link
      href={pageRef}
      className="w-[120px] text-center my-auto font-sans text-grey"
    >
      {title}
    </Link>
  );
};

export default HeaderItem;
