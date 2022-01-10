import { useState } from "react";
// Icons
import { AiOutlineMenu } from "react-icons/ai";
// Styles
import styles from "./SidebarContainer.module.css";

function SidebarContainer({ children }) {
  const [toggle, setToggle] = useState(false);

  return (
    // container
    <div
      className={`bg-bg shadow-lg ${styles["container"]} ${
        toggle ? styles["show"] : ""
      } transition-all`}
    >
      {/* content */}
      {children}
      {/* Menu Icon */}
      <span
        onClick={() => setToggle((prev) => !prev)}
        className={`bg-bg text-text shadow-md ${styles["menu-button"]} ${
          toggle ? styles["menu-button-close"] : ""
        } primary`}
      >
        <AiOutlineMenu />
      </span>
    </div>
  );
}

export default SidebarContainer;
