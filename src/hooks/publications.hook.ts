import { useGetPosts } from "@/api";

export const usePublications = (page = 0) => {
  const { data, isLoading, isRefetching, isSuccess } = useGetPosts(page);
  return { data, isLoading, isRefetching, isSuccess };
};
