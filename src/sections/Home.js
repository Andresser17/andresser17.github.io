import React from "react";
import { useState, useEffect } from "react";
// Icons
import MenuIcon from "../icons/menu-icon.svg";
import CloseIcon from "../icons/close-icon.svg";

function Menu(props) {
  const [showMenu, setShowMenu] = useState("hidden");

  const items = props.items.map((item) => {
    const id = item.toLowerCase();
    let styles = `block p-4 text-center sm:inline text-start sm:mx-4 sm:px-2 sm:py-0.5`;

    if (props.selected === id)
      styles = `${styles} bg-fourth sm:bg-transparent sm:border-b-2`;

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

  useEffect(() => {
    if (props.toggle) {
      setShowMenu("right-0");
    } else {
      setShowMenu("right-full");
    }
  }, [props]);

  return (
    <ul
      className={`${showMenu} absolute top-16 transition-all bg-first w-full sm:w-auto sm:static sm:bg-transparent sm:flex sm:transition-none`}
    >
      {items}
    </ul>
  );
}

function MenuButton(props) {
  const toggleIcon = () => {
    props.setToggle(!props.toggle);
  };

  return (
    <span
      onClick={toggleIcon}
      className="flex items-center justify-center block w-12 h-12 p-2 mx-2 text-white rounded shadow-md bg-fourth active:bg-fourth/80 sm:hidden"
    >
      {props.toggle ? <CloseIcon /> : <MenuIcon />}
    </span>
  );
}

function TopPanel(props) {
  // Manage scroll position
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;

    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Top Panel behaviour
  const base =
    "fixed top-0 w-full py-2 sm:py-4 flex flex-col items-end sm:flex-row sm:justify-end transition-all duration-300 ease-out z-10";
  const home = "bg-black/50 text-white";
  const inactive = "sm:bg-black/20 sm:text-white/20 sm:text-xs";
  const active =
    "sm:hover:text-base sm:hover:py-4 sm:hover:bg-black/50 sm:hover:text-white ";

  let styles = "";

  if (scrollPosition === 0) {
    styles = `${base} ${home}`;
  } else {
    styles = `${base} ${inactive} ${active}`;
  }

  return <div className={styles}>{props.children}</div>;
}

function Home() {
  const [selected, setSelected] = useState("home");
  const [toggle, setToggle] = useState(false);

  return (
    <header
      id="home"
      className="flex items-center min-h-screen cont-blue-gradient"
    >
      {/* Top panel */}
      <TopPanel>
        <MenuButton toggle={toggle} setToggle={setToggle} menuId="menu" />
        <Menu
          onSelectedChange={setSelected}
          selected={selected}
          items={["Home", "Projects", "About", "Contact"]}
          toggle={toggle}
        />
      </TopPanel>
      {/* Home */}
      <div className="flex flex-col w-full p-4 sm:w-2/4">
        <span className="block mb-2 text-2xl font-extralight">
          Hello, I'm
          <h1 className="text-5xl font-black">Alejandro Serrano</h1>
        </span>
        <span className="inline-block text-2xl border-b border-fourth">
          Front End Developer
        </span>
      </div>
    </header>
  );
}

export default Home;
