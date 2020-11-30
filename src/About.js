import React from 'react'
import styled from "styled-components";

const Div = styled.div`
  border-radius: 1.4rem;
  border: 2px solid #edf2f4;
  margin-top: 0rem;
  color: white;
  font-size: default;
  background: rgba(43, 45, 66, 0.9);
  padding: 2rem;
`;
function About() {
   
    return (
      <Div>
        <div>
          <img
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"
            alt=""
            height="50rem"
          ></img>
        </div>
        <div>
          This is a Single web application in React that fetches questions from
          API and use Router, UseState, UseEffect, Styled and Functional Component.
        </div>
      </Div>
    );
        
    
}
export default About