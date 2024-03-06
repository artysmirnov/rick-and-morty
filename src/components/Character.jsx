import styled from "styled-components";
import {TailSpin} from "react-loader-spinner";

const Heading = styled.h3`
    max-width: 250px;
    word-break: normal;
    color: whitesmoke;
    cursor: pointer;`

const StyledCharacter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 260px;
    max-width: 100%;
    background-color: rgb(60, 62, 68);
    border-radius: 20px;
    border-color: wheat;
    padding: 10px;
`
const StyledText = styled.p`
    color: whitesmoke`

const StyledImg = styled.img`
    border-radius: 10px;
    max-width: 250px;
    max-height: 250px;
    min-height: 140px;
    min-width: 140px;
`

function Character({character, setActive, setCharacter}) {
    return (
        <StyledCharacter>
            <Heading onClick={() => {
                setCharacter(character.id)
                setActive(true)
            }}>{character.name}</Heading>
            {character.image ? <StyledImg src={character.image} alt={character.name}/> : (
                <TailSpin visible={true}
                          height="80"
                          width="80"
                          color="blue"
                          ariaLabel="tail-spin-loading"
                          radius="1"
                          wrapperStyle={{}}
                          wrapperClass=""/>
            )}

            <StyledText>Gender: {character.gender}</StyledText>
            <StyledText>Status: {character.status}</StyledText>
        </StyledCharacter>
    )
}

export default Character