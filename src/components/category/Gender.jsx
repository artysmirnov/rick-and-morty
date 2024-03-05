import React from 'react';
import FilterButton from "../FilterButton";

import styled from "styled-components";

const StyledGender = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: row;
    gap: 10px;
    max-width: 100%;
`

const Gender = ({setPage,setGender}) => {
    let genders = ['female', 'male', 'genderless', 'unknown']
    return (
        <StyledGender>
            Gender
            {genders.map((items,index)=>(
                <FilterButton setPage={setPage} task={setGender} key={index} index={index} items={items}/>
            ))}
        </StyledGender>
    );
};

export default Gender;