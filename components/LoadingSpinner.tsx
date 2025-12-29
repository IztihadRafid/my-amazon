import Image from "next/image"
import loadingSpinner from "../public/spinner.gif"
const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center">
      <Image src={loadingSpinner} width={200} height={200} alt="Loading..."></Image>
    </div>
  )
}

export default LoadingSpinner
