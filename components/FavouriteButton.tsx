import { Heart } from "lucide-react"
import Link from "next/link"

const FavouriteButton = () => {
  return (
    <Link href={'/cart'} className="group relative">
    <Heart className="w-6 h-6 hover:text-shop_light_green"></Heart>
     <span className="absolute -top-2 -right-2 bg-shop_dark_green text-white h-5 w-5 rounded-full text-xs font-semibold flex items-center justify-center ">0</span>
   </Link>
  )
}

export default FavouriteButton
