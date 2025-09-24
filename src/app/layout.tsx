import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nutdown Editor",
  description: "Markdown editor made to learn more about NextJS",
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
