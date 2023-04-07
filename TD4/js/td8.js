
// 1.a
const personne = {
   nom: "Dupont",
   prenom: "Jean",
   age: 25,
   taille: 1.75
};

console.log(personne);

// 1.b
const personne2 = {};
personne2.nom = "Dupont";
personne2.prenom = "Jean";
personne2.age = 25;
personne2.taille = 1.75;

console.log(personne2);

// 1.c
const x = personne;

console.log(x);

// 1.2.a
// Accès par point
console.log(personne.nom);
console.log(personne.age);

// Accès par crochets
console.log(personne['prenom']);
console.log(personne['taille']);

// Accès par variables
const prop = 'nom';
console.log(personne[prop]);


// 1.2.b
for (let prop in personne) {
   console.log(`${prop}: ${personne[prop]}`);
}


// 1.2.c
personne.poids = 70;

console.log(personne);

// 1.2.d
delete personne.poids;

console.log(personne);

// 1.3.a
personne.sports = {
   sport1: 'football',
   sport2: 'tennis',
   sport3: 'basketball'
}

// 1.3.b
// Accès par point
console.log(personne.sports.sport1);
console.log(personne.sports.sport2);
console.log(personne.sports.sport3);

// Accès par crochets
console.log(personne['sports']['sport1']);
console.log(personne['sports']['sport2']);
console.log(personne['sports']['sport3']);

// Accès par variables
const sport = 'sport1';
console.log(personne.sports[sport]);

// 1.3.c
console.log("1.3.c");
for (let i in personne.sports) {
   console.log(personne.sports[i]);
}

// 1.3.d
console.log("1.3.d");
personne.sports = [
   { nom: "Football", equipements: ["ballon", "maillot", "chaussures"] },
   { nom: "Tennis", equipements: ["raquette", "balle", "filet"] },
   { nom: "Basketball", equipements: ["ballon", "maillot", "chaussures"] }
];

for (let i in personne.sports) {
   console.log(`Sport ${parseInt(i) + 1}: ${personne.sports[i].nom}`);
   console.log(`Equipements: ${personne.sports[i].equipements.join(', ')}`);
}


// 1.4.a
console.log("1.4.a");
const personne3 = {
   nom: "Dupont",
   prenom: "Jean",
   age: 25,
   taille: 1.75,
   sports: [], // ajouter la propriété sports pour utiliser la méthode ci-dessous
   qui() {
      console.log(`Nom: ${this.nom}, Prénom: ${this.prenom}`);
   }
};

personne3.qui();

// 1.4.b
console.log("1.4.b");
const personne4 = {
   nom: "Dupont",
   prenom: "Jean",
   age: 25,
   taille: 1.75,
   sports: [], // ajouter la propriété sports pour utiliser les méthodes ci-dessous
   qui() {
      console.log(`Nom: ${this.nom}, Prénom: ${this.prenom}`);
   },
   quimaj() {
      console.log(`Nom: ${this.nom.toUpperCase()}, Prénom: ${this.prenom.toUpperCase()}`);
   }
};

personne4.qui();
personne4.quimaj();

// 1.5.a
console.log("1.5.a");
const values = Object.values(personne);
const div = document.createElement('div');
div.textContent = values.join(', ');
document.body.appendChild(div);

// 1.5.b
console.log("1.5.b");
const json = JSON.stringify(personne);
console.log(json);

// 1.5.c
console.log("1.5.c");
personne.datenaissance = new Date('2000-01-01');
const json2 = JSON.stringify(personne);
console.log(json2);


// 1.5.d
console.log("1.5.d");
const personne5 = {
   nom: "Dupont",
   prenom: "Jean",
   age: 25,
   taille: 1.75,
   sports: [],
   qui() {
      console.log(`Nom: ${this.nom}, Prénom: ${this.prenom}`);
   },
   quimaj() {
      console.log(`Nom: ${this.nom.toUpperCase()}, Prénom: ${this.prenom.toUpperCase()}`);
   },
   age() {
      const diff = Date.now() - this.datenaissance.getTime();
      const ageDate = new Date(diff);
      return Math.abs(ageDate.getUTCFullYear() - 1970);
   }
};

const json3 = JSON.stringify(personne5);
console.log(json3);

// Exercice 2

