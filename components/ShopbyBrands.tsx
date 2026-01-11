import { urlFor } from '@/sanity/lib/image'
import { getAllBrands } from '@/sanity/queries'
import { Truck, RotateCcw, Shield, Headphones } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
const extraData = [
    {
     title: "Free Delivery",
     description: "Free Shipping over 100 Tk/-"   ,
     icon:<Truck size={45}></Truck>
    },
    {
     title: "Free Returns",
     description: "Easy returns within 30 days",
     icon:<RotateCcw size={45}></RotateCcw>
    },
    {
     title: "Secure Payment",
     description: "100% secure payment methods",
     icon:<Shield size={45}></Shield>
    },
    {
     title: "24/7 Support",
     description: "Customer support available anytime",
     icon:<Headphones size={45}></Headphones>
    }
]
const ShopbyBrands =async () => {
    const brands = await getAllBrands()
  return (
    <div className='md-10 lg:mb-20 bg-shop_light_bg p-5 lg:p-7 rounded-lg'>
      <div className='flex items-center gap-5 justify-between mb-10'>
        <h4 className='text-2xl'>Shop By Brands</h4>
        <Link href={'/shop'} className='font-semibold tracking-wide hover:text-shop_btn_dark_green hoverEffect'>
        View All
        </Link>
      </div>
      <div className='grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-5 mb-10'>
        {
            brands?.map((brand)=>(
                <Link href={`/brand/${brand?.slug?.current}`} key={brand._id} className='bg-white w-full h-24 flex items-center justify-center rounded-md overflow-hidden hover:shadow-md shadow-shop_dark_green hoverEffect p-2'>
                   {brand?.image &&  <Image src={urlFor(brand?.image).url()} alt='Brand image' width={250} height={250} className='w-32 h-20 object-contain'></Image>}
                </Link>
            ))
        }
      </div>
      <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 '>
        {extraData?.map((item,index)=>(
            <div key={index} className='flex items-center bg-white px-6 py-4'>
                 <span className='text-gray-600 p-1 hover:text-green-600'>{item?.icon}</span>
                 <div className='p-1'>
                    <p className='text-lg font-semibold'>{item?.title}</p>
                    <p>{item?.description}</p>
                 </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default ShopbyBrands
