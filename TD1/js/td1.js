'use strict';

// M413 - TD1
let message = 'JavaScript is ok :)';
// alert( message);
console.log(message);

let backupBody;


/**
 * Fonction qui déclenche toute les fonctions du document
 */
function onLoad() {
	console.log('In onLoad() function…');
	defineHeading1();
	defineHeading2();
	defineHeading3();
	defineHeading4();
	swapInnerHTML();
	dateAlter();
	getNbDats();
	updateClock1();
	// updateClock2();
	// updateGraphicClock();
	changeColorEvent();
	// test();
	searchInteractive();
	backupBody = document.body.innerHTML;
}

function defineHeading1() {
	let heading1 = document.getElementById('title');
	heading1.innerHTML = 'Titre modifier';
}

function defineHeading2() {
	let heading2First = document.getElementsByTagName('h2')[0];
	let heading2Last = document.getElementsByTagName('h2')[document.getElementsByTagName('h2').length - 1];
}

function defineHeading3() {
	// On récupère le nombre de balise h2
	let nbH2 = document.getElementsByTagName('h2').length;

	if (nbH2 == 0) {
		document.title = 'CONIL Marvin';
	}
}

function defineHeading4() {
	let nbEl = document.getElementsByClassName('firstOrLast').length;
	if (nbEl % 2 == 0) {
		document.title = document.getElementsByClassName('firstOrLast')[0].innerHTML;
	} else {
		document.title = document.getElementsByClassName('firstOrLast')[nbEl - 1].innerHTML;
	}
}

/**
 * Fonction qui inverse le contenu des deux paragraphes
 */
function swapInnerHTML() {
	// On récupère les deux paragraphes
	let pFirst = document.getElementsByTagName('p')[0];
	let pSecond = document.getElementsByTagName('p')[1];

	// On inverse le contenus des paragraphes
	let tmp = pFirst.innerHTML;
	pFirst.innerHTML = pSecond.innerHTML;
	pSecond.innerHTML = tmp;
}

/**
 * Fonction qui modifie la date de modification du document et l'affiche sur la page et récupère l'auteur du document
 */
function dateAlter() {
	const jours = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'];
	const mois = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];


	// On récupère que le premier auteur
	let auteur = document.getElementsByTagName('meta')[1].getAttribute('content');
	for (let i = 0; i < auteur.length; i++) {
		if (auteur[i] == ',') {
			auteur = auteur.substring(0, i);
			break;
		}
	}


	let date = document.getElementsByClassName('update-date')[0];
	let dateAujourdui = new Date();

	// On écris la ceci dans la balise : Dernière modification : le vendredi 18 janvier 2021 par Nom Prénom
	date.innerHTML = 'Dernière modification : le ' + jours[dateAujourdui.getDay()] + ' ' + dateAujourdui.getDate() + ' ' + mois[dateAujourdui.getMonth()] + ' ' + dateAujourdui.getFullYear() + ' par ' + auteur;
}

/**
 * Fonction qui récupère le nombre de jours restant avant une certaine date ici 19/07/2023
 */
function getNbDats() {
	// On récupère le p en question
	let p = document.getElementsByTagName('p')[2];
	p.addEventListener('click', function () {
		let dateToSubtract = new Date("2023-07-19T00:00:00.0");

		// On récupère la date du jour
		let dateToday = new Date();

		// On soustrait les deux dates pour récupèrer le nombre de jours restant
		dateToSubtract = dateToSubtract - dateToday;
		let nbJoursRestant = Math.floor(dateToSubtract / (1000 * 60 * 60 * 24));

		// On met à jour le paragraphe en changeant les xxx par le nombre de jours restant
		if (nbJoursRestant > 1) {
			p.innerHTML = p.innerHTML.replace('xxx', nbJoursRestant);
		} else {
			p.innerHTML = p.innerHTML.replace('xxx', nbJoursRestant);
			p.innerHTML = p.innerHTML.replace('jours', 'jour');
		}
	});
}

/**
 * Fonction qui met à jour l'horloge en utilisant setInterval()
 */
function updateClock1() {
	// On récupere la balise qui contient la clock
	let clock = document.getElementById('clock');

	// On met à jour la clock avec la fonction setInterval()
	setInterval(function () {
		let date = new Date();
		clock.innerHTML = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();

	}, 1000);
}

/**
 * Fonction qui met à jour l'horloge en utilisant setInterval() et setTimeout() pour faire fonctionner
 */
function updateClock2() {
	// On récupere la balise qui contient la clock
	let clock = document.getElementById('clock');

	// On met à jour la clock avec la fonction setTimeout() mis dans une fonction setInterval()
	setInterval(function () {
		setTimeout(function () {
			let date = new Date();
			clock.innerHTML = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
		}, 1000);
	});
}

/**
 * Fonction qui met à jour l'horloge graphique
 */
function updateGraphicClock() {
	setInterval(() => {
		clearGraphicClock();
		createGraphicClock();
	}, 1000);
}

/**
 * Fonction qui créer la clock graphique
 */
