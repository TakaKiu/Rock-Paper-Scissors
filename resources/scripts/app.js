// App.js
import React, { useState } from 'react';
import './App.css'; // Import your CSS file for styling
import RockPaperScissors from './RockPaperScissors'; // Import the game logic

const App = () => {
  const [username, setUsername] = useState('');
  const [game, setGame] = useState(null);
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
      const { result, cpuSelection, logEntry, score: updatedScore } = game.play(selectedOption);
      setScore(updatedScore);
      setGameHistory([...gameHistory, logEntry]);
      setUserSelection(selectedOption); // Optionally update user selection state
    }
  };

  const resetGame = () => {
    setGame(null);
    setUsername('');
    setScore({ user: 0, cpu: 0 });
    setGameHistory([]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Rock Paper Scissors Game</h1>
      </header>
      {game ? (
        <div className="game-container">
          <h2>Welcome, {username}!</h2>
          <p>Score: {score.user} - {score.cpu}</p>
          <div className="game-options">
            <button onClick={() => playGame('rock')}>Rock</button>
            <button onClick={() => playGame('paper')}>Paper</button>
            <button onClick={() => playGame('scissors')}>Scissors</button>
          </div>
          <div className="game-history">
            <h3>Game History</h3>
            <ul>
              {gameHistory.map((entry, index) => (
                <li key={index}>{entry}</li>
              ))}
            </ul>
          </div>
          <button onClick={resetGame}>Reset Game</button>
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

