import React, { useState, useEffect } from 'react';
import Board from './Board';
import ResultBox from './ResultBox';
import Home from './Home';


const Game = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState(null);
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    checkWinner();
  }, [squares]);

  const handleBoxClick = (index) => {
    if (squares[index] || winner) return;

    const newSquares = [...squares];
    newSquares[index] = player;
    setSquares(newSquares);
    setPlayer(player === 'X' ? 'O' : 'X');
  };

  const checkWinner = () => {
    const winningConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const condition of winningConditions) {
      const [a, b, c] = condition;
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        setWinner(squares[a]);
        break;
      }
    }
  };

  const handleReset = () => {
    setSquares(Array(9).fill(null));
    setPlayer(null);
    setWinner(null);
  };

  const handlePlayerSelection = (selectedPlayer) => {
    setPlayer(selectedPlayer);
  };

  return (
    <div>
      {!player ? (
        <Home handlePlayerSelection={handlePlayerSelection} />
      ) : (
        <div>
          <h1>Let's start the game </h1>
          <Board squares={squares} handleBoxClick={handleBoxClick} />
          {winner && <ResultBox winner={winner} handleReset={handleReset} />}
        </div>
      )}
    </div>
  );
};

export default Game;
