"use client"

import Container from "@/components/Container";
import NoAccess from "@/components/NoAccess";
import { Address } from "@/sanity.types";
import useStore from "@/store"
import { useAuth, useUser } from "@clerk/nextjs";
import { useState } from "react";

const CartPage = () => {
    const {deleteCartProduct,getTotalPrice, getItemCount,getSubTotalPrice,resetCart}= useStore();
    const [isClient,setIsClient]= useState(false);
    const [loading,setLoading]= useState(false);
    // const [addresss,setAddresses]= useState<ADDRESS_QUERYResult | null>(null);
    const [selectedAddress,setSelectedAddress]= useState<Address|null>(null)
    const {isSignedIn}= useAuth();
    const {user}= useUser();
  return (
    <div className="bg-gray-50 pb-52 md:pb-10">
      {isSignedIn?<Container><p>cart page</p></Container>:<NoAccess></NoAccess>}
    </div>
  )
}

export default CartPage
