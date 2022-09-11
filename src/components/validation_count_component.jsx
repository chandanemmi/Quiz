import React, { Component } from "react";

function ValidationCountComponent(props) {
  console.log(props.count);
  return (
    <div className="row" style={rowStyle}>
      <div className="col-8" style={col8Style}>
        {props.name}
      </div>
      <div className="col-4 text-center" style={col4Style}>
        {props.count}
      </div>
    </div>
  );
}

const rowStyle = {
  borderStyle: "solid",
  borderWidth: "1px",
  borderColor: "#007bff",
  marginLeft: "5px",
  marginRight: "5px",
};

const col4Style = {
  backgroundColor: "#007bff",
  color: "white",
  fontWeight: "500",
  paddingTop: "10px",
  paddingBottom: "10px",
};

const col8Style = {
  fontWeight: "500",
  paddingTop: "10px",
  paddingBottom: "10px",
};

export default ValidationCountComponent;
