import { productType } from '@/constants/data'
import Link from 'next/link'
import { Button } from './ui/button'
interface Props{
    selectedTab:string;
    onTabSelect:(tab:string)=>void
}
const HomeTabBar = ({selectedTab,onTabSelect}:Props) => {
  return (
    <div className='flex items-center justify-between flex-wrap gap-5'>
     <div className='grid md:grid-cols-4 grid-cols-2 gap-3'>
        {
            productType?.map((item)=>(
                <Button onClick={()=>onTabSelect(item?.title)} className={`bg-green-200/50 text-green-600 hover:bg-green-700 hover:text-white rounded-full hoverEffect  ${selectedTab===item?.title? "bg-green-700 text-white":"bg-green-200/50 text-green-600"}`}
                 key={item?.title}>{item.title}</Button>
            ))
        }
     </div>
     <Link href={'shop'}>See All</Link>
    </div>
  )
}

export default HomeTabBar
