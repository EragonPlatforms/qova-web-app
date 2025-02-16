"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";
import { sendMessage } from "@/app/api/api";
import { ChatResponse } from "@/types/user";

import "aos/dist/aos.css";
import AOS from "aos";
import PromptSuggestions from "./prompt-suggestion";
import ChatHeader from "./chat-header";
import ChatForm from "./chat-input-form";
import Messages from "./messages";

export default function ChatPage() {
  const [userName, setUserName] = useState<string | null>(null);
  const [showSuggestions, setShowSuggestions] = useState<boolean>(true);
  const queryClient = useQueryClient();
  const router = useRouter();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-in-out",
    });
  }, []);

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

  const handleSuggestionClick = (text: string) => {
    queryClient.setQueryData(["input"], text);
    setShowSuggestions(false);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="bg-[url('https://res.cloudinary.com/karotcloud/image/upload/v1739368923/blur-bg_zkhxdg.svg')] bg-cover w-full h-dvh">
      <div className="max-w-4xl mx-auto text-center space-y-4 py-4 px-6 flex flex-col h-[90vh] items-center overflow-y-scroll  pt-[20vh]">
        <div className="py-6 space-y-6 w-full overflow-y-scroll">
          <div className="space-y-4 border-b">
            {showSuggestions && <ChatHeader userName={userName ?? ""} />}
            <Messages
              messages={messages}
              isSending={isSending}
              error={error}
              userName={userName ?? ""}
            />
            <div ref={messagesEndRef} />
          </div>

          {showSuggestions && (
            <PromptSuggestions handleSuggestionClick={handleSuggestionClick} />
          )}
        </div>
        <div data-aos="fade-up" className="w-full mx-auto sticky bottom-4">
          <p className="ml-5 text-left  mb-2">Ask Qova 😊</p>
          <ChatForm
            handleChange={handleChange}
            handleSend={handleSend}
            input={input}
            isSending={isSending}
          />
        </div>
      </div>
    </div>
  );
}
