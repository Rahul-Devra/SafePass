import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SessionWrapper from "@/components/SessionWrapper";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PassOP - Securely Manage Your Passwords!",
  description: "Your Trusted Password Management Solution.",
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <description>{metadata.description}</description>
        <link rel="icon" sizes="96x96" href="/icon.png" />
      </Head>
      <body className="text-white">
        <SessionWrapper>
          <Navbar />
          <div className="min-h-[83.3vh] ">{children}</div>
          <Footer />
        </SessionWrapper>
      </body>
    </html>
  );
}
