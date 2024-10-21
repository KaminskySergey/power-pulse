"use server";
import { BASIC_URL } from "@/app/const/basic-server-url";
import { auth } from "@/auth";

export async function getDailyActivity(date: string) {
  const session = await auth();
  const response = await fetch(`${BASIC_URL}/daily-activities?date=${date}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${session?.user.accessToken}`,
    },
    next: { tags: ["product", "exercise"] },
  });
  const res = await response.json();
  return res;
}

export async function deleteDailyActivityProduct(
  token: string,
  id: string,
  date: string
) {
  const session = await auth();
  const response = await fetch(
    `${BASIC_URL}/consumed-product/${id}?date=${date}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${session?.user.accessToken}`,
      },
    }
  );
  const res = await response.json();
  return res;
}

export async function deleteDailyActivityExercise(
  token: string,
  id: string,
  date: string
) {
  const session = await auth();
  const response = await fetch(
    `${BASIC_URL}/performed-exercise/${id}?date=${date}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${session?.user.accessToken}`,
      },
    }
  );
  const res = await response.json();
  return res;
}

// export async function deleteDailyActivityProduct(token: string, id: string, date: string) {
//     const data = await DiaryService.deleteDailyActivityProduct(token, id, date)
//     return data;
// }

// export async function deleteDailyActivityExercise(token: string, id: string, date: string) {
//     const data = await DiaryService.deleteDailyActivityExercise(token, id, date)
//     return data;
// }
