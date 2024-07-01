"use client";
import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import {
  submitForm,
  fetchpassword,
  editPassword,
} from "@/app/serverActions/actions";
import { deletePassword } from "@/app/serverActions/actions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PasswordPage = ({ userName }) => {
  const { data: session } = useSession();
  const router = useRouter();
  const [form, setForm] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setPasswordArray] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    if (!session) {
      router.push("/login");
    }
  }, [session, router]);

  useEffect(() => {
    getData();
  }, [session, router]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const getData = async () => {
    if (session && session.user) {
      let dbPasswords = await fetchpassword(userName, session.user.provider);
      setPasswordArray(dbPasswords);
      setPasswordArray(dbPasswords);
    }
  };

  const handleSubmit = async () => {
    try {
      const response = await submitForm({
        ...form,
        userData: userName,
        provider: session.user.provider,
      });
      if (response) {
        toast("Password Saved successfully!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        return true;
      } else {
        return false;
      }
    } catch (error) {
      return false;
    }
  };

  const handleEdit = async (id) => {
    try {
      const response = await editPassword(form, id);
      if (response) {
        toast("Password Edited successfully!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        return true;
      } else {
        toast.error("Error in Editing password", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        return false;
      }
    } catch (error) {
      return false;
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await deletePassword(id);
      if (response) {
        toast("Password deleted successfully!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        return true;
      } else {
        toast.error("Delete password failed:", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });

        return false;
      }
    } catch (error) {
      return false;
    }
  };

  const savePassword = async () => {
    if (
      form.site.length > 4 &&
      form.username.length > 4 &&
      form.password.length > 4
    ) {
      if (editIndex !== null) {
        const editedPasswordArray = passwordArray.map((item, index) =>
          index === editIndex ? { ...form, userData: userName } : item
        );
        setPasswordArray(editedPasswordArray);
        const id = editedPasswordArray[editIndex]._id;
        await handleEdit(id);

        setEditIndex(null);
      } else {
        await handleSubmit();
        const updatedPasswordArray = [...passwordArray, form];
        setPasswordArray(updatedPasswordArray);
      }
      setForm({ site: "", username: "", password: "" });
    } else {
      toast.error(
        <div>
          Error in Saving password.
          <br />
          Minimum 5 characters each.
        </div>,
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        }
      );
    }
  };

  const editPasswordItem = (index) => {
    setForm({ ...passwordArray[index] });
    setEditIndex(index);
  };

  const deletePasswordItem = async (itemIndex) => {
    let id = passwordArray[itemIndex]._id;
    await handleDelete(id);
    const updatedPasswordArray = passwordArray.filter(
      (item) => item._id !== id
    );
    setPasswordArray(updatedPasswordArray);
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <div className=" flex items-center justify-center relative min-h-[83.3vh]">
        <video
          autoPlay
          muted
          loop
          className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        >
          <source src="/bg.mp4" type="video/mp4" />
        </video>
        <div className="container m-auto px-4 pb-28 sm:px-6 lg:px-8">
          <div>
            <h1 className="text-4xl font-bold text-center text-white">
              <span className="text-green-700">&lt;</span>
              <span>Pass</span>
              <span className="text-green-700">OP/&gt;</span>
            </h1>
            <p className="text-green-300 text-lg text-center">
              Your own Password Manager
            </p>
          </div>
          <div className="text-white pt-5">
            <input
              className="w-full rounded-full px-3 border border-violet-800 h-10 bg-gray-800 text-white"
              type="text"
              placeholder="Enter Website URL"
              name="site"
              value={form.site || ""}
              onChange={handleChange}
            />
            <div className="flex flex-col gap-5 mt-5 md:flex-row md:gap-10">
              <input
                className="w-full md:w-[80%] rounded-full px-3 border border-violet-800 h-10 bg-gray-800 text-white"
                type="text"
                placeholder="Enter username"
                name="username"
                value={form.username || ""}
                onChange={handleChange}
              />
              <input
                className="w-full md:w-auto rounded-full px-3 border border-violet-800 h-10 bg-gray-800 text-white"
                type="password"
                placeholder="Enter password"
                name="password"
                value={form.password || ""}
                onChange={handleChange}
              />
            </div>
            <div className="my-8 text-center">
              <button
                type="button"
                className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-xl px-5 py-2.5 text-center mb-2"
                onClick={savePassword}
              >
                <lord-icon
                  src="https:cdn.lordicon.com/jgnvfzqg.json"
                  trigger="hover"
                ></lord-icon>
                Save
              </button>
            </div>
          </div>

          <div className="relative mx-auto max-w-5xl mt-20">
            <div className="rounded-lg bg-black/80 backdrop-blur">
              <div className="pb-7 overflow-x-auto">
                {passwordArray.length <= 0 ? (
                  <div
                    className="rounded-xl p-1"
                    style={{
                      backgroundImage:
                        "linear-gradient(to right bottom, rgb(79, 70, 229) 0%, rgb(165, 56, 164) 50%, rgb(220, 38, 38) 100%)",
                    }}
                  >
                    <div className="flex w-full flex-wrap items-center justify-between gap-4 px-8 py-10 sm:px-16 lg:flex-nowrap">
                      <div className="lg:max-w-xl">
                        <h2 className="block w-full pb-2 bg-gradient-to-b from-white to-gray-400 bg-clip-text font-bold text-transparent text-3xl sm:text-4xl">
                          No Passwords Available
                        </h2>
                        <p className="my-4 bg-transparent font-medium leading-relaxed tracking-wide text-gray-400">
                          Add password to get started
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <table className="table-auto w-full rounded-md overflow-hidden bg-gray-800 text-white">
                    <thead className="bg-violet-700 text-white">
                      <tr>
                        <th className="py-2">Sr</th>
                        <th className="py-2">Website</th>
                        <th className="py-2">Username</th>
                        <th className="py-2">Password</th>
                        <th className="py-2">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-gray-900 text-gray-400">
                      {passwordArray.map((item, index) => (
                        <tr key={index}>
                          <td className="py-2 border border-gray-700 text-center w-10 font-bold text-violet-400">
                            {index + 1}
                          </td>
                          <td className="py-2 border border-gray-700 text-center w-32 font-semibold">
                            {item.site}
                          </td>
                          <td className="py-2 border border-gray-700 text-center w-32 font-semibold">
                            {item.username}
                          </td>
                          <td className="py-2 border border-gray-700 text-center w-32 font-semibold">
                            {item.password}
                          </td>
                          <td className="py-2 border border-gray-700 text-center w-32">
                            <span
                              className="cursor-pointer mx-2 text-blue-400 underline"
                              onClick={() => editPasswordItem(index)}
                            >
                              Edit
                            </span>
                            <span
                              className="cursor-pointer mx-2 text-red-400 underline"
                              onClick={() => deletePasswordItem(index)}
                            >
                              Delete
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PasswordPage;
