import { Product } from "@/sanity.types";
import useStore from "@/store";
import { Heart } from "lucide-react";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const AddtoWishlistButton = ({ product }: { product: Product }) => {
  const { favoriteProduct, addtoFavorite } = useStore();
  const [existingProduct, setExistingProduct] = useState<Product | null>(null);

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
    <div className="absolute top-2 right-2 z-10">
      <div
      onClick={handleFavorite}
        className={`p-2.5 rounded-full duration-150 ${
          existingProduct
            ? "bg-green-700 text-white"
            : "bg-white text-green-700"
        }`}
      >
        <Heart size={20}></Heart>
      </div>
    </div>
  );
};

export default AddtoWishlistButton;
