import React, { useRef, useContext } from "react";
import { StudentContext } from "../Card/Card";
import { SearchWrapper, SearchInput } from "./Search.style";

export const Search = () => {
  const inputRef = useRef();
  const { setSearchKeyword } = useContext(StudentContext);
  return (
    <SearchWrapper>
      <SearchInput
        ref={inputRef}
        placeholder={"search by name"}
        onChange={() => setSearchKeyword(inputRef?.current.value)}
      />
    </SearchWrapper>
  );
};
