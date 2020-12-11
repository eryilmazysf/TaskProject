import styled from "styled-components";

export const StyledCardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 1.5rem;
  border-bottom: 1px solid #9e9e9e;
  width: 100%;
  position: relative;
`;

export const StyledContent = styled.div`
  margin: auto;
  text-align: center;
`;

export const StyledText = styled.p`
  color: #757575;
  font-size: 1.5vh;
  font-weight: bold;
  margin: 15px;
  font-family: "Raleway", sans-serif;
  @media (max-width: 880px) {
    font-size: 1vh;
  }
`;
export const StyledHeader = styled.h1`
  color: black;
  display: flex;
  font-size: 2vh;
  font-weight: bold;
  margin: 15px;
  text-transform: uppercase;
  @media (max-width: 880px) {
    display: inline-block;
    font-size: 1.25vh;
  }
`;

export const StyledImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 1px solid #bdbdbd;
  align-self: center;
  margin: 0.5rem;
  position: absolute;
  top: 1px;
  @media (max-width: 880px) {
    width: 50px;
    height: 50px;
  }
`;
export const StyledButton = styled.button`
  background: none;
  border: none;
  position: absolute;
  float: right;
  right: 1px;
  top: 1px;
  color: #9e9e9e;
  font-size: 4vh;
  outline: none;
`;
export const StyledToggle = styled.div``;
export const StyledGrade = styled.div`
  color: #757575;
  @media (max-width: 880px) {
    font-size: 1vh;
  }
`;
export const StyledInputTag = styled.input`
  border: none;
  outline: none;
  padding: 0.5rem;
  font-size: 1.25vh;
  font-family: "Raleway", sans-serif;
  border-bottom: 1px solid gray;
  margin: 1rem;
`;
export const StyledFilterTag = styled.div`
  @media (max-width: 880px) {
    font-size: 1vh;
  }
`;
