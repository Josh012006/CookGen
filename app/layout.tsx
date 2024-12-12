import type { Metadata } from "next";
// import { Playwrite_US_Modern } from "next/font/google";
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });


export const metadata: Metadata = {
  title: "CookGen",
  description: "A fun app to help you find what you are cooking next!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="icon.png" />
      </head>
      <body className="border-2 border-orange-300 rounded text-sm lg:text-lg">
        {children}
      </body>
    </html>
  );
}
