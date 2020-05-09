import React, { useState } from "react";
import Square from "./Square";

const Grid = () => {
  const [gridValue, setGridValue] = useState([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]);

  const updateGrid = (first, second, value) => {
    const newGrid = [...gridValue];
    newGrid[first][second] = value;
    setGridValue(newGrid)
  }
  return (
    <div>
      <h1>Title</h1>
      <div className="center">
        <div className="outer">
          <div style={{ display: "flex" }}>
            {gridValue[0].map((singleValue, index) => {
              return <Square updateGrid={updateGrid} first={0} second={index} value={singleValue} />;
            })}
          </div>
          <div style={{ display: "flex" }}>
            {gridValue[1].map((singleValue, index) => {
              return <Square updateGrid={updateGrid} first={1} second={index} value={singleValue} />;
            })}
          </div>
          <div style={{ display: "flex" }}>
            {gridValue[2].map((singleValue, index) => {
              return <Square updateGrid={updateGrid} first={2} second={index} value={singleValue} />;
            })}
          </div>
        </div>
      </div>
      <h4>Result</h4>
    </div>
  );
};

export default Grid;
