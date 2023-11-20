import { useQuery } from "react-query";
import { getPostContent, getPosts } from "../api";


export function useGetPosts(page: number){
  return useQuery(["posts", page], () => getPosts(page), {
    enabled: page > 0,
  });
}

export function useGetPostsContent(postId: number){
  return useQuery(["post-content", postId], () => getPostContent(postId), {
    keepPreviousData: true,
  });
}