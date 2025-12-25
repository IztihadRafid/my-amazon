import { Facebook, Instagram, Linkedin, Slack, Twitter, Youtube } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { Button } from "./ui/button";
import Link from "next/link";

const socialLink = [
  {
    title: "Facebook",
    href: "https://facebook.com",
    icon: <Facebook></Facebook>,
  },
  { title: "Youtube", href: "https://youtube.com", icon: <Youtube></Youtube> },
  { title: "Twitter", href: "https://twitter.com", icon: <Twitter></Twitter> },
  {
    title: "Instagram",
    href: "https://instagram.com",
    icon: <Instagram></Instagram>,
  },
  { title: "LinkedIn", href: "https://linkedin.com", icon: <Linkedin></Linkedin> },
];

const SocialMedia = () => {
  return (
    <div className="flex flex-row items-center justify-around">
      {socialLink?.map((item) => (
        <Tooltip key={item.title}>
          <TooltipTrigger asChild className="border-[1] rounded-full p-2 hover:text-black hover:bg-green-400 duration-300">
            <Link target="_blank" href={item?.href}>{item?.icon}</Link>
          </TooltipTrigger>
          <TooltipContent className="bg-white text-black font-semibold">
            <p>{item?.title}</p>
          </TooltipContent>
        </Tooltip>
      ))}
    </div>
  );
};

export default SocialMedia;
