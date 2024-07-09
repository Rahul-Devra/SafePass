import React from "react";
import PasswordPage from "@/components/PasswordPage";
import { findUser } from "../serverActions/actions";
import { notFound } from "next/navigation";

const Username = async ({ params }) => {
  const checkUser = async () => {
    let u = await findUser({ username: params.username }); 
    if (!u) {
      return notFound();
    }
  };

  await checkUser();

  return (
    
      <PasswordPage userName={params.username} />
    
  );
};

export default Username;

export async function generateMetadata({ params }) {
  return {
    title: "Your Password- SafePass"
  };
}
