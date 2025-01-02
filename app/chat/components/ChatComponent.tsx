"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";
import { sendMessage } from "@/api/api";
import { Icon } from "@iconify/react/dist/iconify.js";
import { ChatResponse } from "@/types/user";
import ChatIcon from "@/app/chat/components/ChatIcon";

export default function ChatPage() {
  const [userName, setUserName] = useState<string | null>(null);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const queryClient = useQueryClient();
  const router = useRouter();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const storedUserName = localStorage.getItem("userName");

    if (!storedUserName) {
      router.push("/login");
    } else {
      setUserName(storedUserName);
    }
  }, [router]);

  const { data: input = "" } = useQuery<string>({
    queryKey: ["input"],
    initialData: "",
  });

  const { data: messages = [] } = useQuery<ChatResponse[]>({
    queryKey: ["messages"],
    initialData: [],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    queryClient.setQueryData(["input"], e.target.value);
  };

  const {
    isPending: isSending,
    mutate: sendQuestion,
    error,
  } = useMutation({
    mutationFn: sendMessage,
    onSuccess: (response) => {
      queryClient.setQueryData<ChatResponse[]>(
        ["messages"],
        (prevMessages = []) => [
          ...prevMessages,
          { role: "assistant", content: response.content },
        ]
      );
    },
    onError: (error) => {
      console.error("Error sending message:", error);
    },
    onSettled: () => {
      queryClient.setQueryData(["input"], "");
    },
  });

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    queryClient.invalidateQueries({ queryKey: ["messages"] });
    if (!input.trim()) return;

    const userId = localStorage.getItem("userId");
    if (!userId) {
      console.error("User ID not found");
      return;
    }

    // Optimistic update: Add the user's message to the cache immediately
    queryClient.setQueryData<ChatResponse[]>(
      ["messages"],
      (prevMessages = []) => [...prevMessages, { role: "user", content: input }]
    );

    // Trigger the mutation
    sendQuestion({ user_id: userId, question: input });
  };

  const PROMPT_SUGGESTIONS = [
    { text: "How do I stay safe on the Internet?", icon: "🦺" },
    { text: "What should I do if I see harmful content online?", icon: "😉" },
    { text: "What are the signs of Cyber Bullying?", icon: "🥷" },
    { text: "How can I manage my screen time better?", icon: "💻" },
  ];

  const handleSuggestionClick = (text: string) => {
    queryClient.setQueryData(["input"], text);
    setShowSuggestions(false);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  function UserIcon() {
    const userIcon = userName?.substring(0, 2).toUpperCase();
    return (
      <span className="w-12 h-12 rounded-full grid place-content-center  border-2 bg-white text-vspurple border-vspurple">
        {userIcon}
      </span>
    );
  }

  return (
    <div className="max-w-4xl mx-auto text-center space-y-4 py-4 px-6 flex flex-col h-[90vh] items-center overflow-y-scroll">
      <div className="bg-white w-full text-center mx-auto space-y-6 px-6 py-4 rounded-lg ">
        <h1 className="md:text-4xl text-2xl">
          <span className="bg-gradient-to-r from-[#062729] to-qovablue  inline-block text-transparent bg-clip-text">
            Hey {userName}!
          </span>
          <span> 🎉</span>
          <span className="bg-gradient-to-r from-qovablue to-[#062729] inline-block text-transparent bg-clip-text">
            Welcome to Qova
          </span>
          <span> 🙌</span>
        </h1>
        <p className="text-sm md:text-normal">
          I am excited to provide you personalized guidance and support for your
          digital wellbeing
        </p>
      </div>
      <div className="py-6 space-y-6 w-full overflow-y-scroll">
        <div className="space-y-4 border-b">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${
                message.role === "assistant" ? "justify-start" : "justify-end"
              }`}
            >
              <div
                className={`max-w-[80%] flex ${
                  message.role === "user" ? "flex-row-reverse" : ""
                } items-start gap-2`}
              >
                {message.role === "user" ? <UserIcon /> : <ChatIcon />}
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
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-qovablue rounded-full animate-bounce delay-100"></div>
              <div className="w-2 h-2 bg-qovablue rounded-full animate-bounce delay-200"></div>
              <div className="w-2 h-2 bg-qovablue rounded-full animate-bounce delay-300"></div>
            </div>
          )}

          {error && (
            <div className="flex justify-start items-center bg-vsblue/10 py-2 px-6 w-max rounded-full">
              <div className="text-xs text-red-500">{error.message}</div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {showSuggestions && (
          <div className="mb-6 md:w-[80%] mx-auto">
            <h3 className="text-xs text-left font-medium mb-2">
              Prompt Ideas 💡
            </h3>
            <div className="flex flex-wrap gap-4">
              {PROMPT_SUGGESTIONS.map((prompt, index) => (
                <button
                  key={index}
                  type="button"
                  className="bg-white text-xs md:text-normal border border-vsblack rounded-full py-2 md:px-5 px-2"
                  onClick={() => handleSuggestionClick(prompt.text)}
                >
                  {prompt.icon} {prompt.text}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="w-full mx-auto sticky bottom-4">
        <p className="ml-5 text-left  mb-2">Ask Qova 😊</p>
        <form
          onSubmit={handleSend}
          className="flex bg-white sm:p-3 border rounded-full w-full border-stone-400"
        >
          <input
            value={input || ""}
            onChange={handleChange}
            placeholder="Type your question here"
            disabled={isSending}
            className="grow px-8 md:text-xl py-4 bg-transparent placeholder:italic placeholder:text-slate-400 focus:outline-none focus:ring-blue-950"
          />
          <button
            type="submit"
            disabled={isSending}
            className={`${
              isSending ? "text-qovabluelight cursor-wait" : ""
            } text-vsblue cursor-pointer`}
          >
            {""}
            <Icon icon="ri:send-plane-2-fill" width="40" height="40" />
          </button>
        </form>
      </div>
    </div>
  );
}
function getQueryData<T>(arg0: string[]) {
  throw new Error("Function not implemented.");
}
