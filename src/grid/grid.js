class Grid {
	/**
	* Create a new grid with a set width and height
	* @constructor
	*/
	constructor(width, height) {
		this.width = Number(width);
		this.height = Number(height);
		this.matrix = [];

		// Generate a new grid
		this.generateGrid();
	}

	/**
	* Create a new grid with each cell initialized to 0
	*/
	generateGrid() {
		var i, j, gridRow;
		for (i = 0; i < this.width; i += 1) {
			gridRow = [];
			for (j = 0; j < this.height; j += 1) {
				gridRow.push(0);
			}
			this.matrix.push(gridRow);
		}
	}

	/**
	* Get the contents of the grid
	* @return {array} this.contents
	*/
	getMatrix() {
		return this.matrix;
	}

	/**
	* Set the values of the grid.
	* @param {array} newGrid - A new grid
	*/
	setMatrix(newGrid) {
		this.matrix = newGrid;
	}

	/**
	* Get the cell status for a specified cell
	* @param {number} x - x coordinate
	* @param {number} y - y coordinate
	* @return {number} - cell status, either 0 (dead) or 1 (alive).
	*/
	getCellStatus(x, y) {
		return this.matrix[x][y];
	}

	/**
	* Set grid cell status
	* - 0 = dead cell
	* - 1 = alive cell
	* @param {number} x - x coordinate
	* @param {number} y - y coordinate
	* @param {number} status - cell status
	*/
	setCellStatus(x, y, status) {
		this.matrix[x][y] = status;
	}

	/**
	* Get the neighbourhood (surrounding 8 cells) of specified cell
	* @param {number} x - x coordinate
	* @param {number} y - y coordinate
	* @return {array} neighbourhood - A multidimensional array representing the
	* cell's neighbourhood.
	*/
	getCellNeighbourhood(x, y) {
		var cellValue, i, j;
		var originX = x - 1;
		var originY = y - 1;
		// Create a neighbourhood template, initalized with 0 values
		var neighbourhood = [
			[0,0,0],
			[0,0,0],
			[0,0,0]
		];

		for (i = 0; i < 3; i += 1) {
			for (j = 0; j < 3; j += 1) {
				cellValue = this.matrix[originX + i][originY + j];
				// If an alive cellValue exists, update it to 1.
				// Otherwise leave it as zero
				if (cellValue) {
					neighbourhood[i][j] = 1;
				}
			}
		}
		return neighbourhood;
	}
}

module.exports = Grid;
