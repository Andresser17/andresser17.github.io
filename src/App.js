import React from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// Sections
import Header from "components/organisms/Header";
import Footer from "components/organisms/Footer";
// Routes
import Home from "routes/Home";
import About from "routes/About";

export default function App() {
  // React toastify themes
  const contextClass = {
    success: "bg-bg primary",
    error: "bg-bg primary",
    info: "bg-bg primary",
    warning: "bg-orange-400",
    default: "bg-bg",
    dark: "bg-white-600 font-gray-300",
  };

  return (
    <div className="bg-bg text-text flex flex-col items-center">
      <Header />
      <div className="w-full max-w-[1600px]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <Footer />
      <ToastContainer
        toastClassName={({ type }) =>
          `${
            contextClass[type || "default"]
          } relative shadow-md flex p-2 rounded-sm text-text`
        }
        bodyClassName={() => "flex font-semibold pl-4 py-4 w-full"}
      />
    </div>
  );
}
