import * as React from "react";
import styled from "styled-components";
import Accordion from "./Components/Accordion";
import { celebList } from "./utils/celebrityList";

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 500px;
  overflow: scroll;
`;

const Search = styled.input`
  height: 30px;
  width: 400px;
  padding: 0px 15px;
  border-radius: 10px;
  border: 1px solid black;
  margin: 10px 0px;
`;
const HomePage = () => {
  const [list, setList] = React.useState([...celebList]);

  const onSearch = (value: string) => {
    const searchedList = celebList.filter((item) => {
      const word = item.first + " " + item.last;
      return word.toLocaleLowerCase().includes(value.toLocaleLowerCase());
    });
    setList(searchedList);

    if (!value.length) {
      setList([...celebList]);
    }
  };
  return (
    <div style={{ width: "fit-content", margin: "auto" }}>
      <h4>List View</h4>
      <Search
        onChange={(e) => onSearch(e.target.value)}
        placeholder="Search User"
      />
      <List>
        {list.map((celebDetails) => (
          <Accordion key={celebDetails.id} details={celebDetails} />
        ))}
      </List>
    </div>
  );
};

export default HomePage;
