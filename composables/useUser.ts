import type { User } from "../types/interface";
import { useUtils } from "./useUtils";

export const useUser = () => {
  const { page } = useUtils();
  const getUser = async () => {
    const users = await useMyFetch<{ data: User[]; totalPages: number }>(
      "/users",
      {
        lazy: true,
        server: false,
        query: { page: page },
        watch: [page],
      }
    );

    return users;
  };

  return { getUser };
};
