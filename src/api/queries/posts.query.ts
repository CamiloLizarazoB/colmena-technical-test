import { useQuery } from "react-query";
import { getPostContent, getPosts, getPostsFiltered, getUsers } from "../api";


export function useGetPosts(page: number){
  return useQuery(["posts", page], () => getPosts(page), {
    enabled: page > 0,
  });
}

export function useGetPostsFiltered(userId: number){
  return useQuery(["posts", userId], () => getPostsFiltered(userId), {
    enabled: userId > 0,
  });
}

export function useGetPostsContent(postId: number){
  return useQuery(["post-content", postId], () => getPostContent(postId), {
    enabled: !!postId,
  });
}


export function useGetUsers(){
  return useQuery(["users"], () => getUsers());
}