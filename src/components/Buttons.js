function Buttons(props) {
  return (
    <a href={props.href} className="block px-6 py-4 font-semibold text-black rounded shadow-md cursor-pointer bg-fourth">
      {props.text}
    </a>
  );
}


export default Buttons;
