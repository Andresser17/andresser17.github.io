import { useState } from "react";
// Components
import Buttons from "../components/Buttons";
// Icons
import { ReactComponent as MenuIcon } from "../icons/menu-icon.svg";

function Menu(props) {
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

  return <ul className="hidden sm:flex">{items}</ul>;
}

function MenuButton(props) {
  return (
    <span className="w-12 h-12 mx-2 flex justify-center items-center shadow-md text-white p-2 rounded bg-fourth block sm:hidden">
      <MenuIcon />
    </span>
  );
}

function Header() {
  const [selected, setSelected] = useState("home");
  return (
    <header id="home" className="cont-blue-gradient">
      {/* Top panel */}
      <div class="fixed w-full flex justify-end bg-black/50 py-2 text-xs sm:hover:text-base sm:hover:py-4 transition-all duration-300 ease-out">
        <MenuButton menuId="menu" />
        <Menu
          onSelectedChange={setSelected}
          selected={selected}
          items={["Home", "Projects", "About", "Contact"]}
        />
      </div>
      {/* Home */}
      <div className="flex flex-col w-full sm:w-96 py-32 px-4">
        <span className="block mb-4 text-xl font-extralight">
          Hello, I'm
          <h1 className="text-3xl font-black">Alejandro Serrano</h1>
        </span>
        <span className="block">
          Lorem laboriosam eligendi eos reiciendis officiis incidunt error
          Tempora nam veniam neque voluptatibus id, atque? Exercitationem
        </span>
      </div>
    </header>
  );
}

export default Header;
