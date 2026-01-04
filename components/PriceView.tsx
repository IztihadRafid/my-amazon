import PriceFormatter from "./PriceFormatter";
import { Badge } from "./ui/badge";

interface Props{
    price:number | undefined;
    discount: number | undefined;
    className?:string
}
const PriceView = ({price,discount,className}:Props) => {
  console.log(discount)
  return (
    <div>
      <div className="relative">
       <PriceFormatter amount={price} className="text-shop_dark_green"></PriceFormatter>
       {/* {price && discount && <PriceFormatter amount={price + (discount*price)/100} className="line-through font-normal text-gray-600 ml-1"></PriceFormatter>} */}
       {price && discount !=100 && discount!=undefined && <PriceFormatter amount={price / (1 - discount / 100)} className="line-through font-normal text-gray-600 ml-1"></PriceFormatter>}
       {discount >0 && discount<100 && discount!=undefined && <Badge className="absolute bottom-40 right-1 z-20 ">{discount}%</Badge>}
      

      </div>
    </div>
  )
}

export default PriceView
