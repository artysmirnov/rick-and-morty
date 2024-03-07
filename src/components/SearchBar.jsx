import React from "react";
import styled from "styled-components";

const StyledSearch = styled.input`
  width: max-content;
  border-radius: 10px;
`;

const SearchBar = ({ searchIn, setSearch, setLoading }) => {
  return (
    <div>
      <StyledSearch
        type="text"
        value={searchIn}
        onChange={(e) => {
          setLoading(true);
          setSearch(e.target.value);
        }}
      />
    </div>
  );
};

export default SearchBar;
