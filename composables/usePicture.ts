import type { Picture } from "../types/interface";
import { useUtils } from "./useUtils";

export const usePicture = () => {
  const getPicture = async () => {
    const { page } = useUtils();
    const pictures = await useMyFetch<{ data: Picture[]; totalPages: number }>(
      "/pictures",
      {
        lazy: true,
        server: false,
        query: { page: page },
        watch: [page],
      }
    );

    return pictures;
  };

  return { getPicture };
};
