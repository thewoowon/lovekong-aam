import { ImageProps } from "@/utils/types";
import Link from "next/link";
import Image from "next/image";

const Day15 = async ({
  reducedResults,
}: {
  reducedResults: Promise<ImageProps[]>;
}) => {
  const images = await reducedResults;
  return (
    <div className="text-black grid grid-cols-3 gap-2 items-center justify-center">
      {images?.map(({ id, public_id, format, blurDataUrl }) => (
        // <Link
        //   key={id}
        //   href={`/?photoId=${id}`}
        //   as={`/p/day07/${id}`}
        //   ref={null}
        //   shallow
        //   className="after:content group relative mb-5 block w-full cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight"
        // >
        //   <Image
        //     alt="My Gallery"
        //     className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
        //     style={{ transform: "translate3d(0, 0, 0)" }}
        //     src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_720/${public_id}.${format}`}
        //     width={720}
        //     height={480}
        //     sizes="(max-width: 640px) 100vw,
        //           (max-width: 1280px) 50vw,
        //           (max-width: 1536px) 33vw,
        //           25vw"
        //   />
        // </Link>
        <div
          key={id}
          className="after:content group relative mb-5 block w-full cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight"
        >
          <Image
            alt="My Gallery"
            className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
            style={{ transform: "translate3d(0, 0, 0)" }}
            src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_720/${public_id}.${format}`}
            width={720}
            height={480}
            sizes="(max-width: 640px) 100vw,
                  (max-width: 1280px) 50vw,
                  (max-width: 1536px) 33vw,
                  25vw"
          />
        </div>
      ))}
    </div>
  );
};

export default Day15;
