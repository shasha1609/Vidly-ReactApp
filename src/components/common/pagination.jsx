import React from "react";
import _ from "lodash";
import propTypes from "prop-types";

const Pagination = (props) => {
  const { itemsCount, pageSize, currentPage, onPageChange } = props;
  console.log(currentPage);
  const pagesCount = Math.ceil(itemsCount / pageSize);
  //[1... pages count].map()

  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);
  //console.log(pages);
  return (
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        {pages.map((page) => (
          <li
            key={page}
            className={page === currentPage ? "page-item active" : "page-item"}
          >
            <a onClick={() => onPageChange(page)} class="page-link">
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
Pagination.propTypes = {
  itemsCount: propTypes.number.isRequired,
  pageSize: propTypes.number.isRequired,
  currentPage: propTypes.number.isRequired,
  onPageChange: propTypes.func.isRequired,
};
export default Pagination;
