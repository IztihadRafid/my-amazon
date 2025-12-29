import Container from "@/components/Container";
import HomeBanner from "@/components/HomeBanner";
import ProductGrid from "@/components/ProductGrid";

export default function Home() {
  return <Container className="bg-shop-light-pink">
    <HomeBanner></HomeBanner>
    <ProductGrid></ProductGrid>
  </Container>;
}
