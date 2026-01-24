"use client";
import {
  internalGroqTypeReferenceTo,
  SanityImageCrop,
  SanityImageHotspot,
} from "@/sanity.types";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { useState } from "react";

interface Props {
  images?: Array<{
    asset?: {
      _ref?: string;
      _type?: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type?: "image";
    _key?: string;
  }>;
  isStock?: boolean | number;
}

const ImageView = ({ images = [], isStock }: Props) => {
  const [active, setActive] = useState(images[0]);
  console.log(images);
  return (
    <div className="w-full md:w-1/2 space-y-2 md:space-y-4">
      <Image
        src={urlFor(active).url()}
        alt="ProductIMage"
        width={700}
        height={700}
        priority
        className={`w-full
         h-96   object-contain hover:scale-110 hoverEffect rounded-md ${
           isStock === 0 ? "opacity-50" : ""
         }:`}
      ></Image>
      <div className="grid grid-cols-6 gap-2 w-72 ">
        {images?.map((image) => (
          <button
            key={image?._key}
            onClick={() => setActive(image)}
            className={`border rounded-md overflow-hidden ${active?._key === image?._key ? " border-gray-400 opacity-100" : "opacity-60"}`}
          >
            <Image
              src={urlFor(image).url()}
              alt={`Thumbnail ${image._key}`}
              width={200}
              height={200}
              className="w-full  object-contain"
            ></Image>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImageView;
