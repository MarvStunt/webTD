# M413 - TD2 : Réponses aux Questions
## 6.1
### A
J'ai ajouter l'écouteur de l'evenement directement sur tout le document en faisant document.addEventListener('click', function(event) { ... }).

### B
Cela ne fonctionne pas car la propriété est indéfinis

### C - a
Pour ajouter l'élement j'ai récupérer les valeurs:
	let text = document.getElementById('insert-text').value;
	let type = document.getElementById('insert-type').value;

J'ai ensuite créer l'élément qu'on va insérer:
	let newElement = document.createElement(type);
	newElement.innerHTML = text;

Et je l'ai inséré avant la target:
	target.parentNode.insertBefore(newElement, target);

### C - b
J'ai utiliser la fonction .closest() pour vérifier si il était dans la div en question
