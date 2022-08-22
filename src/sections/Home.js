import { useState, useEffect } from "react";
// Icons
import { ReactComponent as MenuIcon } from "icons/menu-icon.svg";
import { ReactComponent as CloseIcon } from "icons/close-icon.svg";
import { ReactComponent as PageIcon } from "icons/page-icon.svg";

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
  const routes = [
    { label: "Home", value: "#home" },
    { label: "Projects", value: "#projects" },
    { label: "About", value: "/about" },
    { label: "Contact", value: "#contact" },
  ];
  // Manage scroll position
  const [scrollPosition, setScrollPosition] = useState(0);
  // Styles
  const homeStyle = "bg-black/50 text-white";
  const inactiveStyle = "sm:bg-black/20 sm:text-white/20 sm:text-xs";
  const activeStyle =
    "sm:hover:text-base sm:hover:py-4 sm:hover:bg-black/50 sm:hover:text-white ";
  const topPanelStyles =
    "fixed top-0 w-full p-2 sm:p-4 flex sm:justify-between transition-all duration-300 ease-out z-10";

  const handleScrollPosition = () => {
    const position = window.scrollY;

    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPosition);

    return () => {
      window.removeEventListener("scroll", handleScrollPosition);
    };
  }, []);

  return (
    <div
      className={`${topPanelStyles} ${
        scrollPosition > 0 ? `${inactiveStyle} ${activeStyle}` : homeStyle
      }`}
    >
      <PageIcon className="w-12 h-12 text-text" />
      {/* <Menu routes={routes} /> */}
    </div>
  );
}

function Home() {
  return (
    <header
      id="home"
      className="flex items-center min-h-screen cont-blue-gradient"
    >
      {/* Top panel */}
      <TopPanel />
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
