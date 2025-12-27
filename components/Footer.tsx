import Link from "next/link";
import Container from "./Container";
import Logo from "./Logo";
import SocialMedia from "./SocialMedia";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import FooterTop from "./FooterTop";
import { categoriesData, quickLinksData } from "@/constants/data";

const Footer = () => {
  return (
    <footer>
      <FooterTop></FooterTop>
      <Container className="flex flex-col md:flex-row items-center justify-between bg-gray-100 p-10 md:p-20 mx-auto gap-5 md:gap-10">
        {/* left most content */}
        <div className="md:w-2/6  text-center md:text-left">
          <div>
            <Logo></Logo>
            <p className="my-4  text-center md:text-left">
              Discover curated furniture collection at myAmazon, blending style
              and comfort to elevate your living spaces.
            </p>
            <div className="md:w-1/2 ">
              <SocialMedia></SocialMedia>
            </div>
          </div>
        </div>
        {/* 2nd left content */}
        <div  className="md:w-1/6 text-center md:text-left">
          <h4 className="text-lg font-bold mb-3">Quick Links</h4>
          <div className="">
            <ul>
              {
                quickLinksData?.map(item=>(
                  <li key={item.title}><Link href={item.href}>{item.title}</Link></li>
                ))
              }
            </ul>
          </div>
        </div>
        {/* 3rd right content */}
        <div className="md:w-1/6  text-center md:text-left">
          <h4 className="text-lg font-bold mb-3">Categories</h4>
          <div className="">
            <ul>
              {
                categoriesData?.map(item=>(
                  <li key={item.title}><Link href={item.href}>{item.title}</Link></li>
                ))
              }
            </ul>
          </div>
        </div>
        {/* 4th right content */}
        <div className="md:w-2/6  text-center md:text-left">
          <h4 className="text-lg font-bold mb-2">NewsLetter</h4>
          <p className="my-2">Subscribe to our newsletter for updates and executive offers.</p>
          <Input placeholder="Enter Your Email" className="mb-3"></Input>
          <Button size={"lg"}>Subscribe</Button>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
