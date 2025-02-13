import React from "react";
import Image from "next/image";

const ChatIcon = () => {
  return (
    <Image
      src={
        "https://res.cloudinary.com/karotcloud/image/upload/v1739371307/Qova%20ai/qova_qvtmnt.svg"
      }
      alt="AI chat icon"
      width={50}
      height={50}
    />
  );
};

export default ChatIcon;
