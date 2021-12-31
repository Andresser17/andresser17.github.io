// import { useState /*useEffect*/ } from "react";
// Components
import SectionTitle from "../components/SectionTitle";

function FormTextarea(props) {
  return (
    <textarea className={`p-2 shadow-xl h-36 text-black`}></textarea>
  );
}

function FormInput(props) {
  // const [color, setColor] = useState("bg-gray-500");

  // if (props.color !== color && props.color) {
  //   setColor(props.color);
  // }

  // return <input className={`p-2 mb-3 shadow-inner ${color}`} />;
  return <input className={`p-2 shadow-xl text-black`} />;
}

function FormLabel(props) {
  return (
    <label className="mt-4 mb-1">{props.text}</label>
  )
}

function FormButton(props) {
  return (
    <button className="block px-6 py-4 mt-4 font-semibold text-black rounded shadow-xl bg-fourth">
      {props.text}
    </button>
  );
}

function Form() {
  return (
    <form className="flex flex-col w-96">
      <FormLabel text="Name" />
      <FormInput />

      <FormLabel text="Email" />
      <FormInput />

      <FormLabel text="Message" />
      <FormTextarea />

      <FormButton text="Send" />
    </form>
  );
}

function Contact() {
  return (
    <section id="contact" className="min-h-screen px-4 py-8 bg-first lg:flex lg:flex-wrap">
      <SectionTitle text="Contact Me" />
      <div className="py-8 lg:w-1/2">
        <span className="block text-xl">
          Consectetur repellendus magnam tenetur libero ratione Voluptate unde
          sit est
        </span>
        <span className="block text-lg font-bold">Example@email.com</span>
      </div>
      <div className="flex justify-center py-8 lg:w-1/2">
        <Form />
      </div>
    </section>
  );
}

export default Contact;
