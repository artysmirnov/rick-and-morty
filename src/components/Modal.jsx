import React from "react";
import styled from "styled-components";
import character from "./Character";
import { TailSpin } from "react-loader-spinner";

const ModalWindow = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  background-color: rgba(0, 0, 0, 40%);
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  max-width: 100%;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 5px;
  border-radius: 20px;
  background-color: wheat;
`;

const CrossButton = styled.button`
  padding: 0;
  border: none;
  font: inherit;
  color: inherit;
  background-color: #abc;
  border-radius: 100%;
  cursor: pointer;
  width: 40px;
  height: 40px;
  align-items: center;
`;
const ModalImg = styled.img`
  max-width: 200px;
  border-radius: 20px;
  border-style: solid;
  border-color: whitesmoke;
  border-width: 4px;
`;

const Modal = ({ setActive, active, currentCharacter, setCharacter }) => {
  return (
    <div>
      {active ? (
        <ModalWindow
          onClick={() => {
            setActive(false);
            setCharacter("");
          }}
        >
          {currentCharacter.name ? (
            <ModalContent onClick={(e) => e.stopPropagation()}>
              <CrossButton
                onClick={() => {
                  setActive(false);
                  setCharacter("");
                }}
              >
                X
              </CrossButton>
              <p>Name: {currentCharacter.name}</p>
              <p>Status: {currentCharacter.species}</p>
              {currentCharacter.type ? (
                <p>
                  Type: {currentCharacter.type ? currentCharacter.type : <></>}
                </p>
              ) : (
                <></>
              )}
              <p>Species: {currentCharacter.species}</p>
              <p>Gender: {currentCharacter.gender}</p>

              <p>
                Origin:{" "}
                {currentCharacter.origin && currentCharacter.origin.name}
              </p>

              <p>
                Location:{" "}
                {currentCharacter.location && currentCharacter.location.name}
              </p>
              <ModalImg src={currentCharacter.image} alt={character.name} />
            </ModalContent>
          ) : (
            <TailSpin
              visible={true}
              height="80"
              width="80"
              color="blue"
              ariaLabel="tail-spin-loading"
              radius="1"
              wrapperStyle={{}}
              wrapperClass=""
            />
          )}
        </ModalWindow>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Modal;
