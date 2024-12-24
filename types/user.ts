export interface UserResponse {
  user_id: string; 
  name: string;
}

export interface ChatRequest {
  user_id: string; // The unique ID of the user
  question: string; // The user's question
}

export interface ChatResponse {
  role: "user" | "assistant"; // Role of the message sender
  content: string; // The content of the message
}

export interface ApiError {
  detail: {
    loc: (string | number)[]; // Location of the error in the API schema
    msg: string; // Error message
    type: string; // Type of the error
  }[];
}
