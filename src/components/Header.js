import { React } from "react";
import logo from "../logo.png";
import { Link } from "react-router-dom";
import cookies from "js-cookie";

import { SearchIcon } from "@heroicons/react/solid";

const Header = ({ logged, setLogged }) => {
  const handleLogout = (e) => {
    cookies.remove("token");
    setLogged(false);
  };

  return (
    <div className="flex items-center justify-around container">
      {/* Logo */}
      <div className="w-40">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      {/* Search */}
      <div className="mt-3 sm:mt-0 sm:ml-4 flex-1">
        <label htmlFor="desktop-search" className="sr-only">
          Search
        </label>
        <div className="flex rounded-md shadow-sm">
          <div className="relative flex-grow focus-within:z-10">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </div>

            <input
              type="text"
              name="desktop-search-candidate"
              id="desktop-search-candidate"
              className=" focus:ring-teal-500 focus:border-teal-500 w-full rounded-none rounded-l-md pl-10 sm:block sm:text-sm border-gray-300 h-7"
              placeholder="Recherche des articles"
            />
          </div>
        </div>
      </div>
      <div className="mt-3 flex sm:mt-0 sm:ml-4">
        {!logged ? (
          <>
            <Link
              to="/signup"
              className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
            >
              S'inscrire
            </Link>
            <Link
              to="/signin"
              className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
            >
              Se connecter
            </Link>
          </>
        ) : (
          <button
            onClick={handleLogout}
            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-red-500 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
          >
            Se déconnecter
          </button>
        )}

        <button
          type="button"
          className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
        >
          Vends tes articles
        </button>
      </div>
    </div>
  );
};

export default Header;
