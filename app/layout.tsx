import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavbarWrapper from "@/components/ui/Navbar/NavbarWrapper";
import NextTopLoader from "nextjs-toploader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Project Hunt",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased mx-auto w-full h-screen`}
      >
        <div className="h-full">
          <NextTopLoader color="#4a3f35" />
          <div className="relative h-full">
            <NavbarWrapper />
            <div className="max-w-[1440px] mx-auto h-full">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
