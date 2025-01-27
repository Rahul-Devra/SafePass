import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SessionWrapper from "@/components/SessionWrapper";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SafePass - Securely Manage Your Passwords!",
  description: "Your Trusted Password Management Solution.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        {/* Corrected meta tag for description */}
        <meta name="description" content={metadata.description} />
        <link rel="icon" sizes="96x96" href="/icon.png" />
      </Head>
      <body className="relative text-white">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        >
          <source src="/bg.mp4" type="video/mp4" />
        </video>
        
        {/* Dark Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70 z-[-1]"></div>

        <SessionWrapper>
          <Navbar />
          <div className="min-h-[83.3vh]">{children}</div>
          <Footer />
        </SessionWrapper>
      </body>
    </html>
  );
}