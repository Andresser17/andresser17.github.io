import { useState } from "react";
import Buttons from "./Buttons";

function MenuList(props) {
  const items = props.items.map((item) => {
    const id = item.toLowerCase();
    let styles = `mx-4 px-2 py-0.5`;

    if (props.selected === id) styles = `${styles} border-b-2`;

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

  return <ul className="flex hidden">{items}</ul>;
}

function Header() {
  const [selected, setSelected] = useState("home");
  return (
    <header id="home" className="w-screen">
      <div
        id="top-panel"
        className="absolute w-full h-20 text-white bg-black border-b border-fourth bg-opacity-30"
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
      <div className="flex items-center py-32 text-white cont-blue-gradient">
        <div className="flex flex-wrap justify-center">
          <div className="flex flex-col items-center w-full mb-8">
            <span className="mb-4 text-center text-2xl">
              Sit nisi quibusdam expedita
            </span>
            <span className="text-center">
              Lorem laboriosam eligendi eos reiciendis officiis incidunt error
              Tempora nam veniam neque voluptatibus id, atque? Exercitationem
              voluptates reprehenderit earum voluptatem perspiciatis libero!
              Sunt quibusdam aperiam veniam dolorem placeat harum. Voluptatum.
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
