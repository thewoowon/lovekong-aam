"use client";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import { useRef } from "react";
import useScrollFadeIn from "../hooks/useScrollFadeIn";
import useScrollFadeInLeft from "../hooks/useScrollFadeInLeft";
import useScrollFadeInRight from "../hooks/useScrollFadeInRight";

export default function HomePage() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollFadeIn1 = useScrollFadeIn(0.7, "50%");
  const scrollFadeIn2 = useScrollFadeIn(0.7, "50%");
  const scrollFadeIn3 = useScrollFadeIn(0.7, "50%");
  const scrollFadeIn4 = useScrollFadeIn(0.7, "50%");
  const scrollFadeIn5 = useScrollFadeIn(0.7, "50%");

  const scrollFadeIn6 = useScrollFadeIn(0.7, "50%");
  const scrollFadeIn7 = useScrollFadeInLeft();
  const scrollFadeIn8 = useScrollFadeInRight();
  const scrollFadeIn9 = useScrollFadeIn(0.7, "50%");
  const scrollFadeIn10 = useScrollFadeIn(0.7, "50%");
  const scrollFadeIn11 = useScrollFadeInLeft();
  const scrollFadeIn12 = useScrollFadeInRight();
  const scrollFadeIn13 = useScrollFadeIn(0.7, "50%");

  const scrollToSection = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // 컨텍스트 팝업을 위한 x, y 좌표
    const x = e.pageX;
    const y = e.pageY;

    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="flex max-w-6xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
      <Header />
      <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 sm:mt-20 mt-20 background-gradient">
        <section className="text-gray-700 pb-16">
          <div className="relative">
            <Image
              alt="search in store"
              width={538}
              height={710}
              src="/seon.png"
              className="w-full object-cover h-96 rounded-2xl sm:mt-0 mt-2"
            />
            <div className="sm:w-60 w-44 bg-white absolute top-0 left-48 pt-1 hover:opacity-100 opacity-0 transition">
              <Image
                alt="search in store"
                width={82}
                height={40}
                src="/key.svg"
              />
            </div>
          </div>
          <div className="flex justify-center items-center gap-4">
            <button
              className="bg-[#CBFF37] text-gray-800 rounded-xl font-bold px-8 py-3 sm:mt-10 mt-8 hover:bg-[#0029FF] hover:text-white transition"
              onClick={scrollToSection}
            >
              알아보기
            </button>
            <button
              className="bg-[#CBFF37] text-[#0029FF] rounded-xl font-bold px-8 py-3 sm:mt-10 mt-8 hover:bg-[#0029FF] hover:text-white transition"
              onClick={() => {
                window.open("https://naver.me/Fl26dWi7", "_blank");
              }}
            >
              신청하기
            </button>
          </div>
        </section>
        <section className="w-full bg-[#0029FF]">
          <div className="text-gray-700 w-full">
            <Image
              alt="search in store"
              width={1920}
              height={600}
              src="/lovekong-lettering.png"
              className="w-full object-cover"
            />
          </div>
        </section>
        <section className="w-full text-gray-800">
          <div className="text-gray-700">
            <Image
              alt="search in store"
              width={1920}
              height={1151}
              src="/bg.svg"
              className="w-full object-cover"
            />
          </div>
        </section>
        <section className="h-[600px] w-full bg-[#0029FF] flex justify-center items-center gap-4">
          {new Array(4).fill(0).map((_, index) => (
            <div className="bg-[#CBFF37] px-4 overflow-hidden" key={index}>
              <div className="w-56">
                <Image
                  alt="search in store"
                  width={548}
                  height={964}
                  src="/key-ring.png"
                  className="w-full object-cover"
                />
              </div>
            </div>
          ))}
        </section>
        <section
          ref={scrollRef}
          className="w-full flex flex-col justify-center items-center text-gray-700 pb-10"
        >
          <div className="flex flex-col gap-2 pt-32 pb-16">
            <div className="text-3xl font-light">진주문화관광재단</div>
            <div className="text-5xl font-semibold">문화로운 시작 지원사업</div>
            <div className="text-xl font-light">
              러브콩과 조유주 작가의 콜라보레이션
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
            <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
            <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
            <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
          </div>
          <div className="py-16">
            <div className="font-semibold text-3xl py-24">
              프로그램 일정 / 사진
            </div>
            <div className=" grid-cols-3 grid-rows-2 grid gap-10">
              {/* // hover하면 회전 */}
              {["07", "08", "14", "15", "21", "22"].map((day, index) => {
                return (
                  <Link key={index} href={`/gallery/day${day}`}>
                    <div className="w-24 h-24 sm:h-32 sm:w-32 flex justify-center items-center font-bold text-6xl border-4 border-gray-700 rounded-full hover:rotate-45 hover:bg-[#0029FF] hover:text-[#CBFF37] transition ease-in-out">
                      {day}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="py-16">
            <div className="font-semibold text-3xl pt-16 pb-32">
              프로그램 대상
            </div>
            <div className=" grid-cols-2 grid-rows-2 grid gap-10">
              {/* // hover하면 회전 */}
              {[
                "/adult.png",
                "/kid-female.png",
                "/kid-male-1.png",
                "/kid-male-2.png",
              ].map((url, index) => {
                return (
                  // scale-110
                  <div
                    key={index}
                    className="w-32 h-32 sm:h-64 sm:w-64 flex justify-center items-center font-bold text-6xl transition ease-in-out hover:scale-110 hover:shadow-lg relative pb-16"
                  >
                    <Image
                      alt="children"
                      width={512}
                      height={512}
                      src={url}
                      className="w-full object-cover"
                    />
                    {index === 0 && (
                      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-end text-lg">
                        <div className="bg-[#CBFF37] text-[#0029FF] rounded-xl px-6 py-1 sm:mt-10 mt-8 mb-1 hover:bg-[#0029FF] hover:text-white transition">
                          성인
                        </div>
                      </div>
                    )}

                    {index === 1 && (
                      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-end text-lg">
                        <div className="bg-[#CBFF37] text-[#0029FF] rounded-xl px-6 py-1 sm:mt-10 mt-8 mb-2 hover:bg-[#0029FF] hover:text-white transition">
                          초등학생
                        </div>
                      </div>
                    )}
                    {index === 2 && (
                      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-end text-lg">
                        <div className="bg-[#CBFF37] text-[#0029FF] rounded-xl px-6 py-1 sm:mt-10 mt-8 mb-2 hover:bg-[#0029FF] hover:text-white transition">
                          4~7세
                        </div>
                      </div>
                    )}
                    {index === 3 && (
                      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-end text-lg">
                        <div className="bg-[#CBFF37] text-[#0029FF] rounded-xl px-6 py-1 sm:mt-10 mt-8 mb-2 hover:bg-[#0029FF] hover:text-white transition">
                          그리고 열정!
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <section>
          <div className="text-black font-semibold text-3xl pt-16 pb-10">
            추가 프로그램 편성
          </div>
          <div className="w-full flex flex-col justify-center items-center text-gray-700 pb-10">
            <Image
              alt="lovekong_poster"
              src={"/lovekong-poster.jpeg"}
              width={560}
              height={792}
              priority
            />
          </div>
        </section>
        <section className="w-full flex flex-col justify-center items-center text-gray-700 pb-10">
          <div className="font-semibold text-3xl py-16">진행</div>
          <div className="flex flex-col pb-10">
            <div className="relative w-96 h-96 flex justify-center items-center rounded-full overflow-hidden">
              <Image alt="children" src={"/smj-2.png"} layout="fill" />
            </div>
            <div className="font-medium text-xl pt-10">서명진 - LOVEKONG</div>
            <div className="font-light text-sm">레진아트지도사 1급</div>
            <div className="font-light text-sm">
              19th 가을열림전 정수예술촌 초대작가
            </div>
            <div className="font-light text-sm">
              더현대 서울 전시전 참여작가
            </div>
          </div>
          <div className="flex flex-col pb-10">
            <div className="relative w-96 h-96 flex justify-center items-center rounded-full overflow-hidden">
              <Image alt="children" src={"/joyuju-2.png"} layout="fill" />
            </div>
            <div className="font-medium text-xl pt-10">조유주 작가</div>
            <div className="font-light text-sm">한국미술협회 진주지부 회원</div>
            <div className="font-light text-sm">개천미술대상전 초대작가</div>
            <div className="font-light text-sm">진주여류작가회 회원</div>
            <div className="font-light text-sm">
              대한민국 등 공모대전 우수상
            </div>
            <div className="font-light text-sm">문화예술교욱사 2급</div>
          </div>
        </section>
      </main>
    </div>
  );
}
