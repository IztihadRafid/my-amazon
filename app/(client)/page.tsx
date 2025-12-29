import Container from "@/components/Container";
import HomeBanner from "@/components/HomeBanner";
import ProductGrid from "@/components/ProductGrid";

export default function Home() {
  return (
    <Container className="bg-shop-light-pink">
      <HomeBanner></HomeBanner>
      <div className="py-10  w-full lg:w-[70%] mx-auto">

        {/* Home Category Bar of Product*/}
        <ProductGrid ></ProductGrid>
      </div>
    </Container>
  );
}
