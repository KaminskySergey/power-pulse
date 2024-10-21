import { IExercise } from "./exercise";
import { IProduct } from "./product"

export  interface IDiaryActivityDay {
    date: string,
    bloodProfile: string,
    profileId: string,
    consumedProducts: IDiaryConsumedProducts[]
    performedExercises: IDiaryPerformedExercise[];
}


export interface IDiaryPerformedExercise {
    id: string;
    createdAt: string; // ISO8601 DateTime string
    updatedAt: string; // ISO8601 DateTime string
    date: string; // ISO8601 DateTime string
    time: number; // Duration in minutes
    calories: number;
    exerciseId: string;
    exercise: IExercise;
  }

export interface IDiaryConsumedProducts {
    id: string,
      createdAt: string,
      updatedAt: string,
      date: string,
      amount: number,
      calories: number,
      productId: string
      product: IProduct
}