import { useState, useEffect } from "react";
import { send } from "@emailjs/browser";
// Components
import SectionTitle from "../components/SectionTitle";
// Icons
import { ReactComponent as CopyIcon } from "../icons/copy-icon.svg";
const validator = require("email-validator");
const EMAIL = "andresserserrano2020@gmail.com";
const SERVICE_ID = "service_dlhbxdh";
const TEMPLATE_ID = "template_9l4u4jj";
const USER_ID = "user_DTWMp4cNyF93TKGmMi3vJ";

function FormTextarea(props) {
  return (
    <textarea
      disabled={props.disabled}
      name={props.name}
      placeholder={props.placeholder}
      value={props.toSend[props.name]}
      onChange={props.onChange}
      className={`p-2 shadow-xl h-36 text-black disabled:opacity-40`}
    ></textarea>
  );
}

function FormInput(props) {
  return (
    <input
      type="text"
      disabled={props.disabled}
      name={props.name}
      placeholder={props.placeholder}
      value={props.toSend[props.name]}
      onChange={props.onChange}
      className={`p-2 shadow-xl text-black disabled:opacity-40`}
    />
  );
}

function FormLabel(props) {
  return <label className="mt-4 mb-1">{props.text}</label>;
}

function FormButton(props) {
  return (
    <button
      disabled={props.disabled}
      type="submit"
      className="block px-6 py-4 mt-4 font-semibold text-black rounded shadow-xl bg-fourth disabled:opacity-40"
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
    return new Promise((res) => setTimeout(res, ms));
  };

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
  const [disabled, setDisabled] = useState(false);
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

  const checkInputs = () => {
    const name = toSend.name;
    const email = toSend.email;
    const message = toSend.message;

    // Check if inputs are empty
    if (!name.length || !email.length || !message.length) {
      setNotMessage({
        toggle: true,
        message: "All the inputs have to be filled",
        color: "bg-red-600",
      });

      return true;
    }
    // Check if email is valid
    if (!validator.validate(email)) {
      setNotMessage({
        toggle: true,
        message: "The email provided is invalid",
        color: "bg-red-600",
      });

      return true;
    }
    return false;
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (checkInputs()) return;

    const timeout = (ms) => {
      return new Promise((res) => setTimeout(res, ms));
    };
    // const response = { status: 200 };
    setDisabled(true);
    const response = await send(SERVICE_ID, TEMPLATE_ID, toSend, USER_ID);
    // await timeout(5000);

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

  useEffect(() => {
    // Active form when notMessage is unmounted
    if (!notMessage.toggle) setDisabled(false);
  }, [notMessage]);

  return (
    <form onSubmit={onSubmit} className="flex flex-col w-96">
      <FormLabel text="Name" />
      <FormInput
        name="name"
        disabled={disabled}
        placeholder="Name"
        toSend={toSend}
        onChange={handleChange}
      />

      <FormLabel text="Email" />
      <FormInput
        name="email"
        disabled={disabled}
        placeholder="Email"
        toSend={toSend}
        onChange={handleChange}
      />

      <FormLabel text="Message" />
      <FormTextarea
        name="message"
        disabled={disabled}
        placeholder="Send me a message!"
        toSend={toSend}
        onChange={handleChange}
      />

      <FormButton disabled={disabled} text="Send" />
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

function CopyEmail(props) {
  // Copy the text inside the text field
  const copy = () => navigator.clipboard.writeText(props.email);

  return (
    <div className="flex items-center">
      <span className="text-lg font-bold align-start">{props.email}</span>
      <button
        onClick={copy}
        className="w-10 p-1 mx-2 text-white rounded cursor-pointer hover:bg-black/30 active:bg-black/60"
      >
        <CopyIcon />
      </button>
    </div>
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
        <CopyEmail email={EMAIL} />
      </div>
      <div className="flex justify-center py-8 lg:w-1/2">
        <ContactForm />
      </div>
    </section>
  );
}

export default Contact;
