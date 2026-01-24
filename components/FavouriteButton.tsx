import { Product } from "@/sanity.types";
import { Heart } from "lucide-react";
import Link from "next/link";

const FavouriteButton = ({
  showProduct = false,
  product,
}: {
  showProduct?: boolean;
  product?: Product | null | undefined;
}) => {
  return (
    <>
      {!showProduct ? (
        <Link href={"/wishlist"} className="group relative">
          <Heart className="w-6 h-6 hover:text-shop_light_green"></Heart>
          <span className="absolute -top-2 -right-2 bg-shop_dark_green text-white h-5 w-5 rounded-full text-xs font-semibold flex items-center justify-center ">
            0
          </span>
        </Link>
      ) : (
        <button className="group relative hover:text-shop_light_green hoverEffect border border-shop_light_green/80 rounded-md p-1.5">
          <Heart className="text-shop_light_green/80 group-hover:text-shop_light_green hoverEffect mt-0.5 w-5 h-5 "></Heart>
        </button>
      )}
    </>
  );
};

export default FavouriteButton;
