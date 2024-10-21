// import axios from 'axios'
// import { getSession } from 'next-auth/react';
// import { NextRequest } from 'next/server';
import Cookies from "js-cookie";
// import { cookies } from "next/headers";

// export const getContentType = () => ({
//     'Content-Type': 'application/json'
// })
interface FetchOptions extends RequestInit {
  headers?: Record<string, string>;
}

export const errorCatch = (error: any): string => {
  const message = error?.response?.data?.message;

  return message
    ? typeof error.response.data.message === "object"
      ? message[0]
      : message
    : error.message;
};

const API_URL = process.env.NEXT_PUBLIC_SERVER_URL;

export async function fetchOptions(endpoint: string, options?: any) {
  const response = await fetch(`${API_URL}${endpoint}`, options);
  if (!response.ok) {
    errorCatch(response.status);
  }
  const data = await response.json();

  return data;
}

export async function fetchWithAuth<T>(
  url: string,
  options: FetchOptions = {},
  token?: string
): Promise<T> {
  if (!token) {
    console.error("No token found");
    throw new Error("No token found");
  }

  try {
    const fetchOptions: RequestInit = {
      ...options,
      headers: {
        ...options.headers,
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };
    const fullUrl = `${process.env.NEXT_PUBLIC_SERVER_URL}/${url}`;
    console.log(`Fetching URL: ${fullUrl} with options:`, fetchOptions);
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/${url}`,
      fetchOptions
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const text = await response.text();

    if (!text) {
      throw new Error("Response body is empty");
    }

    try {
      const data: T = JSON.parse(text);
      return data;
    } catch (error) {
      throw new Error("Error parsing JSON response");
    }
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
}
