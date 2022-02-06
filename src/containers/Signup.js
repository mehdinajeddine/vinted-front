import { React, useState } from "react";
import { LockClosedIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import axios from "axios";
import Notification from "../components/Notification";
import SignupConfirmation from "./SignupConfirmation";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newsletter, setNewsletter] = useState(false);
  const [confirmation, setConfirmation] = useState(false);
  const [registered, setRegistered] = useState(false);

  const handSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post(
      "https://lereacteur-vinted-api.herokuapp.com/user/signup",
      { email: email, username: username, password: password }
    );
    setConfirmation(true);
    setRegistered(true);
    console.log(res);
  };
  return !registered ? (
    <div className="max-w-2xl container mx-auto">
      <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
        S'inscrire
      </h2>
      <form className="mt-8 space-y-6" onSubmit={handSubmit}>
        <div className="rounded-md shadow-sm -space-y-px">
          <div>
            <label htmlFor="username" className="sr-only">
              Nom d'utilisateur
            </label>
            <input
              id="username"
              name="username"
              type="text"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
              placeholder="Nom d'utilisateur"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </div>
          <div>
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
              placeholder="Email address"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
        </div>

        <div className="flex items-center">
          <input
            id="newsletter"
            name="newsletter"
            type="checkbox"
            className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
            onChange={(e) => {
              setNewsletter(!newsletter);
            }}
          />
          <label
            htmlFor="newsletter"
            className="ml-2 block text-sm text-gray-900"
          >
            S'inscrire à notre newsletter
          </label>
        </div>

        <div>
          <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
          >
            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
              <LockClosedIcon
                className="h-5 w-5 text-teal-500 group-hover:text-teal-400"
                aria-hidden="true"
              />
            </span>
            Sign in
          </button>
          <div className="text-sm text-center">
            <Link
              to="/signin"
              className="font-medium text-teal-600 hover:text-teal-500"
            >
              Tu as déjà un compte ?
            </Link>
          </div>
        </div>
      </form>
    </div>
  ) : (
    <>
      <SignupConfirmation />
      <Notification
        confirmation={confirmation}
        setConfirmation={setConfirmation}
      />
    </>
  );
};

export default Signup;
