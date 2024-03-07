import React from 'react';
import styled from "styled-components";

const StyledSearch = styled.input`
    width: max-content;
    border-radius: 10px;
`

const SearchBar = ({searchIn, setSearch}) => {
    return (
        <div>
            <StyledSearch type="text" value={searchIn} onChange={e => setSearch(e.target.value)}/>
        </div>
    );
};

export default SearchBar;