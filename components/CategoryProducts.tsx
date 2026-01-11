"use client";
import { Category, Product } from "@/sanity.types";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { client } from "@/sanity/lib/client";
import LoadingSpinner from "./LoadingSpinner";
import Image from "next/image";
import ProductCard from "./ProductCard";

interface Props {
  categories: Category[];
  slug: string;
}
const CategoryProducts = ({ categories, slug }: Props) => {
  const [currentSlug, setCurrentSlug] = useState(slug);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // category chageing function
  const handleCategoryChange = (newSlug: string) => {
    if (newSlug === currentSlug) return;
    setCurrentSlug(newSlug);
    router.push(`/category/${newSlug}`, { scroll: false });
  };

  //fetched products according to category
  const fetchProducts = async (categorySlug: string) => {
    setLoading(true);
    try {
      const query = `
          *[_type == 'product'  && references(*[_type == 'category' && slug.current == $categorySlug]._id)] | order(name asc){
          ...,"categories":categories[]->title}
          `;
      const data = await client.fetch(query, { categorySlug });
      setProducts(data);
    } catch (error) {
      console.log("Error Fetching Products", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchProducts(currentSlug);
  }, [router]);


  return (
    <div className="py-5 flex flex-col md:flex-row items-start gap-5">
      {/* category */}
      <div className="flex flex-col md:min-w-40 border">
        {categories?.map((item) => (
          <Button
            key={item?._id}
            onClick={() => handleCategoryChange(item?.slug?.current as string)}
            className={`bg-transparent border-0 p-0 rounded-none text-darkColor shadow-none hover:bg-green-600 hover:text-white font-semibold hoverEffect border-b last:border-b-0 transition-colors capitalize ${item?.slug?.current === currentSlug && "bg-green-600 text-white border-green-600"}`}
          >
            <p className="text-left px-2 w-full">{item?.title}</p>
          </Button>
        ))}
      </div>

      {/* products */}
      <div className="flex-1">
        {loading ? <LoadingSpinner></LoadingSpinner>: products?.length>0 ? <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {products?.map((product:Product)=>(
            <ProductCard key={product?._id} product={product}></ProductCard>
            ))}
        </div>: <div><h1 className="text-4xl text-center flex items-center justify-center">No Products Found</h1></div>}
      </div>
    </div>
  );
};

export default CategoryProducts;
