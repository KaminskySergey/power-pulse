import { fetchWithAuth } from "@/api/helpers";
import { IDiaryActivityDay } from "@/types/diary";

export const DiaryService = {
  async getDailyActivity(token: string, date?: string) {
    return await fetchWithAuth<IDiaryActivityDay>(
      `daily-activities?date=${date || ''}`,
      {},
      token
    );
  },

  async deleteDailyActivityProduct(token: string, id: string, date: string) {
    return await fetchWithAuth(
      `consumed-product/${id}?date=${date}`,
      { method: "DELETE" },
      token
    );
  },

  async deleteDailyActivityExercise(token: string, id: string, date: string) {
    return await fetchWithAuth(
      `performed-exercise/${id}?date=${date}`,
      { method: "DELETE" },
      token
    );
  },
};
