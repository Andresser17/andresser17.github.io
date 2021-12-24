function Buttons(props) {
  return (
    <a href={props.href} className="block px-6 py-4 bg-red-600 rounded shadow-md">
      {props.text}
    </a>
  );
}


export default Buttons;
