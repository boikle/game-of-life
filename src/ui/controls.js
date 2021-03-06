const Icons = require('./icons.js');

/**
 * Add a draw button to the element argument.
 * @param {object} element reference to a document element which will have a
 * button appended to it.
 */
function addDrawBtnToElement(element) {
	const drawBtn = document.createElement('button');
	drawBtn.setAttribute('title', 'Edit Board');
	drawBtn.classList.add('drawBtn');
	drawBtn.onclick = () => {
		const editBoard = new Event('editBoard');
		document.dispatchEvent(editBoard);
		drawBtn.classList.toggle('editing');
	};

	drawBtn.appendChild(Icons.pencil);
	element.appendChild(drawBtn);
}

/**
 * Add a random button to the element argument.
 * @param {object} element reference to a document element which will have a
 * button appended to it.
 */
function addRandomBtnToElement(element) {
	const randomBtn = document.createElement('button');
	randomBtn.setAttribute('title', 'Random Board Generator');
	randomBtn.classList.add('randomeBtn');
	randomBtn.onclick = () => {
		const randomizeBoard = new Event('randomizeBoard');
		document.dispatchEvent(randomizeBoard);
	};

	randomBtn.appendChild(Icons.random);
	element.appendChild(randomBtn);
}

/**
 * Add a play/pause button to the element argument.
 * @param {object} element reference to a document element which will have a
 * button appended to it.
 */
function addPlayBtnToElement(element) {
	const playBtn = document.createElement('button');
	playBtn.setAttribute('title', 'Pause/Play Game');
	playBtn.classList.add('playBtn');
	playBtn.classList.add('paused');
	playBtn.onclick = () => {
		const playBoard = new Event('playBoard');
		document.dispatchEvent(playBoard);
	};

	playBtn.appendChild(Icons.play);
	element.appendChild(playBtn);
}

/**
 * Create the element structure for a new menu option.
 * @param {string} optValue menu option value.
 */
function createMenuOption(optValue) {
	const option = document.createElement('option');
	option.setAttribute('value', optValue.value);
	option.innerText = optValue.label;

	return option;
}

/**
 * Add a drop down menu with a list of known interesting patterns
 * @param {object} element reference to a document element which will have a
 * drop down menu appended to it.
 */
function addPatternsMenuToElement(element) {
	let i;
	let option;
	const options = [
		{ label: 'Glider', value: 'glider' },
		{ label: 'Gosper glider gun', value: 'gosperglidergun' },
		{ label: 'Penta-decathlon', value: 'pentadecathlon' },
		{ label: 'Pulsar', value: 'pulsar' },
		{ label: 'Spaceship', value: 'spaceship' },
	];
	const patternMenu = document.createElement('select');
	patternMenu.setAttribute('title', 'Interesting Game of Life Patterns');
	patternMenu.setAttribute('name', 'patterns');
	patternMenu.setAttribute('id', 'patterns');

	const defaultOption = document.createElement('option');
	defaultOption.setAttribute('value', '');
	defaultOption.innerText = 'Select a pattern';
	patternMenu.appendChild(defaultOption);

	for (i = 0; i < options.length; i += 1) {
		option = createMenuOption(options[i]);
		patternMenu.appendChild(option);
	}

	patternMenu.onchange = () => {
		const patternSelected = new Event('patternSelected');
		document.dispatchEvent(patternSelected);
	};

	element.appendChild(patternMenu);
}

/**
 * Add a slider for setting iteration rate.
 * @param {object} element reference to a document element which will have a
 * drop down menu appended to it.
 */
function addIterationRateSlider(element) {
	const label = document.createElement('label');
	label.setAttribute('for', 'interval');
	label.classList.add('interval-label');
	label.innerText = 'Speed: ';
	element.appendChild(label);

	const intervalSlider = document.createElement('input');
	intervalSlider.setAttribute('type', 'range');
	intervalSlider.setAttribute('id', 'interval');
	intervalSlider.setAttribute('max', '1000');
	intervalSlider.setAttribute('min', '100');
	intervalSlider.setAttribute('step', '10');
	intervalSlider.setAttribute('value', '400');

	intervalSlider.onchange = () => {
		const intervalChanged = new Event('intervalChanged');
		document.dispatchEvent(intervalChanged);
	};
	element.appendChild(intervalSlider);
}

/**
* Add game of life controls to control panel container.
* @param {string} controlPanelContainerId Id of the dom element which will be
* the control panel for the game of life.
*/
exports.addControls = function addControls(controlPanelContainerId) {
	const controlPanel = document.getElementById(controlPanelContainerId);

	// Add draw button to control panel
	addDrawBtnToElement(controlPanel);

	// Add random button to control panel
	addRandomBtnToElement(controlPanel);

	// Add play button to control panel
	addPlayBtnToElement(controlPanel);

	// Add patterns select menu to control panel
	addPatternsMenuToElement(controlPanel);

	// Add interval slider
	addIterationRateSlider(controlPanel);
};
