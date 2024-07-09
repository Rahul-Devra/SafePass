"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center items-center text-white h-[44vh] px-5 text-xs md:px-0 md:text-base">
        <div className="flex gap gap-2 justify-center items-center font-bold md:text-5xl pb-2 md:pb-5 text-3xl">
          <p className="text-center">
            <span className="text-green-700">&lt;</span>
            <span>Safe</span>
            <span className="text-green-700">Pass/&gt;</span>
          </p>
        </div>

        <p className="text-center pb-2 md:pb-5 md:text-left">
          A user-friendly platform for managing passwords and securing digital
          identities.
        </p>

        <div>
          <Link href={"/login"}>
            <button
              type="button"
              className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Sign Up
            </button>
          </Link>

          <Link href={"/about"}>
            <button
              type="button"
              className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Read More
            </button>
          </Link>
        </div>
      </div>
      <div className="bg-white h-1 opacity-10"></div>
      <div className="text-white container mx-auto pb-32 pt-14 px-10">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-14">
          Core Features of SafePass
        </h2>
        <div className="flex gap-5 justify-around">
          <div className="item space-y-3 flex flex-col justify-center items-center">
            <Image
              src="/Feature1.jpg"
              alt="User-Controlled Access Icon"
              width={145}
              height={145}
              className="bg-slate-400 rounded-full p-2 object-cover"
            />
            <p className="font-bold text-center">User-Controlled Access</p>
            <p className="text-center">
              Manage access to your credentials securely.
            </p>
          </div>

          <div className="item space-y-3 pb-3 flex flex-col justify-center items-center">
            <Image
              src="/Feature2.jpg"
              alt="Encryption and Decryption Icon"
              width={145}
              height={145}
              className="bg-slate-400 rounded-full p-2 object-cover"
            />
            <p className="font-bold text-center">Encryption and Decryption</p>
            <p className="text-center">
              Encrypt and decrypt your stored credentials.
            </p>
          </div>

          <div className="item space-y-3 flex flex-col justify-center items-center">
            <Image
              src="/Feature3.jpeg"
              alt="Access Anywhere Icon"
              width={145}
              height={145}
              className="bg-slate-400 rounded-full p-2"
            />
            <p className="font-bold text-center">
              Access Your Accounts Anywhere
            </p>
            <p className="text-center">
              Securely access your accounts from any location.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white h-1 opacity-10"></div>
      <div className="text-white container flex justify-center mx-auto pb-8 pt-8">
        <div
          className="w-[600px] border-4 border-blue-900 mx-5 py-1 "
          style={{
            borderImage:
              "linear-gradient(to right bottom, rgb(79, 70, 229) 0%, rgb(165, 56, 164) 50%, rgb(220, 38, 38) 100%)",
            borderImageSlice: 1,
          }}
        >
          <video autoPlay muted loop controls className="w-[600px] px-1">
            <source src="/Video.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </>
  );
}
