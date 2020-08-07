// Grid class for creating Grid objects.
class Grid {
	/**
	 * Create a new grid with a set width and height
	 * @constructor
	 */
	constructor(width, height) {
		this.width = Number(width);
		this.height = Number(height);
		this.matrix = [];

		// Populate new grid
		this.populateMatrix();
	}

	/**
	 * Get the contents of the grid
	 * @return {array} this.matrix
	 */
	getMatrix() {
		return this.matrix;
	}

	/**
	 * Set the values of the grid.
	 * @param {array} values An array of values to replace the grid with
	 */
	setMatrix(values) {
		this.matrix = values;
	}

	// Generate a grid of cell values that are initialized to 0
	populateMatrix() {
		let i;
		let j;
		let gridRow;
		const defaultCellValue = 0;
		const gridMatrix = [];

		// Create an array of cell values
		for (i = 0; i < this.width; i += 1) {
			gridRow = [];
			for (j = 0; j < this.height; j += 1) {
				gridRow.push(defaultCellValue);
			}
			gridMatrix.push(gridRow);
		}

		// Set the grid's matrix of cell values.
		this.setMatrix(gridMatrix);
	}

	// Generates a grid of random values (1s or 0s)
	randomMatrix() {
		let i;
		let j;
		let gridRow;
		let cellValue;
		const randomMatrix = [];

		// Generate a matrix of random cell values
		for (i = 0; i < this.width; i += 1) {
			gridRow = [];
			for (j = 0; j < this.height; j += 1) {
				cellValue = Math.round(Math.random(0, 1));
				gridRow.push(cellValue);
			}
			randomMatrix.push(gridRow);
		}

		// Set the grid cells to the generated random matrix cell values
		this.setMatrix(randomMatrix);
	}

	/**
	 * Get the cell status for a specified cell
	 * @param {number} x the x coordinate value
	 * @param {number} y the y coordinate value
	 * @return {number} cell status, either 0 (dead) or 1 (alive).
	 */
	getCellStatus(x, y) {
		return this.matrix[x][y];
	}

	/**
	 * Set grid cell status
	 * - 0 = dead cell
	 * - 1 = alive cell
	 * @param {number} x the x coordinate value
	 * @param {number} y the y coordinate value
	 * @param {number} status cell status
	 */
	setCellStatus(x, y, status) {
		this.matrix[x][y] = status;
	}

	/**
	 * Get the neighbourhood (surrounding 8 cells) of specified cell
	 * @param {number} x the x coordinate value
	 * @param {number} y the y coordinate value
	 * @return {array} A multidimensional array representing the cell's
	 * neighbourhood.
	 */
	getCellNeighbourhood(x, y) {
		let cellValue;
		let i;
		let j;
		const originX = x - 1;
		const originY = y - 1;
		// Create a neighbourhood template, initalized with 0 values
		const neighbourhood = [
			[0, 0, 0],
			[0, 0, 0],
			[0, 0, 0]];

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

	/**
	 * Count the number of live cells in a provided matrix.
	 * Live cells have a value of 1, while dead cells have a value of 0.
	 * @param {array} cells A multidimensional array containing cell values
	 * @return {number} The total number of live cells in the matrix.
	 */
	countLiveCellsInMatrix(matrix) {
		let i;
		let j;
		let count = 0;
		for (i = 0; i < matrix.length; i += 1) {
			for (j = 0; j < matrix[i].length; j += 1) {
				if (matrix[i][j] === 1) {
					count += 1;
				}
			}
		}
		return count;
	}
}

module.exports = Grid;
