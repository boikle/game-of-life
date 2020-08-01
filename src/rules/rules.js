/**
 * Checks if a cell is under populated
 * Rule: If a cell has less than 2 live cells neighbouring it, it's classified
 * as under populated.
 * @param {number} liveCellCount Number of neighbouring live cells.
 * @return {boolean}
 */
exports.isUnderPopulatedCell = function isUnderPopulatedCell(liveCellCount) {
	let underPopulated = false;
	if (liveCellCount < 2) {
		underPopulated = true;
	}
	return underPopulated;
};

/**
 * Checks if a cell is over populated.
 * Rule: If a cell has more than 3 live cells neighbouring it, it's classified
 * as over populated.
 * @param {number} liveCellCount Number of neighbouring live cells.
 * @return {boolean}
 */
exports.isOverPopulatedCell = function isOverPopulatedCell(liveCellCount) {
	let overPopulated = false;
	if (liveCellCount > 3) {
		overPopulated = true;
	}
	return overPopulated;
};

/**
 * Checks if a dead cell will reproduce as a live cells.
 * Rule: When a dead cell has 3 live cell neighbours, it's classified as being
 * reproduced as a new live cell.
 * @param {number} liveCellCount Number of neighbouring live cells
 * @returns {boolean}
 */
exports.deadCellReproduces = function deadCellReproduces(liveCellCount) {
	let reproduceCell = false;
	if (liveCellCount === 3) {
		reproduceCell = true;
	}
	return reproduceCell;
};

/**
 * Checks if a live cell will remain alive
 * Rule: If a live cell has 2 or 3 live cell neighbours, it remains classified
 * as a live cell.
 * @param {number} liveCellCount Number of neighbouring live cells
 * @return {boolean}
 */
exports.liveCellStaysAlive = function liveCellStaysAlive(liveCellCount) {
	let stayAlive = false;
	if (liveCellCount >= 2 && liveCellCount <= 3) {
		stayAlive = true;
	}
	return stayAlive;
};
