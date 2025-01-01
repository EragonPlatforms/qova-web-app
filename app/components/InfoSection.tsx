import React from "react";
import CustomLink from "./CustomLink";

const InfoSection = () => {
  return (
    <section className=" text-center min-h-[60vh] grid bg-white place-content-center">
      <div className="max-w-5xl w-[100%]  px-3 space-y-8 mx-auto">
        <h2 className="md:text-3xl text-xl text-vsblue font-semibold leading-relaxed">
          Empowering and supporting internet users, especially young people with
          a personalized digital companion—a safe space to build healthy habits,
          practice self-care, and proactively address potential challenges in
          their digital wellbeing.
        </h2>
        <CustomLink />
      </div>
    </section>
  );
};

export default InfoSection;
