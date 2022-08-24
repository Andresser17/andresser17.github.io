// Components
import Topbar from "components/Topbar";
// Sections
import Home from "sections/Home";
import Projects from "sections/Projects";
import Contact from "sections/Contact";
import Footer from "sections/Footer";
// Routes
import About from "routes/About";

function App() {
  return (
    <div className="bg-bg text-text dark flex justify-center">
      <Topbar />
      <div className="w-full max-w-[1600px]">
        <Home />
        <main>
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
