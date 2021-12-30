// import { useState /*useEffect*/ } from "react";
// Components
import SectionTitle from "../components/SectionTitle";

function FormTextarea(props) {
  return (
    <textarea className={`p-2 mb-6 shadow-inner h-36 text-black`}></textarea>
  );
}

function FormInput(props) {
  // const [color, setColor] = useState("bg-gray-500");

  // if (props.color !== color && props.color) {
  //   setColor(props.color);
  // }

  // return <input className={`p-2 mb-3 shadow-inner ${color}`} />;
  return <input className={`p-2 mb-3 shadow-inner text-black`} />;
}

function FormButton(props) {
  return (
    <button className="block px-6 py-4 rounded shadow-md bg-fourth">
      {props.text}
    </button>
  );
}

function Form() {
  return (
    <form className="grid grid-col-12 w-96">
      <label>Name</label>
      <FormInput />

      <label>Email</label>
      <FormInput />
      <label>Message</label>
      <FormTextarea />

      <FormButton text="Send" />
    </form>
  );
}

function Contact() {
  return (
    <section id="contact" className="px-4 py-8 bg-first lg:flex lg:flex-wrap">
      <SectionTitle text="Contact Me" />
      <div className="lg:w-1/2 py-8">
        <span className="text-xl block">
          Consectetur repellendus magnam tenetur libero ratione Voluptate unde
          sit est
        </span>
        <span className="block text-lg">Example@email.com</span>
      </div>
      <div className="flex justify-center py-8 lg:w-1/2">
        <Form />
      </div>
    </section>
  );
}

export default Contact;
