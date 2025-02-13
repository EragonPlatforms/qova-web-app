import Image from "next/image";
import React from "react";
import CustomLink from "./custom-link";

function About() {
  return (
    <section className="py-20 px-4">
      <div
        id="about"
        className=" flex flex-col lg:flex-row gap-10 lg:gap-20 justify-between items-center mx-auto max-w-7xl"
      >
        <figure className="basis-1/2 -rotate-6 overflow-hidden rounded-lg hover:rotate-0 hover:scale-110 transition-all duration-300">
          <Image
            src={
              "https://res.cloudinary.com/karotcloud/image/upload/v1739289314/Qova%20ai/about_tnrwjd.jpg"
            }
            className="w-full h-auto"
            width={800}
            height={800}
            alt="about image"
          />
        </figure>
        <aside className="basis-1/2 text-center lg:text-left flex flex-col gap-5">
          <h2 className="font-semibold text-3xl">
            The AI Companion who cares about your digital wellbeing
          </h2>
          <p className=" text-[#333333]">
            Qova is an AI-driven chatbot companion that delivers text, image,
            and video responses tailored to African adolescents’ online
            interactions. It analyzes behavior, provides culturally sensitive,
            location-specific guidance, and features a risk-scoring system that
            encourages users to assess and mitigate online risks effectively. By
            connecting users with trained counselors and local child protection
            agencies, the solution ensures that children have access to timely
            and appropriate help, significantly reducing their vulnerability. 
          </p>
          <CustomLink />
        </aside>
      </div>
    </section>
  );
}

export default About;
