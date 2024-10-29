"use server";
import { authOptions } from "@/auth"
import { BASIC_URL } from "@/app/const/basic-server-url";

import { ICreateCustomedProduct } from "@/types/product";
import { getServerSession } from "next-auth";

export async function getProducts(
  page: number = 1,
  searchTerm?: string,
  category?: string,
  allowed?: string
) {
  const session = await getServerSession(authOptions)

  const params = new URLSearchParams();

  if (searchTerm) params.append("searchTerm", searchTerm);
  if (category) params.append("category", category);
  if (allowed) params.append("allowed", allowed);
  if (allowed === "All") params.delete("allowed", allowed);
  const response = await fetch(
    `${BASIC_URL}/products?${params.toString()}&page=${page}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${session?.user.accessToken}`,
      },
    }
  );
  const res = await response.json();
  return res;
}

export async function createCustomedProduct(data: ICreateCustomedProduct) {
  const session = await getServerSession(authOptions)

  const response = await fetch(`${BASIC_URL}/consumed-product`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${session?.user.accessToken}`,
    },
    body: JSON.stringify(data),
  });
  const status = response.status;
  const res = await response.json();
  return { status, res };
}
