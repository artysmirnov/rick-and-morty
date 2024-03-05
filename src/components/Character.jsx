import styled from "styled-components";
import Status from "./category/Status";

const Heading = styled.h3`
    color:whitesmoke;
    cursor: pointer;`

const StyledCharacter=styled.div`
    background-color: rgb(60, 62, 68);
    border-radius: 10px;
    border-color: wheat;
    padding: 10px;
`
const StyledText = styled.p`
color:whitesmoke`

function Character({character, setActive,setCharacter}) {
    return (
        <StyledCharacter>
            <Heading onClick={() => {
                setCharacter(character.id)
                setActive(true)
            }}>{character.name}</Heading>
            <img src={character.image} alt={character.name} width='300'/>
            <StyledText>Gender: {character.gender}</StyledText>
            <StyledText>Status: {character.status}</StyledText>

        </StyledCharacter>
    )
}

export default Character