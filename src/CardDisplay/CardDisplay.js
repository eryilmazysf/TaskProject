import React, { useState, useRef, Fragment } from "react";

import {
  StyledCardWrapper,
  StyledText,
  StyledImage,
  StyledHeader,
  StyledContent,
  StyledButton,
  StyledToggle,
  StyledGrade,
  StyledInputTag,
  StyledFilterTag,
  StyledTag,
  StyledGradeText,
} from "./CardDisplay.style";

export const CardList = ({ item, searchTag, searchKeyword }) => {
  const [view, setView] = useState(false); // toggle for grade
  const [tag, setTag] = useState([]); //storage for tag

  const tagRef = useRef();

  // calculate grade each students
  const getAverage = (grades) => {
    let sum = 0;
    for (let i = 0; i < grades.length; i++) {
      sum += parseInt(grades[i]);
    }
    return sum / grades.length;
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setTag([...tag, tagRef?.current?.value]);
      tagRef.current.value = "";
    }
  };
  // display all items in window
  const window = (
    <StyledCardWrapper>
      <StyledImage src={item.pic} alt={"item poster"} />
      <StyledContent>
        <StyledHeader>
          {item.firstName} {} {item.lastName}
        </StyledHeader>
        <StyledText>Email:{item.email}</StyledText>
        <StyledText>Company:{item.company}</StyledText>
        <StyledText>Skill:{item.skill}</StyledText>
        <StyledText>Average:{getAverage(item.grades)}%</StyledText>

        <StyledGrade>
          {view &&
            item.grades.map((x, i) => (
              <StyledGradeText key={i}>
                Test {i + 1} : &nbsp; &nbsp; &nbsp; {x}%
              </StyledGradeText>
            ))}
        </StyledGrade>
        <StyledFilterTag>
          {tag.map((t, i) => (
            <StyledTag key={i}>{t}</StyledTag>
          ))}
        </StyledFilterTag>
        <StyledInputTag
          ref={tagRef}
          placeholder="Add a tag"
          onKeyDown={handleKeyDown}
        />
      </StyledContent>
      <StyledToggle>
        {view ? (
          <StyledButton onClick={() => setView(false)}>-</StyledButton>
        ) : (
          <StyledButton onClick={() => setView(true)}>+</StyledButton>
        )}
      </StyledToggle>
    </StyledCardWrapper>
  );
  // Filter by firstName or lastName
  const FilterData = () => {
    if (searchKeyword === "") {
      return window;
    } else if (
      item.firstName.toLowerCase().includes(searchKeyword.toLowerCase()) ||
      item.lastName.toLowerCase().includes(searchKeyword.toLowerCase())
    ) {
      return window;
    } else return <Fragment></Fragment>;
  };
  //Filter by Tag
  if (searchTag) {
    const x = tag?.filter((name) => name.includes(searchTag));

    if (x.length > 0) {
      FilterData();
    } else return <Fragment></Fragment>;
  }
  return FilterData();
};
