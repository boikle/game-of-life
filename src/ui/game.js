const Rules = require('../rules/rules');
const Ui = require('./controls');
const Board = require('./board');

// The main class used to generate the game board and ui
class Game {
	/**
	 * Creates a new Game object
	 * @constructor
	 */
	constructor(containerId) {
		this.containerId = containerId;

		// Generate Conway's Game of Life
		this.generate();
	}

	// Generates a the game interface and board.
	generate() {
		const container = document.getElementById(this.containerId);

		// Add svg representing the game board to the container.
		const gameBoard = document.createElement('div');
		gameBoard.setAttribute('id', 'board');
		container.appendChild(gameBoard);

		const board = new Board('board');

		// Add control panel to container.
		const controlPanel = document.createElement('div');
		controlPanel.classList.add('controlpanel');
		container.appendChild(controlPanel);

		const drawBtn = document.createElement('button');
		drawBtn.innerText = 'Draw';
		controlPanel.appendChild(drawBtn);

		const randomBtn = document.createElement('button');
		randomBtn.innerText = 'Random';
		randomBtn.onclick = () => {
			const randomizeBoard = new Event('randomizeBoard');
			document.dispatchEvent(randomizeBoard);
		};
		controlPanel.appendChild(randomBtn);

		const playBtn = document.createElement('button');
		playBtn.innerText = 'Play';
		controlPanel.appendChild(playBtn);
	}
}

module.exports = Game;
