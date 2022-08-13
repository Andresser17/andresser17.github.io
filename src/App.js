// Sections
import Home from "sections/Home";
import Projects from "sections/Projects";
import About from "sections/About";
import Contact from "sections/Contact";
import Footer from "sections/Footer";

function App() {
  return (
    <div className="bg-first text-second">
      <Home />
      <main>
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
