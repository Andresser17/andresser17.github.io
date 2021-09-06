// import {useState} from "react";
import "./App.css";
import Header from "./Header";
import Work from "./Work";
import About from "./About";
import Contact from "./Contact";

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
