import React from 'react';

const ResultBox = ({ winner, handleReset }) => {
  return (
    <div className="result-box">
      <div className="won-text">
        Player {winner}  won the game!
      </div>
      <div className="btn">
        <button onClick={handleReset}>Replay</button>
      </div>
    </div>
  );
};

export default ResultBox;
