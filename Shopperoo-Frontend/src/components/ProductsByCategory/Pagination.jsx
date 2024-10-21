/* eslint-disable */
import React from "react";

const Pagination = ({ currentPage, totalPages }) => {
  return (
    <nav
      className="mb-10 mt-10 flex items-start justify-center gap-10 whitespace-nowrap pt-8 text-xl text-black"
      aria-label="Pagination"
    >
      {" "}
      {currentPage > 1 && (
        <div className="flex w-[98px] flex-col rounded-xl font-light">
          <button className="rounded-xl bg-orange-50 px-2.5 py-4 max-md:px-5">
            <span className="flex items-center justify-center">Prev</span>
          </button>
        </div>
      )}
      {[...Array(totalPages)].map((_, index) => (
        <div
          key={index}
          className={`flex flex-col ${index + 1 === currentPage ? "text-white" : ""} w-[60px] rounded-xl`}
        >
          <div
            className={`px-1.5 ${index + 1 === currentPage ? "bg-yellow-600" : "bg-orange-50"} h-[60px] w-[60px] rounded-xl max-md:px-5`}
          >
            <span className="flex h-full items-center justify-center">
              {index + 1}
            </span>
          </div>
        </div>
      ))}
      {currentPage < totalPages && (
        <div className="flex w-[98px] flex-col rounded-xl font-light">
          <button className="rounded-xl bg-orange-50 px-2.5 py-4 max-md:px-5">
            <span className="flex items-center justify-center">Next</span>
          </button>
        </div>
      )}
    </nav>
  );
};

export default Pagination;
