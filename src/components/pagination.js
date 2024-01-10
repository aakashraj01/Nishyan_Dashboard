import React from 'react';
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const Pagination = () => {
  const pageNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

  return (
    <div className="flex items-center justify-center space-x-1">
      <a href="#" className="px-2 py-1 text-gray-700 hover:bg-gray-50 rounded-md border border-gray-300 flex items-center">
        <MdChevronLeft />
        <span className="sr-only">Previous</span>
        {'Previous'}
      </a>

      {pageNumbers.map((number, index) =>
        number === 1 || number === pageNumbers.length || index === 10 ? (
          <a
            key={number}
            href="#"
            className={`px-2 py-1 text-gray-700 hover:bg-gray-50 rounded-md ${index === 10 ? 'bg-blue-500 text-white' : ''}`}
          >
            {number}
          </a>
        ) : index === 1 || index === pageNumbers.length - 2 ? (
          <span key={number} className="px-2 py-1 text-gray-500">
            ...
          </span>
        ) : (
          <a
            key={number}
            href="#"
            className="hidden md:inline-block px-2 py-1 text-gray-700 hover:bg-gray-50 rounded-md"
          >
            {number}
          </a>
        )
      )}

      <a href="#" className="px-2 py-1 text-gray-700 hover:bg-gray-50 rounded-md border border-gray-300 flex items-center">
        {'Next'}
        <MdChevronRight />
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default Pagination;
