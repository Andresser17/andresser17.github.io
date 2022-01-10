import React, { useRef } from "react";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";

function HashLink({ to, className, activeClassName, children }) {
  const location = useLocation();
  const linkRef = useRef(null);
  const [link, hash] = to.split("#");

  const handleClick = (ref) => {
    setTimeout(() => {
      if (ref.current) ref.current.click();
    }, 500);
  };

  return location.pathname === link ? (
    <a
      className={`${className} ${
        `#${hash}` === location.hash ? activeClassName : ""
      }`}
      ref={linkRef}
      href={to}
    >
      {children}
    </a>
  ) : (
    <Link className={className} onClick={() => handleClick(linkRef)} to={to}>
      {children}
    </Link>
  );
}
HashLink.propTypes = {
  to: PropTypes.string,
  className: PropTypes.string,
  activeClassName: PropTypes.string,
};

export default HashLink;
