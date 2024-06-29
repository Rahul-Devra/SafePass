
"use client";
import { useSession, signOut } from "next-auth/react";
import { MdHome } from "react-icons/md";

import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [showdropdown, setShowdropdown] = useState(false);

  const { data: session } = useSession();

  return (
    <nav className="bg-gray-900 text-white flex flex-col justify-between items-center px-4 md:h-12 md:flex-row">
      <Link
        className="logo font-bold text-2xl flex justify-center items-center gap-1"
        href={"/"}
      >
        <span className="text-3xl">
          <MdHome />
        </span>
        <span className="my-3 md:my-0">
          <span className="text-green-700">&lt;</span>
          <span>Pass</span>
          <span className="text-green-700">OP/&gt;</span>
        </span>
      </Link>
      <ul className="flex justify-between gap-4">
        <div className=" pt-2 relative flex gap-4 md:block ">
          {session && (
            <>
              <button
                onClick={() => setShowdropdown(!showdropdown)}
                onBlur={() => {
                  setTimeout(() => {
                    setShowdropdown(false);
                  }, "300");
                }}
                id="dropdownDefaultButton"
                data-dropdown-toggle="dropdown"
                className="text-white mx-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button"
              >
                Welcome {session.user.name}
                <svg
                  className="w-2.5 h-2.5 ms-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>

              <div
                id="dropdown"
                className={`z-10 ${
                  showdropdown ? "" : "hidden"
                } absolute left-[145px] bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownDefaultButton"
                >
                  <li>
                    <Link
                      href="/"
                      className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white flex justify-cen"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={`/${session.user.name}`}
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Your Passwords
                    </Link>
                  </li>
                </ul>
              </div>
            </>
          )}

          {session && (
            <button
              type="button"
              className=" text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              onClick={() => {
                signOut();
              }}
            >
              Logout
            </button>
          )}
          {/* 1st Step: Create to login */}
          {!session && (
            <Link href={"/login"}>
              <button
                type="button"
                className=" text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Login
              </button>
            </Link>
          )}
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
