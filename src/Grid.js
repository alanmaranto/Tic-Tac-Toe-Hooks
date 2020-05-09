import React, { useState } from "react";
import Square from "./Square";
import checkIfMatch from "./helpers/validate";

const Grid = () => {
  const [turn, setTurn] = useState("X");
  const [winner, setWinner] = useState("");
  const [gridValue, setGridValue] = useState([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]);

  const updateGrid = (first, second, value) => {
    if (winner) {
      return;
    }
    const newGrid = [...gridValue];
    newGrid[first][second] = value;
    setGridValue(newGrid);

    // Check the result
    const result = checkIfMatch(newGrid);

    console.log(result);

    if (result.match === true) {
      //Set a winner and stop the game
      setWinner(result.char);
    }

    // Update turn
    turn === "X" ? setTurn("O") : setTurn("X");
  };

  const resetGrid = () => {
    setWinner("");
    setGridValue([
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ]);
    setTurn('X')
  };

  return (
    <div>
      <h1>{turn}'s Turn</h1>
      <div onClick={() => resetGrid()}>Reset</div>
      <div className="center">
        <div className="outer">
          <div style={{ display: "flex" }}>
            {gridValue[0].map((singleValue, index) => {
              return (
                <Square
                  updateGrid={updateGrid}
                  first={0}
                  second={index}
                  value={singleValue}
                  turn={turn}
                />
              );
            })}
          </div>
          <div style={{ display: "flex" }}>
            {gridValue[1].map((singleValue, index) => {
              return (
                <Square
                  updateGrid={updateGrid}
                  first={1}
                  second={index}
                  value={singleValue}
                  turn={turn}
                />
              );
            })}
          </div>
          <div style={{ display: "flex" }}>
            {gridValue[2].map((singleValue, index) => {
              return (
                <Square
                  updateGrid={updateGrid}
                  first={2}
                  second={index}
                  value={singleValue}
                  turn={turn}
                />
              );
            })}
          </div>
        </div>
      </div>
      {winner !== "" && <h4>The winner is {winner}</h4>}
    </div>
  );
};

export default Grid;
