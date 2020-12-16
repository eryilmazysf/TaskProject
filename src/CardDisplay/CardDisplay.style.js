import styled from "styled-components";

export const StyledCardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
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
    width: 90%;
    text-align: center;
  }
`;

export const StyledText = styled.p`
  color: black;
  font-weight: bold;
  margin: 5px;
  margin-left: 1rem;
  font-family: "Raleway", sans-serif;
`;
export const StyledHeader = styled.h1`
  color: black;
  font-size: 2vw;
  font-weight: bold;
  margin-left: 0.5rem;

  text-transform: uppercase;
  @media (max-width: 880px) {
    font-size: 3vw;
    text-align: center;
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
export const StyledGradeText = styled.p``;

export const StyledButton = styled.button`
  background: none;
  border: none;
  position: absolute;
  float: right;
  right: 1px;
  top: 1px;
  color: #9e9e9e;
  font-size: 5vw;
  outline: none;
  :hover {
    color: black;
  }
`;
export const StyledToggle = styled.div``;
export const StyledGrade = styled.div`
  color: #757575;
  margin-left: 1rem;
  line-height: 1.5px;
  margin-top: 3rem;
`;
export const StyledInputTag = styled.input`
  border: none;
  outline: none;
  padding: 0.5rem;
  font-size: 1.5vw;
  font-family: "Raleway", sans-serif;
  border-bottom: 1px solid gray;
  margin: 1rem;
  background: none;
  :focus {
    border-bottom: 2px solid black;
  }
  @media (max-width: 880px) {
    font-size: 2.5vw;
  }
`;
export const StyledFilterTag = styled.div`
  font-size: 2vw;
`;
export const StyledTag = styled.label`
  background-color: #e0e0e0;
  margin: 5px;
  padding: 5px;
  border-radius: 3px;
`;

export const Table = styled.table`
  border-radius: 10px;
  margin-top: 15%;
  width: 100%;
  table-layout: fixed;
  border-collapse: collapse;
  background-color: white;
`;
export const Body = styled.tbody`
  display: block;
  overflow: auto;
  height: 750px;
  ::-webkit-scrollbar {
    display: none;
  }
`;
export const TR = styled.tr`
  display: block;
`;
export const Head = styled.thead`
  color: #fff;
`;
