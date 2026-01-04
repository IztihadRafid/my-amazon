import { Product } from "@/sanity.types"
import { Heart } from "lucide-react"

const AddtoWishlistButton = ({product}:{product:Product}) => {
  return (
    <div className="absolute top-2 right-2 z-10">
      <div className="p-2.5 rounded-full hover:bg-green-700 hover:text-white duration-150">
        <Heart  size={20}></Heart>
      </div>
    </div>
  )
}

export default AddtoWishlistButton
