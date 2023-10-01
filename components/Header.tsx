import Link from "next/link";

export default function Header() {
  return (
    <header className="flex flex-col xs:flex-row justify-between items-center w-full border-b sm:px-4 px-2 pt-3 pb-5 border-gray-500 gap-2">
      <div className="flex items-end justify-center gap-4">
        <Link href="/" className="flex space-x-2 items-center pt-1 pb-1">
          <h1 className="sm:text-3xl text-xl font-bold ml-2 tracking-tight text-gray-900">
            LOVEKONG X AAM
          </h1>
        </Link>
        {/* <Link
          href="/playground"
          className="flex space-x-2 items-center pt-1 pb-1"
        >
          <div className="sm:text-xl text-md font-bold ml-2 tracking-tight text-blue-600 hover:text-blue-700">
            더 보기
          </div>
        </Link> */}
      </div>
    </header>
  );
}
