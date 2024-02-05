import React from 'react';
// import './styles.css'; // Import your CSS file

const Home = ({ handlePlayerSelection }) => {
  return (
    <div className="select-box">
      <header>Tic Tac Toe</header>
      <div className="content">
        <div className="title">Select which you want to be?</div>
        <div className="options">
          <button className="playerX" onClick={() => handlePlayerSelection('X')}>
            Player (X)
          </button>
          <button className="playerO" onClick={() => handlePlayerSelection('O')}>
            Player (O)
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
