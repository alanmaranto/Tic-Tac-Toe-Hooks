import React from "react";

const Square = ({ updateGrid, first, second, value }) => {
  return (
    <div className="block" onClick={() => updateGrid(first, second, 'X')}>
      {value}
    </div>
  );
};

export default Square;
