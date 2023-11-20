export type TPost = {
    userId: number,
    id: number,
    title: string,
    body: string,
}

export type TComment = {
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string
}

export type TAddPostRequest = {
    title: string,
    body: string,
    userId: number
}
export type TEditPostRequest = {
    title: string,
    body: string,
    userId: number,
    id: number
}

export type TUsers = {
    id: number,
    name: string,
    username: string,
    email: string,
    address: TAddress,
    phone: string,
    website: string,
    company: TCompany
}

type TAddress = {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: {
      lat: string,
      lng: string
    }
  }

type TCompany = {
    name: string,
    catchPhrase: string,
    bs: string
  }