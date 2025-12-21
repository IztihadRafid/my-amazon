"use client";
import { headerData } from "@/constants/data";
import Link from "next/link";
import { usePathname } from "next/navigation";

const HeaderMenu = () => {

    const pathname = usePathname()
    console.log(pathname)
    return (
    <div className="hidden md:inline-flex w-1/3 items-center gap-7 capitalize font-semibold text-lightColor">
      {headerData?.map((item) => (
        <Link
          key={item.title}
          href={item?.href}
          className={`hover:text-shop_light_green relative group`}
        >
          {item?.title}
          <span
            className={`absolute bg-shop_light_green -bottom-0.5 left-1/2 w-0 h-0.5 group-hover:w-1/2 duration-100 group-hover:left-0`}
          ></span>
          <span
            className={`absolute bg-shop_light_green -bottom-0.5 right-1/2 w-0 h-0.5 group-hover:w-1/2 duration-100 group-hover:right-0`}
          ></span>
        </Link>
      ))}
    </div>
  );
};

export default HeaderMenu;
