/* eslint-disable */
import React from 'react';

const Pagination = ({ currentPage, totalPages }) => {
  return (
    <nav className="flex gap-10 mb-10 items-start pt-8 mt-10 text-xl text-black whitespace-nowrap" aria-label="Pagination">
      {[...Array(totalPages)].map((_, index) => (
        <div key={index} className={`flex flex-col ${index + 1 === currentPage ? 'text-white' : ''} rounded-xl w-[60px]`}>
          <div className={`px-1.5 ${index + 1 === currentPage ? 'bg-yellow-600' : 'bg-orange-50'} rounded-xl h-[60px] w-[60px] max-md:px-5`}>
            {index + 1}
          </div>
        </div>
      ))}
      <div className="flex flex-col font-light rounded-xl w-[98px]">
        <button className="px-2.5 py-4 bg-orange-50 rounded-xl max-md:px-5">Next</button>
      </div>
    </nav>
  );
};

export default Pagination;