import { Product } from "@/sanity.types";
import { urlFor } from "@/sanity/lib/image";
import { FlameIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="text-sm border-[1px] border-blue-300 rounded-md  group">
      <div className="relative group overflow-hidden bg-gray-50">
        {product?.images && (
          <Image
            src={urlFor(product?.images[0]).url()}
            alt="Product Image"
            loading="lazy"
            width={700}
            height={700}
          ></Image>
        )}
        {product?.status === "sale" && (
          <p className="absolute top-2 left-2 z-10 text-sm border px-2 rounded-full bg-green-400 text-green-950 hover:text-white hover:bg-green-700 ">
            Sale!
          </p>
        )}
          {product?.status === "new" && (
          <p className="absolute top-2 left-2 z-10 text-sm border px-2 rounded-full bg-blue-700 text-white hover:text-white hover:bg-blue-800 ">
            New!
          </p>
        )}
          {product?.status === "hot" && <Link href={'/deal'}
          className="absolute top-2 left-2 z-10 text-sm border px-2 rounded-full ">
          <FlameIcon size={26} fill="#fb6c08" className="text-amber-600 hover:text-amber-400"></FlameIcon>
          </Link>
        }
      </div>
      <div className="p-3 ">Product</div>
    </div>
  );
};

export default ProductCard;
