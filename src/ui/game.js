const Board = require('./board');

// The main class used to generate the game board and ui
class Game {
	/**
	 * Creates a new Game object
	 * @constructor
	 */
	constructor(containerId) {
		this.containerId = containerId;
		this.playInterval = null;
		this.board = null;

		// Event Handling
		window.addEventListener('resize', () => {
			// Make sure board is stopped before resizing board.
			this.stop();
			this.board.resizeBoard();
		});

		document.addEventListener('randomizeBoard', () => {
			// Make sure board is stopped before randomizing cells.
			this.stop();
			this.board.randomizeBoard();
		});

		document.addEventListener('playBoard', () => {
			const playBtn = document.querySelector('#gameoflife .playBtn');
			if (playBtn.innerText === 'Play') {
				this.play();
			} else {
				this.stop();
			}
		});

		// Generate Conway's Game of Life
		this.generate();
	}

	// play the game.
	play() {
		const updateInterval = 500;
		const playBtn = document.querySelector('#gameoflife .playBtn');
		playBtn.innerText = 'Pause';

		this.playInterval = window.setInterval(() => {
			this.board.playRound();
		}, updateInterval);
	}

	// stop the game.
	stop() {
		const playBtn = document.querySelector('#gameoflife .playBtn');
		playBtn.innerText = 'Play';

		window.clearInterval(this.playInterval);
		this.playInterval = null;
	}

	// Generates a the game interface and board.
	generate() {
		const container = document.getElementById(this.containerId);

		// Add svg representing the game board to the container.
		const gameBoard = document.createElement('div');
		gameBoard.setAttribute('id', 'board');
		container.appendChild(gameBoard);

		this.board = new Board('board');

		// Add control panel to container.
		const controlPanel = document.createElement('div');
		controlPanel.classList.add('controlpanel');
		container.appendChild(controlPanel);

		const drawBtn = document.createElement('button');
		drawBtn.innerText = 'Draw';
		drawBtn.classList.add('drawBtn');
		controlPanel.appendChild(drawBtn);

		const randomBtn = document.createElement('button');
		randomBtn.innerText = 'Random';
		randomBtn.classList.add('randomeBtn');
		randomBtn.onclick = () => {
			const randomizeBoard = new Event('randomizeBoard');
			document.dispatchEvent(randomizeBoard);
		};
		controlPanel.appendChild(randomBtn);

		const playBtn = document.createElement('button');
		playBtn.classList.add('playBtn');
		playBtn.innerText = 'Play';
		playBtn.onclick = () => {
			const playBoard = new Event('playBoard');
			document.dispatchEvent(playBoard);
		};
		controlPanel.appendChild(playBtn);
	}
}

module.exports = Game;
