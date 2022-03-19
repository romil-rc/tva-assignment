import React, { useState } from "react";
import "../styles/pagination.css";

const Pagination = ({
  postsPerPage,
  totalPosts,
  paginate,
  currentPage,
  setCurrentPage
}) => {
  const pageNumbers = [];

  const [pageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  const showPageNumbers = pageNumbers.map((number, i) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li
          key={i}
          onClick={() => paginate(number)}
          className={currentPage === number ? "active" : null}
        >
          {number}
        </li>
      );
    } else {
      return null;
    }
  });

  // console.log("Current Page:", currentPage);
  // console.log("Page number limit", pageNumberLimit);
  // console.log("maxPageNumberLimit", maxPageNumberLimit);
  // console.log("minPageNumberLimit", minPageNumberLimit);

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };
  const handlePrev = () => {
    setCurrentPage(currentPage - 1);
    if (currentPage - 1 <= minPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  return (
    <div>
      <ul className="pagination">
        <button
          disabled={currentPage === pageNumbers[0] ? true : false}
          className="buttons"
          onClick={handlePrev}
        >
          &lt;
        </button>
        {showPageNumbers}
        <button
          disabled={
            currentPage === pageNumbers[pageNumbers.length - 1] ? true : false
          }
          className="buttons"
          onClick={handleNext}
        >
          &gt;
        </button>
      </ul>
    </div>
  );
};

export default Pagination;
