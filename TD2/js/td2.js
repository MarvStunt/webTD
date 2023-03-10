let actualEl = null;
let backupBody;

// Toute les ressources de la page sont complètement chargées.
window.onload = onLoad();

function onLoad() {
	initSelect();
	createOnDivLoad();
	backupBody = document.body.innerHTML;
}

/**
 * Initialise le selecteur d'élément
 */
function initSelect() {
	// On s'abonne à l'élément le plus haut de la page de l'élement cliquer par l'user
	document.addEventListener('click', function (event) {
		// select(event.target);
		select2(event.target);
		if (!event.target.closest('#insert-div') && !event.target.closest('#divSearch')) {
			insertElement(event.target);
		}
	});
}

/**
 * Modifie le background color de l'élément selectionné
 * @param {*} element : Element selectionné 
 */
function select(element) {
	element.style.backgroundColor = (element.style.backgroundColor == 'red') ? '' : 'red';
}

/**
 * Crée la div qui permet d'insérer un élément dans le document
 */
function createOnDivLoad() {
	let div = document.createElement('div');
	div.id = 'insert-div';

	let select = document.createElement('select');
	select.id = 'insert-type';
	select.name = 'type';

	let option = document.createElement('option');
	option.value = 'div';
	option.innerHTML = 'div';
	select.appendChild(option);

	option = document.createElement('option');
	option.value = 'p';
	option.innerHTML = 'p';
	select.appendChild(option);

	option = document.createElement('option');
	option.value = 'span';
	option.innerHTML = 'span';
	select.appendChild(option);

	div.appendChild(select);


	let input = document.createElement('input');
	input.id = 'insert-text';
	input.type = 'text';
	input.value = 'My New Text Element';
	div.appendChild(input);

	document.body.appendChild(div);
	document.body.insertBefore(div, document.body.firstChild);
}

/**
 * Modifie le background color de l'élément selectionné 
 * @param {*} element : Element selectionné 
 */
function select2(element) {
	// Si l'élement est contenus dans la div "insert-div", alors on ne fait rien
	if (!element.closest('#insert-div') && !element.closest('#divSearch')) {
		if (actualEl) {
			actualEl.style.backgroundColor = '';
		}
		actualEl = element;
		element.style.backgroundColor = 'blue';
	}
}

/**
 * Ajoute un élément dans le document
 * @param {*} target : Element selectionné 
 */
function insertElement(target) {
	// On vient récupérer insert-text
	let text = document.getElementById('insert-text').value;
	let type = document.getElementById('insert-type').value;

	// On l'insère dans le document avant la target
	let newElement = document.createElement(type);
	newElement.innerHTML = text;
	target.parentNode.insertBefore(newElement, target);
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
function removeHighlights(val, id) {
	document.body.innerHTML = backupBody;
	document.getElementById(id).value = val;
	document.getElementById(id).focus();
}

/**
 * Lance la recherche interactive
 */
function searchInteractive() {
	document.addEventListener('input', function (event) {
		if (event.target.id === 'rechercheInteractive') {
			event.preventDefault();
			let val = document.getElementById('rechercheInteractive').value;
			let texteRecherche = val;
			console.log(texteRecherche);
			removeHighlights(val, "rechercheInteractive");
			highlightUserInput(document.body, texteRecherche);

		}
	});
}