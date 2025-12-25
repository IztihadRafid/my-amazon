"use client";
import { X } from "lucide-react";
import Logo from "./Logo";
import { headerData } from "@/constants/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SocialMedia from "./SocialMedia";
import { useOutsideClick } from "@/hooks";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}
const SideMenu = ({ isOpen, onClose }: SidebarProps) => {
  const pathname = usePathname();
  const sidebarRef = useOutsideClick<HTMLDivElement>(() => {
    if (isOpen) {
      onClose();
    }});
  return (
    <div
      className={`fixed inset-y-0 h-screen left-0 z-50 w-full bg-black/50 text-white shadow-xl ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } duration-200`}
    >
      <div ref={sidebarRef} className="min-w-72 max-w-96 bg-black h-screen p-10 border-r border-shop_light_green flex flex-col gap-6">
        <div className="flex items-center justify-between gap-5">
          <Logo></Logo>
          <button className="hover:text-shop_light_green " onClick={onClose}>
            <X></X>
          </button>
        </div>
        <div className="flex flex-col space-y-3.5 font-semibold tracking-wide">
          {headerData?.map((item) => (
            <Link
              href={item.href}
              key={item.title}
              className={`hover:text-green-500 hoverEffect ${
                pathname === item.href && "text-green-500"
              }`}
              onClick={onClose}
            >
              {item.title}
            </Link>
          ))}
        </div>
        <SocialMedia></SocialMedia>
      </div>
    </div>
  );
};

export default SideMenu;
