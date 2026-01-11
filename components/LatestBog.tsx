import { urlFor } from '@/sanity/lib/image'
import { getLatestBlogs } from '@/sanity/queries'
import { Calendar } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import dayjs from "dayjs"
const LatestBog =async () => {
    const blogs = await getLatestBlogs()
  return (
    <div className='mb-10 lg:mb-20'>
      <h4 className='text-2xl'>Latest Blog</h4>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5'>
        {blogs?.map((blog)=>(
            <div key={blog._id} className='rounded-lg overflow-hidden'>
                {blog?.mainImage &&(
                    <Link href={`/blog/${blog?.slug?.current}`}>
                        <Image src={urlFor(blog?.mainImage).url()} alt='Blog image' width={500} height={500} className='w-full max-h-80 object-contain'></Image>
                    </Link>
                )}
                <div className='bg-shop_light_bg p-5'>
                    <div className='flex items-center gap-5'>
                        <div className='flex items-center relative cursor-pointer group'>
                            {blog?.blogcategories?.map((item,index)=>(
                                <p key={index} className='font-semibold text-green-600 tracking-wider'>{item?.title}</p>
                            ))}
                            <span className='absolute left-0 -bottom-1.5 bg-lightColor/30 inline-block w-full h-0.5 group-hover:text-green-600 hover:cursor-pointer hoverEffect'></span>
                        </div>
                        <p className='flex items-center gap-1 text-lightColor relative group hover:cursor-pointer hover:text-green-600 hoverEffect'>
                            <Calendar size={15}></Calendar>
                            {dayjs(blog?.publishedAt).format("MMMM D, YYYY")}
                            <span className='absolute left-0 -bottom-1.5 bg-lightColor/30 inline-block w-full h-0.5 group-hover:text-green-600 hover:cursor-pointer hoverEffect'></span>
                        </p>
                    </div>
                    <Link href={`/blog/${blog?.slug?.current}`} className='text-base font-semibold tracking-wide mt-5 line-clamp-2 hover:text-green-600 hoverEffect'>{blog?.title}</Link>
                </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default LatestBog
