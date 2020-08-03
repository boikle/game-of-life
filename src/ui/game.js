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

		const gameWrapper = document.createElement('div');
		gameWrapper.classList.add('gameoflife-wrapper');
		container.appendChild(gameWrapper);

		// TODO:
		// - Add Container Div
		// - Add Empty SVG for visualization
		// - Add container div for control panel
		// - Add Buttons to control panel
		//  - Play Button
		//  - Random Pattern Button
		//  - Draw Button
	}
}

module.exports = Game;
