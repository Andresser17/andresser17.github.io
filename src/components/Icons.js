function Icons(props) {
  return (
    <a href={props.href} className="block w-12 h-12 mx-4">
      <img src={props.src} className="max-w-full max-h-full" />
    </a>
  );
}

export default Icons;
