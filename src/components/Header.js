import { useState } from "react";
import Buttons from "./Buttons";

function MenuList(props) {
  const items = props.items.map((item) => {
    const id = item.toLowerCase();
    const styles =
      props.selected === id ? `mx-4 px-2 py-0.5 border-b-2` : `mx-4 px-2 py-0.5`;

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
    <header id="home">
      <div
        id="top-panel"
        className="absolute flex items-center justify-between w-full h-20 px-4 text-white bg-black border-b border-blue-600 bg-opacity-30"
      >
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
      <div className="flex items-center h-screen px-8 text-white cont-blue-gradient">
        <div className="flex flex-wrap items-start w-2/3">
          <div className="flex flex-col items-start w-full mb-4">
            <span className="w-auto mb-4 text-4xl">Sit nisi quibusdam expedita</span>
            <span className="w-96">
              Lorem laboriosam eligendi eos reiciendis officiis incidunt error Tempora nam veniam neque voluptatibus id, atque? Exercitationem voluptates reprehenderit earum voluptatem perspiciatis libero! Sunt quibusdam aperiam veniam dolorem placeat harum. Voluptatum.
            </span>
          </div>
          <div className="mr-4">
            <Buttons href="#" text="Works" />
          </div>
          <div className="mr-4">
            <Buttons href="#" text="Contact me" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
