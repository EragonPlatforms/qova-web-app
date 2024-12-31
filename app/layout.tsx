import type { Metadata } from "next";
import { Palanquin } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import QueryClientWrapper from "./context/QueryClientWrapper";

const palanquin = Palanquin({
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
      <body className={`${palanquin.className} min-h-screen w-full  `}>
        <Header />
        <QueryClientWrapper>
          <div className="bg-[url('https://res.cloudinary.com/karotcloud/image/upload/v1735662951/Qova%20ai/blur-bg_pnepxx.svg')] bg-cover ">
            {children}
          </div>
        </QueryClientWrapper>
      </body>
    </html>
  );
}
