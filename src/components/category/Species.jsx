import React from 'react';
import FilterButton from "../FilterButton";
import styled from "styled-components";


const StyledSpecies = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: row;
    gap: 10px;
    max-width: 100%;
`
const Species = ({setPage,setSpecies}) => {
    let species = [
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
    ];

    return (
        <StyledSpecies>
            Species
            {species.map((items,index)=>(
                <FilterButton setPage={setPage} task={setSpecies} key={index} index={index} items={items}/>
            ))}
        </StyledSpecies>
    );
};

export default Species;