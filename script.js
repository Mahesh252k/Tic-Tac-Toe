<<<<<<< HEAD
// Gameboard Module
const Gameboard = (() => {
    let board = Array(9).fill('');
  
    const getBoard = () => board;
  
    const resetBoard = () => {
        board = Array(9).fill('');
    };
  
    const setCell = (index, marker) => {
        if (board[index] === '') {
            board[index] = marker;
            return true;
        }
        return false;
    };
  
    return { getBoard, resetBoard, setCell };
})();
  
// Factory function for Players
const Player = (name, marker) => {
    return { name, marker };
};
  
// Module for Game Logic
const GameController = (() => {
    let players = [];
    let currentPlayerIndex = 0;
    let gameOver = false;
  
    const startGame = (player1Name, player2Name) => {
        players = [Player(player1Name, 'X'), Player(player2Name, 'O')];
        currentPlayerIndex = 0;
        gameOver = false;
        Gameboard.resetBoard();
        DisplayController.updateBoard();
        DisplayController.showMessage(`${players[currentPlayerIndex].name}'s turn`);
    };
  
    const playTurn = (index) => {
        if (gameOver) return;
  
        const currentPlayer = players[currentPlayerIndex];
        if (Gameboard.setCell(index, currentPlayer.marker)) {
            DisplayController.updateBoard();
            const cell = document.querySelector(`#gameboard .cell:nth-child(${index + 1})`);
            cell.classList.add('marked');
  
            if (checkWin()) {
                gameOver = true;
                DisplayController.showMessage(`${currentPlayer.name} wins!`);
            } else if (Gameboard.getBoard().every(cell => cell !== '')) {
                gameOver = true;
                DisplayController.showMessage("It's a tie!");
            } else {
                currentPlayerIndex = 1 - currentPlayerIndex;
                DisplayController.showMessage(`${players[currentPlayerIndex].name}'s turn`);
            }
        }
    };
  
    const checkWin = () => {
        const board = Gameboard.getBoard();
        const winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], 
            [0, 3, 6], [1, 4, 7], [2, 5, 8], 
            [0, 4, 8], [2, 4, 6] 
        ];
        const currentMarker = players[currentPlayerIndex].marker;
        return winningCombinations.some(combination => 
            combination.every(index => board[index] === currentMarker)
        );
    };
  
    return { startGame, playTurn };
})();
  
// Display Module
const DisplayController = (() => {
    const updateBoard = () => {
        const board = Gameboard.getBoard();
        const gameboard = document.getElementById('gameboard');
        gameboard.innerHTML = '';
  
        board.forEach((cell, index) => {
            const div = document.createElement('div');
            div.classList.add('cell');
            div.textContent = cell;
            div.addEventListener('click', () => GameController.playTurn(index));
            gameboard.appendChild(div);
        });
    };
  
    const showMessage = (message) => {
        document.getElementById('message').textContent = message;
    };
  
    return { updateBoard, showMessage };
})();
  
// Event Listeners
document.getElementById('start').addEventListener('click', () => {
    const player1Name = document.getElementById('player1').value;
    const player2Name = document.getElementById('player2').value;
    if (player1Name && player2Name) {
        GameController.startGame(player1Name, player2Name);
    }
});
  
document.getElementById('restart').addEventListener('click', () => {
    GameController.startGame(
        document.getElementById('player1').value,
        document.getElementById('player2').value
    );
});
=======
// Gameboard Module
const Gameboard = (() => {
    let board = Array(9).fill('');
  
    const getBoard = () => board;
  
    const resetBoard = () => {
        board = Array(9).fill('');
    };
  
    const setCell = (index, marker) => {
        if (board[index] === '') {
            board[index] = marker;
            return true;
        }
        return false;
    };
  
    return { getBoard, resetBoard, setCell };
})();
  
// Factory function for Players
const Player = (name, marker) => {
    return { name, marker };
};
  
// Module for Game Logic
const GameController = (() => {
    let players = [];
    let currentPlayerIndex = 0;
    let gameOver = false;
  
    const startGame = (player1Name, player2Name) => {
        players = [Player(player1Name, 'X'), Player(player2Name, 'O')];
        currentPlayerIndex = 0;
        gameOver = false;
        Gameboard.resetBoard();
        DisplayController.updateBoard();
        DisplayController.showMessage(`${players[currentPlayerIndex].name}'s turn`);
    };
  
    const playTurn = (index) => {
        if (gameOver) return;
  
        const currentPlayer = players[currentPlayerIndex];
        if (Gameboard.setCell(index, currentPlayer.marker)) {
            DisplayController.updateBoard();
            const cell = document.querySelector(`#gameboard .cell:nth-child(${index + 1})`);
            cell.classList.add('marked');
  
            if (checkWin()) {
                gameOver = true;
                DisplayController.showMessage(`${currentPlayer.name} wins!`);
            } else if (Gameboard.getBoard().every(cell => cell !== '')) {
                gameOver = true;
                DisplayController.showMessage("It's a tie!");
            } else {
                currentPlayerIndex = 1 - currentPlayerIndex;
                DisplayController.showMessage(`${players[currentPlayerIndex].name}'s turn`);
            }
        }
    };
  
    const checkWin = () => {
        const board = Gameboard.getBoard();
        const winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], 
            [0, 3, 6], [1, 4, 7], [2, 5, 8], 
            [0, 4, 8], [2, 4, 6] 
        ];
        const currentMarker = players[currentPlayerIndex].marker;
        return winningCombinations.some(combination => 
            combination.every(index => board[index] === currentMarker)
        );
    };
  
    return { startGame, playTurn };
})();
  
// Display Module
const DisplayController = (() => {
    const updateBoard = () => {
        const board = Gameboard.getBoard();
        const gameboard = document.getElementById('gameboard');
        gameboard.innerHTML = '';
  
        board.forEach((cell, index) => {
            const div = document.createElement('div');
            div.classList.add('cell');
            div.textContent = cell;
            div.addEventListener('click', () => GameController.playTurn(index));
            gameboard.appendChild(div);
        });
    };
  
    const showMessage = (message) => {
        document.getElementById('message').textContent = message;
    };
  
    return { updateBoard, showMessage };
})();
  
// Event Listeners
document.getElementById('start').addEventListener('click', () => {
    const player1Name = document.getElementById('player1').value;
    const player2Name = document.getElementById('player2').value;
    if (player1Name && player2Name) {
        GameController.startGame(player1Name, player2Name);
    }
});
  
document.getElementById('restart').addEventListener('click', () => {
    GameController.startGame(
        document.getElementById('player1').value,
        document.getElementById('player2').value
    );
});
>>>>>>> 1e62bef62344ae87956c311f7edba73dd288273d
