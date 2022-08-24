import { NavLink } from "react-router-dom";
import HashLink from "components/HashLink";

function Menu({ routes }) {
  const links = routes.map((route) => {
    if (route.link[1] === "#")
      return (
        <HashLink className="mx-2" key={route.link} to={route.link}>
          {route.label}
        </HashLink>
      );

    return (
      <NavLink key={route.link} className="mx-2" to={route.link}>
        {route.label}
      </NavLink>
    );
  });

  return <nav>{links}</nav>;
}

function Footer() {
  // menu routes
  const routes = [
    { label: "Home", link: "/#home" },
    { label: "Projects", link: "/#projects" },
    { label: "Contact", link: "/#contact" },
    { label: "About", link: "/about" },
    { label: "Blog", link: "/blog" },
  ];

  return (
    <footer className="w-full flex justify-center border-solid border-t border-hover">
      <div className="w-full max-w-[1600px] h-32 flex flex-col justify-between items-center p-4 sm:h-24 sm:flex-row-reverse md:px-8">
        <Menu routes={routes} />
        <span className="block">
          <strong>&copy; 2022</strong> Alejandro Serrano
        </span>
      </div>
    </footer>
  );
}

export default Footer;
