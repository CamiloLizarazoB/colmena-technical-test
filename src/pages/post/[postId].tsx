import { usePostContent } from "@/hooks/post-content.hook";
import { useRouter } from "next/router";

export default function PostPage() {
  const router = useRouter();
  const { query } = router;
  const { data, isLoading } = usePostContent(Number(query.postId));

  return (
    <div className="container mx-auto px-10 w-screen ">
      <h1 className="title text-4xl font-normal text-center m-10">
        {`Comentarios para el post ${query.postId}`}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4">
        {isLoading
          ? [...new Array(10)].map((_, i) => (
              <div
                key={i}
                className="max-w-md w-full bg-white rounded-xl shadow overflow-hidden md:max-w-2xl m-5 animate-pulse"
              >
                <div className="p-8">
                  <span className="rounded-full bg-gray-400 h-2 w-full block"></span>
                  <span className="rounded-full bg-gray-400 h-2 w-52 block mt-2.5"></span>
                  <span className="rounded-full bg-gray-400 h-2 w-full block mt-2.5"></span>
                  <span className="rounded-full bg-gray-400 h-2 w-full block mt-2.5"></span>
                  <span className="rounded-full bg-gray-400 h-2 w-full block mt-2.5"></span>
                  <span className="rounded-full bg-gray-400 h-2 w-full block mt-2.5"></span>
                </div>
              </div>
            ))
          : data?.map((comment) => (
              <div
                key={comment.id}
                className="max-w-md mx-auto bg-white rounded-xl shadow overflow-hidden md:max-w-2xl m-5"
              >
                <div className="p-8">
                  <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                    {comment.name}
                  </div>
                  <p className="block mt-1 text-lg leading-tight font-medium text-black">
                    {comment.email}
                  </p>
                  <p className="mt-2 text-gray-500">{comment.body}</p>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
}
