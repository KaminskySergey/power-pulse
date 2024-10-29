'use server'
import { authOptions } from "@/auth"
import { BASIC_URL } from "@/app/const/basic-server-url";

import { IPerformedExercise } from "@/types/exercise";
import { getServerSession } from "next-auth";


export async function getExercisesBySlug(
  page: number = 1,
  slugName: string,
  slug: string,
) {
  const session = await getServerSession(authOptions)
 
  const response = await fetch(
    `${BASIC_URL}/exercises?${slugName}=${slug}&page=${page}`,
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

export async function createPerformedExercise(data: IPerformedExercise) {
  const session = await getServerSession(authOptions)

  const response = await fetch(`${BASIC_URL}/performed-exercise`, {
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