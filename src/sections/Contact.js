import { useState } from "react";
import { send } from "@emailjs/browser";
// Components
import SectionTitle from "../components/SectionTitle";
const EMAIL = "andresserserrano2020@gmail.com";
const SERVICE_ID = "service_dlhbxdh";
const TEMPLATE_ID = "template_9l4u4jj";
const USER_ID = "user_DTWMp4cNyF93TKGmMi3vJ";

function FormTextarea(props) {
  return <textarea className={`p-2 shadow-xl h-36 text-black`}></textarea>;
}

function FormInput(props) {
  return (
    <input
      type="text"
      name={props.name}
      placeholder={props.placeholder}
      value={props.toSend[props.name]}
      onChange={props.onChange}
      className={`p-2 shadow-xl text-black`}
    />
  );
}

function FormLabel(props) {
  return <label className="mt-4 mb-1">{props.text}</label>;
}

function FormButton(props) {
  return (
    <button
      type="submit"
      className="block px-6 py-4 mt-4 font-semibold text-black rounded shadow-xl bg-fourth"
    >
      {props.text}
    </button>
  );
}

function Form(props) {
  return (
    <form onSubmit={props.onSubmit} className="flex flex-col w-96">
      <FormLabel text="Name" />
      <FormInput
        name="name"
        placeholder="Name"
        toSend={props.toSend}
        onChange={props.onChange}
      />

      <FormLabel text="Email" />
      <FormInput
        name="email"
        placeholder="Email"
        toSend={props.toSend}
        onChange={props.onChange}
      />

      <FormLabel text="Message" />
      <FormTextarea />

      <FormButton text="Send" />
    </form>
  );
}

function Contact() {
  // Template params
  const [toSend, setToSend] = useState({
    name: "",
    email: "",
    message: "",
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    const response = await send(SERVICE_ID, TEMPLATE_ID, toSend, USER_ID);

    return console.log(`status: ${response.status}, text: ${response.text}`);
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <section
      id="contact"
      className="min-h-screen px-4 py-8 bg-first lg:flex lg:flex-wrap"
    >
      <button onClick={onSubmit}>Submit</button>
      <SectionTitle text="Contact Me" />
      <div className="py-8 lg:w-1/2">
        <span className="block text-xl">Send me an email!</span>
        <a href="#" className="block text-lg font-bold">
          {EMAIL}
        </a>
      </div>
      <div className="flex justify-center py-8 lg:w-1/2">
        <Form onSubmit={onSubmit} toSend={toSend} onChange={handleChange} />
      </div>
    </section>
  );
}

export default Contact;
