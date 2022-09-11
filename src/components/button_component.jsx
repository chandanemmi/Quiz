import React, { Component } from "react";

function ButtonComponent(props) {
  return (
    <div>
      <button
        className="btn btn-primary"
        style={{ padding: "5px 28px", textAlign: "center" }}
        onClick={() => props.check_answer(props.answer)}
      >
        {props.answer}
      </button>
    </div>
  );
}

export default ButtonComponent;
