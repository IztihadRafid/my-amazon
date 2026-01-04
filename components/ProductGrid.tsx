"use client";
import { useEffect, useState } from "react";
import LoadingSpinner from "./LoadingSpinner";
import HomeTabBar from "./HomeTabBar";
import { productType } from "@/constants/data";
import { client } from "@/sanity/lib/client";
import ProductCard from "./ProductCard";
import { Product } from "@/sanity.types";

const ProductGrid = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedTab, setSelectedTab] = useState(productType[0]?.title || "");

  // Query
  const query = `*[_type=="product"&&variant==$variant] | order(name desc){...,"categories":categories[]->title}`;
  const params = { variant: selectedTab.toLowerCase() };

  useEffect(() => {
    const fetchedData = async () => {
      setLoading(true);
      try {
        const response = await client.fetch(query, params);
        setProducts(response)
        
      } catch (error) {
        console.log("Error fetched Data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchedData()
  }, [selectedTab]);

  return (
    <div>
      <HomeTabBar
        selectedTab={selectedTab}
        onTabSelect={setSelectedTab}
      ></HomeTabBar>
      {loading? <LoadingSpinner></LoadingSpinner> :(
        products?.length ?
         <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-6 mt-10">
        {
            products?.map((product)=>(
                <div key={product._id}>
                   <ProductCard product={product}></ProductCard>
                </div>
            ))
        }
        </div> : <h6 className="text-3xl font-semibold text-center p-8">No Product Available</h6>
      )}
    </div>
  );
};

export default ProductGrid;
