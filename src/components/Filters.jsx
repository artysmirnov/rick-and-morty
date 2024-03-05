import React from 'react';
import Gender from "./category/Gender";
import Status from "./category/Status";
import Species from "./category/Species";
import styled from "styled-components";

const FiltersStyled=styled.div`
display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
`
const StyledFilter=styled.div`
    display: flex;
    flex-direction: column;
gap: 10px;
`

let StyledButton=styled.button`
width: 72px;
    height: 40px;
    background-color: lawngreen;
    border:none;
    border-radius: 10px;
    
    :hover{
        background-color: green;
    }
`

const Filters = ({setStatus, setGender, setPage, setSpecies,setSearchName, setSearchType}) => {
    return (
        <FiltersStyled>
            <StyledButton onClick={() => {
                setPage(1)
                setStatus('')
                setGender('')
                setSpecies('')
                setSearchName('')
                setSearchType('')
            }}>Clear filters
            </StyledButton>
            <StyledFilter>
                <Gender setGender={setGender} setPage={setPage}/>
                <Status setPage={setPage} setStatus={setStatus}/>
                <Species setPage={setPage} setSpecies={setSpecies}/>
            </StyledFilter>
        </FiltersStyled>
    );
};

export default Filters;