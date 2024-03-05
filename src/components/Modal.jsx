import React from 'react';
import styled from "styled-components";
import character from "./Character";
import {type} from "@testing-library/user-event/dist/type";

const ModalWindow = styled.div`
    height: 100%;
    width: 100%;
    position: fixed;
    background-color: rgba(0,0,0,40%);
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;`

const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content:space-between ;
    flex-wrap: wrap;
    padding: 5px;
    border-radius: 12px;
    background-color: wheat`

const Modal = ({setActive, active, currentCharacter}) => {
    return (<div>
            {
                active ? <ModalWindow onClick={() => setActive(false)}>
                        <ModalContent onClick={e => e.stopPropagation()}>
                            <p>Name: {currentCharacter.name}</p>
                            <p>Status: {currentCharacter.species}</p>
                            <p>Type: {currentCharacter.type ? currentCharacter.type : "unknown"}</p>
                            <p>Species: {currentCharacter.species}</p>
                            <p>Gender: {currentCharacter.gender}</p>
                            <p>Origin: {currentCharacter.origin && currentCharacter.origin.name}</p>
                            <p>Location: {currentCharacter.location && currentCharacter.location.name}</p>
                            <img src={currentCharacter.image} alt={character.name} width='200'/>

                        </ModalContent>
                    </ModalWindow>
                    : <div></div>
            }
        </div>
    );
};

export default Modal;