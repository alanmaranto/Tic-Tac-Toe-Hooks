import React from "react";

const Square = ({ updateGrid, first, second, value, turn }) => {
  return (
    <div className="block" onClick={() => updateGrid(first, second, turn)}>
      {value === 0 ? '' : value }
    </div>
  );
};

export default Square;
