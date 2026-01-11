import { Product } from "@/sanity.types";
import { urlFor } from "@/sanity/lib/image";
import { FlameIcon, StarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import AddtoWishlistButton from "./AddtoWishlistButton";
import PriceView from "./PriceView";
import AddtoCartButton from "./AddtoCartButton";

const ProductCard = ({ product }: { product: Product }) => {
  // console.log("Products: ",product);
  return (
    <div className="text-sm border border-blue-300 rounded-md  group">
      <div className="relative group overflow-hidden bg-gray-50">
        {product?.images && (
          <Image
            src={urlFor(product?.images[0]).url()}
            alt="Product Image"
            loading="lazy"
            width={700}
            height={700}
            className={`w-full h-64 object-contain overflow-hidden transition-transform bg-shop_light_bg hoverEffect ${product?.stock !== 0 ? "group-hover:scale-105" : "opacity-50"}`}
          ></Image>
        )}
        <AddtoWishlistButton product={product}></AddtoWishlistButton>
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
        {product?.status === "hot" && (
          <Link
            href={"/deal"}
            className="absolute top-2 left-2 z-10 text-sm border px-2 rounded-full "
          >
            <FlameIcon
              size={26}
              fill="#fb6c08"
              className="text-amber-600 hover:text-amber-400"
            ></FlameIcon>
          </Link>
        )}
      </div>
      <div className="p-3 ">
        {product?.categories && (
          <p className="uppercase line-clamp-1 text-xs text-gray-600">
            {product?.categories?.map((cat) => cat).join(", ")}
          </p>
        )}

        {/* title name of product */}
        <h4 className="text-lg font-semibold line-clamp-1">{product?.name}</h4>

        {/* ratings */}
        <section className="flex items-center gap-4">
          <div className="flex items-center gap-0.5">
            {[...Array(5)]?.map((_, index) => (
              <StarIcon
                size={13}
                key={index}
                className={index < 4 ? "text-green-400" : "#ababab"}
                fill={index < 4 ? "#93d991" : "#ababab"}
              ></StarIcon>
            ))}
          </div>

          {/* review */}
          <p className="text-gray-600 text-sm">5 review</p>
        </section>

        {/* Stock Status */}
        <section className="flex items-center gap-2.5 text-lg">
          <p className="font-medium">In Stock </p>
          <p
            className={`${product?.stock === 0 ? "text-red-500 font-semibold" : "text-green-700 font-semibold "}`}
          >
            {(product?.stock as number) > 0 ? product?.stock : "0"}
          </p>
        </section>

        {/* price section */}
        <PriceView
          price={product?.price}
          discount={product?.discount}
          className="text-sm"
        ></PriceView>

        {/* Add to Cart */}
        <AddtoCartButton product= {product} className="w-36 rounded-full">
            
        </AddtoCartButton>
      </div>
    </div>
  );
};

export default ProductCard;
