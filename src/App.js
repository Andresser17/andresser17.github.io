import { Routes, Route } from "react-router-dom";
// Sections
import Topbar from "sections/Topbar";
import Footer from "sections/Footer";
// Routes
import Home from "sections/Home";
import About from "routes/About";

function App() {
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
    </div>
  );
}

export default App;
