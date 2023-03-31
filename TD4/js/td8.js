
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