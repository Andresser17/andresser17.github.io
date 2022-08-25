import { useEffect } from "react";
import PropTypes from "prop-types";
// Icons
import { AiFillCloseCircle } from "react-icons/ai";
// Styles
import styles from "./ModalContainer.module.css";

function CloseButton({ onShow }: { onShow: (prev: boolean) => void }) {
  return (
    <div className={styles["close-button-cont"]}>
      <AiFillCloseCircle
        onClick={() => onShow(false)}
        className={styles["close-button"]}
      />
    </div>
  );
}

function ModalContainer({
  palette = "light",
  show,
  onShow,
  closeWhenClickOutside = true,
  children,
}) {
  // Hide body scrollbar
  useEffect(() => {
    if (show) {
      document.body.classList.add("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [show]);

  return (
    // Modal container
    <div
      id="modal-container"
      onClick={(e) => {
        const target = e.target;
        if (target.id !== "modal-container") return;

        if (closeWhenClickOutside) onShow(false);
      }}
      className={`${styles["container"]} ${palette} ${
        !show ? "hidden" : ""
      } z-20`}
    >
      {/* Modal content */}
      <div className={`bg-bg text-text shadow-md ${styles["modal-content"]}`}>
        <CloseButton onShow={onShow} />
        {children}
      </div>
    </div>
  );
}
ModalContainer.propTypes = {
  palette: PropTypes.string,
  show: PropTypes.bool,
  onShow: PropTypes.func,
  closeWhenClickOutside: PropTypes.bool,
};

export default ModalContainer;
