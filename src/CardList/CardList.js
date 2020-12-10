import React, { useState } from "react";
import {
  StyledCardWrapper,
  StyledText,
  StyledImage,
  StyledHeader,
  StyledContent,
} from "./CardList.style";

export const CardList = ({ item }) => {
  const getAverage = (grades) => {
    let sum = 0;
    for (let i = 0; i < grades.length; i++) {
      sum += parseInt(grades[i]);
    }
    return sum / grades.length;
  };

  return (
    <StyledCardWrapper>
      <StyledImage src={item.pic} alt={"item poster"} />
      <StyledContent>
        <StyledHeader>
          {item.firstName} {item.lastName}
        </StyledHeader>
        <StyledText>Email:{item.email}</StyledText>
        <StyledText>Company:{item.company}</StyledText>
        <StyledText>Skill:{item.skill}</StyledText>
        <StyledText>Average:{getAverage(item.grades)}%</StyledText>
      </StyledContent>
    </StyledCardWrapper>
  );
};
