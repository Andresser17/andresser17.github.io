import { useState, /*useEffect*/ } from "react";

function FormInput(props) {
  const [color, setColor] = useState("bg-gray-500");

  if (props.color !== color && props.color) {
    setColor(props.color)
  }

  return <input className={`p-2 mb-3 shadow-inner ${color}`} />;
}

function FormButton(props) {
  const [color, setColor] = useState("bg-gray-500");

  if (props.color !== color && props.color) {
    setColor(props.color)
  }

  return (
    <button className={`mt-4 ${color}`}>{props.text}</button>
  );
}

function Form() {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-4 cont-blue-gradient">
      <form className="p-5 bg-gray-600 w-80 md:w-96 grid grid-col-12">
        <label>Name</label>
        <FormInput color="bg-red-600" />

        <label>Last Name</label>
        <FormInput />

        <label>Email</label>
        <FormInput />
        <label>Phone Number</label>
        <FormInput />
        <FormButton text="Send" />
        <FormButton color="bg-red-800" text="Clear" />
      </form>
    </div>
  );
}

export default Form;
