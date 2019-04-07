import React, { Component } from "react";
import { MyMenu } from "./menu/menu";
import { LeftNav } from "./menu/leftNav";
import "semantic-ui-css/semantic.min.css";

const App = () => {
  return (
    <div className="App">
      <LeftNav />
      some other content
    </div>
  );
};

export default App;
