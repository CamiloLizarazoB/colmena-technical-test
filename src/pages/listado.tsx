import { usePublications } from "@/hooks/publications.hook";
import { Post } from "@/utils/types";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export default function Listado() {
  const [page, setPage] = useState(1);
  const [publications, setPublications] = useState<Post[]>([]);
  const { data, isLoading, isRefetching } = usePublications(page);
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      setTimeout(() => setPage((prev) => prev + 1), 1000);
    }
  }, [inView]);

  useEffect(() => {
    if (data) {
      setPublications((prev) => [...prev, ...data]);
    }
  }, [data]);

  return (
    <div className="container mx-auto px-10 w-screen pb-28">
      <h1 className="title text-4xl font-normal text-center m-10">
        Listado de Publicaciones
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4">
        {(!isLoading || (publications.length > 0)) &&
          publications?.map((publication) => (
            <div
              key={publication.id}
              className="max-w-md mx-auto bg-white rounded-xl shadow overflow-hidden md:max-w-2xl m-5"
            >
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                  {publication.title}
                </div>
                <Link href={`/post/${publication.id}`}>{"Ver más..."}</Link>
                <p className="mt-2 text-gray-500">{publication.body}</p>
              </div>
            </div>
          ))}
        {isRefetching &&
          [...new Array(2)].map((_, i) => (
            <div
              key={`${i}s`}
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
          ))}
        {isLoading &&
          [...new Array(10)].map((_, i) => (
            <div
              key={`${i}s`}
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
          ))}
        {!isLoading && (
          <div>
            <button ref={ref}>{"Loading more..."}</button>
          </div>
        )}
      </div>
    </div>
  );
}
