import styled from "styled-components";

export const StyledCardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 1.5rem;
  border-bottom: 1px solid #9e9e9e;
  width: 100%;
  position: relative;
  @media (max-width: 880px) {
    display: block;
  }
`;

export const StyledContent = styled.div`
  margin: auto;
  text-align: left;
  width: 55%;
  font-size: 1.5vw;
  @media (max-width: 880px) {
    display: block;
    font-size: 1rem;
    width: 80%;
  }
`;

export const StyledText = styled.p`
  color: #757575;
  font-weight: bold;
  margin: 15px;
  font-family: "Raleway", sans-serif;
`;
export const StyledHeader = styled.h1`
  color: black;
  font-size: 2vw;
  font-weight: bold;

  text-transform: uppercase;
  @media (max-width: 880px) {
    font-size: 3vw;
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
    position: unset;
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
  font-size: 5vh;
  outline: none;
`;
export const StyledToggle = styled.div``;
export const StyledGrade = styled.div`
  color: #757575;
`;
export const StyledInputTag = styled.input`
  border: none;
  outline: none;
  padding: 0.5rem;
  font-size: 1vw;
  text-align: center;
  font-family: "Raleway", sans-serif;
  border-bottom: 1px solid gray;
  margin: 1rem;
  @media (max-width: 880px) {
    font-size: 3vw;
  }
`;
export const StyledFilterTag = styled.div`
  font-size: 3vw;
`;
