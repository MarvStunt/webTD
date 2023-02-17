'use strict';

// M413 - TD1
let message = 'JavaScript is ok :)';
// alert( message);
console.log(message);

function onLoad() {
	console.log('In onLoad() function…');
	// Your JavaScript code goes here !
	defineHeading1();
	defineHeading2();
	defineHeading3();
	defineHeading4();
	swapInnerHTML();
	dateAlter();
	getNbDats();
	updateClock1();
	// updateClock2();
	updateGraphicClock();
	changeColorEvent();
	// test();
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

function swapInnerHTML() {
	// On récupère les deux paragraphes
	let pFirst = document.getElementsByTagName('p')[0];
	let pSecond = document.getElementsByTagName('p')[1];

	// On inverse le contenus des paragraphes
	let tmp = pFirst.innerHTML;
	pFirst.innerHTML = pSecond.innerHTML;
	pSecond.innerHTML = tmp;
}

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

function updateClock1() {
	// On récupere la balise qui contient la clock
	let clock = document.getElementById('clock');

	// On met à jour la clock avec la fonction setInterval()
	setInterval(function () {
		let date = new Date();
		clock.innerHTML = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();

	}, 1000);
}

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

function updateGraphicClock() {
	setInterval(() => {
		clearGraphicClock();
		createGraphicClock();
	}, 1000);
}

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

function clearGraphicClock() {
	// On récupère la div
	let container = document.getElementById('graphic-clock');

	// On supprime tout les enfants de la div
	while (container.firstChild) {
		container.removeChild(container.firstChild);
	}
}

function changeColorEvent() {
	// On change la couleur de l'input si ce que l'utilisateur rentre est correct ou non
	document.getElementById('input').addEventListener('input', function () {
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
	});
}

function menuDeroulant(id) {
	const el = document.getElementById("menu" + id);
	const button = document.getElementById('button' + id);

	el.style.display = (el.style.display == 'block') ? 'none' : 'block';
	button.innerHTML = (button.innerHTML == '+') ? '-' : '+';
}

function search() {
	// On récupère le texte entré dans l'input
	let texteRecherche = document.getElementById('rechercheTexte').value;
	// On parcours tout  le document pour trouver les mots correspondant à la recherche
	for (let i = 0; i < document.body.childNodes.length; i++) {
		// si le noeud est un texte on le parcours
		if (document.body.childNodes[i].nodeType == Node.ELEMENT_NODE) {
			let text = document.body.childNodes[i].innerText;
			let index = text.indexOf(texteRecherche);
			if (index != -1) {
				// On met l'arrière plan du mot en jaune
				document.body.childNodes[i].innerHTML = text.replaceAll(texteRecherche, '<span style="background-color: yellow">' + texteRecherche + '</span>');
			}
		}
	}
}

function searchRecursif(node, texteRecherche) {
	// Si le noeud est un texte on le parcours
	if (node.nodeType == Node.ELEMENT_NODE) {
		let text = node.innerHTML;
		// Le texte qui doit être remplacer ne doit pas être dans une balise
		node.innerHTML = text.replaceAll(texteRecherche, '<span style="background-color: yellow">' + texteRecherche + '</span>');
	} else {
		// Sinon on parcours tout les enfants du noeud
		for (let i = 0; i < node.childNodes.length; i++) {
			searchRecursif(node.childNodes[i], texteRecherche);
		}
	}
}

function callNodeSearch() {
	// On récupère le texte entré dans l'input
	let texteRecherche = document.getElementById('rechercheTexte').value;
	// On parcours tout  le document pour trouver les mots correspondant à la recherche
	searchRecursif(document.body, texteRecherche);
	
}

function interactiveSearch() {
	// On récupère dés qu'un caractère est entré dans l'input
	document.getElementById('rechercheInteractive').addEventListener('input', function () {
		// On récupère le texte entré dans l'input
		let texteRecherche = this.value;
		// On parcours tout  le document pour trouver les mots correspondant à la recherche
		for (let i = 0; i < document.body.childNodes.length; i++) {
			if (document.body.childNodes[i].innerHTML != undefined) {
				let text = document.body.childNodes[i].innerHTML;
				let index = text.indexOf(texteRecherche);
				if (index != -1) {
					// On met l'arrière plan du mot en jaune
					document.body.childNodes[i].innerHTML = text.substring(0, index) + '<span style="background-color: yellow">' + text.substring(index, index + texteRecherche.length) + '</span>' + text.substring(index + texteRecherche.length);
				}
			}
		}
	});

}

const height=parseInt(readline()),width=parseInt(readline()),material=readline();for(i=0;i<height;i++){for(j=0;j<width;j++)process.stdout.write(material);print()}