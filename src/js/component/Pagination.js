import React from 'react'

const Pagination = ( {postsPerPage, totalPosts, paginate} ) => {
  const pageNumbers = [];

  // Need to do this so we have it in array form to map over later
  for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <div className="pagination-title">Paginator</div>
      <ul className="pagination">
        {pageNumbers.map(number => (
          <li key={number} className="page-item">
            <a onClick={() => paginate(number)} className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Pagination;
