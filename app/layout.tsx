import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import QueryClientWrapper from "./context/QueryClientWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Qova",
  description:
    "With advanced AI, we’re here to create a secure, supportive online space for young people while equipping educators with the tools to lead confidently in the digital world.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="max-h-screen w-full ">
        <Header />
        <QueryClientWrapper>
          <div className="grid place-content-center bg-[url('/blur-bg.svg')] h-[90vh] bg-cover ">
            {children}
          </div>
        </QueryClientWrapper>
      </body>
    </html>
  );
}