function createGraphicClock() {
	let date = new Date();
	let sep = document.createElement('span');
	sep.innerHTML = ' : ';
	let sep2 = document.createElement('span');
	sep2.innerHTML = ' : ';
	// On récupère l'heure actuelle
	let heure = date.getHours() + "";

	// On récupère la minute actuelle
	let minute = date.getMinutes();

	// On récupère la seconde actuelle
	let seconde = date.getSeconds();

	// On ajoute l'image correspondant au chiffre dans la div
	const container = document.getElementById('graphic-clock');

	// On ajoute l'image correspondant à l'heure
	let heureImage = document.createElement('img');
	heureImage.src = '../assets/images/' + heure[0] + '.gif';
	container.appendChild(heureImage);

	if (heure.length > 1) {
		let heureImage2 = document.createElement('img');
		heureImage2.src = '../assets/images/' + heure[1] + '.gif';
		container.appendChild(heureImage2);
	}
	container.appendChild(sep);

	// On fait pareil pour les minutes
	let minuteImage = document.createElement('img');
	minuteImage.src = '../assets/images/' + Math.floor(minute / 10) + '.gif';
	container.appendChild(minuteImage);

	let minuteImage2 = document.createElement('img');
	minuteImage2.src = '../assets/images/' + minute % 10 + '.gif';
	container.appendChild(minuteImage2);

	container.appendChild(sep2);



	// On fait pareil pour les secondes
	let secondeImage = document.createElement('img');
	secondeImage.src = '../assets/images/' + Math.floor(seconde / 10) + '.gif';
	container.appendChild(secondeImage);

	let secondeImage2 = document.createElement('img');
	secondeImage2.src = '../assets/images/' + seconde % 10 + '.gif';
	container.appendChild(secondeImage2);
}

/**
 * On supprime le clock graphique
 */
function clearGraphicClock() {
	// On récupère la div
	let container = document.getElementById('graphic-clock');

	// On supprime tout les enfants de la div
	while (container.firstChild) {
		container.removeChild(container.firstChild);
	}
}

/**
 * Change la couleur de l'input en fonction de ce que l'utilisateur rentre
 */
function changeColorEvent() {
	// On change la couleur de l'input si ce que l'utilisateur rentre est correct ou non
	document.getElementById('colorChange').addEventListener('input', function (event) {
		if(event.target.id === "colorChange"){
			if (isNaN(this.value)) {
				// On met sa classe à .red
				this.className = 'red';
			} else if (this.value == "") {
				// On met sa classe à .white
				this.className = 'white';
			} else {
				// On met sa classe à .green
				this.className = 'green';
			}
		}
	});
}

/**
 * Modifie le style du menu en fonction de si l'utilisateur à voulu agrandir ou non le menu
 * @param {*} id : id du menu
 */
function menuDeroulant(id) {
	const el = document.getElementById("menu" + id);
	const button = document.getElementById('button' + id);

	el.style.display = (el.style.display == 'block') ? 'none' : 'block';
	button.innerHTML = (button.innerHTML == '+') ? '-' : '+';
}

/**
 * Déclenche tout le processus de recherche
 */
function callNodeSearch() {
	// On récupère l'input de l'utilisateur
	let texteRecherche = document.getElementById('rechercheTexte').value;

	// On supprime les anciens highlights
	removeHighlights(texteRecherche, "rechercheTexte");

	// On parcours tout le document pour trouver les mots correspondant à la recherche
	highlightUserInput(document.body, texteRecherche);
}

/**
 * 
 * @param {*} element : l'élément à parcourir
 * @param {*} userInput : l'input de l'utilisateur
 * Ajoute les highlights aux mots correspondant à la recherche de l'utilisateur
 */
function highlightUserInput(element, userInput) {
	if (userInput.length === 0 || userInput === "") {
		return; // rien à faire si l'input de l'utilisateur est vide
	}
	
	if (element.nodeType === Node.TEXT_NODE) {
		let text = element.textContent.trim();
		if (text !== "" && text != undefined && (text.includes(userInput.toLowerCase()) || text.includes(userInput.toUpperCase())) && !text.includes("<span class=\"select\">")) {
			let highlightedText = text.replaceAll(userInput, `<span class="select">${userInput}</span>`);
			element.parentElement.innerHTML = element.parentElement.innerHTML.replace(text, highlightedText);
		}
	} else {
		let children = element.childNodes;
		for (let i = 0; i < children.length; i++) {
			highlightUserInput(children[i], userInput);
		}
	}
	
}

/**
 * Supprime les highlights du document
 */
function removeHighlights(val,id) {
	document.body.innerHTML = backupBody;
	document.getElementById(id).value = val;
	document.getElementById(id).focus();
}

/**
 * Lance la recherche interactive
 */
function searchInteractive() {
	document.addEventListener('input', function (event) {
		if(event.target.id === 'rechercheInteractive') {
			event.preventDefault();
			let val = document.getElementById('rechercheInteractive').value;
			let texteRecherche = val;
			console.log(texteRecherche);
			removeHighlights(val, "rechercheInteractive");
			highlightUserInput(document.body, texteRecherche);
			
		}
	});
}
