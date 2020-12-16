import React, { useRef, useContext } from "react";
import { StudentContext } from "../Card/Card";
import { SearchWrapperTag, SearchInput } from "./Search.style";

export const SearchTag = () => {
  const inputRef = useRef();
  const { setSearchTag } = useContext(StudentContext);
  return (
    <SearchWrapperTag>
      <SearchInput
        ref={inputRef}
        placeholder={"Search by tag"}
        onChange={() => setSearchTag(inputRef?.current.value)}
      />
    </SearchWrapperTag>
  );
};
