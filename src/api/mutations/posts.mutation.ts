import { addPostRequest } from "@/utils/types"
import { useMutation } from "react-query"
import { addPost } from "../api"

export function useAddPost(){
    return useMutation(
        ['add-post'],
        (newPost: addPostRequest) => addPost(newPost)
      )
}