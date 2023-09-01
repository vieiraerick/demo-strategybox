import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Strategy Box",
  description: "Demonstração de Design Responsivo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" className="dark h-full">
      <body className={`${inter.className} h-full`}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
