function Buttons(props) {
  return (
    <a href={props.href} className="block px-6 py-4 rounded shadow-md bg-fourth">
      {props.text}
    </a>
  );
}


export default Buttons;
