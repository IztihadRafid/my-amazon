import type { Metadata } from "next";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ClerkProvider } from "@clerk/nextjs";
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
    <ClerkProvider
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
    >
      <div className="flex flex-col min-h-screen">
        <Header></Header>
        <main className="flex-1">{children}</main>
        <Footer></Footer>
      </div>
    </ClerkProvider>
  );
}