// 2.1
console.log("2.1");
const personne7 = {
   nom: "Dupont",
   prenom: "Jean",
   age: 25,
   taille: 1.75,
   sports: [],
   qui() {
      console.log(`Nom: ${this.nom}, Prénom: ${this.prenom}`);
   },
   quimaj() {
      console.log(`Nom: ${this.nom.toUpperCase()}, Prénom: ${this.prenom.toUpperCase()}`);
   },
   age() {
      const diff = Date.now() - this.datenaissance.getTime();
      const ageDate = new Date(diff);
      return Math.abs(ageDate.getUTCFullYear() - 1970);
   },
   get lang() {
      return this._lang;
   },
   set lang(lang) {
      this._lang = lang;
   },
};

/*

Quelle est la différence entre le champ :
• get fullName() { .. } permettant d’afficher le nom et prénom de l’objet personne,
• et le champ fullName : function () { .. } permettant d’afficher le nom et prénom de
l’objet personne ?

La différence est que le premier est une propriété de l'objet, alors que le second est une méthode de l'objet.

*/

const obj = { counter: 0 };
Object.defineProperty(obj, 'get', {
   get: function () { this.counter = 0; }
});

Object.defineProperty(obj, 'set', {
   set: function (value) { this.counter = value; }
});

Object.defineProperty(obj, 'incr', {
   get: function () { this.counter++; }
});

Object.defineProperty(obj, 'decr', {
   get: function () { this.counter--; }
});

Object.defineProperty(obj, 'reset', {
   get: function () { this.counter = 0; }
});

Object.defineProperty(obj, 'add', {
   set: function (value) { this.counter += value; }
});

Object.defineProperty(obj, 'sub', {
   set: function (value) { this.counter -= value; }
});

// 2.2
console.log("2.2");
function personneConstruct(nom, prenom, age, yeuxCouleur) {
   this.nom = nom;
   this.prenom = prenom;
   this.age = age;
   this.yeuxCouleur = yeuxCouleur;
   this.name = function () {
      return `Nom: ${this.nom}, Prénom: ${this.prenom}`;
   }
   this.changeName = function (nom, prenom) {
      this.nom = nom;
      this.prenom = prenom;
   }
}

const pere = new personneConstruct("Dupont", "Jean", 50, "bleu");
const mere = new personneConstruct("Dupont", "Marie", 45, "vert");

console.log(pere.name());
console.log(mere.name());
console.log(pere.changeName("Durand", "Jean"));
console.log(pere.name());

// 2.e
console.log("2.e");
let x1 = "Hello";
console.log(x1 instanceof String); // false
x1 = new String("Hello");
console.log(x1 instanceof String); // true
console.log(x1.length); // 5
console.log(x1.toUpperCase()); // "HELLO"

let x2 = "Hello";
console.log(x2.length); // 5
console.log(x2.toUpperCase()); // "HELLO"

// 2.f
console.log("2.f");
console.log(Math.random());
console.log(Math.abs(-24578.154));

// Exercice 3

// 3.1
console.log("3");

function personne2Construct(nom, prenom) {
   this.nom = nom;
   this.prenom = prenom;
   this.estomac = [];
   this.manger = function (nourriture) {
      if (this.estomac.length <= 10) {
         this.estomac.push(nourriture);
      }
   }
   this.digestionOK = function () {
      this.estomac = [];
   }
   this.name = function () {
      return `Nom: ${this.nom}, Prénom: ${this.prenom}`;
   }
}

// 3.2
function Car(model, conso100km) {
   this.model = model;
   this.conso100km = conso100km;
   this.compteurKm = 0;
   this.reservoirLitre = 0;
   this.addFuel = function (litre) {
      this.reservoirLitre += litre;
   }
   this.drive = function (distance) {
      if (this.reservoirLitre > 0 && this.reservoirLitre >= (distance * this.conso100km) / 100) {
         this.compteurKm += distance;
         this.reservoirLitre -= (distance * this.conso100km) / 100;
      } else {
         console.log("Je serais à court de carburant dans " + (this.reservoirLitre * 100) / this.conso100km + " km");
      }
   }
}

// 3.3
function Baby(nom, prenom, jouetFavori) {
   personne2Construct.call(this, nom, prenom);
   this.jouetFavoris = jouetFavori;
   this.jouer = function () {
      console.log("Je joue avec mon jouet favorit " + this.jouetFavoris);
   }
}