import React from "react";
import Square from "./Square";

const Board = ({ squares, handleBoxClick }) => {
  return (
    <div className="board">
      {squares.map((value, index) => (
        <Square
          key={index}
          value={value}
          onClick={() => handleBoxClick(index)}
        />
      ))}
    </div>
  );
};

export default Board;
