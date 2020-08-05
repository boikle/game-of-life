const Grid = require('../grid/grid');
const d3 = require('d3');

// The board class contains the logic for generating the svg game board using d3.
class Board {
	constructor(containerId) {
		this.containerId = containerId;
		this.container = document.getElementById(this.containerId);
		//this.width = this.container.innerWidth;
		//this.height = this.container.innerHeight;
		this.width = 500;
		this.height = 500;
		this.cellSize = 10;

		this.grid = new Grid(this.width/this.cellSize, this.height/this.cellSize);
		this.grid.populateMatrix();

		this.dataset = this.prepareDataset(this.grid.matrix);
		// Create Board
		this.createBoard();
	}

	prepareDataset(dataset) {
		let i;
		let j;
		let colour;
		const data = [];
		const that = this;
		for (i = 0; i < dataset.length; i += 1) {
			for (j = 0; j < dataset[i].length; j += 1) {
				colour = '#ffffff';
				if (dataset[i][j] === 1) {
					colour = '#000000';
				}

				data.push({
					x: i * that.cellSize,
					y: j * that.cellSize,
					fill: colour,
				});
			}
		}

		return data;
	}

	createBoard() {
		// clear container
		this.container.innerText = '';

		// Add SVG to container
		let svg = d3.select('#' + this.containerId)
			.append("svg")
			.attr("width", this.width + 'px')
			.attr("height", this.height + 'px');

		// Generate cell rectangles
		svg.selectAll('rect')
			.data(this.dataset)
			.join('rect')
			.attr('x', d => d.x)
			.attr('y', d => d.y)
			.attr('fill', d => d.fill)
			.attr('height', this.cellSize)
			.attr('width', this.cellSize);
	}
}

module.exports = Board;
