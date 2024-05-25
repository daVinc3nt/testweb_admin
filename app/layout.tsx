import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/Navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Test Next app",
  description: "Create by Tran Ngoc Lam Vy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="w-screen h-screen flex flex-col">
          <main className="overflow-y-scroll no-scrollbar hide-scrollbar ">
            {children}
          </main>
      </body>
    </html >
  );
}