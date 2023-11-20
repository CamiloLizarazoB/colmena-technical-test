import { TAddPostRequest, TEditPostRequest } from "@/utils/types";
import { useMutation } from "react-query";
import { addPost, deletePost, editPost } from "../api";

export function useAddPost() {
  return useMutation(["add-post"], (newPost: TAddPostRequest) =>
    addPost(newPost)
  );
}

export function useDeletePost() {
  return useMutation(["delete-post"], (postId: number) => deletePost(postId));
}

export function useEditPost() {
  return useMutation(["edit-post"], (newPost: TEditPostRequest) =>
    editPost(newPost)
  );
}
