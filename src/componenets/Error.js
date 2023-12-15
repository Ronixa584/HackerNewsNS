import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8 bg-cover bg-center w-full h-screen  bg-gradient-to-r from-yellow-300 via-green-300 to-blue-300">
        <div className="text-center">
          <p className="text-8xl font-bold text-indigo-600">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight bg-clip-text  sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-6 text-lg leading-7 text-black">
            Sorry, we couldn't find the page you're looking for.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link to="/">
              <button className="m-5  group relative h-12 w-48 overflow-hidden rounded-3xl bg-white text-lg shadow bg-cover bg-center border-2 border-purple-400">
                <div class="absolute inset-0 w-0 bg-gradient-to-br from-teal-400 to-purple-600 transition-all duration-[500ms] ease-out group-hover:w-full"></div>
                <span class="relative group-hover:text-white text-black">
                  Go to Home
                </span>
              </button>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};
export default Error;
