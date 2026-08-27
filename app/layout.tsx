import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Suman's Lucknowi",
  description: "Authentic Lucknowi Chikankari curated in Mumbai.",
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
