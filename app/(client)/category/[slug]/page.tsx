import CategoryProducts from "@/components/CategoryProducts";
import Container from "@/components/Container";
import { getCategories } from "@/sanity/queries";
import React from "react";

const CategoryPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const categories = await getCategories();
  const { slug } = await params;
  return (
    <div>
      <Container className="w-[80%] mx-auto">
        <div className="flex items-center font-bold">
          <h1 className="text-2xl  ">Products By Category:</h1>
          <span className=" text-green-500 capitalize tracking-wide text-2xl">
            {slug && slug}
          </span>
        </div>
        <CategoryProducts slug={slug} categories={categories}></CategoryProducts>
      </Container>
    </div>
  );
};

export default CategoryPage;
