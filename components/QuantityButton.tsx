import { Product } from "@/sanity.types";
import useStore from "@/store";
import React from "react";
import { Button } from "./ui/button";
import { Minus, Plus } from "lucide-react";
import toast from "react-hot-toast";
interface Props {
  product: Product;
  className?: string;
}
const QuantityButton = ({ product, className }: Props) => {
  const { addItems, removeItem, getItemCount } = useStore();
  const itemCount = getItemCount(product?._id);
  const isOutofStoct = product?.stock === 0;

  //   handle remove product function
  const handleRemoveProduct = () => {
    removeItem(product?._id);
    if (itemCount > 1) {
      toast.success("Quantity Decrease");
    } else {
      toast.error(`${product?.name?.substring(0, 12)} removed successfully`);
    }
  };
  // handle add to cart function
  const handleAddToCart = () => {
    if ((product?.stock as number) > itemCount) {
      addItems(product);
      toast.success("Quantity Increase");
    } else {
      toast.error(`Cannot add more than available stock`);
    }
  };
  return (
    <div className="flex items-center gap-1 pb-1 text-base">
      <Button
        onClick={handleRemoveProduct}
        variant={"outline"}
        size={"icon"}
        disabled={itemCount === 0 || isOutofStoct}
        className="w-6 h-6  border hover:bg-shop_dark_green/20 hoverEffect"
      >
        <Minus></Minus>
      </Button>
      <span className="font-semibold text-sm w-6 text-center text-darkColor">
        {itemCount}
      </span>
      <Button
        onClick={handleAddToCart}
        variant={"outline"}
        size={"icon"}
        disabled={isOutofStoct}
        className="w-6 h-6  border hover:bg-shop_dark_green/20 hoverEffect"
      >
        <Plus></Plus>
      </Button>
    </div>
  );
};

export default QuantityButton;
