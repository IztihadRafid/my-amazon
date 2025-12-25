import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
export const metadata: Metadata = {
  title: {
    template: "%s | MyAmazon",
    default: "MyAmazon",
  },
  description: "Shop For all needs. Best prices. Fast delivery.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="font-poppins antialiased">
          <Header></Header>
          {children}
          <Footer></Footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
