import React from "react";
import styled from "styled-components";

const StyledPagination = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  padding-top: 5px;
`;

let PaginationButton = styled.button`
  width: 72px;
  height: 28px;
  background-color: lawngreen;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;

const Pagination = ({ setPage, pageNumber, info, setLoading }) => {
  let next = () => {
    if (info === undefined || pageNumber === info.pages) {
      return;
    }
    setLoading(true);
    setPage((x) => x + 1);
  };
  let prev = () => {
    if (pageNumber === 1) {
      return;
    }
    setLoading(true);
    setPage((x) => x - 1);
  };
  return (
    <StyledPagination>
      <PaginationButton onClick={prev}>Previous</PaginationButton>
      <p>{pageNumber}</p>
      <PaginationButton onClick={next}>Next</PaginationButton>
    </StyledPagination>
  );
};

export default Pagination;
