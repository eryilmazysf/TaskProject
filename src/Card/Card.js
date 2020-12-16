import React, { useEffect, useState, createContext } from "react";
import axios from "axios";
import { CardList } from "../CardDisplay/CardDisplay";
import { Search } from "../SearchBox/Search";
import { SearchTag } from "../SearchBox/SearchTag";
import { Table, Body, TR, Head } from "../CardDisplay/CardDisplay.style";

// pull data from url
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
      <Table>
        <Head>
          <TR>
            <Search />
            <SearchTag />
          </TR>
        </Head>
        <Body>
          {items?.map((item, index) => {
            return (
              <TR>
                <CardList
                  key={index}
                  item={item}
                  searchTag={searchTag}
                  searchKeyword={searchKeyword}
                />
              </TR>
            );
          })}
        </Body>
      </Table>
    </StudentContext.Provider>
  );
}
