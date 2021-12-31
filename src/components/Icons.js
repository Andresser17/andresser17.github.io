function Icons(props) {
  const dim = props.dim ? props.dim : "w-12 h-12";

  return (
    <a href={props.href} className={`block ${dim} mr-6`}>
      {props.children}
    </a>
  );
}

export default Icons;
