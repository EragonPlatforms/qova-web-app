import React from "react";
import ChatIcon from "@/app/chat/components/chat-icon";
import UserIcon from "@/app/chat/components/user-icon";

function Messages({
  messages,
  isSending,
  error,
  userName,
}: {
  messages: any[];
  isSending: boolean;
  error: any;
  userName: string;
}) {
  return (
    <>
      {messages.map((message) => (
        <div
          key={message.content}
          className={`flex ${
            message.role === "assistant" ? "justify-start" : "justify-end"
          }`}
        >
          <div
            className={`max-w-[80%] flex ${
              message.role === "user" ? "flex-row-reverse" : ""
            } items-start gap-2`}
          >
            {message.role === "user" ? (
              <UserIcon userName={userName ?? ""} />
            ) : (
              <ChatIcon />
            )}
            <span
              className={`rounded-lg shadow-lg  text-left px-2 py-2 ${
                message.role === "user"
                  ? "bg-white text-vsblack "
                  : "bg-vsblue/10 text-vsblack  "
              }`}
            >
              {message.content}
            </span>
          </div>
        </div>
      ))}
      {isSending && (
        <div className="flex justify-start items-start gap-2">
          <ChatIcon />
          <div className="bg-vsblue/10 text-vsblack rounded-lg shadow-lg px-4 py-3 flex items-center gap-2">
            <div className="w-2 h-2 bg-qovapink rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-qovapink rounded-full animate-pulse delay-300"></div>
            <div className="w-2 h-2 bg-qovapink rounded-full animate-pulse delay-500"></div>
          </div>
        </div>
      )}

      {error && (
        <div className="flex justify-start items-center bg-vsblue/10 py-2 px-6 w-max rounded-full">
          <div className="text-xs text-red-500">{error.message}</div>
        </div>
      )}
    </>
  );
}

export default Messages;
