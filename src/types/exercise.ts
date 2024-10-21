export interface IPerformedExercise {
  id: string;
  createdAt: string;
  updatedAt: string;
  date: string;
  time: number;
  calories: number;
  profileId: string;
  exerciseId: string;
  dailyActivitiesId: string | null;
}

export interface IExercise {
  id: string;
  createdAt: string;
  updatedAt: string;
  bodyPart: string;
  equipment: string;
  gifUrl: string;
  name: string;
  target: string;
  burnedCalories: number;
  time: number;
}

export interface IExercisesBySlug {
  exercises: IExercise[];
  page: number;
  total: number
}

export interface IExercisesGallery {
  name: string;
  url: string;
}

export interface IPerformedExercise{
  exerciseId: string;
  amount: number;
  calories: number;
}

