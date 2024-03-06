import React from 'react';
import styled from "styled-components";
import Category from "./Category";

const FiltersStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
`
const StyledFilter = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`

let StyledButton = styled.button`
    width: 72px;
    height: 40px;
    background-color: lawngreen;
    border: none;
    border-radius: 10px;
    cursor: pointer;
`

const Filters = ({setStatus, setGender, setPage, setSpecies, setSearchName, setSearchType, setLoading}) => {
    return (
        <FiltersStyled>
            <StyledButton onClick={() => {
                setPage(1)
                setStatus('')
                setGender('')
                setSpecies('')
                setSearchName('')
                setSearchType('')
                setLoading(true)
            }}>Clear filters
            </StyledButton>
            <StyledFilter>
                <Category setCategory={setGender} categoryName={'Gender'}
                          elements={['female', 'male', 'genderless', 'unknown']}
                          setPage={setPage} setLoading={setLoading}/>
                <Category categoryName={'Status'} elements={['Alive', 'Dead', 'Unknown']} setPage={setPage}
                          setCategory={setStatus} setLoading={setLoading}/>
                <Category categoryName={'Species'} elements={[
                    "Human",
                    "Alien",
                    "Humanoid",
                    "Poopybutthole",
                    "Mythological",
                    "Unknown",
                    "Animal",
                    "Disease",
                    "Robot",
                    "Cronenberg",
                ]} setPage={setPage} setCategory={setSpecies} setLoading={setLoading}/>
            </StyledFilter>
        </FiltersStyled>
    );
};

export default Filters;