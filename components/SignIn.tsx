import { SignInButton } from "@clerk/nextjs";

const SignIn = () => {
  return (
    <button className=" font-semibold text-lightColor cursor-pointer hover:text-darkColor ">
      <SignInButton mode="modal">Login</SignInButton>
    </button>
  );
};

export default SignIn;
