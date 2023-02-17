# M413 - TD1 : Réponses aux Questions

## 6.1
### 1
L'evenement qui déclenchera l'appelle de ma fonction est l'evenement le chargement de la page.

### 2
La fonction document.getElementById()

### 3
Son id ici title

### 4
La fonction document.getElementByTagName()

### 5
On utilise la fonction .length soit : document.getElementsByTagName("el").length

### 6
J'ai utilisé la méthode document.getElementsByClassName('firstOrLast')

### 7
J'ai récuperer le nombre d'element et utiliser le % 2 pour savoir si c'est pair ou impair

## 6.2
### 1
Voici les différences:
- InnerHTML permet de récupérer / définir le contenu d'un element 
- innerText permet de récupérer / définir le contenu textuel visible d'un élément sans les balises HTML.
- textContent permet de récupérer / définir le contenu textuel brut d'un élément, assez similaire à innerText

## 6.3
### 1
Pour récupérer le premier auteur de la liste, j'ai récuperer la liste des auteurs, et les auteurs étant séparer par des ",", j'ai parcourus cette chaine et si je rencontre une "," je substring la chaine jusqu'à la virgule et je récupère le premier auteur.

### 2
Pareil qu'au dessus, mais je récupère le dernier auteur. Donc je parcours la chaine et si je rencontre une "," je substring la chaine jusqu'à la virgule et je récupère le dernier auteur.

## 7
### 1
J'obtient le nombre de jours en faisant la différence entre la date de fin et la date de début et en faisant cette formule mathématique : (date de fin - date de début) / (1000 * 60 * 60 * 24)

### 2
Je met à jour le texte en utilisant la fonction .replace("xxx", nbJours) sur le paragraphe récuperer avec document.getElementByTagName("p")

## 7.1
### 1
J'ai utiliser la méthode setInterval() car la fonction doit être appelée à intervalle régulier pour s'actualiser hors setTimeout() ne s'actualise qu'une fois.

## 8.1
### 1
J'ai utiliser l'évenement 'input'.

### 2
Pour modifier sa couleur, j'ai modifier la classe en utilisant la fonction this.className.

## 8.2
### 1
