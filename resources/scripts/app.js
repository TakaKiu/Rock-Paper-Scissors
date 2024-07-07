import React, { useState } from 'react';
import './App.css'; 
import RockPaperScissors from './RockPaperScissors'; 

const App = () => {
  const [username, setUsername] = useState('');
  const [game, setGame] = useState(null); // Game instance
  const [userSelection, setUserSelection] = useState('');
  const [score, setScore] = useState({ user: 0, cpu: 0 });
  const [gameHistory, setGameHistory] = useState([]);

  const startGame = () => {
    if (username.trim() !== '') {
      setGame(new RockPaperScissors(username));
    } else {
      alert('Please enter your name to start the game.');
    }
  };

  const playGame = (selectedOption) => {
    if (game) {
      game.play(selectedOption);
      setScore({ user: game.score.user, cpu: game.score.cpu });
      setGameHistory([...game.gameHistoryLog]);
    }
  };

  return (
    <div className="App">
      {game ? (
        <div className="game-container">
          <h2>Welcome, {username}!</h2>
          <p>Score: {username}: {score.user} vs CPU: {score.cpu}</p>
          <div className="game-history">
            <h3>Game History</h3>
            <ul>
              {gameHistory.map((entry, index) => (
                <li key={index}>{entry}</li>
              ))}
            </ul>
          </div>
          <div className="game-options">
            <button onClick={() => playGame('rock')}>Rock</button>
            <button onClick={() => playGame('paper')}>Paper</button>
            <button onClick={() => playGame('scissors')}>Scissors</button>
          </div>
        </div>
      ) : (
        <div className="start-container">
          <h2>Enter Your Name to Start</h2>
          <input
            type="text"
            placeholder="Enter your name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button onClick={startGame}>Start Game</button>
        </div>
      )}
    </div>
  );
};

export default App;
