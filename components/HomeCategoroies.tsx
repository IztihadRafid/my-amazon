import { Category } from "@/sanity.types";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HomeCategoroies = ({ categories }: { categories: Category[] }) => {
  return (
    <div className="bg-white border border-shop_light_green/20 my-10 md:my-20 p-5 lg:p-7 rounded-md">
      <h3 className="text-2xl font-semibold">Popular Categories</h3>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {categories?.map((category) => (
          <div
            key={category._id}
            className="bg-gray-200 p-5 flex items-center gap-3 group rounded-lg"
          >
            {category?.image && (
              <div className="overflow-hidden border  ">
                <Link href={`category/${category?.slug?.current}`} className="flex gap-3 ">
                  <Image
                    src={urlFor(category?.image).url()}
                    alt="Category Image"
                    width={40}
                    height={40}
                    className="w-20 object-contain group-hover:scale-105 p-1 rounded-lg border-shop_orange/30 hover:border-shop_orange hoverEffect"
                  ></Image>
                  <div>
                    <h4 className="text-lg font-semibold">{category.title}</h4>
                    <p>
                      <span className="font-bold text-shop_btn_dark_green">
                        {`${category?.productCount}`}{" "}
                      </span>
                      items Available
                    </p>
                  </div>
                </Link>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeCategoroies;
