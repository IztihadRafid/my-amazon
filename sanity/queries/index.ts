import { sanityFetch } from "../lib/live";
import { BRANDS_QUERY, LATEST_BLOG_QUERY } from "./query";
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
export { getCategories,getAllBrands,getLatestBlogs }