import { addPostRequest, editPostRequest } from "@/utils/types";
import { useMutation } from "react-query";
import { addPost, deletePost, editPost } from "../api";

export function useAddPost() {
  return useMutation(["add-post"], (newPost: addPostRequest) =>
    addPost(newPost)
  );
}

export function useDeletePost() {
  return useMutation(["delete-post"], (postId: number) => deletePost(postId));
}

export function useEditPost() {
  return useMutation(["edit-post"], (newPost: editPostRequest) =>
    editPost(newPost)
  );
}
