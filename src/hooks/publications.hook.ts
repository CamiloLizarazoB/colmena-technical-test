import { useDeletePost, useEditPost, useGetPosts, useGetPostsFiltered, useGetUsers } from "@/api";

export const usePublications = (page = 0, userId = 0) => {
  const { data, isLoading, isRefetching, isSuccess } = useGetPosts(page);
  const deletePost = useDeletePost();
  const editPost = useEditPost();
  const getUsers = useGetUsers();
  const getPostFiltered = useGetPostsFiltered(userId)

  return {
    data,
    isLoading,
    isRefetching,
    isSuccess,
    deletePost,
    editPost,
    getUsers,
    dataFiltered: getPostFiltered.data
  };
};
