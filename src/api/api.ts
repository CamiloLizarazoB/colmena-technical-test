import { ENV } from "@/utils";
import { addPostRequest, Comment, Post } from "@/utils/types";

const url = ENV.API_URL;

export const getPosts = async (page = 0): Promise<Post[]> => {
    const response = await fetch(`${url}/${ENV.ENDPOINTS.POSTS}?_page=${page}`);
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

export const addPost = async (newPost: addPostRequest): Promise<Post[]> => {
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
