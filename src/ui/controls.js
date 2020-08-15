/**
 * Add a draw button to the element argument.
 * @param {object} element reference to a document element which will have a
 * button appended to it.
 */
function addDrawBtnToElement(element) {
	const drawBtn = document.createElement('button');
	drawBtn.innerText = 'Draw';
	drawBtn.classList.add('drawBtn');
	element.appendChild(drawBtn);
}

/**
 * Add a random button to the element argument.
 * @param {object} element reference to a document element which will have a
 * button appended to it.
 */
function addRandomBtnToElement(element) {
	const randomBtn = document.createElement('button');
	randomBtn.innerText = 'Random';
	randomBtn.classList.add('randomeBtn');
	randomBtn.onclick = () => {
		const randomizeBoard = new Event('randomizeBoard');
		document.dispatchEvent(randomizeBoard);
	};
	element.appendChild(randomBtn);
}

/**
 * Add a play/pause button to the element argument.
 * @param {object} element reference to a document element which will have a
 * button appended to it.
 */
function addPlayBtnToElement(element) {
	const playBtn = document.createElement('button');
	playBtn.classList.add('playBtn');
	playBtn.innerText = 'Play';
	playBtn.onclick = () => {
		const playBoard = new Event('playBoard');
		document.dispatchEvent(playBoard);
	};
	element.appendChild(playBtn);
}

/**
 * Create the element structure for a new menu option.
 * @param {string} optValue menu option value.
 */
function createMenuOption(optValue) {
	const option = document.createElement('option');
	option.setAttribute('value', optValue.toLowerCase());
	option.innerText = optValue;

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
	const options = ['Glider', 'Gosperglidergun', 'Pentadecathlon', 'Pulsar', 'Spaceship'];
	const patternMenu = document.createElement('select');
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
};
