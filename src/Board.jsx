import React from "react";
import Square from "./Square";

const Board = ({ squares, handleBoxClick , boardSize }) => {
  return (
    <div className={`board-${boardSize}`}>
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
