// import {useState} from "react";
// Styles
import "./styles/App.css";
// Complete Sections (components)
import Header from "./components/Header";
// Pages
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="text-white">
      <Header />
      <main>
        <Projects />
        {/* <About /> */}
        {/* <Contact /> */}
      </main>
    </div>
  );
}

export default App;
