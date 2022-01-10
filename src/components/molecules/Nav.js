import React from "react";
import { NavLink } from "react-router-dom";
// Components
import HashLink from "components/molecules/HashLink";

export default function Nav({ routes }) {
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

  return (
    <nav className={`w-60 transition-all md:w-auto md:flex md:transition-none`}>
      {links}
    </nav>
  );
}
