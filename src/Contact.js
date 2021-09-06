import { useState /*useEffect*/ } from "react";
import githubIcon from "./github-icon-1.svg";
import codepenIcon from "./codepen-icon.svg";

function FormTextarea(props) {
  const [color, setColor] = useState("bg-gray-500");

  if (props.color !== color && props.color) {
    setColor(props.color);
  }

  return <textarea className={`p-2 mb-3 shadow-inner h-36 ${color}`}></textarea>;
}

function FormInput(props) {
  const [color, setColor] = useState("bg-gray-500");

  if (props.color !== color && props.color) {
    setColor(props.color);
  }

  return <input className={`p-2 mb-3 shadow-inner ${color}`} />;
}

function FormButton(props) {
  const [color, setColor] = useState("bg-gray-500");

  if (props.color !== color && props.color) {
    setColor(props.color);
  }

  return <button className={`mt-4 ${color}`}>{props.text}</button>;
}

function Form() {
  return (
    <form className="p-5 bg-gray-600 w-80 md:w-96 grid grid-col-12">
      <label>Name</label>
      <FormInput color="bg-red-600" />

      <label>Email</label>
      <FormInput />
      <label>Message</label>
      <FormTextarea />

      <FormButton text="Send" />
      <FormButton color="bg-red-800" text="Clear" />
    </form>
  );
}

function Contact() {
  return (
    <section
      id="contact"
      className="flex flex-wrap items-start h-screen px-4 py-16 bg-blue-400"
    >
      <div className="flex justify-center w-full p-4 mb-20">
        <h2 className="px-4 pb-2 text-3xl text-center border-b-2">
          Contact Me
        </h2>
      </div>
      <div className="w-1/2">
        <h3 className="text-xl">
          Consectetur repellendus magnam tenetur libero ratione Voluptate unde
          sit est
        </h3>
        <span>Example@email.com</span>
        <div className="flex justify-center p-4">
          <a href="#32" className="block w-12 h-12 mx-4">
            <img src={githubIcon} className="max-w-full max-h-full" />
          </a>
          <a href="#" className="block w-12 h-12 mx-4">
            <img src={codepenIcon} className="max-w-full max-h-full" />
          </a>
        </div>
      </div>
      <div className="flex justify-center w-1/2">
        <Form />
      </div>
    </section>
  );
}

export default Contact;
