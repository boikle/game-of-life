const d3 = require('d3-selection');
const Grid = require('../grid/grid');
const Rules = require('../rules/rules');

// The board class contains the logic for generating the svg game board using d3.
class Board {
	constructor(containerId) {
		const that = this;
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

		// Event Handling
		window.addEventListener('resize', () => {
			// Calculate the grid dimensions using new window size
			this.calcGridDimensions();

			// Update grid based on new window size
			this.updateGrid(this.width, this.height);

			// Update dataset and board using new grid.
			this.dataset = this.prepareDataset(this.grid.getMatrix());
			this.updateBoard();
		});

		document.addEventListener('randomizeBoard', () => {
			that.grid.randomMatrix();
			that.dataset = that.prepareDataset(that.grid.getMatrix());

			that.updateBoard();
		});
	}

	// Calculates the dimensions of the grid (width and height) based on the
	// available window dimensions.
	calcGridDimensions() {
		const widthPadding = 50;
		const heightPadding = 100;
		this.width = window.innerWidth - widthPadding;
		this.height = window.innerHeight - heightPadding;
	}

	/**
	 * Update/create a grid with the provided.
	 * @param {number} width The width of the grid.
	 * @param {number} height The height of the grid.
	 */
	updateGrid(width, height) {
		// Create a new grid object and populate it with dead cell values
		const gridWidth = Math.floor(width / this.cellSize);
		const gridHeight = Math.floor(height / this.cellSize);
		this.grid = new Grid(gridWidth, gridHeight);
		this.grid.populateMatrix();
	}

	// Main function for playing a round in the game.
	// Each cell on the board will be checked to see if changes need to occur
	// in their status. All cell results will be stored in new matrix for values
	// and the grid and board will be updated with them values at the end of the
	// round.
	playRound() {
		let i;
		let j;
		let cellStatus;
		let cellNeighbourhood;
		let liveCellCount;
		const newMatrix = [];

		for (i = 0; i < this.grid.width; i += 1) {
			const newRow = [];
			for (j = 0; j < this.grid.height; j += 1) {
				cellStatus = this.grid.getCellStatus(i, j);
				cellNeighbourhood = this.grid.getCellNeighbourhood(i, j);
				liveCellCount = this.grid.countLiveCells(cellNeighbourhood);

				// Check if cell status needs to change based on game rules.
				if (cellStatus
					&& Rules.isUnderPopulatedCell(liveCellCount - 1)) {
					newRow.push(0);
				} else if (cellStatus
					&& Rules.isOverPopulatedCell(liveCellCount - 1)) {
					newRow.push(0);
				} else if (!cellStatus
					&& Rules.deadCellReproduces(liveCellCount)) {
					newRow.push(1);
				} else if (cellStatus
					&& Rules.liveCellStaysAlive(liveCellCount - 1)) {
					newRow.push(1);
				} else {
					newRow.push(0);
				}
			}
			newMatrix.push(newRow);
		}

		// Update grid with newGrid
		this.grid.setMatrix(newMatrix);

		// Update board with new grid matrix values
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
		const strokeColour = '#eeeeee';
		const strokeWidth = 1;

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
			//.attr('stroke', strokeColour)
			//.attr('stroke-width', strokeWidth)
			.attr('height', this.cellSize)
			.attr('width', this.cellSize);
	}
}

module.exports = Board;
