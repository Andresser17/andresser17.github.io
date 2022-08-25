import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// Sections
import Topbar from "sections/Topbar";
import Footer from "sections/Footer";
// Routes
import Home from "sections/Home";
import About from "routes/About";

function App() {
  const contextClass = {
    success: "bg-bg/30 primary",
    error: "bg-bg/30 primary",
    info: "bg-gray-600",
    warning: "bg-orange-400",
    default: "bg-bg",
    dark: "bg-white-600 font-gray-300",
  };

  return (
    <div className="bg-bg text-text dark flex flex-col items-center">
      <Topbar />
      <div className="w-full max-w-[1600px]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Home />} />
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
