import React from 'react';
import FilterButton from "./FilterButton";

import styled from "styled-components";

const StyledCategory = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: row;
    gap: 10px;
    max-width: 100%;;
`

const Gender = ({setPage,setCategory, elements, categoryName,setLoading}) => {
    return (
        <StyledCategory>
            {categoryName}
            {elements.map((items,index)=>(
                <FilterButton setLoading={setLoading} setPage={setPage} task={setCategory} key={index} index={index} items={items}/>
            ))}
        </StyledCategory>
    );
};

export default Gender;