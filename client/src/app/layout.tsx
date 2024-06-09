import type { Metadata } from "next";
import "./global.css";
import Menu from "@/components/Audio/Menu";
import FixModal from "@/components/FixModal/FixModal";
import StoreProvider from "@/components/Redux/Redux";

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
      <body id="__next" suppressHydrationWarning={true}>
        <StoreProvider>
          <FixModal></FixModal>
          <main>{children}</main>
        </StoreProvider>
      </body>
    </html>
  );
}
