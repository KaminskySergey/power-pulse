import { IPerformedExercise } from "./exercise";
import { IConsumedProduct } from "./product";

export enum Sex {
  MALE = "MALE",
  FEMALE = "FEMALE",
}

export enum LevelActivity {
  ONE = "ONE",
  TWO = "TWO",
  THREE = "THREE",
  FOUR = "FOUR",
  FIVE = "FIVE",
}

export enum Blood {
  FIRST_1 = "FIRST_1",
  SECOND_2 = "SECOND_2",
  THIRD_3 = "THIRD_3",
  FOURTH_4 = "FOURTH_4",
}

export interface ICalculateBmr {
  profileId: string;
  dailyCalories: number;
  exerciseTime: number;
}

export interface IProfileCurrentInfo {
  userId: string;
  name: string;
  email: string;
  id: string;
  createdAt: string;
  updatedAt: string;
  height: string;
  currentWeight: number;
  desiredWeight: number;
  birthday: string;
  avatarPath?: string | null;
  blood: Blood;
  sex: Sex;
  levelActivity: LevelActivity;
}

export interface IProfileUpdate {
  id?: string;
  userId?: string;
  name: string;
  email: string;
  height: string;
  currentWeight: number | string;
  desiredWeight: number | string;
  birthday: string;
  avatarPath?: string | null;
  blood: Blood;
  sex: Sex;
  levelActivity: LevelActivity;
}

export interface IProfile extends IProfileCurrentInfo {
  // IProfileCurrentInfo
  calculate: ICalculateBmr;
  consumedProduct: IConsumedProduct[];
  performedExercise: IPerformedExercise[];
}

export interface IAvatar {
  avatarPath: string;
}

export interface ICurrentDayinfo {
  caloriesConsumed: number;
  caloriesBurned: number;
  caloriesRemaining: number;
  exerciseTimeRemaining: number;
}
