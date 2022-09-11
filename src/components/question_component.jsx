import React from "react";

function QuestionComponent(props) {
  return (
    <div style={{ fontSize: "40px" }}>
      {props.question_1} {props.operator} {props.question_2} = ?
    </div>
  );
}

export default QuestionComponent;
