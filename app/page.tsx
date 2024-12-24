"use client";

import Link from "next/link";
import Image from "next/image";

interface imageGridType {
  id: string;
  src: string;
  alt: string;
  name: string;
  accentBg: string;
}

const imageGrid = [
  {
    id: "1",
    src: "bro.svg",
    alt: "Internet safety illustration",
    name: "Internet Safety",
    accentBg: "bg-vsblue",
  },
  {
    id: "2",
    src: "rafiki.svg",
    alt: "Cyber Bullying illustration",
    name: "Cyber Bullying",
    accentBg: "bg-vsgreen",
  },
  {
    id: "3",
    src: "gaming.svg",
    alt: "Safer Gambling illustration",
    name: "Safer Gambling",
    accentBg: "bg-vspurple",
  },
  {
    id: "4",
    src: "csam.svg",
    alt: "CSAM illustration",
    name: "CSAM",
    accentBg: "bg-vsblack",
  },
];

export default function Home() {
  return (
    <main className="leading-snug px-2 bg-no-repeat flex justify-center h-[90vh] py-10">
      <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-10 max-w-7xl mx-auto">
        <aside className="space-y-5 md:basis-1/2  md:pr-[4.8rem]">
          <Image src="/logo.svg" alt="logo" width={250} height={250} />
          <p className="lg:text-3xl md:text-2xl leading-snug">
            Our AI Companion for Protecting Young Minds and Guiding Educators
            Online.
          </p>
          <Link
            className="bg-vsblue text-white w-full md:w-max rounded-full md:px-20 px-10 py-4 inline-block"
            href="/login"
          >
            Get Started Now
          </Link>
        </aside>
        <aside className="grid md:grid-cols-2 gap-4 md:basis-1/2 w-full">
          {imageGrid.map(({ id, name, alt, src, accentBg }: imageGridType) => (
            <div
              key={id}
              className={`${accentBg} w-full flex flex-col gap-8 items-center py-4 px-6 rounded-lg text-white`}
            >
              <h2 className="self-start">{name}</h2>
              <Image
                className="text-center"
                src={src}
                alt={alt}
                width={250}
                height={250}
              />
            </div>
          ))}
        </aside>
      </div>
    </main>
  );
}
