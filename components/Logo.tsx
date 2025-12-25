import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <div>
      <Link href={"/"}>
        <h2 className="font-bold text-4xl ">
          My<span className="text-lime-600 ">Amazon</span>
        </h2>
      </Link>
    </div>
  );
};

export default Logo;
