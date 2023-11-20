import { ENV } from "@/utils";
import { TAddPostRequest, TComment, TEditPostRequest, TPost, TUsers } from "@/utils/types";

const url = ENV.API_URL;

export const getPosts = async (page = 0): Promise<TPost[]> => {
  const response = await fetch(`${url}/${ENV.ENDPOINTS.POSTS}?_page=${page}`);
  const data = await response.json();
  return data;
};

export const getPostsFiltered = async (userId: number): Promise<TPost[]> => {
  const response = await fetch(`${url}/${ENV.ENDPOINTS.POSTS}?userId=${userId}`);
  const data = await response.json();
  return data;
};

export const getPostContent = async (postId: number): Promise<Comment[]> => {
  const response = await fetch(
    `${url}/${ENV.ENDPOINTS.POSTS}/${postId}/comments`
  );
  const data = await response.json();
  return data;
};

export const getUsers = async (): Promise<TUsers[]> => {
  const response = await fetch(
    `${url}/${ENV.ENDPOINTS.USERS}`
  );
  const data = await response.json();
  return data;
};

export const addPost = async (newPost: TAddPostRequest): Promise<TPost[]> => {
  const response = await fetch(`${url}/${ENV.ENDPOINTS.POSTS}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPost),
  });

  if (!response.ok) {
    throw new Error("Failed to add a new publication");
  }

  return response.json();
};

export const editPost = async (newPost: TEditPostRequest): Promise<TPost> => {
  const response = await fetch(`${url}/${ENV.ENDPOINTS.POSTS}/${newPost.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPost),
  });

  if (!response.ok) {
    throw new Error("Failed to edit a new publication");
  }

  return response.json();
};

export const deletePost = async (postId: number): Promise<{}> => {
  const response = await fetch(`${url}/${ENV.ENDPOINTS.POSTS}/${postId}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to delete post");
  }

  return response.json();
};
