function SectionTitle(props) {
  return (
    <div className="flex justify-center w-full p-4">
      <h2 className="px-4 pb-2 text-3xl text-center border-b-2 border-fourth">
        {props.text}
      </h2>
    </div>
  );
}

export default SectionTitle;
