import axios from "axios";
import { ChatRequest, ChatResponse, UserResponse } from "@/types/user";

// Create an Axios instance for API requests
const api = axios.create({
  baseURL: "/api", // API base URL
  headers: {
    "Content-Type": "application/json", // Default headers for requests
  },
});

/**
 * Creates a new user in the server.
 *
 * @param name - The name of the new user.
 * @returns A promise that resolves to the newly created user's response.
 * @throws An error if the request fails.
 */
export async function createUser(name: string): Promise<UserResponse> {
  try {
    const { data } = await api.post<UserResponse>("/user", { name });
    console.log(data); // Debugging statement; remove or replace in production
    return data;
  } catch (error: any) {
    console.error("Error in createUser:", error); // Log the error
    const errorMessage =
      error.response?.data?.message || "An unexpected error occurred";
    throw new Error(errorMessage); // Throw a descriptive error
  }
}

/**
 * Sends a message to the chat API.
 *
 * @param request - The chat request containing the user ID and question.
 * @returns A promise that resolves to the chat response from the server.
 * @throws An error if the request fails.
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

    // Ensure data exists and matches the expected format
    if (!data?.content) {
      throw new Error("Invalid response from the server.");
    }

    return data;
  } catch (error: any) {
    console.error("Error in sendMessage:", error);
    const errorMessage =
      error.response?.data?.message || "An unexpected error occurred";
    throw new Error(errorMessage);
  }
}
