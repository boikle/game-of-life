const Rules = require('../rules/rules');
const Grid = require('../grid/grid');
const Ui = require('./controls');
const Board = require('./board');

class Game {
	constructor(containerId) {
		this.containerId = containerId;

		// Generate Conway's Game of Life
		this.generate();
	}

	generate() {
		const container = document.getElementById(this.containerId);

		// Add svg representing the game board to the container.
		let gameBoard = document.createElement('svg');
		gameBoard.classList.add('board');
		container.appendChild(gameBoard);

		// Add control panel to container.
		let controlPanel = document.createElement('div');
		controlPanel.classList.add('controlpanel');
		container.appendChild(controlPanel);

		const drawBtn = document.createElement('button');
		drawBtn.innerText = "Draw";
		controlPanel.appendChild(drawBtn);

		const randomBtn = document.createElement('button');
		randomBtn.innerText = "Random";
		controlPanel.appendChild(randomBtn);

		const playBtn = document.createElement('button');
		playBtn.innerText = "Play";
		controlPanel.appendChild(playBtn);

	}
}

module.exports = Game;
