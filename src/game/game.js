const Board = require('../ui/board');
const Controls = require('../ui/controls');
const Icons = require('../ui/icons');

// The main class used to generate the game board and ui
class Game {
	/**
	 * Creates a new Game object
	 * @constructor
	 */
	constructor(containerId) {
		this.interval = 400;
		this.containerId = containerId;
		this.playInterval = null;
		this.board = null;
		this.editing = false;

		// Event Handling
		window.addEventListener('resize', () => {
			// Make sure game is stopped before resizing board.
			this.stop();
			this.board.resizeBoard();
		});

		document.addEventListener('randomizeBoard', () => {
			// Stop edit session if random button is clicked.
			if (this.editing) {
				this.cancelEditing();
			}

			// Make sure game is stopped before randomizing cells.
			this.stop();
			this.board.randomizeBoard();
		});

		document.addEventListener('editBoard', () => {
			// Make sure game is stopped before editing the board.
			this.stop();
			if (this.editing) {
				this.editing = false;
			} else {
				this.editing = true;
			}

			this.board.toggleEditing(this.editing);
		});

		document.addEventListener('playBoard', () => {
			const playBtn = document.querySelector('#gameoflife .playBtn');

			// Stop edit session if play button is clicked.
			if (this.editing) {
				this.cancelEditing();
			}

			if (playBtn.classList.contains('paused')) {
				this.play();
			} else {
				this.stop();
			}
		});

		document.addEventListener('patternSelected', (event) => {
			let menuValue = '';
			if (event
				&& event.srcElement
				&& event.srcElement.activeElement
				&& event.srcElement.activeElement.value) {
				menuValue = event.srcElement.activeElement.value;
			}

			if (menuValue && typeof menuValue === 'string') {
				this.stop();
				this.board.predfinedBoard(menuValue);
			}
		});

		document.addEventListener('intervalChanged', (event) => {
			let sliderValue = '';
			if (event
				&& event.srcElement
				&& event.srcElement.activeElement
				&& event.srcElement.activeElement.value) {
				sliderValue = event.srcElement.activeElement.value;
			}

			if (sliderValue && Number(sliderValue)) {
				this.stop();
				this.interval = Number(sliderValue);
				this.play();
			}
		});

		// Generate Conway's Game of Life
		this.generate();
	}

	// Cancel editing
	cancelEditing() {
		const editBtn = document.querySelector('#gameoflife .drawBtn');
		editBtn.classList.remove('editing');

		this.editing = false;
		this.board.toggleEditing(this.editing);
	}

	// play the game.
	play() {
		const playBtn = document.querySelector('#gameoflife .playBtn');
		playBtn.classList.remove('paused');
		playBtn.classList.add('playing');

		// Empty contents of playBtn
		const oldIcon = playBtn.getElementsByTagName('svg');
		oldIcon[0].remove();
		playBtn.appendChild(Icons.pause);

		this.playInterval = window.setInterval(() => {
			this.board.playRound();
		}, this.interval);
	}

	// stop the game.
	stop() {
		const playBtn = document.querySelector('#gameoflife .playBtn');
		playBtn.classList.add('paused');
		playBtn.classList.remove('playing');

		// Empty contents of playBtn
		const oldIcon = playBtn.getElementsByTagName('svg');
		oldIcon[0].remove();
		playBtn.appendChild(Icons.play);

		window.clearInterval(this.playInterval);
		this.playInterval = null;
	}

	// Generates a the game interface and board.
	generate() {
		const container = document.getElementById(this.containerId);

		// Add svg representing the game board to the container.
		const gameBoard = document.createElement('div');
		gameBoard.setAttribute('id', 'board');
		container.appendChild(gameBoard);

		this.board = new Board('board');

		// Add control panel to container.
		const controlPanel = document.createElement('div');
		controlPanel.setAttribute('id', 'controlpanel');
		container.appendChild(controlPanel);

		// Add controls to control panel.
		Controls.addControls('controlpanel');
	}
}

module.exports = Game;
