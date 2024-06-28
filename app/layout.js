//layout.js
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SessionWrapper from "@/components/SessionWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FundRiseNow - Fund your projects now!!!",
  description: "A crowfunding platform for creators",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className= "text-white">
        <SessionWrapper>
          <Navbar />
          <div className="min-h-[83.3vh] ">
            {children}
          </div>
          <Footer />
        </SessionWrapper>
        
      </body>
    </html>
  );
}
