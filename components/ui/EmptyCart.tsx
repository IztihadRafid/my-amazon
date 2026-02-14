import Link from "next/link";
import { ShoppingCart } from "lucide-react";

const EmptyCart = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-16 text-center bg-gray-100">
      {/* Icon */}
      <div className="p-6 bg-gray-100 rounded-full mb-6">
        <ShoppingCart className="w-12 h-12 text-gray-600" />
      </div>

      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-3">
        Your Cart is Empty
      </h2>

      {/* Description */}
      <p className="text-gray-600 max-w-md mb-6 text-sm md:text-base">
        Looks like you haven’t added anything to your cart yet. Explore our
        products and add items you like.
      </p>

      {/* Button */}
      <Link
        href="/shop"
        className="px-6 py-3 bg-green-700 text-white rounded-lg hover:bg-green-900 transition-all duration-200 text-sm md:text-base"
      >
        Discover Products
      </Link>
    </div>
  );
};

export default EmptyCart;
