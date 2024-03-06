import React from 'react';
import styled from "styled-components";

let StyledFilterButton = styled.button`
    max-width: 150px;
    height: 28px;
    border: none;
    border-radius: 5px;
    padding: 5px;
    background-color: greenyellow;
`
const FilterButton = ({name, index, items, task, setPage,setLoading}) => {
    return (
        <div>
            <StyledFilterButton
                onClick={() => {
                    setLoading(true)
                    setPage(1)
                    task(items)
                }}
                name={name} id={index}>
                {items}
            </StyledFilterButton>
        </div>
    );
};

export default FilterButton;