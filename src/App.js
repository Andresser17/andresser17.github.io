// import {useState} from "react";
import "./App.css";
import Header from "./Header";
import Work from "./Work";
import About from "./About";
// Change Form to Contact
import Form from "./Form";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Work />
        <About />
        <Form />
      </main>
    </div>
  );
}

export default App;
