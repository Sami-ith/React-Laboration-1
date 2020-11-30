import React from "react";

import styled from "styled-components";
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./About";
import Home from "./Quiz"
import './App.css';

const Div = styled.div`
  
  ul {
    
    display: flex;
    list-style-type: none;
    padding: 0;
    overflow: hidden;
    border: 1px solid #e7e7e7;
    background: rgba(43, 45, 66, 0.9);
    font-family: "Nerko One", cursive;
    font-weight: bolder;
  }

  li {
    float: left;
    width: 50%;
    font-size: 2rem;
  }

  li a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }

  li a:hover:not(.active) {
    background-color: #ddd;
  }
`;

function App() {
  return (
    <Div>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/quiz">Start</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <header className="App">Quiz</header>
        <Switch>
          <Route exact path="/quiz">
            <Home />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </Router>
    </Div>
  );
  
}


export default App;

