import type { Metadata } from "next";
import "./globals.css";
import "@ant-design/v5-patch-for-react-19";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Rick and Morty Universe",
  description: "Explore the multiverse with Rick and Morty.",
  keywords: ["Rick and Morty", "Universe", "Multiverse"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-gradient-to-r from-slate-800 via-slate-600 to-slate-800">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
