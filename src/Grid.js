import React, { useState } from "react";
import Square from "./Square";

const Grid = () => {
  const [gridValue, setGridValue] = useState([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]);
  return (
    <div>
      <h1>Title</h1>
      <div style={{ display: "flex" }}></div>
      {gridValue[0].map((block) => {
        return <Square />;
      })}
            <div style={{ display: "flex" }}></div>
      {gridValue[1].map((block) => {
        return <Square />;
      })}
            <div style={{ display: "flex" }}></div>
      {gridValue[2].map((block) => {
        return <Square />;
      })}
      <h4>Result</h4>
    </div>
  );
};

export default Grid;
