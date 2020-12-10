import React, { useRef, useContext } from "react";
import { StudentContext } from "../Card/Card";
import { SearchWrapper, SearchInput } from "./Search.style";

export const SearchTag = () => {
  const inputRef = useRef();
  const { setSearchTag } = useContext(StudentContext);
  return (
    <SearchWrapper>
      <SearchInput
        ref={inputRef}
        placeholder={"search by tag name"}
        onChange={() => setSearchTag(inputRef?.current.value)}
      />
    </SearchWrapper>
  );
};
