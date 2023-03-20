"use strict";

function onLoad() {
	// On ajoute un listener de selection sur les 8 cases du taquin
	for (let i = 1; i <= 3; i++) {
		for (let j = 1; j <= 3; j++) {
			console.log("Cell : " + (("r" + i + "-c" + j)));
			let cell = document.getElementById("r" + i + "-c" + j);
			// Quand l'élement est selectionner alors on change son background
			console.log("cell.class : " + cell.className);
			cell.addEventListener("click", function () {
				selection(cell);
			});
		}
	}
}

function selection(cell) {
	// On récupère l'id de la box empty
	let boxEmptyId = document.getElementsByClassName("box empty")[0].id;
	let lineEmpty = parseInt(boxEmptyId.split('-')[0].substring(1));
	let columnEmpty = parseInt(boxEmptyId.split('-')[1].substring(1));

	// On récupère l'id de la cell cliquer
	let cellId = cell.id;

	// On split son id pour récupérer ses coordonnés
	let line = parseInt(cellId.split("-")[0].substring(1));
	let column = parseInt(cellId.split("-")[1].substring(1));

	if (
		(line === lineEmpty && Math.abs(column - columnEmpty) === 1) ||
		(column === columnEmpty && Math.abs(line - lineEmpty) === 1)
	) {
		// J'inverse alors les deux élements (id et class) ainsi que leurs spans
		let boxEmpty = document.getElementsByClassName("box empty")[0];
		let cellSpan = cell.getElementsByTagName("span")[0];
		cell.className = "box empty";
		cell.removeChild(cellSpan);
		boxEmpty.className = "box";
		boxEmpty.appendChild(cellSpan);
	}
	// checkVictory();
}

// function checkVictory() {
// 	let victory = true;
// 	let cmp = 1;
// 	for (let i = 1; i <= 3; i++) {
// 		for (let j = 1; j <= 3; j++) {
// 			if(i != 3 && j != 3) {
// 				let cell = document.getElementById("r" + i + "-c" + j);
// 				let cellSpan = cell.getElementsByTagName("span")[0];
// 				if (cellSpan != cmp) {
// 					victory = false;
// 				}
// 				cmp += 1;
// 			}
// 		}
// 	}
// 	if (victory) {
// 		alert("Victory");
// 	}
// }

// Toute les ressources de la page sont complètement chargées.
window.onload = onLoad;
