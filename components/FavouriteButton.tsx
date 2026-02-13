"use client"
import { Product } from "@/sanity.types";
import useStore from "@/store";
import { Heart } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const FavouriteButton = ({
  showProduct = false,
  product,
}: {
  showProduct?: boolean;
  product?: Product | null | undefined;
}) => {

  const {favoriteProduct,addtoFavorite}= useStore()
  const [existingProduct,setExistingProduct]= useState<Product|null>(null)
   useEffect(() => {
      const availableProduct = favoriteProduct?.find(
        (item) => item?._id === product?._id,
      );
      setExistingProduct(availableProduct || null);
    }, [product, favoriteProduct]);
  
    // handle add to favorite  function
    const handleFavorite = (e: React.MouseEvent<HTMLSpanElement>) => {
      e.preventDefault();
      if (product?._id) {
        addtoFavorite(product).then(() => {
          toast.success(
            existingProduct
              ? "Product Removed Successfully"
              : "Product Added Successfully",
          );
        });
      }
    };
  return (
    <>
      {!showProduct ? (
        <Link href={"/wishlist"} className="group relative">
          <Heart className="w-6 h-6 hover:text-shop_light_green"></Heart>
          <span className="absolute -top-2 -right-2 bg-shop_dark_green text-white h-5 w-5 rounded-full text-xs font-semibold flex items-center justify-center ">
           {favoriteProduct?.length? favoriteProduct?.length:0}
          </span>
        </Link>
      ) : (
        <button onClick={handleFavorite} className="group relative hover:text-shop_light_green hoverEffect border border-shop_light_green/80 rounded-md p-1.5">
         {existingProduct?(
           <Heart fill="green" className="text-shop_light_green/80 group-hover:text-shop_light_green hoverEffect mt-0.5 w-5 h-5 "></Heart>
         ):( <Heart className="text-shop_light_green/80 group-hover:text-shop_light_green hoverEffect mt-0.5 w-5 h-5 "></Heart>)}
        </button>
      )}
    </>
  );
};

export default FavouriteButton;
