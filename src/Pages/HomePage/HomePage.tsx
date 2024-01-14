import * as React from "react";
import Accordion from "./Components/Accordion";
import { celebList } from "./utils/celebrityList";

const HomePage = () => {
  return (
    <div>
      <h1>Factwise</h1>
      {celebList.map((celebDetails) => (
        <Accordion details={celebDetails} />
      ))}
    </div>
  );
};

export default HomePage;
