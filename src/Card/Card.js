import React, { useEffect, useState, createContext } from "react";
import axios from "axios";
import { CardList } from "../CardDisplay/CardDisplay";
import { Search } from "../SearchBox/Search";
import { SearchTag } from "../SearchBox/SearchTag";

//api
const url = "https://api.hatchways.io/assessment/students";

export const StudentContext = createContext();

export default function Card() {
  const [items, setItems] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchTag, setSearchTag] = useState("");

  useEffect(() => {
    axios
      .get(url)
      .then((res) => setItems(res.data.students))
      .catch((err) => console.log(err));
  }, []);

  return (
    <StudentContext.Provider value={{ setSearchKeyword, setSearchTag }}>
      <Search />
      <SearchTag />
      {items?.map((item, index) => {
        return (
          <CardList
            key={index}
            item={item}
            searchTag={searchTag}
            searchKeyword={searchKeyword}
          />
        );
      })}
    </StudentContext.Provider>
  );
}
