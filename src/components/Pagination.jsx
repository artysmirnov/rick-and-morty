import React, { useEffect } from "react";
import styled from "styled-components";
import ReactPaginate from "react-paginate";

const Pagination = ({ setPage, pageNumber, info, setLoading }) => {
  return (
    <ReactPaginate
      forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
      className="Pagination"
      pageCount={info?.pages}
      breakLabel="..."
      nextLabel="next >"
      pageRangeDisplayed={3}
      pageClassName="paginationPage"
      previousLabel="< previous"
      nextClassName="paginateButtonClass"
      previousClassName="paginateButtonClass"
      renderOnZeroPageCount={null}
      onPageChange={(data) => {
        setLoading(true);
        setPage(data.selected + 1);
      }}
      activeClassName="paginationActive"
    />
  );
};

export default Pagination;
