import { fetchWithAuth } from "@/api/helpers";
import {
  ICalculateBmr,
  IAvatar,
  IProfileUpdate,
} from "@/types/profile";
import { IProfile } from "@/types/profile";

export const ProfileService = {
  async getAllCalculate(token: string): Promise<ICalculateBmr> {
    return await fetchWithAuth<ICalculateBmr>("calculate/bmr", {}, token);
  },

  async getProfile(token: string): Promise<IProfile> {
    return await fetchWithAuth<IProfile>("profile", {}, token);
  },

  async getProfileAvatar(token: string): Promise<IProfile> {
    return await fetchWithAuth<IProfile>("profile/avatar", {}, token);
  },

  async updateProfile(data: IProfileUpdate, token: string): Promise<IProfileUpdate> {
    return await fetchWithAuth<IProfileUpdate>("profile", {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }, token);
  },

  async updateAvatar(data: IAvatar, token: string): Promise<IProfileUpdate> {
    return await fetchWithAuth<IProfileUpdate>(
      "profile/avatar",
      {
        method: "PUT",
        body: JSON.stringify({ avatarPath: data }),
      },
      token
    );
  },
};
