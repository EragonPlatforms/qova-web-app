import { NextResponse } from "next/server";

const baseApi = "http://qova-api-5d4001-f78a7e-195-110-59-69.traefik.me";

export async function POST(req: Request) {
  try {
    if (!baseApi) {
      console.error("Base API URL is missing");
      return NextResponse.json(
        { message: "Server misconfiguration" },
        { status: 500 }
      );
    }

    const body = await req.json();
    // console.log("Received request body for chat:", body);

    const response = await fetch(`${baseApi}/chat`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const text = await response.text();
    // console.log("Raw API Response from /chat:", text);

    let data;
    try {
      data = JSON.parse(text);
    } catch (jsonError) {
      console.error("Invalid JSON from backend (/chat):", text);
      return NextResponse.json(
        { message: "Invalid response from backend", raw: text },
        { status: 500 }
      );
    }

    return NextResponse.json(data, { status: response.status });
  } catch (error: any) {
    console.error("Proxy API error (chat):", error);
    return NextResponse.json(
      { message: "Internal Server Error", error: error.toString() },
      { status: 500 }
    );
  }
}
