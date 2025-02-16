import axios from "axios";
import { ChatRequest, ChatResponse, UserResponse } from "@/types/user";

const api = axios.create({
  baseURL: "/api/proxy", // Calls Next.js proxy
  headers: {
    "Content-Type": "application/json",
  },
});

/**
 * Creates a new user (Frontend: /login → Backend: /user)
 * @param name - The name of the new user.
 * @returns A promise that resolves to the newly created user's response.
 */
export async function createUser(name: string): Promise<UserResponse> {
  try {
    const { data } = await api.post<UserResponse>("/login", { name }); // Using /login
    return data;
  } catch (error: any) {
    console.error("Error in createUser:", error);
    throw new Error(
      error.response?.data?.message || "An unexpected error occurred"
    );
  }
}

/**
 * Sends a message to the chat API (/chat)
 * @param request - The chat request containing the user ID and question.
 * @returns A promise that resolves to the chat response from the server.
 */
export async function sendMessage({
  question,
  user_id,
}: ChatRequest): Promise<ChatResponse> {
  try {
    const { data } = await api.post<ChatResponse>("/chat", {
      question,
      user_id,
    });

    if (!data?.content) {
      throw new Error("Invalid response from the server.");
    }

    return data;
  } catch (error: any) {
    console.error("Error in sendMessage:", error);
    throw new Error(
      error.response?.data?.message || "An unexpected error occurred"
    );
  }
}
