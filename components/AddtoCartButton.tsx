"use client";
import { Product } from "@/sanity.types";
import { Button } from "./ui/button";
import { ShoppingBag } from "lucide-react";
import useStore from "@/store";
import toast from "react-hot-toast";
import PriceFormatter from "./PriceFormatter";
import QuantityButton from "./QuantityButton";

interface Props {
  product: Product;
  className?: string;
}
const AddtoCartButton = ({ product, className }: Props) => {
  const { addItems, getItemCount } = useStore();
  const itemCount = getItemCount(product?._id);
  const isOutofStock = product?.stock === 0;

  //   ADD TO CART
  const handleAddtoCart = () => {
    if ((product?.stock as number) > itemCount) {
      addItems(product);
      toast.success(`${product?.name?.substring(0, 12)}... added successfully`);
    } else {
      toast.error("Can not add more than available stock");
    }
  };

  return (
    <div>
      {itemCount ? (
      <div className="text-sm w-full">
        <div className="flex items-center justify-between">
          <span className="text-xm text-darkColor/60">Quantity</span>
       <QuantityButton product={product}></QuantityButton>
        </div>
        <div className="flex items-center justify-between border-t pt-1">
          <span className="text-sm font-semibold">Subtotal</span>
          <PriceFormatter className="" amount={product?.price ? product?.price*itemCount:0}></PriceFormatter>
        </div>
      </div>
      ) : (
        <Button
          onClick={handleAddtoCart}
          disabled={isOutofStock}
          className={`w-full bg-green-600 text-white hover:bg-green-700 font-semibold`}
        >
          <ShoppingBag></ShoppingBag>
          {isOutofStock ? "Out of Stock" : "Add to Cart"}
        </Button>
      )}
    </div>
  );
};

export default AddtoCartButton;
