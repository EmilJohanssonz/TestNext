"use client";
import Navbar from "@/components/nav/navbar";
import "./globals.css";
import { usePathname } from "next/navigation";
import Footer from "@/components/footer/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body>
        {/* Conditionally render Navbar */}
        {pathname !== "/" && <Navbar />}
        {children}
        {pathname !== "/" && <Footer />}
      </body>
    </html>
  );
}
