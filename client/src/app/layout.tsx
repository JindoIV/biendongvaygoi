import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./global.css";
import Menu from "@/components/Audio/Menu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bien Dong Vay Goi",
  description: "A web site about education",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>{children}</main>
      </body>
    </html>
  );
}
