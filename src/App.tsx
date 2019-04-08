import React, { Component } from "react";
import { LeftNav } from "./menu/leftNav";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Router>
        <LeftNav />
      </Router>
    </div>
  );
};

export default App;
