import { AxiosConfig } from "@/service/axios-config";

const api = AxiosConfig();

export const getCategoriesDetail = (cate: number) => {
  return api.get(`/foods/categories/${cate}`);
};
