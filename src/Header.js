import { useState } from "react";
import slide from "./site-video.jpg";

function MenuList(props) {
  const items = props.items.map((item) => {
    const id = item.toLowerCase();
    const styles =
      props.selected === id ? `mx-4 px-2 py-0.5 border-b` : `mx-4 px-2 py-0.5`;

    return (
      <li key={id}>
        <a
          className={styles}
          href={`#${id}`}
          onClick={() => props.onSelectedChange(id)}
        >
          {item}
        </a>
      </li>
    );
  });

  return <ul className="flex">{items}</ul>;
}

function Header() {
  const [selected, setSelected] = useState("home");
  return (
    <header>
      <div id="top-panel" className="absolute flex items-center justify-between w-full h-20 px-4 text-white bg-black border-b border-blue-600 bg-opacity-30">
        <div className="logo">
          <h1 className="text-2xl text-center">Alejandro Serrano</h1>
        </div>
        <div className="menu-cont">
          <MenuList
            onSelectedChange={setSelected}
            selected={selected}
            items={["Home", "Work", "About", "Contact"]}
          />
        </div>
      </div>
      <div id="slideshow" className="h-screen cont-blue-gradient">
        <div id="slides">
          {/* <img src={slide} alt="slide-1" className="h-screen" /> */}
        </div>
      </div>
    </header>
  );
}

export default Header;
