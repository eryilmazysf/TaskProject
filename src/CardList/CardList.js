import React, { useState, useRef } from "react";

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
} from "./CardList.style";

export const CardList = ({ item, searchTag }) => {
  const [view, setView] = useState(false);
  const [tag, setTag] = useState([]);

  //const [alltag, setAllTag] = useState([]);

  const tagRef = useRef();

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

  if (tag.length > 0) {
    const x = tag?.filter((name) => name?.includes(searchTag));
    if (x.length > 0) {
      console.log(x);
    }
  }
  //if (!tag.includes(searchTag) && searchTag !== "") return <></>;
  return (
    <StyledCardWrapper>
      <StyledImage src={item.pic} alt={"item poster"} />
      <StyledContent>
        <StyledHeader>
          <div style={{ marginRight: 10 }}>{item.firstName}</div>
          <div>{item.lastName}</div>
        </StyledHeader>
        <StyledText>Email:{item.email}</StyledText>
        <StyledText>Company:{item.company}</StyledText>
        <StyledText>Skill:{item.skill}</StyledText>
        <StyledText>Average:{getAverage(item.grades)}%</StyledText>

        <StyledGrade>
          {view &&
            item.grades.map((x, i) => (
              <p key={i}>
                Test {i} :{x}
              </p>
            ))}
        </StyledGrade>
        <StyledFilterTag>
          {tag.map((t, i) => (
            <label
              style={{
                backgroundColor: "gray",
                margin: 5,
                padding: 5,
                borderRadius: 3,
              }}
              key={i}
            >
              {t}
            </label>
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
};
