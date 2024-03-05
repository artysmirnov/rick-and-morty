import React from 'react';
import FilterButton from "../FilterButton";
import styled from "styled-components";

const StyledStatus = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: row;
    gap: 10px;
`
const Status = ({setPage, setStatus}) => {
    let status = ['Alive', 'Dead', 'Unknown']
    return (
        <StyledStatus>
            Status
            {status.map((items, index) => (
                <FilterButton
                    setPage={setPage}
                    task={setStatus}
                    key={index}
                    index={index}
                    items={items}/>
            ))}

        </StyledStatus>
    );
};

export default Status;