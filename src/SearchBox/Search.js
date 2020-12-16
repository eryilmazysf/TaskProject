import React, { useRef, useContext } from "react";
import { StudentContext } from "../Card/Card";
import { SearchWrapperName, SearchInput } from "./Search.style";

export const Search = () => {
  const inputRef = useRef();
  const { setSearchKeyword } = useContext(StudentContext);
  return (
    <SearchWrapperName>
      <SearchInput
        ref={inputRef}
        placeholder={"Search by name"}
        onChange={() => setSearchKeyword(inputRef?.current.value)}
      />
    </SearchWrapperName>
  );
};
