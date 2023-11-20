import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-cols-3 grid-rows-3 place-items-center h-screen">
      <div className="col-start-2 row-start-2 ">
        <div className="text-5xl">
          <div
            id="main_container"
            className="relative grid place-content-center place-items-center gap-2 before:bg-gradient-to-t before:from-teal-500/70 before:via-fuchsia-600 before:to-transparent before:blur-xl before:filter"
          >
            <h1 className="title text-4xl font-black text-center mb-2">
              Colmena Technical Test
            </h1>
            <h2 className="text-2xl font-thin text-fuchsia-600 text-center mb-5">
              This project contain the technical test for front end developers
              position
            </h2>
            <Link href={"/listado"}>
              <button className="px-3 md:px-4 py-1 md:py-2 bg-sky-600 border border-sky-600 text-white text-base rounded-lg hover:bg-sky-700">
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
