import DialogFormComponent from "@/components/dialog-form/dialog-form.component";
import SelectComponent from "@/components/select/select.component";
import { usePublications } from "@/hooks/publications.hook";
import { TEditPostRequest, TPost } from "@/utils/types";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export default function Listado() {
  const [page, setPage] = useState(1);
  const [userId, setUserId] = useState<number>();
  const [filterActive, setFilterActive] = useState<boolean>(false);

  const [publications, setPublications] = useState<TPost[]>([]);
  const {
    data,
    isLoading,
    isRefetching,
    deletePost,
    editPost,
    getUsers,
    dataFiltered,
  } = usePublications(page, userId);
  const { data: dataUsers } = getUsers;
  const { isSuccess: isSuccessEdited } = editPost;
  const { ref, inView } = useInView();

  const handleSetUserId = (userId: number) => {
    setUserId(userId);
    setFilterActive(userId === 0 ? false : true);
  };

  const handleDeletePost = (id: number) => {
    deletePost.mutate(id);
    const index = publications.findIndex(
      (publication) => publication.id === id
    );
    publications.splice(index, 1);
    setPublications(publications);
  };

  const handleEditPost = (data: TEditPostRequest, publication: TPost) => {
    editPost.mutate({
      ...data,
      id: publication.id,
      userId: publication.userId,
    });
  };

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

  useEffect(() => {
    if (isSuccessEdited) {
      const index = publications.findIndex(
        (publication) => publication.id === publication.id
      );
      publications.splice(index, 1, { ...editPost.data });
      setPublications([...publications]);
    }
  }, [isSuccessEdited]);

  return (
    <div className="container mx-auto px-10 w-screen pb-28">
      <h1 className="title text-4xl font-normal text-center m-10">
        Listado de Publicaciones
      </h1>
      <div>
        <SelectComponent users={dataUsers} handleSetUserId={handleSetUserId} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4">
        {(!isLoading || publications.length > 0) && filterActive
          ? dataFiltered?.map((publication) => (
              <div
                key={publication.id}
                className="max-w-md mx-full bg-white rounded-xl shadow overflow-hidden md:max-w-2xl m-5"
              >
                <button
                  className="float-right m-2.5 item-center middle none center flex justify-center rounded-lg bg-pink-500 p-3 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  data-ripple-light="true"
                  onClick={handleDeletePost.bind(null, publication.id)}
                >
                  {"X"}
                </button>
                <div className="p-8">
                  <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                    {publication.title}
                  </div>
                  <Link href={`/post/${publication.id}`}>{"Ver más..."}</Link>
                  <p className="mt-2 text-gray-500">{publication.body}</p>
                </div>
                <DialogFormComponent
                  publication={publication}
                  handleEditPost={handleEditPost}
                />
              </div>
            ))
          : publications?.map((publication) => (
              <div
                key={publication.id}
                className="max-w-md mx-full bg-white rounded-xl shadow overflow-hidden md:max-w-2xl m-5"
              >
                <button
                  className="float-right m-2.5 item-center middle none center flex justify-center rounded-lg bg-pink-500 p-3 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  data-ripple-light="true"
                  onClick={handleDeletePost.bind(null, publication.id)}
                >
                  {"X"}
                </button>
                <div className="p-8">
                  <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                    {publication.title}
                  </div>
                  <Link href={`/post/${publication.id}`}>{"Ver más..."}</Link>
                  <p className="mt-2 text-gray-500">{publication.body}</p>
                </div>
                <DialogFormComponent
                  publication={publication}
                  handleEditPost={handleEditPost}
                />
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
      </div>
      {!isLoading && !filterActive && (
        <div>
          <button ref={ref}>{"Loading more..."}</button>
        </div>
      )}
    </div>
  );
}
