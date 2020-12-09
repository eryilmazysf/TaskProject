import React, { useEffect, useState, createContext } from "react";
import axios from "axios";
import { CardList } from "../CardList/CardList";
import { Search } from "../SearchBox/Search";

//api
const url = "https://api.hatchways.io/assessment/students";

//context
export const StudentContext = createContext();

export default function Card() {
  const [items, setItems] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");

  useEffect(() => {
    axios
      .get(url)
      .then((res) => setItems(res.data.students))
      .catch((err) => console.log(err));
  }, [searchKeyword]);

  return (
    <div>
      <StudentContext.Provider value={{ setSearchKeyword }}>
        <Search />
        {items?.map((item, index) => {
          return <CardList key={index} item={item} />;
        })}
      </StudentContext.Provider>
    </div>
  );
}
