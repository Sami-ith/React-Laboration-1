import React from "react";
import { useState } from "react";
import './Question.css'

function Question(props) {
    const [isActive,setisActtive]=useState(false)
     let allAnswer = [];
   
    
    function checkAnswer(userAnswer) {
      setisActtive(true)
      props.onChange(userAnswer)
    }
  
   props.answers.push(props.correct_answer)
   allAnswer = [...new Set(props.answers)];
    
    return allAnswer.map((a,index) => (
      <div className="Question">
        <label>
          <input 
            key={index}
            type="radio"
            value={a}
            name="userAnswer"
            disabled={isActive}
            onChange={(event) => {
              checkAnswer(event.target.value);
            }}
          />

          {a}
        </label>
      </div>
    ));
        
}

export default Question;
