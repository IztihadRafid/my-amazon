import { ReactNode } from "react";

const Title = ({ children }: { children: ReactNode }) => {
  return (
    <h2 className="text-2xl md:text-2xl lg:text-4xl font-bold md:p-3 text-shop_dark_green capitalize tracking-wide ">
      {children}
    </h2>
  );
};

export default Title;
