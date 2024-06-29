
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-2"> {/* Reduced height to py-2 */}
      <div className="container mx-auto px-4 ">
        <div className="flex  -mx-4">
          <div className="w-full md:w-1/3 px-4 mb-2 md:mb-0"> {/* Reduced bottom margin to mb-2 */}
            <h3 className="text-lg md:text-xl font-semibold mb-2">Contact Us</h3> {/* Reduced bottom margin to mb-2 */}
            <p className="text-sm md:text-base"> Email: devrarahul750@gmail.com</p>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-2 md:mb-0"> {/* Reduced bottom margin to mb-2 */}
            <h3 className="text-lg md:text-xl font-semibold mb-2">Stay Connected</h3> {/* Reduced bottom margin to mb-2 */}
            <p className="text-sm md:text-base">Follow us on <a href="https://github.com/Rahul-Devra/PassOP" className="text-blue-400 hover:text-blue-600">GitHub</a> and <a href="https://www.linkedin.com/company/passop" className="text-blue-400 hover:text-blue-600">LinkedIn</a></p>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-2 md:mb-0"> {/* Reduced bottom margin to mb-2 */}
            <h3 className=" text-lg md:text-xl font-semibold mb-2">Legal</h3> {/* Reduced bottom margin to mb-2 */}
            <p className="text-sm md:text-base">&copy; {new Date().getFullYear()} Passop. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
