import Container from "@/components/Container"
import ProductCard from "@/components/ProductCard"
import { getDealProducts } from "@/sanity/queries"
import { DEAL_PRODUCTS_RESULT, Product } from "@/sanity.types"

const DealPage =async () => {
    const products: DEAL_PRODUCTS_RESULT = await getDealProducts()
  return (
    <div className="py-10 bg-gray-50 ">
      <Container className="w-[80%] mx-auto">
        <h1 className="mb-5 underline underline-offset-4 decoration-[1] text-base uppercase tracking-wide">Hot Deals of the Week</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products?.map((product: DEAL_PRODUCTS_RESULT[number])=> (
                <ProductCard key={product?._id} product={product as unknown as Product}></ProductCard>
            ))}
        </div>
      </Container>
    </div>
  )
}

export default DealPage
