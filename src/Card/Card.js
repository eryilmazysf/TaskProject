import React, { useEffect, useState, createContext } from "react";
import axios from "axios";
import { CardList } from "../CardList/CardList";
import { Search } from "../SearchBox/Search";
import { SearchTag } from "../SearchBox/SearchTag";

//api
const url = "https://api.hatchways.io/assessment/students";

//context
export const StudentContext = createContext();

export default function Card() {
  const [items, setItems] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchTag, setSearchTag] = useState("");

  const filterData = items?.filter((student) => {
    if (searchKeyword === "") {
      return student;
    } else if (
      student.firstName.toLowerCase().includes(searchKeyword.toLowerCase())
    ) {
      return student;
    } else if (
      student.lastName.toLowerCase().includes(searchKeyword.toLowerCase())
    ) {
      return student;
    }
  });

  useEffect(() => {
    //console.log(searchKeyword);
    axios
      .get(url)
      .then((res) => setItems(res.data.students))
      .catch((err) => console.log(err));
  }, [searchKeyword, searchTag]);

  return (
    <div>
      <StudentContext.Provider value={{ setSearchKeyword, setSearchTag }}>
        <Search />
        <SearchTag />
        {filterData?.map((item, index) => {
          return <CardList key={index} item={item} searchTag={searchTag} />;
        })}
      </StudentContext.Provider>
    </div>
  );
}
