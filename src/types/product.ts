export type BloodGroup = "FIRST_1" | "SECOND_2" | "THIRD_3" | "FOURTH_4";
export interface IConsumedProduct {
  id: string;
  createdAt: string;
  updatedAt: string;
  date: string;
  amount: number;
  calories: number;
  profileId: string;
  productId: string;
  dailyActivitiesId: string | null;
}

export interface IProduct {
  id: string;
  title: string;
  category: string;
  groupBloodNotAllowed: Record<string, boolean>;
  calories: number;
  weight: number;
}

export interface IFilters {
  searchTerm?: string;
  page?: string | number;
  perPage?: string | number;
  allowed?: string;
  category?: string;
}

export interface IProductCard extends IProduct {
  createdAt: string;
  updatedAt: string;
  categoryId: string | null;
}

export interface IGetProductList {
  products: IProductCard[];
  page: number;
  length: number;
}

export interface IGetCategory {
  id: string;
  createdAt: string;
  updatedAt: string;
  slug: string;
  name: string;
}

export interface ICreateCustomedProduct {
  productId: string;
  amount: number;
  calories: number;
}
