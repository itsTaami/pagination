import React from "react";

const Pagination = ({ postsPerPage, totalPosts, paginate,currentPage,indexOfFirstPost,setCurrentPage,indexOfLastPost }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const prePage = ()=>{
    if (currentPage !== indexOfFirstPost) {
      setCurrentPage(currentPage - 1)
      
    }

  }
 const nePage = ()=>{
  if (currentPage !== indexOfLastPost) {
    setCurrentPage(currentPage + 1)
    
  }
    
  }
  return (
    <nav>
      <ul className="pagination">
        <li className="page-item">
          <a onClick={() => prePage()} href="!#" className="page-link">
            Prev
          </a>
        </li>

        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a onClick={() => paginate(number)} href="!#" className="page-link">
              {number}
            </a>
          </li>
        ))}
         <li className="page-item">
          <a onClick={() => nePage()} href="#" className="page-link">
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
