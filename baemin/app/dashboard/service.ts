import { AxiosConfig } from "@/service/axios-config";

const api = AxiosConfig();
export const getCategories = () => {
  return api.get("/categories");
};
