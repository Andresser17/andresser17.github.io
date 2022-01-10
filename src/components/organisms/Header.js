import React, { useState, useEffect, useRef } from "react";
// Components
import SidebarContainer from "components/atoms/SidebarContainer";
import Nav from "components/molecules/Nav";
// Icons
import { FiSun, FiMoon, FiMonitor } from "react-icons/fi";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
// Config
import { GITHUB_PROFILE, LINKEDIN_PROFILE, ROUTES } from "app.config";

const ToggleMode = () => {
  const [toggle, setToggle] = useState(false);
  const [selected, setSelected] = useState("");
  // Refs
  const iconRef = useRef(null);
  // Icons
  const lightIcon = <FiSun />;
  const darkIcon = <FiMoon />;
  const systemIcon = <FiMonitor />;

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };

  const handleSelect = (e, mode) => {
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

  // check what mode is selected
  useEffect(() => {
    // check targetNode class after component is mounted;
    const targetNode = document.documentElement;
    if (selected.length === 0) {
      // if localStorage.theme is undefined, select system;
      if (!localStorage.theme) {
        setSelected("system");
      } else setSelected(targetNode.classList[0]);
    }

    const config = { attributes: true };
    const observer = new MutationObserver((mutationList, observer) => {
      for (let mutation of mutationList) {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "class"
        ) {
          // if localStorage.theme is undefined, select system;
          if (!localStorage.theme) {
            setSelected("system");
            return;
          }

          setSelected(targetNode.classList[0]);
        }
      }
    });

    observer.observe(targetNode, config);

    return () => {
      observer.disconnect();
    };
  }, [selected]);

  return (
    <>
      <div className="relative z-10">
        <span
          onClick={handleToggle}
          className="ml-4 block w-8 h-8 md:w-5 md:h-5 cursor-pointer [&>svg]:w-full [&>svg]:h-full"
          ref={iconRef}
        >
          {selected === "light" && lightIcon}
          {selected === "dark" && darkIcon}
          {selected === "system" && systemIcon}
        </span>
        <div
          className={`w-28 absolute text-text top-10 left-4 md:top-8 md:left-auto md:right-0 secondary ${
            toggle ? "block" : "hidden"
          }`}
        >
          <span
            onClick={(e) => handleSelect(e, "light")}
            className={`flex items-center p-2 cursor-pointer rounded-t hover:bg-hover [&>svg]:w-5 [&>svg]:h-5 [&>svg]:mr-2
            ${selected === "light" ? "bg-hover" : "bg-bg"}`}
          >
            {lightIcon}
            Light
          </span>
          <span
            onClick={(e) => handleSelect(e, "dark")}
            className={`flex items-center p-2 cursor-pointer hover:bg-hover [&>svg]:w-5 [&>svg]:h-5 [&>svg]:mr-2
 ${selected === "dark" ? "bg-hover" : "bg-bg"}`}
          >
            {darkIcon}
            Dark
          </span>
          <span
            onClick={(e) => handleSelect(e, "system")}
            className={`flex items-center p-2 cursor-pointer rounded-b hover:bg-hover [&>svg]:w-5 [&>svg]:h-5 [&>svg]:mr-2
 ${selected === "system" ? "bg-hover" : "bg-bg"}`}
          >
            {systemIcon}
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

function Menu() {
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
      <Nav routes={ROUTES} />
      {options}
    </div>
  );

  return resolution >= 768 ? (
    menuList
  ) : (
    <SidebarContainer>{menuList}</SidebarContainer>
  );
}

export default function Header() {
  // Manage scroll position
  const [scrollPosition, setScrollPosition] = useState(0);
  // Styles
  const scrollDownStyle = "sm:bg-bg sm:shadow-lg";
  const topPanelStyles =
    "absolute flex justify-center sm:fixed top-0 w-full p-4 transition-all duration-300 ease-out z-10";

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
    <header
      className={`${topPanelStyles} ${
        scrollPosition > 0 ? scrollDownStyle : ""
      }`}
    >
      {/* Topbar */}
      <div className="w-full max-w-[1600px] flex items-center sm:justify-end">
        <Menu />
      </div>
    </header>
  );
}
