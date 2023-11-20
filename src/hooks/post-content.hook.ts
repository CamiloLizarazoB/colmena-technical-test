import { useGetPostsContent } from "@/api";

export const usePostContent = (postId: number) => {
  const { data, isLoading } = useGetPostsContent(postId);
  return {
    data,
    isLoading,
  };
};
