// page.js
/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative">
      <video
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      >
        <source src="/bg.mp4" type="video/mp4" />
      </video>
      <div className="flex flex-col justify-center items-center text-white h-[44vh] px-5 text-xs md:px-0 md:text-base">
        <div className="flex gap gap-2 justify-center items-center font-bold md:text-5xl pb-2 md:pb-5 text-3xl">
          <p className="text-center">
            <span className="text-green-700">&lt;</span>
            <span>Pass</span>
            <span className="text-green-700">OP/&gt;</span>
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
        <h2 className="text-3xl font-bold text-center mb-14">
          Core Features of PassOp
        </h2>
        <div className="flex gap-5 justify-around">
          {/* Feature 1: User-Controlled Access */}
          <div className="item space-y-3 flex flex-col justify-center items-center">
            <Image
              className="bg-slate-400 rounded-full p-2  border-4"
              src="/F1.jpg"
              alt="Access Anywhere Icon"
              width={145}
              height={145}
            />
            <p className="font-bold text-center">User-Controlled Access</p>
            <p>Manage access to your credentials securely.</p>
          </div>

          {/* Feature 2: Encryption and Decryption */}
          <div className="item space-y-3 flex flex-col justify-center items-center">
            <Image
              className="bg-slate-400 rounded-full p-2 object-cover"
              src="/F2.jpg"
              alt="Access Anywhere Icon"
              width={145}
              height={145}
            />
            <p className="font-bold text-center">Encryption and Decryption</p>
            <p>Encrypt and decrypt your stored credentials.</p>
          </div>

          {/* Feature 3: Access Your Accounts Anywhere */}
          <div className="item space-y-3 flex flex-col justify-center items-center">
            <Image
              className="bg-slate-400 rounded-full p-2"
              src="/F3.jpeg"
              alt="Access Anywhere Icon"
              width={145}
              height={145}
            />
            <p className="font-bold text-center">
              Access Your Accounts Anywhere
            </p>
            <p>Securely access your accounts from any location.</p>
          </div>
        </div>
      </div>

      <div className="bg-white h-1 opacity-10"></div>

      <div className="text-white container mx-auto pb-8 pt-8">
        <div className="flex justify-center items-center max-w-[800px] mx-auto ">
          <video
            className="w-[600px] h-[450px] border-4"
            controls
            autoPlay
            muted
            loop
            style={{ 
              borderImage:
                "linear-gradient(to right bottom, rgb(79, 70, 229) 0%, rgb(165, 56, 164) 50%, rgb(220, 38, 38) 100%)",
              borderImageSlice: 1, // Adjust as needed
            }}
          >
            <source src="/Video.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
}
export async function generateMetadata({ params }) {
  return {
    title: `Home - PassOp`,
  };
}
