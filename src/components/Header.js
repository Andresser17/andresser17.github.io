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
    <span className="w-12 h-12 flex justify-center items-center shadow-md text-white p-2 rounded bg-fourth block sm:hidden">
      <MenuIcon />
    </span>
  );
}

function Header() {
  const [selected, setSelected] = useState("home");
  return (
    <header id="home">
        {/* <div> */}
        {/*   <MenuButton menuId="menu" /> */}
        {/*   <Menu */}
        {/*     onSelectedChange={setSelected} */}
        {/*     selected={selected} */}
        {/*     items={["Home", "Projects", "About", "Contact"]} */}
        {/*   /> */}
        {/* </div> */}
      {/* Home */}
      <div className="flex items-center py-32 px-4 text-white cont-blue-gradient">
        <div className="flex flex-wrap justify-center lg:w-2/4">
          <div className="flex flex-col items-center w-full mb-8">
            <span className="mb-4 text-center text-2xl">
              Sit nisi quibusdam expedita
            </span>
            <span className="text-center">
              Lorem laboriosam eligendi eos reiciendis officiis incidunt error
              Tempora nam veniam neque voluptatibus id, atque? Exercitationem
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
