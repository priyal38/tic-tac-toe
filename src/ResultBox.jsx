import React from 'react';

const ResultBox = ({ winner ,playerO , playerX , handleReset , handleGoHome}) => {
let result ;

 if (winner === 'X'){
result = `${playerX} won the game!`;
}
else if (winner === 'O'){
  result = `${playerO} won the game!`;
}

else{
  result = 'Game draw'
}
  
  return (
    <div className="result-box">
      <div className="won-text">
       {result}
      </div>
      <div className="btn">
        <button className='reply' onClick={handleReset}>Replay</button>
        <button  className='gohome' onClick={handleGoHome}>Go Home</button>
      </div>
    </div>
  );
};

export default ResultBox;
