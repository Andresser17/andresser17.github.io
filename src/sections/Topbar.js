import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
// Components
import SidebarContainer from "modals/SidebarContainer";
import HashLink from "components/HashLink";
// Icons
import { FiSun, FiMoon, FiMonitor } from "react-icons/fi";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { ReactComponent as PageIcon } from "icons/page-icon.svg";
// Config
import { GITHUB_PROFILE, LINKEDIN_PROFILE } from "app.config";

const ToggleMode = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };

  const handleSelect = (mode) => {
    if (mode === "system") {
      localStorage.removeItem("theme");

      // Change color theme to system preference
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? (document.documentElement.classList = "dark")
        : (document.documentElement.classList = "light");
    } else {
      document.documentElement.classList = mode;
      // save in localStorage
      localStorage.theme = mode;
    }

    setToggle(false);
  };

  return (
    <>
      <div className="relative z-10">
        <FiSun
          onClick={handleToggle}
          className="ml-4 w-8 h-8 md:w-5 md:h-5 cursor-pointer"
        />
        <div
          className={`w-28 absolute text-text top-8 right-0 secondary ${
            toggle ? "block" : "hidden"
          }`}
        >
          <span
            onClick={() => handleSelect("light")}
            className="flex items-center p-2 cursor-pointer bg-bg rounded-t hover:bg-hover"
          >
            <FiSun className="w-5 h-5 mr-2" />
            Light
          </span>
          <span
            onClick={() => handleSelect("dark")}
            className="flex items-center p-2 cursor-pointer bg-bg hover:bg-hover"
          >
            <FiMoon className="w-5 h-5 mr-2" />
            Dark
          </span>
          <span
            onClick={() => handleSelect("system")}
            className="flex items-center p-2 cursor-pointer bg-bg rounded-b hover:bg-hover"
          >
            <FiMonitor className="w-5 h-5 mr-2" />
            System
          </span>
        </div>
      </div>
      {/* capture outside click */}
      <div
        onClick={handleToggle}
        className={`absolute top-0 left-0 w-full h-screen ${
          toggle ? "block" : "hidden"
        }`}
      ></div>
    </>
  );
};

function Menu({ routes }) {
  const [resolution, setResolution] = useState(0);
  const linkStyles =
    "block p-4 md:inline md:border-b-2 md:border-black/0 md:mx-4 md:px-2 md:py-0.5";
  const activeStyle = "bg-active md:bg-black/0 md:border-text";

  // get document resolution
  useEffect(() => {
    // get current resolution when component is mounted
    if (resolution === 0) setResolution(document.body.clientWidth);

    const getResolution = () => {
      setResolution(document.body.clientWidth);
    };
    window.addEventListener("resize", getResolution);

    return () => {
      window.removeEventListener("resize", getResolution);
    };
  }, [resolution]);

  const links = routes.map((route) => {
    if (route.link[1] === "#")
      return (
        <HashLink
          className={linkStyles}
          activeClassName={activeStyle}
          key={route.link}
          to={route.link}
        >
          {route.label}
        </HashLink>
      );

    return (
      <NavLink
        key={route.link}
        className={({ isActive }) =>
          `${linkStyles} ${isActive ? activeStyle : undefined}`
        }
        to={route.link}
      >
        {route.label}
      </NavLink>
    );
  });

  const options = (
    <div className="flex items-center mt-4 md:m-0 md:border-l md:border-border">
      <ToggleMode />
      <a
        className="ml-4"
        href={LINKEDIN_PROFILE}
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiFillLinkedin className="w-8 h-8 md:w-5 md:h-5 cursor-pointer" />
      </a>
      <a
        className="ml-4"
        href={GITHUB_PROFILE}
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiFillGithub className="w-8 h-8 md:w-5 md:h-5 cursor-pointer" />
      </a>
    </div>
  );

  const menuList = (
    <div className="md:flex">
      <nav
        className={`w-60 transition-all md:w-auto md:flex md:transition-none`}
      >
        {links}
      </nav>
      {options}
    </div>
  );

  return resolution >= 768 ? (
    menuList
  ) : (
    <SidebarContainer>{menuList}</SidebarContainer>
  );
}

function Topbar() {
  // Manage scroll position
  const [scrollPosition, setScrollPosition] = useState(0);
  // menu routes
  const routes = [
    { label: "Home", link: "/#home", selected: true },
    { label: "Projects", link: "/#projects" },
    { label: "Contact", link: "/#contact" },
    { label: "About", link: "/about" },
    { label: "Blog", link: "/blog" },
  ];
  // Styles
  const scrollDownStyle = "sm:bg-bg sm:shadow-lg";
  const topPanelStyles =
    "absolute flex justify-center sm:fixed top-0 w-full px-4 py-2 transition-all duration-300 ease-out z-10";

  useEffect(() => {
    const handleScrollPosition = () => {
      const position = window.scrollY;

      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScrollPosition);

    return () => {
      window.removeEventListener("scroll", handleScrollPosition);
    };
  }, []);

  return (
    <div
      className={`${topPanelStyles} ${
        scrollPosition > 0 ? scrollDownStyle : ""
      }`}
    >
      <div className="w-full max-w-[1600px] flex items-center sm:justify-between">
        <PageIcon className="w-12 h-12 text-text" />
        <Menu routes={routes} />
      </div>
    </div>
  );
}

export default Topbar;
