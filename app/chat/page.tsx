import React from "react";
import ChatComponent from "./components/chat-component";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chat",
};

const page = () => {
  return (
    <>
      <ChatComponent />
    </>
  );
};

export default page;
