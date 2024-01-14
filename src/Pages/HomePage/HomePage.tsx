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
  return (
    <div style={{ width: "fit-content", margin: "auto" }}>
      <h4>List View</h4>
      <Search placeholder="Search User" />
      <List>
        {celebList.map((celebDetails) => (
          <Accordion key={celebDetails.id} details={celebDetails} />
        ))}
      </List>
    </div>
  );
};

export default HomePage;
