// Elements
const welcomeScreen = document.getElementById(`welcome-screen`);
const gameScreen = document.getElementById(`game-screen`);
const startGameButton = document.getElementById(`start-game-button`);
const userName = document.getElementById(`username`);
const userSelection = document.getElementById(`user-selection`);
const goButton = document.getElementById(`go-button`);
const scoreParagraph = document.getElementById(`score`);
const gameHistoryParagraph = document.getElementById(`game-history`);

// instantiate the game object from the `RockPaperScissors` class.
let game;

// hide game screen
gameScreen.classList.add(`d-none`);

// updateScoreTallyUI
function updateScoreTallyUI(){
    scoreParagraph.textContent = `${game.username}: ${game.score.user} v CPU: ${game.score.cpu}`;
}

// updateGameHistoryUI
function updateGameHistoryUI(){
    // Clear game history paragraph
    gameHistoryParagraph.innerHTML = '';

    // Loop through game history log and add entries to game history paragraph
    game.gameHistoryLog.forEach(entry => {
        const p = document.createElement('p');
        p.textContent = entry;
        gameHistoryParagraph.appendChild(p);
    });
}

// start-game-button EventListener
startGameButton.addEventListener(`click`, function () {
    const username = userName.value.trim();

    if (username !== '') {
        game = new RockPaperScissors(username);
        welcomeScreen.classList.add(`d-none`);
        gameScreen.classList.remove(`d-none`);
    } else {
        alert('Please enter your name to start the game.');
    }
});

// go-button EventListener
goButton.addEventListener(`click`, function () {
    // Get user selection
    const selectedOption = userSelection.value;

    // Play the game
    game.play(selectedOption);

    // Update UI
    updateScoreTallyUI();
    updateGameHistoryUI();
});
