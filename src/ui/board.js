const d3 = require('d3-selection');
const Grid = require('../grid/grid');

// The board class contains the logic for generating the svg game board using d3.
class Board {
	constructor(containerId) {
		this.containerId = containerId;
		this.container = document.getElementById(this.containerId);
		this.width = null;
		this.height = null;
		this.grid = null;
		this.cellSize = 10;

		// Calculate Grid dimensions
		this.calcGridDimensions();

		// Update Grid
		this.updateGrid(this.width, this.height);

		// Prepare a dataset using the grid values
		this.dataset = this.prepareDataset(this.grid.getMatrix());

		// Update Game Board
		this.updateBoard();
	}

	// Calculates the dimensions of the grid (width and height) based on the
	// available window dimensions.
	calcGridDimensions() {
		const widthPadding = 50;
		const heightPadding = 150;
		this.width = window.innerWidth - widthPadding;
		this.height = window.innerHeight - heightPadding;
	}

	/**
	 * Update/create a grid with the provided dimensions.
	 * @param {number} width The width of the grid.
	 * @param {number} height The height of the grid.
	 */
	updateGrid(width, height) {
		// Create a new grid object and populate it with dead cell values
		const gridWidth = Math.floor(width / this.cellSize);
		const gridHeight = Math.floor(height / this.cellSize);
		this.grid = new Grid(gridWidth, gridHeight);
		this.grid.zeroMatrix();
	}

	// Resize the board after the window is resized.
	resizeBoard() {
		// Calculate the grid dimensions using new window size
		this.calcGridDimensions();

		// Update grid based on new window size
		this.updateGrid(this.width, this.height);

		// Update dataset and board using new grid.
		this.dataset = this.prepareDataset(this.grid.getMatrix());
		this.updateBoard();
	}

	// Randomizes the grid value and update the board.
	randomizeBoard() {
		this.grid.randomMatrix();
		this.dataset = this.prepareDataset(this.grid.getMatrix());

		this.updateBoard();
	}

	// Update board to a predefined patternName
	predfinedBoard(patternName) {
		this.grid.predefinedMatrix(patternName);
		this.dataset = this.prepareDataset(this.grid.getMatrix());

		this.updateBoard();
	}

	// Main function for playing a round in the game.
	// The next generation of grid cell values will be calculated, and the board
	// will be updated.
	playRound() {
		// Calculate the next generation of grid cell values.
		this.grid.calcNextGeneration();

		// Update board with new grid values
		this.dataset = this.prepareDataset(this.grid.getMatrix());
		this.updateBoard();
	}

	/**
	 * Converts gridValues into an array of objects which can be handled more
	 * easily by the d3 visualization.
	 * @param {array} gridValues A multi-dimensional array of 0s or 1s which
	 * represent dead and alive cells.
	 * @return {array} The returned dataset contains a list of objects with
	 * the x, y, and cell state defined.
	 */
	prepareDataset(gridValues) {
		let i;
		let j;
		let colour;
		const dataset = [];
		const that = this;

		for (i = 0; i < gridValues.length; i += 1) {
			for (j = 0; j < gridValues[i].length; j += 1) {
				colour = '#ffffff';
				if (gridValues[i][j] === 1) {
					colour = '#000000';
				}

				dataset.push({
					x: i * that.cellSize,
					y: j * that.cellSize,
					fill: colour,
				});
			}
		}

		return dataset;
	}

	// Add/update the game board to the user interface, which consists of a svg
	// with a collection of rectangles representing cells.
	updateBoard() {
		// Clear container
		this.container.innerText = '';

		// Add SVG to container
		const svg = d3.select(`#${this.containerId}`)
			.append('svg')
			.attr('width', `${this.width}px`)
			.attr('height', `${this.height}px`);

		// Generate cell rectangles
		svg.selectAll('rect')
			.data(this.dataset)
			.join('rect')
			.attr('x', (d) => d.x)
			.attr('y', (d) => d.y)
			.attr('fill', (d) => d.fill)
			.attr('height', this.cellSize)
			.attr('width', this.cellSize);
	}
}

module.exports = Board;
