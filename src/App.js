// Components
import Topbar from "components/Topbar";
// Sections
import Home from "sections/Home";
import Projects from "sections/Projects";
import Contact from "sections/Contact";
import Footer from "sections/Footer";
// Routes
// import About from "sections/About";

function App() {
  return (
    <div className="bg-bg text-text dark">
      <Topbar />
      <Home />
      <main>
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
