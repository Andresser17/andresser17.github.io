import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// Sections
import Topbar from "sections/Topbar";
import Footer from "sections/Footer";
// Routes
import Home from "sections/Home";
import About from "routes/About";
import Blog from "routes/Blog";
// Envs
import { RESUME } from "app.config";

function App() {
  // React toastify themes
  const contextClass = {
    success: "bg-bg primary",
    error: "bg-bg primary",
    info: "bg-bg primary",
    warning: "bg-orange-400",
    default: "bg-bg",
    dark: "bg-white-600 font-gray-300",
  };

  // display a welcome message when page is ready
  useEffect(() => {
    const welcomeMessage = () =>
      toast.info(
        <p>
          Welcome visitor, You can download my resume{" "}
          <a
            className="underline underline-offset-2 font-semibold text-bg info"
            href={RESUME}
            target="_blank"
            rel="noopener noreferrer"
          >
            HERE!
          </a>
        </p>,
        {
          autoClose: false,
          hideProgressBar: true,
          closeOnClick: false,
        }
      );

    window.addEventListener("load", welcomeMessage);

    return () => {
      window.removeEventListener("load", welcomeMessage);
    };
  }, []);

  return (
    <div className="bg-bg text-text flex flex-col items-center">
      <Topbar />
      <div className="w-full max-w-[1600px]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
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

export default App;
