"use server";
import { signOut } from "@/auth";
import { cookies } from "next/headers";



export async function doLogout() {
  await cookies().delete('token')
  await signOut({redirectTo: '/auth/login'});
}
