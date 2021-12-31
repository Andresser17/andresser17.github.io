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
    <span className="flex items-center justify-center block w-12 h-12 p-2 mx-2 text-white rounded shadow-md bg-fourth sm:hidden">
      <MenuIcon />
    </span>
  );
}

function TopPanel(props) {
  // Top Panel behaviour
  const base = "fixed top-0 w-full py-2 sm:py-4 flex justify-end transition-all duration-300 ease-out"
  const home = "bg-black/50 text-white";
  const inactive = "bg-black/20 text-white/20 text-xs";
  const active =
    "sm:hover:text-base sm:hover:py-4 sm:hover:bg-black/50 sm:hover:text-white ";

  let styles = "";

  if (props.selected === "home") {
    styles = `${base} ${home}`;
  } else {
    styles = `${base} ${inactive} ${active}`;
  }

  return <div class={styles}>{props.children}</div>;
}

function Home() {
  const [selected, setSelected] = useState("home");

  return (
    <header
      id="home"
      className="flex items-center min-h-screen cont-blue-gradient"
    >
      {/* Top panel */}
      <TopPanel selected={selected}>
        <MenuButton menuId="menu" />
        <Menu
          onSelectedChange={setSelected}
          selected={selected}
          items={["Home", "Projects", "About", "Contact"]}
        />
      </TopPanel>
      {/* Home */}
      <div className="flex flex-col w-full p-4 sm:w-2/4">
        <span className="block mb-4 text-2xl font-extralight">
          Hello, I'm
          <h1 className="text-5xl font-black">Alejandro Serrano</h1>
        </span>
        <span className="block text-xl">
          Lorem laboriosam eligendi eos reiciendis officiis incidunt error
          Tempora nam veniam neque voluptatibus id, atque? Exercitationem
        </span>
      </div>
    </header>
  );
}

export default Home;
