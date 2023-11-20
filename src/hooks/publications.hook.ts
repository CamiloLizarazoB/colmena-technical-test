import { useDeletePost, useEditPost, useGetPosts } from "@/api";

export const usePublications = (page = 0) => {
  const { data, isLoading, isRefetching, isSuccess } = useGetPosts(page);
  const deletePost = useDeletePost()
  const editPost = useEditPost()

  return { data, isLoading, isRefetching, isSuccess, deletePost, editPost };
};
