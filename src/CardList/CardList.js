import React, { useState } from "react";
import {
  StyledCardWrapper,
  StyledText,
  StyledImage,
  StyledHeader,
  StyledContent,
} from "./CardList.style";

export const CardList = ({ item }) => {
  const getAverage = (x) => {
    let sum = 0;
    for (var i = 0; i < x.length; i++) {
      sum += parseInt(x[i]);
    }
    return sum / x.length;
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
