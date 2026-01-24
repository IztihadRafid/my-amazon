import { sanityFetch } from "../lib/live";
import { BRAND_QUERY, BRANDS_QUERY, DEAL_PRODUCTS, LATEST_BLOG_QUERY, PRODUCT_BY_SLUG_QUERY } from "./query";
//getting categories query
const getCategories = async (quantity?: number) => {
    try {
        const query = quantity ?
            `*[_type== 'category'] | order(name asc) [0...$quantity]{
        ...,
        "productCount":count(*[_type=="product" && references(^._id)])
        }`: `*[_type== 'category'] | order(name asc){
        ...,
        "productCount":count(*[_type=="product" && references(^._id)])
        }`;
        const { data } = await sanityFetch({
            query,
            params: quantity ? { quantity } : {},
        })
        return data
    } catch (error) {
        console.log("Error Fetching categories", error);
        return [];
    }
}

// geting all brands query
const getAllBrands = async () => {
    try {
        const { data } = await sanityFetch({ query: BRANDS_QUERY })
        return data ?? []
    } catch (error) {
        console.log("Error Fetching all Brands", error)
        return []
    }
}

// get all blogs
const getLatestBlogs = async () => {
    try {
        const { data } = await sanityFetch({ query: LATEST_BLOG_QUERY })
        return data ?? []
    } catch (error) {
        console.log("Error Fetching Latest Blogs", error)
        return []
    }
}
// Hot Deals
const getDealProducts = async () => {
    try {
        const { data } = await sanityFetch({ query: DEAL_PRODUCTS })
        return data ?? []
    } catch (error) {
        console.log("Error Fetching Hot Deal products", error)
        return []
    }
}

// Get Product by Slug
const getProductbySlug = async (slug: string) => {
    try {
        const product = await sanityFetch({
            query: PRODUCT_BY_SLUG_QUERY,
            params: {
                slug,
            }
        })
        //  console.log(product.data)
        return product?.data || null
    } catch (error) {
        console.log("Error fetching product by slug", error)
        return null
    }
}

// get brand by product slug
const getBrand = async(slug:string)=>{
    try {
        const product = await sanityFetch({
            query: BRAND_QUERY,
            params:{
                slug
            }
        })
        return product?.data || null;
    } catch (error) {
        console.log("Error Fetching Product by id",error)
        return null;
    }
}
export { getCategories, getAllBrands, getLatestBlogs, getDealProducts, getProductbySlug,getBrand }