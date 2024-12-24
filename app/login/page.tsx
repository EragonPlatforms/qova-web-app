"use client";

import Image from "next/image";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createUser as createUserApi } from "@/api/api";
import { useMutation } from "@tanstack/react-query";

export default function Onboard() {
  const [name, setName] = useState("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const { isPending: creatingUser, mutate: createUser } = useMutation({
    mutationFn: createUserApi,
    onSuccess: ({ user_id: id }) => {
      localStorage.setItem("userId", id);
      localStorage.setItem("userName", name);
      router.push("/chat");
    },
    onError: (error) => {
      console.error("Error creating user:", error);
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) setError("Please enter your name");

    createUser(name);
  };

  return (
    <main className="w-full h-screen grid place-content-center space-y-6 px-4">
      {" "}
      <div
        className="max-w-4xl mx-auto  bg-white text-center space-y-4 py-4 px-6 flex flex-col items-center
     "
      >
        <h2 className="text-3xl font-semibold ">
          {" "}
          <span className="bg-gradient-to-r from-vsblue to-vsgreen inline-block text-transparent bg-clip-text ">
            Hey Champ! Welcome{" "}
          </span>
          <span className="bg-none"> 🖐️</span>
        </h2>
        <p className="text-center text-gray-600 mb-6">
          With advanced AI, we're here to create a secure, supportive online
          space for young people while equipping educators with the tools to
          lead confidently in the digital world.
        </p>
        <Image src={"/amico.svg"} width={232} height={232} alt="Illustration" />
      </div>
      <form
        onSubmit={handleSubmit}
        className="sm:max-w-4xl w-full mx-auto flex flex-col sm:flex-row gap-2 sm:bg-white sm:p-4 sm:border rounded-full sm:border-stone-400 "
      >
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="sm:grow px-8 py-4 sm:bg-transparent bg-white border border-stone-400 sm:border-0 rounded-full placeholder:italic placeholder:text-slate-400 focus:outline-none focus:ring-blue-950"
          placeholder="Please enter your name"
          required
        />

        <button
          type="submit"
          className={`${
            creatingUser ? "bg-blue-850 cursor-wait" : ""
          } px-12 py-4 bg-blue-950 focus:outline-ring-1 focus:outline-ring-blue-950 cursor-pointer text-white rounded-full`}
          disabled={creatingUser}
        >
          {creatingUser ? "Please wait..." : "Continue"}
        </button>
      </form>
      {error && <p className="text-red-500">{error}</p>}
    </main>
  );
}
