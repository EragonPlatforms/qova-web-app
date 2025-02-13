import React from "react";
import { Icon } from "@iconify/react";

function ChatForm({
  handleSend,
  handleChange,
  input,
  isSending,
}: {
  handleSend: (e: React.FormEvent) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  input: string;
  isSending: boolean;
}) {
  return (
    <form
      onSubmit={handleSend}
      className="flex bg-white sm:p-3 border rounded-full w-full border-stone-400"
    >
      <input
        value={input || ""}
        onChange={handleChange}
        placeholder="Type your question here"
        disabled={isSending}
        className="grow px-8 lg:text-xl py-4 bg-transparent placeholder:italic placeholder:text-slate-400 focus:outline-none focus:ring-blue-950"
      />
      <button
        type="submit"
        disabled={isSending}
        className={`${
          isSending ? "text-qovabluelight cursor-wait" : ""
        } text-qovapink cursor-pointer`}
      >
        {""}
        <Icon icon="ri:send-plane-2-fill" width="40" height="40" />
      </button>
    </form>
  );
}

export default ChatForm;
