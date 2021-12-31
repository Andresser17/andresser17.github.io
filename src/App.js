// Styles
import "./styles/App.css";
// Components

// Sections
import Home from "./sections/Home";
import Projects from "./sections/Projects";
import About from "./sections/About";
import Contact from "./sections/Contact";

function App() {
  return (
    <div className="text-white">
      <Home />
      <main>
        <Projects />
        <About />
        <Contact />
      </main>
    </div>
  );
}

export default App;
