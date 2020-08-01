const Grid = require('../src/grid/grid');
const GameRules = require('../src/rules/rules');
const assert = require('assert');

describe('Grid', function() {
	let grid = new Grid(3,3);
	describe('getMatrix()', function() {
		it('The grid should be a 3x3 matrix of 0 values', function() {
			assert.equal(JSON.stringify(grid.getMatrix()), JSON.stringify([[0,0,0],[0,0,0],[0,0,0]]));
		});
	});

	describe('setMatrix()', function() {
		it('The grid values should be updated to a 3x3 matrix of 1s', function() {
			let newGrid = [[1,1,1],[1,1,1],[1,1,1]];
			grid.setMatrix(newGrid);
			assert.equal(JSON.stringify(grid.getMatrix()), JSON.stringify([[1,1,1],[1,1,1],[1,1,1]]));
		});
	});

	describe('getCellStatus()', function() {
		it('The grid cell value should be equal to 1', function() {
			assert.equal(grid.getCellStatus(1, 1), 1);
		});
	});

	describe('setCellStatus()', function() {
		it('Set a grid cell value to 0', function() {
			grid.setCellStatus(1, 1, 0);
			assert.equal(grid.getCellStatus(1, 1), 0);
		});
	});

	describe('getCellNeighbourhood()', function() {
		it('Neighbourhood around the center cell should all be valued as 1', function() {
			let expectedNeighbourhood = [[1, 1, 1], [1, 0, 1], [1, 1, 1]];
			assert.equal(JSON.stringify(grid.getCellNeighbourhood(1, 1)), JSON.stringify(expectedNeighbourhood));
		});
	});

	describe('countLiveCellsInMatrix()', function() {
		it('Live cells count in neighbourhood should be 8', function() {
			let neighbourhoodMatrix = grid.getCellNeighbourhood(1, 1);
			assert.equal(grid.countLiveCellsInMatrix(neighbourhoodMatrix), 8);
		});
	});
});

describe('Game Rules', function() {
	describe('isUnderPopulatedCell()', function() {
		it('A cell will die if less than 2 live cells neighbour it', function() {
			assert.equal(GameRules.isUnderPopulatedCell(1), true);
		});
	});

	describe('isOverPopulatedCell()', function() {
		it('A cell will die if more than 3 live cells neighbour it', function() {
			assert.equal(GameRules.isOverPopulatedCell(4), true);
		});
	});

	describe('deadCellReproduces()', function() {
		it('A dead cell will reproduce as a live cell if 3 neighbours are live', function() {
			assert.equal(GameRules.deadCellReproduces(3), true);
		});
	});

	describe('liveCellStaysAlive()', function() {
		it('A live cell with 2 live cell neighbours stays alive', function() {
			assert.equal(GameRules.liveCellStaysAlive(2), true);
		});
		it('A live cell with 3 live cell neighbours stays alive', function() {
			assert.equal(GameRules.liveCellStaysAlive(3), true);
		});
	});
});
