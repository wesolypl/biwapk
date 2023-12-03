import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";

const inter = Inter({ subsets: ["latin-ext"] });

export const metadata: Metadata = {
  title: "Biwapka",
  description: "Wszystkie miejsca na Twój biwak w jednym miejscu",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body className={`${inter.className} h-screen flex flex-col`}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
