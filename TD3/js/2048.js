function onLoad() {
	init();
}

/**
 * Créer le grille, l'initialise
 * Abonne la fenetre à l'action key
 * ajoute 2 valeurs aléatoires dans la grille
 * affiche la grille via displayGrid()
*/
function init() {
	keyboardAction();
	// Création de la grille
	let grid = [[], [], [], []];
	for (let i = 0; i < 4; i++) {
		grid[i] = [];
		for (let j = 0; j < 4; j++) {
			const myBox = {
				value: "",
				lastInsert: false
			};
			grid[i][j] = Object.create(myBox);
		}
	}
	console.log("Grid : " + grid);
	displayGrid();
}

function insertValue() {
	let row = Math.floor(Math.random() * 4);
	let column = Math.floor(Math.random() * 4);
	let value = getNewValue();
	console.log("row : " + row + " column : " + column + " value : " + value);
	grid[row][column].value = value;
}

// Key code entre 37 et 40
function keyboardAction() {
	window.addEventListener("keydown", function (event) {
		console.log(event.keyCode);
		switch (event.keyCode) {
			case 37:
				moveLeft();
				break;

			case 38:
				moveUp();
				break;

			case 39:
				moveRight();
				break;

			case 40:
				moveDown();
				break;
		}
	});
}

function moveUp() {

}

function moveDown() {

}

function moveLeft() {

}

function moveRight() {

}


// ---- Tamp Toward ---- //
function tampTowardsLeft(row) {

}

function tampTowardsRight(row) {

}

function tampTowardsUp(column) {

}

function tampTowardsDown(column) {

}

// ---- Merge To ---- //
function mergeToLeft(row) {

}

function mergeToRight(row) {

}

function mergeToUp(column) {

}

function mergeToDown(column) {

}

// ---- isEmpty ---- //
function isEmptyRow(row) {

}

function isEmptyColumn(column) {

}

/**
 * return 2 pour une proba de 0.9 et 4 pour une proba de 0.1
 */
function getNewValue() {
	return Math.random() < 0.9 ? 2 : 4;
}

/**
 * Affichage de la grille
 */
function displayGrid() {

}


// Toute les ressources de la page sont complètement chargées.
window.onload = onLoad;
