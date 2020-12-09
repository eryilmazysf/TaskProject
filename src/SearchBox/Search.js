import React, { useRef, useContext } from "react";
import { StudentContext } from "../Card/Card";

export const Search = () => {
  const inputRef = useRef();
  const { setSearchKeyword } = useContext(StudentContext);
  return (
    <div>
      <input
        ref={inputRef}
        placeholder={"search..."}
        onChange={() => setSearchKeyword(inputRef?.current.value)}
      />
    </div>
  );
};
