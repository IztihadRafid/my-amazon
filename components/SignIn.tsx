"use client";
import { SignInButton } from "@clerk/nextjs";

const SignIn = () => {
  return (
    <div className="font-semibold text-lightColor cursor-pointer hover:text-darkColor">
      <SignInButton mode="modal">Login</SignInButton>
    </div>
  );
};

export default SignIn;
