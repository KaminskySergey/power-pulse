"use server";

import { auth } from "@/auth";
import { IGetProductList } from "@/types/product";

export const getProducts = async (
  page: number = 1,
  searchTerm?: string,
  category?: string,
  allowed?: string
) => {
  const session = await auth();
  const params = new URLSearchParams();
    
    if (searchTerm) params.append('searchTerm', searchTerm);
    if (category) params.append('category', category);
    if (allowed) params.append('allowed', allowed);
    if (allowed === 'All') params.delete('allowed', allowed)
  try {
    const url = `http://localhost:4200/api/products?${params.toString()}&page=${page}`;
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${session?.user.accessToken}`,
        "Content-Type": "application/json",
      },
    });
    const data = (await response.json()) as IGetProductList;
    return data;
  } catch (error: unknown) {
    console.log(error);
    throw new Error(`An error happened: ${error}`);
  }
};
