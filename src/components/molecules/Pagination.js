import ReactPaginate from "react-paginate";
// Icons
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
// Styles
import styles from "./Pagination.module.css";

function Pagination({
  pageCount = 50,
  limit = 10,
  setSelected = () => undefined,
  selected = 1,
}) {
  const handlePageClick = (e) => {
    setSelected(e.selected + 1);
  };

  return (
    <ReactPaginate
      containerClassName={styles["container"]}
      pageClassName={styles["button-li"]}
      pageLinkClassName={styles["button"]}
      activeClassName={styles["button-active"]}
      previousLabel={<BsArrowLeft className={styles["arrow"]} />}
      previousClassName={styles["arrow-button-li"]}
      previousLinkClassName={styles["arrow-button"]}
      nextLabel={<BsArrowRight className={styles["arrow"]} />}
      nextClassName={styles["arrow-button-li"]}
      nextLinkClassName={styles["arrow-button"]}
      onPageChange={handlePageClick}
      pageCount={Number(pageCount)}
    />
  );
}

export default Pagination;
