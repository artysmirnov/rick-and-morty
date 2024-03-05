import React from 'react';
import styled from "styled-components";

const StyledSearch = styled.input`
    width: max-content;
    border-radius: 10px;
`

const SearchBar = ({setSearchName, setSearchType}) => {
    return (
        <div>
            <StyledSearch type="text" onChange={e => {
                if (setSearchName) {
                    setSearchName(e.target.value)
                } else {
                    setSearchType(e.target.value)
                }
            }}/>
        </div>
    );
};

export default SearchBar;