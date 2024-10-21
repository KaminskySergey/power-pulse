"use server";
import { fetchOptions } from "@/api/helpers";
import { BASIC_URL } from "@/app/const/basic-server-url";

export async function login(data: { email: string; password: string }) {

  try {
    const response = await fetch(`${BASIC_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const responseData = await response.json();

    return responseData
  } catch (error) {
    console.error("Login failed:", error);
    throw error;
  }
}
