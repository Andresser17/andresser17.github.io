import { useState, useEffect } from "react";
import { GITHUB_PROFILE, LINKEDIN_PROFILE } from "app.config";
// Components
import SidebarContainer from "modals/SidebarContainer";
// Icons
import { FiSun } from "react-icons/fi";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { ReactComponent as PageIcon } from "icons/page-icon.svg";

function Menu({ routes }) {
  const [selected, setSelected] = useState("");
  const [resolution, setResolution] = useState(0);
  const linkStyles = "block p-4 md:inline md:mx-4 md:px-2 md:py-0.5";
  const activeStyle = "bg-active md:bg-black/0 md:border-b-2";

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
    // if route.selected is true set selected
    if (selected.length === 0 && route.selected) setSelected(route.link);

    // read route, if is equal to route.link set selected

    return (
      <a
        key={route.link}
        className={`${linkStyles} ${
          selected === route.link ? activeStyle : ""
        }`}
        href={route.link}
        onClick={() => setSelected(route.link)}
      >
        {route.label}
      </a>
    );
  });

  const options = (
    <div className="flex items-center mt-4 md:m-0 md:border-l md:border-border">
      <FiSun className="ml-4 w-8 h-8 md:w-5 md:h-5 cursor-pointer" />
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
