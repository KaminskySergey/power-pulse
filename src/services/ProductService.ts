import { fetchWithAuth } from "@/api/helpers";
import {
  IFilters,
  IGetProductList,
  IProductCard,
  IGetCategory,
} from "@/types/product";

export const ProductService = {
  async getProducts(token: string, queryParams: IFilters = {}) {
    const params = new URLSearchParams();
    if (queryParams.page) params.append("page", queryParams.page.toString());
    if (queryParams.perPage)
      params.append("perPage", queryParams.perPage.toString());
    if (queryParams.searchTerm)
      params.append("searchTerm", queryParams.searchTerm);
    if (queryParams.allowed) params.append("allowed", queryParams.allowed);
    if (queryParams.category) params.append("category", queryParams.category);

    return await fetchWithAuth<IGetProductList>(
      `products?${params.toString()}`,
      {
        method: "GET",
      },
      token
    );
  },

  async getCategory(token: string) {
    return await fetchWithAuth<IGetCategory[]>("categories", {}, token);
  },
};
