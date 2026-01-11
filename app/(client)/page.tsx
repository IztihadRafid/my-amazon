import Container from "@/components/Container";
import HomeBanner from "@/components/HomeBanner";
import HomeCategoroies from "@/components/HomeCategoroies";
import LatestBog from "@/components/LatestBog";
import ProductGrid from "@/components/ProductGrid";
import ShopbyBrands from "@/components/ShopbyBrands";
import { getCategories } from "@/sanity/queries";

export default async function Home () {
const categories = await getCategories(6)
console.log(categories)
  return (
    
    <Container className="bg-shop-light-pink">
      <HomeBanner></HomeBanner>
      <div className="py-10  w-full lg:w-[80%] mx-auto">
        {/* Home Category Bar of Product*/}
        <ProductGrid ></ProductGrid>

        {/* categories section home */}
        <HomeCategoroies categories={categories}></HomeCategoroies>

        {/* shopby brands */}
        <ShopbyBrands></ShopbyBrands>

        {/* Latest blog cards */}
        <LatestBog></LatestBog>
      </div>
    </Container>
  );
}
