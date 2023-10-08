import cloudinary from "@/utils/cloudinary";
import getBase64ImageUrl from "@/utils/generateBlurPlaceholder";
import { ImageProps } from "@/utils/types";

async function getImages({ folderName }: { folderName: string }) {
  const results = await cloudinary.v2.search
    .expression(`folder:${process.env.CLOUDINARY_FOLDER}/${folderName}`)
    .sort_by("public_id", "desc")
    .max_results(400)
    .execute();
  const reducedResults: ImageProps[] = [];

  let i = 0;
  for (let result of results.resources) {
    reducedResults.push({
      id: i,
      height: result.height,
      width: result.width,
      public_id: result.public_id,
      format: result.format,
      blurDataUrl: "",
    });
    i++;
  }

  //   const blurImagePromises = results.resources.map((image: ImageProps) => {
  //     return getBase64ImageUrl(image);
  //   });
  //   const imagesWithBlurDataUrls = await Promise.all(blurImagePromises);

  //   for (let i = 0; i < reducedResults.length; i++) {
  //     reducedResults[i].blurDataUrl = imagesWithBlurDataUrls[i];
  //   }

  return reducedResults;
}

export default getImages;
