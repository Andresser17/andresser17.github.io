import { useState, useEffect } from "react";
import { send } from "@emailjs/browser";
// Components
import SectionTitle from "../components/SectionTitle";
const EMAIL = "andresserserrano2020@gmail.com";
const SERVICE_ID = "service_dlhbxdh";
const TEMPLATE_ID = "template_9l4u4jj";
const USER_ID = "user_DTWMp4cNyF93TKGmMi3vJ";

function FormTextarea(props) {
  return (
    <textarea
      name={props.name}
      placeholder={props.placeholder}
      value={props.toSend[props.name]}
      onChange={props.onChange}
      className={`p-2 shadow-xl h-36 text-black`}
    ></textarea>
  );
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

function Notification(props) {
  // Basic configurations
  const [config, setConfig] = useState({
    duration: 1000,
    delay: 1000,
  });
  const basicStyles = `fixed bottom-4 left-4 ${props.color} p-4 text-xl rounded-sm transition-opacity delay-${config.delay} duration-${config.duration}`;
  // Toggle animation
  const [toggle, setToggle] = useState(`${basicStyles} opacity-0`);
  const timeout = (ms) => {
    return new Promise(res => setTimeout(res, ms))
  }

  const setOpacity = async () => {
    // Show component
    setToggle(`${basicStyles} opacity-1`);
    // await to finish the animation
    await timeout(config.delay + config.duration);
    // Hide component
    setToggle(`${basicStyles} opacity-0`);
    // await to finish the animation
    await timeout(config.duration);
    // Unmount component
    props.onToggle(false);
  };

  useEffect(() => {
    setOpacity();
  }, []);

  return (
    <div className={toggle}>
      <span className="">{props.message}</span>
    </div>
  );
}

function ContactForm(props) {
  // Template params
  const [toSend, setToSend] = useState({
    name: "",
    email: "",
    message: "",
  });
  // Hide/Unhide message
  const [notMessage, setNotMessage] = useState({
    toggle: false,
    message: "",
    color: "",
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(toSend.name, toSend.email, toSend.message);
    // const response = await send(SERVICE_ID, TEMPLATE_ID, toSend, USER_ID);
    const response = { status: 200 };

    // Display notification
    if (response?.status === 200) {
      setNotMessage({
        toggle: true,
        message: "Message Sent",
        color: "bg-green-600",
      });
    }

    if (response?.status === 404) {
      setNotMessage({
        toggle: true,
        message: "Message not sent",
        color: "bg-red-600",
      });
    }
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={onSubmit} className="flex flex-col w-96">
      <FormLabel text="Name" />
      <FormInput
        name="name"
        placeholder="Name"
        toSend={toSend}
        onChange={handleChange}
      />

      <FormLabel text="Email" />
      <FormInput
        name="email"
        placeholder="Email"
        toSend={toSend}
        onChange={handleChange}
      />

      <FormLabel text="Message" />
      <FormTextarea
        name="message"
        placeholder="Send me a message!"
        toSend={toSend}
        onChange={handleChange}
      />

      <FormButton text="Send" />
      {notMessage.toggle && (
        <Notification
          onToggle={setNotMessage}
          message={notMessage.message}
          color={notMessage.color}
        />
      )}
    </form>
  );
}

function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen px-4 py-8 bg-first lg:flex lg:flex-wrap"
    >
      <SectionTitle text="Contact Me" />
      <div className="py-8 lg:w-1/2">
        <span className="block text-xl">Send me an email!</span>
        <span className="block text-lg font-bold">{EMAIL}</span>
        {/* Put a copy button in this for the email */}
      </div>
      <div className="flex justify-center py-8 lg:w-1/2">
        <ContactForm />
      </div>
    </section>
  );
}

export default Contact;
