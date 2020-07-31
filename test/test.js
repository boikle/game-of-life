const Grid = require('../src/grid/grid');
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
});
