// import {useState} from "react";
// Styles
import "./styles/App.css";
// Complete Sections (components)
import Header from "./components/Header";
// Pages
import Work from "./pages/Work";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Work />
        <About />
        <Contact />
      </main>
    </div>
  );
}

export default App;
