import type { Metadata } from "next";
import "./globals.css";
import "@ant-design/v5-patch-for-react-19";

export const metadata: Metadata = {
  title: "Rick and Morty Universe",
  description: "Explore the multiverse with Rick and Morty.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
