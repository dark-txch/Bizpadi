import React from "react"
import "./Pagination.css"

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="pagination-buttons">
      <button
        onClick={() => onPageChange(1)} // Go to first page
        disabled={currentPage === 1}
      >
        First
      </button>

      <button
        onClick={() => onPageChange(prev => Math.max(prev - 1, 1))} // Go to previous page
        disabled={currentPage === 1}
      >
        Prev
      </button>

      <span>
        Page {currentPage} of {totalPages}
      </span>

      <button
        onClick={() => onPageChange(prev => Math.min(prev + 1, totalPages))} // Go to next page
        disabled={currentPage === totalPages}
      >
        Next
      </button>

      <button
        onClick={() => onPageChange(totalPages)} // Go to last page
        disabled={currentPage === totalPages}
      >
        Last
      </button>
    </div>
  )
}

export default Pagination
