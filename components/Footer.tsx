import Link from "next/link";
import {
  IconBrandInstagram,
  IconBrandYoutube,
  IconHome,
  IconNetwork,
} from "@tabler/icons-react";

export default function Footer() {
  return (
    <footer className="py-8 text-gray-800 aurora w-full z-50">
      <div className="max-w-5xl px-8 mx-auto">
        <div>
          <div className="font-bold py-2">LOVEKONG X AAM</div>
          <div>운영자: 서명진</div>
          <div>mail to: alrnrdls@naver.com</div>
        </div>
        <div className="font-bold text-md pt-6">LOVEKONG</div>
        <div className="text-sm py-2">Copyright 2023. LOVEKONG</div>
        <div className="flex py-10">
          <Link
            target="_blank"
            href={"/"}
            className="bg-gray-500 w-10 h-10 rounded-full flex justify-center items-center mr-3 cursor-pointer hover:bg-zinc-700 transition duration-200 ease-in-out"
            aria-label="home"
          >
            <IconHome color="white" size={30} stroke={1} opacity={1} />
          </Link>
          <Link
            target="_blank"
            href={"https://blog.naver.com/lovekong_glass"}
            className="bg-gray-500 w-10 h-10 rounded-full flex justify-center items-center mr-3 cursor-pointer hover:bg-zinc-700 transition duration-200 ease-in-out"
            aria-label="network"
          >
            <IconNetwork color="white" size={30} stroke={1} opacity={1} />
          </Link>
          <Link
            target="_blank"
            href={"https://www.youtube.com/channel/UCjWLFUqAmR1s3vupkX-mffw"}
            className="bg-gray-500 w-10 h-10 rounded-full flex justify-center items-center mr-3 cursor-pointer hover:bg-zinc-700 transition duration-200 ease-in-out"
            aria-label="youtube"
          >
            <IconBrandYoutube color="white" size={30} stroke={1} opacity={1} />
          </Link>
          <Link
            target="_blank"
            href={"https://www.instagram.com/lovekong_zip"}
            className="bg-gray-500 w-10 h-10 rounded-full flex justify-center items-center mr-3 cursor-pointer hover:bg-zinc-700 transition duration-200 ease-in-out"
            aria-label="instagram"
          >
            <IconBrandInstagram
              color="white"
              size={30}
              stroke={1}
              opacity={1}
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}
