"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const PPage = () => {
  const pathname = usePathname();
  const router = useRouter();

  const pathNameList = pathname.split("/");
  console.log(pathNameList[3]);

  return (
    <div>
      Photo: {pathname}
      <Link href="/gallery/day08">Day 08</Link>
    </div>
  );
};

export default PPage;
