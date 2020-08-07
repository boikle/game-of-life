const d3 = require('d3');
const Grid = require('../grid/grid');

// The board class contains the logic for generating the svg game board using d3.
class Board {
	constructor(containerId) {
		const that = this;
		this.containerId = containerId;
		this.container = document.getElementById(this.containerId);
		// this.width = this.container.innerWidth;
		// this.height = this.container.innerHeight;
		this.width = 500;
		this.height = 500;
		this.cellSize = 10;

		// Create a new grid object and populate it with dead cell values
		this.grid = new Grid(this.width / this.cellSize, this.height / this.cellSize);
		this.grid.populateMatrix();

		// Prepare a dataset using the grid values
		this.dataset = this.prepareDataset(this.grid.getMatrix());

		// Update Game Board
		this.updateBoard();

		// Event Handling
		document.addEventListener('randomizeBoard', () => {
			console.log('Randomize Game Board');
			that.grid.randomMatrix();
			that.dataset = that.prepareDataset(that.grid.getMatrix());

			that.updateBoard();
		});
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
