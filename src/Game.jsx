import React, { useState, useEffect, useRef } from "react";
import Board from "./Board";
import ResultBox from "./ResultBox";
import Home from "./Home";

const Game = () => {
  const [squares, setSquares] = useState([]);
  const [winner, setWinner] = useState(null);
  const [playerX, setPlayerX] = useState(null);
  const [playerO, setPlayerO] = useState(null);
  const [boardSize, setBoardSize] = useState(null);
  const [currentPlayer, setCurrentPlayer] = useState("X");

  useEffect(() => {
    checkWinner();
  }, [squares]);

  const handleBoxClick = (index) => {
    if (squares[index] || winner) return;

    const newSquares = [...squares];
    newSquares[index] = currentPlayer;
    setSquares(newSquares);
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  };

  // const checkWinner = () => {
  //   const winningConditions = [
  //     [0, 1, 2],
  //     [3, 4, 5],
  //     [6, 7, 8],
  //     [0, 3, 6],
  //     [1, 4, 7],
  //     [2, 5, 8],
  //     [0, 4, 8],
  //     [2, 4, 6],
  //   ];

  //   for (const condition of winningConditions) {
  //     const [a, b, c] = condition;
  //     if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
  //       setWinner(squares[a]);
  //       break;
  //     }
  //   }
  // };

  const checkWinner = () => {
    const winningConditions = [];

    // Rows and Columns
    for (let i = 0; i < boardSize; i++) {
      const row = [];
      const col = [];
      for (let j = 0; j < boardSize; j++) {
        row.push(i * boardSize + j);
        col.push(i + j * boardSize);
      }
      winningConditions.push(row);
      winningConditions.push(col);
    }

    // Diagonals
    const diagonal1 = [];
    const diagonal2 = [];
    for (let i = 0; i < boardSize; i++) {
      diagonal1.push(i * (boardSize + 1));
      diagonal2.push((i + 1) * (boardSize - 1));
    }
    winningConditions.push(diagonal1);
    winningConditions.push(diagonal2);

    for (const condition of winningConditions) {
      const isWinningSequence = condition.every(
        (index) =>
          squares[index] === squares[condition[0]] && squares[index] !== null
      );
      if (isWinningSequence) {
        setWinner(squares[condition[0]]);
        return;
      }
    }

    // If no winner and all squares are filled, it's a draw
    if (squares.every((square) => square !== null)) {
      setWinner("draw");
      return; // Return early for draw
    }
  };

  const handleReset = () => {
    setSquares(Array(boardSize * boardSize).fill(null));
    setWinner(null);
    setCurrentPlayer("X");
  };

  const handlePlayerSelection = (playerXName, playerOName, boardSize) => {
    setPlayerX(playerXName);
    setPlayerO(playerOName);
    setBoardSize(boardSize);
    setSquares(Array(boardSize * boardSize).fill(null));
  };

  const handleGoHome = () => {
    setPlayerX(null);
    setPlayerO(null);
    setBoardSize(null);
    setSquares([]);
    setWinner(null);
    setCurrentPlayer("X");
  };

  return (
    <div>
      {!playerX && <Home handlePlayerSelection={handlePlayerSelection} />}

      {playerO && playerX && (
        <>
          <h1>Let's start the game </h1>
          <p>
            {playerX} vs {playerO}
          </p>

          {playerX &&
            playerO &&
            winner !== "X" &&
            winner !== "O" &&
            winner !== "draw" && (
              <div>
                <p>Next Player: {currentPlayer === "X" ? playerX : playerO}</p>
              </div>
            )}
          <Board
            squares={squares}
            handleBoxClick={handleBoxClick}
            boardSize={boardSize}
          />
          {winner && (
            <ResultBox
              winner={winner}
              playerO={playerO}
              playerX={playerX}
              handleReset={handleReset}
              handleGoHome={handleGoHome}
            />
          )}
        </>
      )}
    </div>
  );
};

export default Game;
