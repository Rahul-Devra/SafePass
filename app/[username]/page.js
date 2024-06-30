import React from "react";
import PasswordPage from "@/components/PasswordPage";
import { findUser } from "../serverActions/actions";
import { notFound } from "next/navigation";

const Username = ({ params }) => {
  const checkUser = async () => {
    let u = await findUser({ username: params.username }); 
    if (!u) {
      return notFound();
    }
  };

  checkUser(); 

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
      <PasswordPage userName={params.username} />
    </div>
  );
};

export default Username;

export async function generateStaticParams() {
  
  return {
    paths: [],
    fallback: false
  };
}

export async function generateMetadata({ params }) {
  return {
    title: "Your Password - PassOP"
  };
}
