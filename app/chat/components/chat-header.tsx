import React from "react";

function ChatHeader({ userName }: Readonly<{ userName: string }>) {
  return (
    <div
      data-aos="fade-down"
      className="bg-qovagreen text-white w-full text-center mx-auto space-y-6 px-6 py-4 rounded-lg "
    >
      <h1 className="lg:text-4xl text-2xl">
        Hey {userName}! 🎉 Welcome to Qova 🙌
      </h1>
      <p className="text-sm lg:text-normal">
        I am excited to provide you personalized guidance and support for your
        digital wellbeing
      </p>
    </div>
  );
}

export default ChatHeader;
