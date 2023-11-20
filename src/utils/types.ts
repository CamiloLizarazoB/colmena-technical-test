export type Post = {
    userId: number,
    id: number,
    title: string,
    body: string,
}

export type Comment = {
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string
}

export type addPostRequest = {
    title: string,
    body: string,
    userId: string
}
export type editPostRequest = {
    title: string,
    body: string,
    userId: number,
    id: number
}