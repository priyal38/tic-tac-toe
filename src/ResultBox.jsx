import React from 'react';

const ResultBox = ({ winner, handleReset , handleGoHome}) => {
  return (
    <div className="result-box">
      <div className="won-text">
      {winner === 'draw' ? 'It\'s a draw!' : `Player ${winner}  won the game!`}
     
      </div>
      <div className="btn">
        <button onClick={handleReset}>Replay</button>
        <button onClick={handleGoHome}>GoHome</button>
      </div>
    </div>
  );
};

export default ResultBox;
