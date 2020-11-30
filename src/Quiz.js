import React from "react";
import Question from "./Question";
import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

const Div = styled.div`
  border-radius: 1.4rem;
  border: 2px solid #edf2f4;
  margin-top: 0rem;
  color: white;
  font-size: default;
  background: rgba(43, 45, 66, 0.9);
  text-align: left;
  margin: auto;
  padding: 2rem;
  padding-left: 2rem;
  padding-bottom: 1rem;
  text-align: left;
  width: 70%;
`;
  const Span = styled.span`
    height: 3rem;
    color: rgb(83, 239, 248);
    font-size: 2rem;
    font-family: "Nerko One", cursive;
    align-items: center;
  `;

const Button = styled.button`
  border-bottom: 25px solid transparent;
  margin-right: 0%;
  font-family: "Nerko One", cursive;
  color: black;
  background: rgb(83, 239, 248);
  border: none;
  border-radius: 15px;
  width: 50%;
  height: 4rem; /* Button height Size */
  display: block;
  margin: 0 auto;
  margin-top: 3rem;
  font-size: 2rem;
`;

function Quiz() {
  const [questions, setQuestions] = useState(null);
  const [qNumber, setqNumber] = useState(0);
  const [score, setScore] = useState(0);

  function nextQuestion() {
    if (qNumber < 10) setqNumber(qNumber + 1);
  }
  function handleChange(newValue) {
    if (questions[qNumber].correct_answer === newValue) {
      setScore(score + 1);
    }
  }
  useEffect(() => {
    axios({
      method: "GET",
      url:
        "https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple",
    }).then((res) => {
      setQuestions(res.data.results)
    });
  },[])

  return (
    questions && (
      <Div>
        {qNumber < 10 ? (
          <span>
            <label>
              <Span>{qNumber + 1}</Span>
              
              {questions[qNumber].question}
              <hr></hr>
              <Question 
                key={questions[qNumber].question}
                answers={questions[qNumber].incorrect_answers}
                correct_answer={questions[qNumber].correct_answer}
                onChange={handleChange}
              />
            </label>
          </span>
        ) : null}

        {qNumber < 10 ? (
          <span>
            <Button value="Next" onClick={nextQuestion}>
              Next
            </Button>
          </span>
        ) : (
          <label>Your Score:{score}</label>
        )}
      </Div>
    )
  );
}
export default Quiz;
