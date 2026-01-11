import Link from "next/link";
import Title from "./text";
import Image from "next/image";
import bannerImage from "../public/images/BannerImg (2).webp";
const HomeBanner = () => {
  return (
    <div className=" md:mb-10 mb-5 py-8 md:py-10  bg-shop_light_pink rounded-lg px-6 md:px-10 lg:px-20 flex items-center justify-between w-full lg:w-[80%] mx-auto">
      <div className="">
        <Title>Grab Upto 50% off on Selected Headphone</Title>
        <div className="mt-3 md:mt-0 md:p-3">
          <Link
            href={"/shop"}
            className="bg-shop_dark_green/90 text-white/90 text-sm lg:px-8 px-6 py-2 lg:py-3 rounded-md font-semibold hover:text-white hover:bg-shop_dark_green"
          >
            Buy Now
          </Link>
        </div>
      </div>
      <div className="">
        <Image
          src={bannerImage}
          width={900}
          height={900}
          alt="Banner Image"
          className="hidden md:inline-flex"
        />
      </div>
    </div>
  );
};

export default HomeBanner;
