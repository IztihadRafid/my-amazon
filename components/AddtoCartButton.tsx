"use client";
import { Product } from "@/sanity.types";
import { Button } from "./ui/button";
import { ShoppingBag } from "lucide-react";

interface Props {
  product: Product;
  className?: string;
}
const AddtoCartButton = ({ product, className }: Props) => {
  const isOutofStock = product?.stock === 0;
  //   ADD TO CART
const handleAddtoCart=()=>{
    console.log("")
}
  return (
    <div>
      <Button
        onClick={handleAddtoCart}
        disabled={isOutofStock}
        className={`w-full bg-green-600 text-white hover:bg-green-700 font-semibold`}
      >
        <ShoppingBag></ShoppingBag>
        {isOutofStock ? "Out of Stock" : "Add to Cart"}
      </Button>
    </div>
  );
};

export default AddtoCartButton;
