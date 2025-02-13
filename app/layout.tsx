import type { Metadata } from "next";
import { Fredoka } from "next/font/google";
import "./globals.css";
import Header from "./_components/header";
import QueryClientWrapper from "./_context/QueryClientWrapper";
import Footer from "./_components/footer";

const fredoka = Fredoka({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Qova AI",
    default: "Welcome, Qova AI",
  },
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
      <body className={`${fredoka.className} min-h-screen w-full  `}>
        <Header />
        <QueryClientWrapper>{children}</QueryClientWrapper>
      </body>
    </html>
  );
}
