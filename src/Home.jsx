import React , {useState} from 'react';
// import './styles.css'; // Import your CSS file

const Home = ({ handlePlayerSelection }) => {


  const [playerXName, setPlayerXName] = useState('');
  const [playerOName, setPlayerOName] = useState('');
  const [boardSize, setBoardSize] = useState('');
  // const handleBoardSizeChange = (e) => {
  //   setBoardSize(e.target.value);
  // };

  const handleSubmit = (e) => {

    if (playerXName === '' && playerOName === '' && boardSize === '') 
    alert('Enter details');
    {
      handlePlayerSelection(playerXName, playerOName, boardSize);
    }
  };
  return (
    <div className="select-box">
      <header>Tic Tac Toe</header>
      <div className="content">
        <div className="title">Select which you want to be?</div>
        <div className="options">
         <div className='x'>
         
        <label>
          Player X Name:
          <input type="text" value={playerXName} onChange={(e) => setPlayerXName(e.target.value)} />
        </label>
        </div> 
        <div className='o'>
        <label >
          Player O Name:
          <input type="text" value={playerOName} onChange={(e) => setPlayerOName(e.target.value)} />
        </label>
        </div>

        </div>
        <div className='select-size'>
        <label>Select Board Size:
          <select value={boardSize} onChange={(e) => setBoardSize(parseInt(e.target.value))}>
            <option value="">select</option>
            <option value="3">3x3</option>
            <option value="4">4x4</option>
          </select>
          </label>
          </div>
      </div>
      <div className='startbtn'>
      <button  onClick={handleSubmit}>Start Game</button>
      </div>
    </div>
  );
};

export default Home;