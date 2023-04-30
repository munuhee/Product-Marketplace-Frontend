import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Pagination = ({ currentPage, totalPages, onNextPage, onPrevPage }) => {
  return (
    <nav className="flex justify-center mt-4">
      <ul className="flex items-center space-x-2">
        <li>
          <button
            onClick={onPrevPage}
            className={`${
              currentPage === 1 ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
            }`}
            disabled={currentPage === 1}
          >
            <FontAwesomeIcon icon={faChevronLeft} className="text-gray-500" />
          </button>
        </li>
        {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
          <li key={pageNumber}>
            <button
              onClick={() => onPageChange(pageNumber)}
              className={`${
                pageNumber === currentPage
                  ? "bg-gray-500 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              } px-4 py-2 rounded-md`}
            >
              {pageNumber}
            </button>
          </li>
        ))}
        <li>
          <button
            onClick={onNextPage}
            className={`${
              currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
            }`}
            disabled={currentPage === totalPages}
          >
            <FontAwesomeIcon icon={faChevronRight} className="text-gray-500" />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
