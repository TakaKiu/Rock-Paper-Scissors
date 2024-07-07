
class RockPaperScissors {
  constructor(username) {
    this.username = username;
    this.score = { user: 0, cpu: 0 };
    this.gameHistoryLog = [];
  }

  generateCPUResponse() {
    const options = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
  }

  determineWinner(userSelection, cpuSelection) {
    if (userSelection === cpuSelection) {
      return 'tie';
    } else if (
      (userSelection === 'rock' && cpuSelection === 'scissors') ||
      (userSelection === 'paper' && cpuSelection === 'rock') ||
      (userSelection === 'scissors' && cpuSelection === 'paper')
    ) {
      return 'win';
    } else {
      return 'lose';
    }
  }

  play(userSelection) {
    const cpuSelection = this.generateCPUResponse();
    const result = this.determineWinner(userSelection, cpuSelection);

    if (result === 'win') {
      this.score.user++;
    } else if (result === 'lose') {
      this.score.cpu++;
    }

    const logEntry = `${this.username} selected ${userSelection}, CPU selected ${cpuSelection}: ${this.username} ${result}s`;
    this.gameHistoryLog.push(logEntry);

    return {
      result,
      userSelection,
      cpuSelection,
      score: { ...this.score },
      logEntry,
    };
  }

  resetGame() {
    this.score = { user: 0, cpu: 0 };
    this.gameHistoryLog = [];
  }
}

export default RockPaperScissors;
